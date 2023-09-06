export const generateTimeIntervals = (minuteDifference: number): string[] => {
  const intervals: string[] = [];
  const initialHour = 0; // Start hour in 24-hour format
  const minutesInADay = 24 * 60;

  for (let i = 0; i < minutesInADay; i += minuteDifference) {
      const hour = initialHour + Math.floor(i / 60);
      const minutes = i % 60;
      const intervalString = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      intervals.push(intervalString);
  }

  return intervals;
};