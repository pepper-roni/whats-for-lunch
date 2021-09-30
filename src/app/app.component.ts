import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  restaurants: string[] = ["McDonalds", "Campio", "Remedy", "Tres Carnales", "Kellys", "Lets Grill", "Dorinku", "Chicken For Lunch", "Farrow", "CRAFT Beer Market", "Underground Tap & Grill", "Splash Poke", "The Burgers Priest", "Kyoto Sushi", "Northern Chicken"];
  theChosenOne: string = "";
  showFood: boolean = false;

  randomRestaurant(restaurants: string[]) {
    this.showFood = true;
    this.theChosenOne = restaurants[Math.floor(Math.random() * restaurants.length)];
  }

  correctAnswer() {
    this.showFood = true;
    this.theChosenOne = "McDonalds";
  }
}
