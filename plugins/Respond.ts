import { Parametrs, IRespondFetcher } from "@/interfaces/BaseInterfaces.ts";
import Fetcher from "@/plugins/Fetcher.ts";

class RespondFetcher extends Fetcher implements IRespondFetcher {
  constructor(params: Parametrs, toMap: boolean = false) {
    super(params, toMap);
  }

  async get(): Promise<string> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
}

export default RespondFetcher;
