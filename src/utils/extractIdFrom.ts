export const extractIdFrom = (inputString?: string) => {
  if (inputString) {
    const match = inputString.match(/\/(\d+)\/$/);
    return match ? match[1] : "";
  }
  return "";
};
