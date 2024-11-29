package com.unisa.gestionemensa.Controller;

import com.unisa.gestionemensa.Model.User;
import com.unisa.gestionemensa.Service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController
{
    private AuthService authService;
    @Autowired
    public AuthController(AuthService authService)
    {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register (@RequestBody User user)
    {
        try
        {
            User result = authService.register(user);
            return ResponseEntity.ok(result);
        }catch(IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login (@RequestBody User user)
    {
        try
        {
            User result = authService.login(user);
            return ResponseEntity.ok(result);
        }catch(IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
