import { NgModule } from '@angular/core';
import { RecipeComponent } from './recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SingleRecipeComponent } from './recipe/recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    SingleRecipeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RecipeComponent,
    RecipeRoutingModule,
    RecipeListComponent
  ]
})
export class RecipeModule {}
