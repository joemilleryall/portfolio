'use strict';

class Calendar extends React.Component {
    state = { 
            weekOne: [], 
            weekTwo: [],
            weekThree: [], 
            weekFour: [], 
            weekFive: [],
            weekSix: []
        };

    componentDidMount() {
        const weekData = {
            monthIndex: new Date().getMonth(),
            year: new Date().getFullYear(),
            today: new Date(),
        };
        const firstDayIndex = new Date(weekData.year, weekData.monthIndex).getDay();
        const initialWeek = this.buildWeekOne(firstDayIndex, weekData);
        this.setState({weekOne: initialWeek.tableCells})
    }

    buildWeekOne = (firstDayIndex, weekData) => {
        let date = 1;
        let weekOneArr = [];
        for (let i = 0; i < 7; i++) {
            if (i < firstDayIndex) {
                weekOneArr.push(<td></td>);
            } else {
                // weekData.today.setHours(19); 
                // Daylight savings 
                // let fullDate = new Date(weekData.year, weekData.monthIndex, date)
                //     .toISOString()
                //     .split("T")[0];
                // let dateStr = weekData.today.toISOString().split("T")[0];
                weekOneArr.push(
                    <td>{date++}</td>
                );
            }
        }
        return { tableCells: weekOneArr, endDate: date };
    }

    render() {
        // if (this.state.isLoading {
        //     return 'Calendar is loading';
        // }
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
        const currentMonthIndex = new Date().getMonth();

        return (
            <div className="calendar-container">
                <div className="calendar">
                    <div className="month">
                        <div className="month-header">
                            <p>{monthLabels[currentMonthIndex]}</p>
                        </div>
                        <table>
                            <thead>{dayLabels}</thead>
                            <tbody>
                                <tr>{this.state.weekOne}</tr>
                                <tr>{this.state.weekTwo}</tr>
                                <tr>{this.state.weekThree}</tr>
                                <tr>{this.state.weekFour}</tr>
                                <tr>{this.state.weekFive}</tr>
                                <tr>{this.state.weekSix}</tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

// const Calendar = () => {

//     return(
//         <p>test passed</p>
//     )
// };




ReactDOM.render(<Calendar />, document.querySelector('#calendar'));