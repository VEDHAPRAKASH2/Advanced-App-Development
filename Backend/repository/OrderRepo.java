package com.example.bounty_basket_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bounty_basket_backend.entity.Order;

public interface OrderRepo extends JpaRepository<Order,Long>{
    
}
