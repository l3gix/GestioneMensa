package com.unisa.gestionemensa.Controller;

import com.unisa.gestionemensa.Model.Operation;
import com.unisa.gestionemensa.Model.User;
import com.unisa.gestionemensa.Service.AuthService;
import com.unisa.gestionemensa.Service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/op")
@CrossOrigin
public class OperationController
{
    private OperationService operationService;
    @Autowired
    public OperationController(OperationService operationService)
    {
        this.operationService = operationService;
    }

    @GetMapping("/operation")
    public ResponseEntity<?> operation (@RequestParam String matricola )
    {
        try
        {
            List<Operation> result= operationService.operations(matricola);
            return ResponseEntity.ok(result);
        }catch(IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/newoperation")
    public ResponseEntity<?> newOperation(@RequestBody Operation operation)
    {
        try
        {
            Operation result= operationService.newOperations(operation);
            return ResponseEntity.ok(result);
        }catch(IllegalArgumentException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


}
