import { Parametrs, Category } from "@/interfaces/BaseInterfaces.ts";
import { mapRoute } from "@/plugins/mappers.ts";

class Fetcher {
  private mappedRoute: string = "";
  private mainUrl: string = "https://www.foaas.com";
  private url: string = "";

  constructor(params: Parametrs, toMap: boolean = false) {
    const { baseUrl } = params;
    this.mappedRoute = baseUrl;
    if (toMap) {
      this.mappedRoute = mapRoute(params);
    }
    this.url = `${this.mainUrl}${this.mappedRoute}`;
  }

  async getCategories(): Promise<Category[]> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }

  async getSentece(): Promise<string> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
};

export default Fetcher;
