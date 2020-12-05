export const copyToClipboard = async(text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Error while copy to clipboard: ${err}`);
  }
};
