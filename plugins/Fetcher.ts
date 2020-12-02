import { Parametrs, Category, IFetcher } from "@/interfaces/BaseInterfaces.ts";
import { mapRoute } from "@/plugins/mappers.ts";

class Fetcher implements IFetcher {
  protected mappedRoute: string = "";
  protected mainUrl: string = "https://www.foaas.com";
  protected url: string = "";

  constructor(params: Parametrs, toMap: boolean = false) {
    const { baseUrl } = params;
    this.mappedRoute = baseUrl;
    if (toMap) {
      this.mappedRoute = mapRoute(params);
    }
    this.url = `${this.mainUrl}${this.mappedRoute}`;
  }

  async fetch(): Promise<Category[] | string> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
};

export default Fetcher;
