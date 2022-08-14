export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2018
  const [day, month, year] = dateString
    .split("/") // ['28', '10', '2018']
    .map((value: string): number => parseInt(value)); // [28, 10, 2018]
  return new Date(year, month - 1, day); // month 0 Indexed
};
