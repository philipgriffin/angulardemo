import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Cars } from "../models/cars.model";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-comp",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  carsResponse!: Cars[];

  constructor(private dataSvc: DataService) {}
  ngOnInit() {
    this.getCarsData();
  }
  getCarsData() {
    this.dataSvc.getCars().subscribe((res) => {
      this.carsResponse = res;
    });
  }
}
