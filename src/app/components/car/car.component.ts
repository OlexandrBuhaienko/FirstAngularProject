import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {
  name: string = ' ';
  speed: number = 0;
  model: string = ' ';
  colors!: IColors;
  options!: string[];
  isEdit: boolean = false;

  constructor() { }
  ngOnInit() {
    this.name = 'Audi';
    this.speed = 220;
    this.model = 'RS6';
    this.colors = {
      car: 'White',
      salon: 'Black',
      wheels: 'Silver'
    }; 
    this.options = ["ABS", "Autopilot", "Auto parking"];
  }

  showEdit(){
    this.isEdit = !this.isEdit;
  }

  addOpt(option: string){
    this.options.unshift(option);
    return false;
  }
  deleteOpt(option: string){
    for(let i = 0; i < this.options.length; i++)
    {
      if(this.options[i] == option)
      {
        this.options.splice(i, 1);
        break;
      }
    }
  }
  carSelect(carName: string) {
    if (carName == 'bmw') 
    {
      this.name = 'BMW';
      this.speed = 280;
      this.model = 'M5'
      this.colors = {
        car: 'Blue',
        salon: 'White',
        wheels: 'Silver'
      }
      this.options = ["ABS", "Autopilot", "Auto parking"];
    }
    else if (carName == 'audi')
    {
      this.name = 'Audi';
      this.speed = 220;
      this.model = 'RS6'
      this.colors = {
        car: 'White',
        salon: 'Black',
        wheels: 'Silver'
      }
      this.options = ["Tracking system", "Cruise control"];
    }
    else if (carName == 'mer')
    {
      this.name = 'Mercedes';
      this.speed = 265;
      this.model = 'AMG'
      this.colors = {
        car: 'Black',
        salon: 'White',
        wheels: 'Black'
      } 
      this.options = ["Leather salon", "Launch control", "ABS"];
    }
  }
} 

  interface IColors {
  car: string,
  salon: string,
  wheels: string
}