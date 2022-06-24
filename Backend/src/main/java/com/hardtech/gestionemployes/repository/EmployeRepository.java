package com.hardtech.gestionemployes.repository;

import com.hardtech.gestionemployes.entitie.Employe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface EmployeRepository extends JpaRepository<Employe, Long> {
    List<Employe> findByNomLike(String nom);
}
