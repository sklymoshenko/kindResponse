import { Parametrs, IRespondFetcher, Respond } from "@/interfaces/BaseInterfaces.ts";
import Fetcher from "@/plugins/Fetcher.ts";

class RespondFetcher extends Fetcher implements IRespondFetcher {
  private options: RequestInit = {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  };

  constructor(params: Parametrs, toMap: boolean = false) {
    super(params, toMap);
  }

  async get(): Promise<Respond> {
    const data = await super.fetch(this.options);
    if (Array.isArray(data)) return { message: "Hmmmm", subtitle: "Me" };
    return data;
  }
}

export default RespondFetcher;
