export const mockFetchedCategories = () => {
  const fetchedOptions = [
    { name: "test", selected: false, fields: [{ field: "from" }] },
    {
      name: "test2",
      selected: false,
      fields: [{ field: "from", name: "name" }]
    }
  ];
  const fetchedRespond = {
    message: "Hmmm",
    subtitle: "Me"
  };
  return { fetchedOptions, fetchedRespond };
};
