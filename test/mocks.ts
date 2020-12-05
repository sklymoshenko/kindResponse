export const mockFetchedCategories = () => {
  const fetchedOptions = [
    { name: "test", selected: false, fields: [{ field: "from" }] },
    {
      name: "test2",
      selected: false,
      fields: [{ field: "from", name: "name" }]
    }
  ];
  return { fetchedOptions };
};
