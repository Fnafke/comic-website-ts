package com.subvero.subverobackend.controller.dto;

import com.subvero.subverobackend.model.Role;

public record AuthenticationResponse(
        String message,
        String token,
        String username,
        Role role) {
}
