import { Parametrs, Category, UrlEntry } from "@/interfaces/BaseInterfaces.ts";
export const urlError = "Providen url, is not valid.";

export const mapRoute = (params: Parametrs): string => {
  const { baseUrl, entries } = params;
  const urlEntries: UrlEntry | [] = entries || [];

  if (!baseUrl || typeof baseUrl !== "string") return baseUrl;

  let route: string = JSON.parse(JSON.stringify(baseUrl));
  Object.entries(urlEntries).forEach(([key, value]) => {
    route = route.replace(`:${key}`, value);
  });
  return route;
};

export const filterCategories = (categories: Category[], acceptedFields: string[]): Category[] => {
  if (!acceptedFields?.length || !categories?.length) return [];

  const filtered: Category[] = categories.filter(({ fields }: Category) => {
    if (!fields?.length) return false;
    const isUnWantedFields = !!fields.filter(({ field }) => !acceptedFields.includes(field)).length;
    if (isUnWantedFields) return false;
    return true;
  });
  return filtered;
};
