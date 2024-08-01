package com.example.bounty_basket_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bounty_basket_backend.entity.User;

public interface UserRepo extends JpaRepository<User,Long>{

}
