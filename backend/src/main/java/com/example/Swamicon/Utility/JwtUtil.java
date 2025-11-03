package com.example.Swamicon.Utility;

import io.jsonwebtoken.Jwts;		
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.security.Keys;
import java.util.Date;

import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.security.Key;

@Component
public class JwtUtil {
    private final String SECRET_KEY = "7ecbe9a7233ccb9f20ad4296acafcb38"; 
    private final long EXPIRATION_TIME = 86400000; // 1 day

    public String generateToken(String email) {
    	return Jwts.builder()
    			.setSubject(email)
    			.setIssuedAt(new Date())
    			.setExpiration(new Date(System.currentTimeMillis()+EXPIRATION_TIME))
    			.signWith(io.jsonwebtoken.security.Keys.hmacShaKeyFor(SECRET_KEY.getBytes()))
    			.compact();
    }
    
    public String extractEmail(String token) {
    	return Jwts.parser()
    			.setSigningKey(SECRET_KEY.getBytes())
    			.build()
    			.parseClaimsJws(token)
    			.getBody()
    			.getSubject();
    }

	public String extractUsername(String jwt) {
		// TODO Auto-generated method stub
		return null;
	}
}
