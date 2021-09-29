import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  restaurants: string[] = ["McDonalds", "Campio", "Remedy", "Tres Carnales", "Kellys", "Lets Grill", "Dorinku"];
  theChosenOne: string = "";
  showFood: boolean = false;

  randomRestaurant(restaurants: string[]) {
    this.showFood = true;
    this.theChosenOne = restaurants[Math.floor(Math.random() * restaurants.length)];
  }
}
