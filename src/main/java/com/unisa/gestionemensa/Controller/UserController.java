package com.unisa.gestionemensa.Controller;

import com.unisa.gestionemensa.Model.Operation;
import com.unisa.gestionemensa.Model.User;
import com.unisa.gestionemensa.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController
{
    private UserService userService;
    @Autowired
    public UserController(UserService userService)
    {
        this.userService = userService;
    }
    @PostMapping ("/changepass")
    public ResponseEntity<?> changePassword (@RequestBody User user , @RequestBody String newpassword  )
    {
        try
        {
            User result = userService.changePassword(user,newpassword);
            return ResponseEntity.ok(result);
        }catch(IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
