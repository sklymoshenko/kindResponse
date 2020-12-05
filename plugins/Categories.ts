import { Parametrs, Category, ICategoriesFetcher } from "@/interfaces/BaseInterfaces.ts";
import { filterCategories } from "@/plugins/mappers.ts";
import Fetcher from "@/plugins/Fetcher.ts";

class CategoryFetcher extends Fetcher implements ICategoriesFetcher {
  constructor(params: Parametrs, toMap: boolean = false) {
    super(params, toMap);
  }

  async get(): Promise<Category[]> {
    const response = await fetch(this.url);
    const data = await response.json();
    const categories = this.filterFromToCategories(data);
    return categories;
  }

  private filterFromToCategories(categories: Category[]): Category[] {
    const fields = ["from", "name"];
    const filtered = filterCategories(categories, fields);
    return filtered;
  }
}

export default CategoryFetcher;
