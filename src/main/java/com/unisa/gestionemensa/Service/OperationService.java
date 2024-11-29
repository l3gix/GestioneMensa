package com.unisa.gestionemensa.Service;

import com.unisa.gestionemensa.Model.Operation;
import com.unisa.gestionemensa.Model.User;
import com.unisa.gestionemensa.Repository.OperationRepository;
import com.unisa.gestionemensa.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OperationService
{
    @Autowired
    private OperationRepository operationRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Operation> operations(String matricola)
    {
        List<Operation> operations = operationRepository.findByMatricola(matricola);
        return operations;
    }

    public Operation newOperations(Operation operation)
    {
        Operation newOperations = operationRepository.save(operation);
        Optional<User> user = userRepository.findById(operation.getMatricola());
        User updateUser = user.get();
        updateUser.setCredito(updateUser.getCredito()+operation.getImporto());
        userRepository.save(updateUser);
        return newOperations;
    }

}
