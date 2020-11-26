import { Component, OnInit } from '@angular/core';
import { ContentRecipeService, Recipe, Media } from 'flotiq';
import { ActivatedRoute, Params} from '@angular/router';
import { RecipeService} from './recipe.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-recipe-post',
  templateUrl: './recipe.component.html'
})
export class SingleRecipeComponent implements OnInit {

  recipe: Recipe;
  slug: string;
  image: Media;
  stepsImages: Media[] = [];

  constructor(
    private flotiqService: ContentRecipeService,
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService,
    private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.slug = params.slug;
      this.recipeService.getRecipe(this.slug).subscribe((recipe) => {
        if (recipe) {
          this.recipe = recipe.data[0];
        }
      });
    });
  }

}
