/**
 * convert string date to formatted date
 * @param dateString
 * @returns formatted date
 * ex) 2024.03.18 MON
 */
export const formatNewsDate = (dateString: string) => {
  const date = new Date(dateString);

  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dayOfWeek = weekdays[date.getDay()];

  return `${year}.${month}.${day} ${dayOfWeek}`;
};
