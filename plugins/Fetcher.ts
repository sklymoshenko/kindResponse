import { Parametrs, Category, IFetcher, Respond } from "@/interfaces/BaseInterfaces.ts";
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

  async fetch(options: RequestInit = { method: "GET" }): Promise<Category[] | Respond> {
    try {
      const response = await fetch(this.url, options);
      const data = await response.json();
      return data;
    } catch (err) {
      throw new TypeError(err);
    }
  }
};

export default Fetcher;
