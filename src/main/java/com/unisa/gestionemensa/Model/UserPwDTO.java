package com.unisa.gestionemensa.Model;

import lombok.Data;

@Data
public class UserPwDTO {
    private String matricola;
    private String nome;
    private String cognome;
    private double credito;
    private String username;
    private String password;
    private String newpassword;
}
