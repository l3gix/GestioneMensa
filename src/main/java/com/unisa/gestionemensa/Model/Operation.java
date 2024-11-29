package com.unisa.gestionemensa.Model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "operazioni")
public class Operation
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String data;
    private double importo;
    private String matricola;
}
