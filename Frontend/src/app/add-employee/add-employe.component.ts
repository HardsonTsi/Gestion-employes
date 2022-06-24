import {Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";

@Component({
  selector: 'add-employee',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  employee: Employee;

  constructor() {
  }

  ngOnInit(): void {
    this.employee = new Employee()
    console.log(this.employee)
  }


}
