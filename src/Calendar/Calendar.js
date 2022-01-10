import { useState } from "react";
import { Month, DayModal } from '../components.js';
import "../../stylesheets/calendar.css";

export const Calendar = () => {
    const [monthOriginDate, setMonthOriginDate] = useState(new Date());

    const prevMonth = () => {
        setMonthOriginDate(new Date(monthOriginDate.setMonth(monthOriginDate.getMonth() - 1)))
    }
    const nextMonth = () => {
        setMonthOriginDate(new Date(monthOriginDate.setMonth(monthOriginDate.getMonth() + 1)))

    }

    return (
        <div className="calendar-container">
                <div className="calendar">
                    <Month nextMonth={nextMonth} prevMonth={prevMonth} monthOriginDate={monthOriginDate} />
                </div>
        </div>
    );
};

