import { useCallback, useEffect, useState } from "react";
import { Week, Day } from '../components.js';
import uniqid from "uniqid";

export const Month = ({ nextMonth, prevMonth, monthOriginDate }) => {
    const [firstWeek, setFirstWeek] = useState([]);
    const [initialWeekEndDate, setInitialWeekEndDate] = useState(0);

    const daysInMonth = (m, y) => {
        return new Date(y, m, 0).getDate();
    };
    const year = monthOriginDate.getFullYear();
    const monthIndex = monthOriginDate.getMonth();
    const totalDays = daysInMonth(monthIndex + 1, year);
    const firstDayIndex = new Date(year, monthIndex).getDay();

    const buildWeekOne = useCallback(
        (firstDayIndex, weekData) => {
            let date = 1;
            let weekOneArr = [];
            for (let i = 0; i < 7; i++) {
                if (i < firstDayIndex) {
                    weekOneArr.push(<Day key={uniqid()} />);
                } else {
                    let fullDate = new Date(weekData.year, weekData.monthIndex, date)
                        .toISOString()
                        .split("T")[0];
                    let dateStr = weekData.today.toISOString().split("T")[0];
                    weekOneArr.push(
                        <Day
                            date={date++}
                            fullDate={fullDate}
                            key={uniqid()}
                            isToday={fullDate === dateStr ? weekData.today : undefined}
                        />
                    );
                }
            }
            return { tableCells: weekOneArr, endDate: date };
        },
        []
    );

    useEffect(() => {
        const weekData = {
            monthIndex: monthIndex,
            year: year,
            today: new Date(),
        };
        const initialWeek = buildWeekOne(firstDayIndex, weekData);
        setInitialWeekEndDate(initialWeek.endDate)
        setFirstWeek(initialWeek.tableCells);
    }, 
        [firstDayIndex, monthIndex, year, buildWeekOne]
    );

    //Labels
    const abrevDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayLabels = abrevDays.map((day) => {
        return <th key={day}>{day}</th>;
    });
    const monthLabels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    return (
        <div className="month">
            <div className="month-header">
                <button onClick={prevMonth} className="month-btn">&#8672;</button>
                <p>{monthLabels[monthIndex]}</p>
                <button onClick={nextMonth} className="month-btn">&#8674;</button>
            </div>
            <table>
                <thead>
                    <tr>{dayLabels}</tr>
                </thead>
                {
                    (initialWeekEndDate) ? 
                        <tbody>
                            <tr>{firstWeek}</tr> 
                            <Week monthOriginDate={monthOriginDate} startDate={initialWeekEndDate} />
                            <Week monthOriginDate={monthOriginDate} startDate={initialWeekEndDate + 7} />
                            <Week monthOriginDate={monthOriginDate} startDate={initialWeekEndDate + 14} />
                            <Week monthOriginDate={monthOriginDate} startDate={initialWeekEndDate + 21} totalDays={totalDays} />
                            {(initialWeekEndDate + 28 <= totalDays) ?
                                <Week monthOriginDate={monthOriginDate} startDate={initialWeekEndDate + 28} totalDays={totalDays} />
                            : null}
                        </tbody> 
                    : null
                }
            </table>
        </div>
    );
};
