import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Employee} from "../Employee";
import {EmployeeServices} from "../employee.services";

@Component({
  selector: 'edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee;

  constructor(private route: ActivatedRoute, private employeService: EmployeeServices) {
  }

  ngOnInit(): void {
    console.log(`Recuperation de employé`)
    let id = +this.route.snapshot.params['id'];
    this.employeService.getEmployeeById(id)
      .subscribe(data => {
        this.employee = data
        console.log(this.employee)
      }, error => {
        console.log(error);
      })

  }

}
