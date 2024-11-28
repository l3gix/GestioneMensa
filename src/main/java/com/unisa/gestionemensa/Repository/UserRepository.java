package com.unisa.gestionemensa.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unisa.gestionemensa.Model.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String>
{
    User findByMatricola(String matricola);
    User findByUsername(String username);
}
