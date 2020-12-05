export interface ComponentsMap {
  text: string,
  select: string
}

export interface UrlEntry {
  from: string;
  name: string;
}
export interface Parametrs {
  baseUrl: string;
  entries?: UrlEntry
};

export interface Respond {
  message: string,
  subtitle: string
}

export interface Category {
  name: string,
  url: string,
  fields: Field[],
  selected?: boolean
}
export interface Field {
  name: string,
  field: string
}

export interface IAvatar {
  create(): string
}
export interface IFetcher {
  fetch(options?: RequestInit): Promise<Category[] | Respond>;
};

export interface ICategoriesFetcher extends IFetcher {
  get(): Promise<Category[]>;
}
export interface IRespondFetcher extends IFetcher {
  get(): Promise<Respond>;
}
