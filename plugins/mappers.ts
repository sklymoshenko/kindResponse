import { Parametrs } from "@/interfaces/BaseInterfaces.ts";

export const mapRoute = (params: Parametrs): string => {
  const { baseUrl } = params;
  let route: string = JSON.parse(JSON.stringify(baseUrl));
  const entries = Object.entries(params);
  entries.forEach(([key, value]) => {
    route = route.replace(key, value);
  });
  debugger;
  return route;
};
