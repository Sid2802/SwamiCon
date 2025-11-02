package com.example.Swamicon.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Swamicon.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
      Optional<User>findByEmail(String email);
      void save(org.springframework.security.core.userdetails.User user);
}
