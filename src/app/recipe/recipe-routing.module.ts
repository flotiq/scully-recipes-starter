import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SingleRecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import {AboutComponent} from '../about/about.component';

const routes = [
  { path: '', component: RecipeListComponent },
  { path: 'about', component: AboutComponent },
  { path: ':page', component: RecipeListComponent },
  { path: 'recipe/:slug', component: SingleRecipeComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}
