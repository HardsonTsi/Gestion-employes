import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Employee} from "./Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServices {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  public getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.API_URL}/all`);
  }

  public getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.API_URL}/${id}`);
  }

  public addEmploye(employe: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.API_URL}/add`, employe);
  }

  public updateEmploye(employe: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.API_URL}/update`, employe);
  }

  public deleteEmploye(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/delete/${id}`);
  }

  public searchEmployees(key: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.API_URL}/search?key=${key}`);
  }
}
