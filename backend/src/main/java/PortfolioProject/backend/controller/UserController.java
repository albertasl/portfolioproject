package PortfolioProject.backend.controller;

import PortfolioProject.backend.model.User;
import PortfolioProject.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        // Tikrinti, ar email jau registruotas
        if (userService.getUserByEmail(user.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Email is already registered");
        }
        userService.saveUser(user);
        return ResponseEntity.ok("User registered successfully");
    }
}
