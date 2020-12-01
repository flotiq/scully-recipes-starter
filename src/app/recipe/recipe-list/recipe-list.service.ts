import { Injectable } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable} from 'rxjs';
import { RecipeList, ContentRecipeService } from 'flotiq';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {

  constructor(
    private transferState: TransferStateService,
    private flotiqService: ContentRecipeService
  ) { }

  getRecipes(page): Observable<RecipeList> {
    return this.transferState.useScullyTransferState(
      'recipes' + page,
      this.flotiqService.listRecipe(page, 6, 'internal.createdAt', 'desc', 1)
    );
  }
}
