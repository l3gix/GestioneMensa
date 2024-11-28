package com.unisa.gestionemensa.Service;

import com.unisa.gestionemensa.Model.User;
import com.unisa.gestionemensa.Repository.UserRepository;
import com.unisa.gestionemensa.Utils.PasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService
{
    @Autowired
    private UserRepository userRepository;

    public User register(User user)
    {
        if(user == null)
        {
            throw new IllegalArgumentException("I campi non posso essere vuoti");
        }
        if(userRepository.findByMatricola(user.getMatricola())!= null)
        {
            throw new IllegalArgumentException("Utente esistente");
        }
        if(userRepository.findByUsername(user.getUsername())!= null)
        {
            throw new IllegalArgumentException("UserName esistente");
        }

        user.setPassword(PasswordUtils.hashPassword(user.getPassword()));
        return userRepository.save(user);
    }

    public User login(User user)
    {
        if(user == null)
        {
            throw new IllegalArgumentException("I campi non posso essere vuoti");
        }

        User userFound = userRepository.findByUsername(user.getUsername());

        if(userFound != null)
        {
            if(PasswordUtils.checkPassword(user.getPassword(), userFound.getPassword())) return userFound;
            else throw new IllegalArgumentException("Password non coretta");
        }else
        {
            throw new IllegalArgumentException("User non coretta");
        }

    }


}
