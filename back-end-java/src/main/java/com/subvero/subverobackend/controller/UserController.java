package com.subvero.subverobackend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.subvero.subverobackend.controller.dto.AuthenticationRequest;
import com.subvero.subverobackend.controller.dto.AuthenticationResponse;
import com.subvero.subverobackend.controller.dto.UserInput;
import com.subvero.subverobackend.model.User;
import com.subvero.subverobackend.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public List<User> getAllUsers() {
        try {
            return userService.getAllUsers();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Error performing /users", e);
        }
    }

    @GetMapping("/{email}")
    public User getUserByEmail(@PathVariable String email) {
        try {
            return userService.getUserByEmail(email);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Error performing /users/{email}}", e);
        }
    }

    @PostMapping("/signup")
    public AuthenticationResponse createUser(@Valid @RequestBody UserInput userInput) {
        try {
            return userService.createUser(userInput);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Error performing /users/signup", e);
        }
    }

    @PostMapping("/login")
    public AuthenticationResponse login(@Valid @RequestBody AuthenticationRequest authenticationRequest) {
        try {
            return userService.authenticate(authenticationRequest.email(), authenticationRequest.password());
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Error performing /users/login", e);
        }
    }
}
