package com.unisa.gestionemensa.Repository;

import com.unisa.gestionemensa.Model.Operation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OperationRepository extends JpaRepository<Operation, Integer>
{
    List<Operation> findByMatricola(String matricola);

}
