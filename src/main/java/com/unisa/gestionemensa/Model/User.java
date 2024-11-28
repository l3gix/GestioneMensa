package com.unisa.gestionemensa.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "utenti")
public class User
{
    @Id
    private String matricola;
    private String nome;
    private String cognome;
    private double credito;
    private String username;
    private String password;
}
