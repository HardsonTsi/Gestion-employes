import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Employee} from "../Employee";
import {EmployeeServices} from "../employee.services";

@Component({
  selector: 'list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  public employees: Employee[];
  public key: string = '';

  constructor(private employeeService: EmployeeServices, private router: Router) {
  }

  public getAllEmployees(): void {
    this.employeeService.getAllEmployees()
      .subscribe(data => {
        this.employees = data;
        console.log("Employés récupérés...")
      }, error => {
        console.log("Erreur lors de la recuperation des employés")
      })
  }

  ngOnInit() {
    this.getAllEmployees();
  }


  updateEmployee(employee: Employee): void {
    let link = ['/edit/', employee.id];
    this.router.navigate(link);
  }

  //Success
  deleteEmployee(employee: Employee) {
    let confirmation: boolean = confirm(`Voulez-vous supprimer l'employé ${employee.nom} ?`);
    if (confirmation) {
      this.employeeService.deleteEmploye(employee.id)
        .subscribe(() => {
          console.log("Employé supprimé");
          this.getAllEmployees();
        }, error => console.log(error));
    }
  }

  addEmployee(): void {
    let link = ['/add'];
    this.router.navigate(link);
  }

  search(): void {
    this.employeeService.searchEmployees(this.key.toLowerCase().trim())
      .subscribe(results => {
        console.log(this.key)
        this.employees = results;
      }, error => console.log(error))
  }

}
