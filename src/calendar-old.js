'use strict';



// =================================///////////////////////////////////=====================================


// class Month extends React.Component {
//     state = { 
//             weekOne: [], 
//             weekTwo: [],
//             weekThree: [], 
//             weekFour: [], 
//             weekFive: [],
//             weekSix: [], 
//             monthOriginDate: new Date(), 
//         };

//     componentDidMount() {
        
//         const year = this.state.monthOriginDate.getFullYear();
//         const monthInd = this.state.monthOriginDate.getMonth();
        
//         const weekData = {
//             monthIndex: monthInd,
//             year: year,
//             today: new Date(),
//         };
        
//         const totalDays = this.daysInMonth(weekData.monthIndex + 1, weekData.year);
//         const firstDayIndex = new Date(weekData.year, weekData.monthIndex).getDay();
        
//         const initialWeek = this.buildWeekOne(firstDayIndex, weekData);
    

//         const second = this.buildWeek(initialWeek.endDate, totalDays, weekData)
//         const third = this.buildWeek(initialWeek.endDate + 7, totalDays, weekData)
//         const fourth = this.buildWeek(initialWeek.endDate + 14, totalDays, weekData)
//         const fifth = this.buildWeek(initialWeek.endDate + 21, totalDays, weekData)

//         if (initialWeek.endDate + 28 <= totalDays) {
//             const sixth = this.buildWeek(initialWeek.endDate + 28, totalDays, weekData)
//             this.setState({
//                 initialWeekEndDate: initialWeek.endDate,
//                 weekOne: initialWeek.tableCells,
//                 weekTwo: second, 
//                 weekThree: third,
//                 weekFour: fourth,
//                 weekFive: fifth,
//                 weekSix: sixth
//             })
//         } else {
//             this.setState({
//                 initialWeekEndDate: initialWeek.endDate,
//                 weekOne: initialWeek.tableCells,
//                 weekTwo: second, 
//                 weekThree: third,
//                 weekFour: fourth,
//                 weekFive: fifth,
//             })
//         }
//     }
    
//     nextMonth = () => {
//         const year = this.state.monthOriginDate.getFullYear();
//         const month = this.state.monthOriginDate.getMonth()+1;

//         this.setState({monthOriginDate: new Date(year, month, 1 )})

//         const weekData = {
//             monthIndex: month,
//             year: year,
//             today: new Date(),
//         };
//         const totalDays = this.daysInMonth(weekData.monthIndex + 1, weekData.year);
//         const firstDayIndex = new Date(weekData.year, weekData.monthIndex).getDay();

//         const initialWeek = this.buildWeekOne(firstDayIndex, weekData);
//         const second = this.buildWeek(initialWeek.endDate, totalDays, weekData)
//         const third = this.buildWeek(initialWeek.endDate + 7, totalDays, weekData)
//         const fourth = this.buildWeek(initialWeek.endDate + 14, totalDays, weekData)
//         const fifth = this.buildWeek(initialWeek.endDate + 21, totalDays, weekData)

//         if (initialWeek.endDate + 28 <= totalDays) {
//             const sixth = this.buildWeek(initialWeek.endDate + 28, totalDays, weekData)
//             this.setState({
//                 weekOne: initialWeek.tableCells,
//                 weekTwo: second, 
//                 weekThree: third,
//                 weekFour: fourth,
//                 weekFive: fifth,
//                 weekSix: sixth
//             })
//         } else {
//             this.setState({
//                 weekOne: initialWeek.tableCells,
//                 weekTwo: second, 
//                 weekThree: third,
//                 weekFour: fourth,
//                 weekFive: fifth,
//                 weekSix: null
//             })
//         }
//     }
//     prevMonth = () => {
//         const year = this.state.monthOriginDate.getFullYear();
//         const month = this.state.monthOriginDate.getMonth()-1;

//         this.setState({monthOriginDate: new Date(year, month, 1 )})

//         const weekData = {
//             monthIndex: month,
//             year: year,
//             today: new Date(),
//         };

//         const totalDays = this.daysInMonth(weekData.monthIndex + 1, weekData.year);
//         const firstDayIndex = new Date(weekData.year, weekData.monthIndex).getDay();

//         const initialWeek = this.buildWeekOne(firstDayIndex, weekData);
//         const second = this.buildWeek(initialWeek.endDate, totalDays, weekData)
//         const third = this.buildWeek(initialWeek.endDate + 7, totalDays, weekData)
//         const fourth = this.buildWeek(initialWeek.endDate + 14, totalDays, weekData)
//         const fifth = this.buildWeek(initialWeek.endDate + 21, totalDays, weekData)

//         if (initialWeek.endDate + 28 <= totalDays) {
//             const sixth = this.buildWeek(initialWeek.endDate + 28, totalDays, weekData)
//             this.setState({
//                 weekOne: initialWeek.tableCells,
//                 weekTwo: second, 
//                 weekThree: third,
//                 weekFour: fourth,
//                 weekFive: fifth,
//                 weekSix: sixth
//             })
//         } else {
//             this.setState({
//                 weekOne: initialWeek.tableCells,
//                 weekTwo: second, 
//                 weekThree: third,
//                 weekFour: fourth,
//                 weekFive: fifth,
//                 weekSix: null
//             })
//         }
//     }

//     daysInMonth = (m, y) => {
//         return new Date(y, m, 0).getDate();
//     };

//     buildWeekOne = (firstDayIndex, weekData) => {
//         let date = 1;
//         let weekOneArr = [];
//         for (let i = 0; i < 7; i++) {
//             if (i < firstDayIndex) {
//                 weekOneArr.push(<td className="empty" key={Math.floor(Math.random() * 9000) + 1000}></td>);
//             } else {
//                 let fullDate = new Date(weekData.year, weekData.monthIndex, date).toISOString().split("T")[0]
//                 let dateStr = weekData.today.toISOString().split("T")[0]
//                 fullDate === dateStr
//                     ? weekOneArr.push(<td className="today" key={Math.floor(Math.random() * 9000) + 1000}>{date++}</td>)
//                     : weekOneArr.push(<td key={Math.floor(Math.random() * 9000) + 1000}>{date++}</td>)
                
//             }
//         }
//         return { tableCells: weekOneArr, endDate: date };
//     }

//     buildWeek = (startDate, totalDays, weekData) => {
//         let weekArr = [];
//         for (let i = 0; i < 7; i++) {
//             if (startDate > totalDays) {
//                 weekArr.push(<td className="empty" key={Math.floor(Math.random() * 9000) + 1000}></td>);
//             } else {
//                 // weekData.today.setHours(19); Daylight savings 
//                 let fullDate = new Date(weekData.year, weekData.monthIndex, startDate).toISOString().split("T")[0]
//                 let dateStr = weekData.today.toISOString().split("T")[0]
//                 fullDate === dateStr
//                     ? weekArr.push(<td className="today" key={Math.floor(Math.random() * 9000) + 1000}>{startDate++}</td>)
//                     : weekArr.push(<td key={Math.floor(Math.random() * 9000) + 1000}>{startDate++}</td>)

//             }
//         }
//         return (weekArr);
//     }

//     render() {

//         const abrevDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//         const dayLabels = abrevDays.map((day) => {
//             return <th key={day}>{day}</th>;
//         });
//         const monthLabels = [
//             "Jan",
//             "Feb",
//             "Mar",
//             "Apr",
//             "May",
//             "Jun",
//             "Jul",
//             "Aug",
//             "Sep",
//             "Oct",
//             "Nov",
//             "Dec",
//         ];

//         return (
//             <div className="month">
//                 <div className="month-header">
//                     <button className="btn" onClick={()=>this.prevMonth()}>&#8249;</button>
//                     <p>{monthLabels[this.state.monthOriginDate.getMonth()]}</p>
//                     <button className="btn" onClick={()=>this.nextMonth()}>&#8250;</button>
//                 </div>
//                 <table>
//                     <thead><tr>{dayLabels}</tr></thead>
//                     <tbody>
//                         <tr>{this.state.weekOne}</tr>
//                         <tr>{this.state.weekTwo}</tr>
//                         <tr>{this.state.weekThree}</tr>
//                         <tr>{this.state.weekFour}</tr>
//                         <tr>{this.state.weekFive}</tr>
//                         <tr>{this.state.weekSix}</tr>
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }

// class Calendar extends React.Component {
//     render() {
//         return (
//             <div className="calendar-container">
//                 <div className="calendar">
//                     <Month />
//                 </div>
//             </div>
//         );
//     }
// }

// import { useState } from "react";


const Calendar = () => {
    const [viewState, setViewState] = React.useState('false');
    return (
        <div className="calendar-container">
            {viewState}
        </div>
    );
};





ReactDOM.render(<Calendar />, document.querySelector('#calendar'));