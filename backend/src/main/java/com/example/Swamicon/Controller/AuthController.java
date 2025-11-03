package com.example.Swamicon.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Swamicon.Entity.dto.AuthResponse;
import com.example.Swamicon.Entity.dto.LoginRequest;
import com.example.Swamicon.Entity.dto.RegisterRequest;
import com.example.Swamicon.Service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthController {
	
	private final AuthService authService;
	
	@PostMapping("/register")
	public ResponseEntity<String>register(@RequestBody RegisterRequest request){
		 return 
				 ResponseEntity.ok(authService.register(request));
	}
	
	@PostMapping("/login")
	public ResponseEntity<AuthResponse>login(@RequestBody LoginRequest request){
		return
				ResponseEntity.ok(authService.login(request));
	}

}
