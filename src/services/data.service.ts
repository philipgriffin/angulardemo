import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cars } from "../models/cars.model";
@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCars(): Observable<Cars[]> {
    return this.http.get<Cars[]>("./assets/sample.json");
  }
}
