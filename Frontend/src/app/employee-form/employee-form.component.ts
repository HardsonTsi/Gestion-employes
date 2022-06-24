import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../Employee";
import {EmployeeServices} from "../employee.services";

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  @Input() employee: Employee;
  linkVerification: string = this.activatedRoute.snapshot.url[0].path;

  constructor(private employeService: EmployeeServices, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(addForm: NgForm): void {
    if (this.linkVerification == 'add') {
      this.employeService.addEmploye(this.employee)
        .subscribe(() => {
          console.log(`Employé ${this.employee.nom} ajouté`);
        }, error => console.log(error))
    } else {
      this.employeService.updateEmploye(this.employee)
        .subscribe(() => {
          console.log(`${this.employee.nom} modifié`);
        }, error => console.log(error))
    }
    this.goHome()
  }

  goHome(): void {
    let link = [''];
    this.router.navigate(link);
  }

}
