package com.example.bounty_basket_backend.entity;

import java.util.List;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String email;
    private String password;
    private String type;
    private String address;

    @OneToMany
    private List<Product> wishlist;
    @OneToMany
    private List<Product> cart;
}