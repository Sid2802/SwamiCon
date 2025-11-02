package com.example.Swamicon.service;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Swamicon.dto.AuthResponse;
import com.example.Swamicon.dto.LoginRequest;
import com.example.Swamicon.dto.RegisterRequest;
import com.example.Swamicon.entity.Role;
import com.example.Swamicon.entity.User;
import com.example.Swamicon.repository.UserRepository;
import com.example.Swamicon.utility.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtUtil jwtUtil;
 
	//Register
	public String register(RegisterRequest request) {
		if(userRepository.findByEmail(request.getEmail()).isPresent()) {
			throw new RuntimeException("Email already registered");
		}
		
		 User user=User.builder()
				 .fullName(request.getFullName())
				 .email(request.getEmail())
				 .password(passwordEncoder.encode(request.getPassword()))
				 .role(Role.valueOf(request.getRole().toUpperCase()))
				 .build();
		 
		 userRepository.save(user);
		 return "User Registered succesfully";
				 
	}
	
	//Login

	public AuthResponse login(LoginRequest request){
		User user=userRepository.findByEmail(request.getEmail())
		.orElseThrow(()->new RuntimeException("User not found"));

		//check password
		if(!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
			throw new RuntimeException("Invalid Password");
		}	

		//generate JWT token
		String token=jwtUtil.generateToken(user.getEmail());

		//return response with token
		System.out.println("Login successful. Token: " + user.getRole().name());
		return new AuthResponse(token,user.getRole().name());
				
	}
	

}
