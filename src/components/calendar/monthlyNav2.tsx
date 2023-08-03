import { useMonthlyCalendar } from "@zach.codes/react-calendar";
import { format, getYear, subMonths, addMonths } from 'date-fns';
import { es } from 'date-fns/locale';


const MonthlyNav = () => {
  const { currentMonth, onCurrentMonthChange, locale } = useMonthlyCalendar();
  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={() => onCurrentMonthChange(subMonths(currentMonth, 1))}
        className="cursor-pointer"
      >
        <span className="sr-only">icon</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>

      </button>
      <div className="ml-4 mr-4 w-32 text-center capitalize">
        {format(
          currentMonth,
          getYear(currentMonth) === getYear(new Date()) ? 'LLLL' : 'LLLL yyyy',
          {
            locale
          }
        )}
      </div>
      <button
        onClick={() => onCurrentMonthChange(addMonths(currentMonth, 1))}
        className="cursor-pointer"
      >
        <span className="sr-only">icon</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>

      </button>
    </div>
  );
}
 
export default MonthlyNav;