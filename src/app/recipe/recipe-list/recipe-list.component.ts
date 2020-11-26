import { Component, OnInit } from '@angular/core';
import { ContentRecipeService, Recipe, Media, ContentMediaService} from 'flotiq';
import { ActivatedRoute, Params} from '@angular/router';
import { RecipeListService } from './recipe-list.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  totalPages: number;
  page: number;

  constructor(
    private flotiqService: ContentRecipeService,
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute,
    private recipeListService: RecipeListService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.page = +params.page || 1;
      this.recipeListService.getRecipes(this.page).subscribe((recipes) => {
        if (recipes) {
          this.recipes = recipes.data;
          this.totalPages = recipes.total_pages;
          this.page = recipes.current_page;
        }
      });
    });
  }

}
