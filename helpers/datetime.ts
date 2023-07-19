/**
 * This function returns the date (YYYY-MM-DD)
 * @function millisecondsToYMD()
 * @param { number } milliseconds
 * @returns { Date }
 */
export const millisecondsToYMD = (milliseconds: number) => {
  const date = new Date(milliseconds);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
};
