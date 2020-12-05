import { mapRoute, filterCategories } from "@/plugins/mappers.ts";

describe("Mappers", () => {
  describe("Map Route", () => {
    test("Throw error if no url", () => {
      const result = mapRoute({});
      expect(result).not.toBeDefined();
    });
    test("Replace url by entries keys", () => {
      const entries = { from: "Mike", name: "Karen" };
      const baseUrl = "test/:from/:name";
      const expected = "test/Mike/Karen";
      const replaced = mapRoute({ baseUrl, entries });
      expect(replaced).toBeDefined();
      expect(replaced).toEqual(expected);
    });
  });
  describe("Filter Categories", () => {
    test("Return empty if no categories or no fields", () => {
      const filtered = filterCategories([], []);
      expect(filtered).toStrictEqual([]);
    });
    test("Filter categories that doesnt have fields from accepted", () => {
      const categories = [
        { fields: [{ field: "test" }, { field: "from" }] },
        { fields: [{ field: "test" }, { field: "test" }, { field: "test" }] },
        { fields: [{ field: "name" }, { field: "from" }] }
      ];
      const acceptedFields = ["from", "name"];
      const filtered = filterCategories(categories, acceptedFields);
      expect(filtered.length).toBe(1);
      expect(filtered).toEqual([categories[categories.length - 1]]);
    });
  });
});
