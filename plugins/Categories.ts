import { Parametrs, Category, ICategoriesFetcher } from "@/interfaces/BaseInterfaces.ts";
import { filterCategories } from "@/plugins/mappers.ts";
import Fetcher from "@/plugins/Fetcher.ts";

class CategoryFetcher extends Fetcher implements ICategoriesFetcher {
  constructor(params: Parametrs, toMap: boolean = false) {
    super(params, toMap);
  }

  async get(): Promise<Category[]> {
    try {
      const data = await super.fetch();
      if (!Array.isArray(data)) return [];
      const categories = this.filterFromToCategories(data);
      return categories;
    } catch (err) {
      throw new TypeError(err);
    }
  }

  private filterFromToCategories(categories: Category[]): Category[] {
    const fields = ["from", "name"];
    const filtered = filterCategories(categories, fields);
    return filtered;
  }
}

export default CategoryFetcher;
