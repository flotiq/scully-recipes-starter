import { Injectable } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { RecipeList, ContentRecipeService } from 'flotiq';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private transferState: TransferStateService,
    private flotiqService: ContentRecipeService
  ) { }

  getRecipe(slug): Observable<RecipeList> {
    return this.transferState.useScullyTransferState(
      slug,
      this.flotiqService.listRecipe(
        1,
        1,
        'id',
        'asc',
        1,
        '{"slug":{"type":"equals","filter":"' + slug + '"}}'
      )
    );
  }
}
