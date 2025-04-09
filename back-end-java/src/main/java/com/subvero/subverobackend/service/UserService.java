package com.subvero.subverobackend.service;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.subvero.subverobackend.controller.dto.AuthenticationResponse;
import com.subvero.subverobackend.controller.dto.UserInput;
import com.subvero.subverobackend.exception.AlreadyExistsException;
import com.subvero.subverobackend.exception.NotFoundException;
import com.subvero.subverobackend.model.Role;
import com.subvero.subverobackend.model.User;
import com.subvero.subverobackend.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByEmail(String email) throws NotFoundException {
        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw new NotFoundException("User with this email does not exist.");
        }

        return user;
    }

    public AuthenticationResponse createUser(UserInput userInput) {
        if (userRepository.existsByUsername(userInput.username())) {
            throw new AlreadyExistsException("This user already exists");
        }

        if (userRepository.existsByEmail(userInput.email())) {
            throw new AlreadyExistsException("This user already exists");
        }

        String hashedPassword = passwordEncoder.encode(userInput.password());
        User user = new User(userInput.username(), userInput.email(), hashedPassword, Role.User);
        userRepository.save(user);

        return new AuthenticationResponse("Authenticated successfully.",
                jwtService.generateToken(user), user.getUsername(), user.getRole());

    }

    public AuthenticationResponse authenticate(String email, String password) {
        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw new NotFoundException("User does not exist.");
        }

        return new AuthenticationResponse("Authenticated successfully.", jwtService.generateToken(user),
                user.getUsername(), user.getRole());
    }

}