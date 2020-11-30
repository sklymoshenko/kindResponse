import Avatar from "~/plugins/Avatar";

export interface ComponentsMap {
  text: string,
  select: string
}

export interface Parametrs {
  baseUrl: string;
  from?: string;
  to?: string;
  tool?: string;
  company?: string;
};

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
