package com.subvero.subverobackend.service;

import java.time.LocalDate;
import java.time.ZoneOffset;

import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;

import com.subvero.subverobackend.config.JwtProperties;
import com.subvero.subverobackend.model.Role;
import com.subvero.subverobackend.model.User;

@Service
public class JwtService {
    private final JwtProperties jwtProperties;
    private final JwtEncoder jwtEncoder;

    public JwtService(JwtProperties jwtProperties, JwtEncoder jwtEncoder) {
        this.jwtProperties = jwtProperties;
        this.jwtEncoder = jwtEncoder;
    }

    public String generateToken(String username, Role role) {
        final var now = LocalDate.now();
        final var expiresAt = now.plus(jwtProperties.token().lifetime());
        final var header = JwsHeader.with(MacAlgorithm.HS256).build();
        final var claims = JwtClaimsSet.builder()
                .issuer(jwtProperties.token().issuer())
                .issuedAt(now.atStartOfDay().toInstant(ZoneOffset.UTC))
                .expiresAt(expiresAt.atStartOfDay().toInstant(ZoneOffset.UTC))
                .subject(username)
                .claim("scope", role.toGrantedAuthority().getAuthority())
                .build();
        return jwtEncoder.encode(JwtEncoderParameters.from(header, claims)).getTokenValue();
    }

    public String generateToken(User user) {
        return generateToken(user.getUsername(), user.getRole());
    }
}
