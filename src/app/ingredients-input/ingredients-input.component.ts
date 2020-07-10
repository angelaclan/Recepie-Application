import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient'

@Component({
  selector: 'app-ingredients-input',
  templateUrl: './ingredients-input.component.html',
  styleUrls: ['./ingredients-input.component.css'],
 
 
})
export class IngredientsInputComponent implements OnInit {
  ingredientList: Ingredient = {
    ingredient: '',
    unit: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
