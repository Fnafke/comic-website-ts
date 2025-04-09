package com.subvero.subverobackend.config;

import java.time.Duration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.bind.DefaultValue;

@ConfigurationProperties(prefix = "jwt")
public record JwtProperties(String secret, @DefaultValue Token token) {

    public record Token(@DefaultValue("subvero_comic_app") String issuer,
            @DefaultValue("8h") Duration lifetime) {
    }
}
