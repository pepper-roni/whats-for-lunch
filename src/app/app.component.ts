import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';
import restaurantsData from './restaurants.json';

export interface Restaurant {
  id: Number
  name: string;
  cost: Number;
  type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  restaurants: Restaurant[] = restaurantsData;
  theChosenOne: Restaurant | undefined = undefined;
  showFood: boolean = false;

  randomRestaurant(restaurants: Restaurant[]) {
    this.showFood = true;
    this.theChosenOne = restaurants[Math.floor(Math.random() * restaurants.length)];
  }

  correctAnswer() {
    this.showFood = true;
    this.theChosenOne = this.restaurants.find(x => x.name === "McDonalds");
  }
}
