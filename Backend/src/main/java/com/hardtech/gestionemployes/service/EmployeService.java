package com.hardtech.gestionemployes.service;

import com.hardtech.gestionemployes.entitie.Employe;
import com.hardtech.gestionemployes.exception.UserNotFoundException;
import com.hardtech.gestionemployes.repository.EmployeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class EmployeService {

    private final EmployeRepository employeRepository;

    //Ajouter un tableau d'employés
    public void addAllEmployees(List<Employe> employes) {
        employes.forEach(employe -> {
            employe.setCodeEmploye(UUID.randomUUID().toString());
            employeRepository.save(employe);
        });
    }

    //Ajouter un employé
    public Employe addEmployee(Employe employe) {
        employe.setCodeEmploye(UUID.randomUUID().toString());
        return employeRepository.save(employe);
    }

    //Modifier un employé
    public Employe updateEmployee(Employe employe) {
        return employeRepository.save(employe);
    }

    //Liste des employés
    public List<Employe> findAllEmployees() {
        return employeRepository.findAll();
    }

    //Tourver un employé
    public Employe findEmployeeById(Long id) {
        return employeRepository.findById(id).orElseThrow(() -> {
            return new UserNotFoundException("User avec l'id " + id + " non trouvé");
        });
    }

    //Supprimer un employé
    public void deleteEmployee(Long id) {
        employeRepository.deleteById(id);
    }

    //Rechercher employé(s)
    public List<Employe> searchEmployees(String key) {
        return employeRepository.findByNomLike("%" + key.toLowerCase() + "%");
    }
}
