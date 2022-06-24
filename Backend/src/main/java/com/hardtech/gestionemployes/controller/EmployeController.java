package com.hardtech.gestionemployes.controller;

import com.hardtech.gestionemployes.entitie.Employe;
import com.hardtech.gestionemployes.service.EmployeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@AllArgsConstructor
public class EmployeController {

    private final EmployeService employeService;

    //Ajouter un tableau d'employés
    @PostMapping("/adds")
    public ResponseEntity<?> addAllEmployees(@RequestBody List<Employe> employes) {
        employeService.addAllEmployees(employes);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //Ajouter un tableau d'employé
    @PostMapping("/add")
    public ResponseEntity<Employe> addEmployee(@RequestBody Employe employee) {
        Employe newEmployee = employeService.addEmployee(employee);
        return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
    }


    //Modifier un employé
    @PutMapping("/update")
    public ResponseEntity<Employe> updateEmployee(@RequestBody Employe employee) {
        Employe updateEmployee = employeService.updateEmployee(employee);
        return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
    }

    //Liste des employés
    @GetMapping("/all")
    public ResponseEntity<List<Employe>> getAllEmployees() {
        List<Employe> employees = employeService.findAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    //Trouver un employé
    @GetMapping("/{id}")
    public ResponseEntity<Employe> getEmployeeById(@PathVariable Long id) {
        Employe employee = employeService.findEmployeeById(id);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }


    //Supprimer un employé
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id) {
        employeService.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //Rechercher employé(s)
    @GetMapping("/search")
    public List<Employe> searchEmployees(@RequestParam(defaultValue = "") String key) {
        return employeService.searchEmployees(key.trim());
    }
}
