package com.unisa.gestionemensa.Service;

import com.unisa.gestionemensa.Model.User;
import com.unisa.gestionemensa.Repository.UserRepository;
import com.unisa.gestionemensa.Utils.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService
{
    @Autowired
    private UserRepository userRepository;

    public User changePassword (User user, String newPassword )
    {

        User userFound = userRepository.findByMatricola(user.getMatricola());
        if(PasswordUtils.checkPassword(user.getPassword(), userFound.getPassword()))
        {
            userFound.setPassword(PasswordUtils.hashPassword(newPassword));
        }

        userRepository.save(userFound);
        return userFound;


    }
}
