package com.subvero.subverobackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.subvero.subverobackend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
