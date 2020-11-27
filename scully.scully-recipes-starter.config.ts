import { ScullyConfig } from '@scullyio/scully';
import { environment } from './src/environments/environment';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-recipes-starter',
  outDir: './dist/static',
  routes: {
    '/recipe/:slug': {
      type: 'json',
      slug: {
        url: 'https://api.flotiq.com/api/v1/content/recipe?hydrate=1',
        property: 'slug',
        headers: {
          'X-AUTH-TOKEN': environment.flotiqApiKey
        },
        resultsHandler: rawData => rawData.data
      }
    },
    '/:page': {
      type: 'json',
      page: {
        url: 'https://api.flotiq.com/api/v1/content/recipe?page=1&limit=8&hydrate=1',
        property: 'page',
        headers: {
          'X-AUTH-TOKEN': environment.flotiqApiKey
        },
        resultsHandler: rawData => {
          const pages = [];
          for (let i = 1; i <= rawData.total_pages; i++) {
            pages.push({page: i});
          }
          return pages;
        }
      }
    }
  }
};
