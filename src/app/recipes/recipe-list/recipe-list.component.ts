import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe('Macarrones con Chorizo', 'Description de como hacer unos ricos macarrones con chorizo', 'assets/img/macarronesConChorizo.jpg'),
    new Recipe('Quiche Carbonara', 'This is delicious!', 'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg')
  ];

  onSelectRecipe(recipe: Recipe){
    this.selectedRecipe.emit(recipe)
  }

}
