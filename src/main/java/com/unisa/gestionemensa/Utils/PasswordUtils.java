package com.unisa.gestionemensa.Utils;

import org.mindrot.jbcrypt.BCrypt;

public class PasswordUtils
{
    public static String hashPassword(String password){
        return BCrypt.hashpw(password, BCrypt.gensalt(10));
    }

    public static boolean checkPassword(String password, String hashedPassword){
        return BCrypt.checkpw(password, hashedPassword);
    }
}
