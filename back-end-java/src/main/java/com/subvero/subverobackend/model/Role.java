package com.subvero.subverobackend.model;

import java.util.Locale;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Role {
    User,
    Admin;

    public GrantedAuthority toGrantedAuthority() {
        return new SimpleGrantedAuthority("ROLE_" + name());
    }

    @Override
    @JsonValue
    public String toString() {
        return super.toString().toLowerCase(Locale.ROOT);
    }
}
