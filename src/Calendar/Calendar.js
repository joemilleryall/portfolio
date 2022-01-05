import { useState } from "react";
import { Month, DayModal } from '../components.js';
import "../../stylesheets/calendar.css";

export const Calendar = () => {
    const [viewState, setViewState] = useState(false);
    const [modalDate, setModalDate] = useState("");
    const [monthOriginDate, setMonthOriginDate] = useState(new Date());

    const [logs, setLogs] = useState({});

    const viewSwitch = e => {
        setViewState(!viewState)
        if (e === undefined) return
        if (e.target.innerHTML === "x") return
        if (e.target.className === "dimmed-bg") return
        setModalDate(e.target.attributes.fulldate.value)
    }

    const year = new Date().getFullYear();
    const currentMonthIndex = new Date().getMonth();

    const nextMonth = () => {
        
    }

    return (
        <div className="calendar-container">
            {/* <div className="calendar"><p className="loading">Loading</p></div> : */}
                <div className="calendar">
                    {/* <h5>Recent Logs</h5> */}
                    <Month viewSwitch={viewSwitch} monthOriginDate={monthOriginDate} logs={logs} />
                </div>
            
            {viewState === true &&
                <div className="modal-container">
                    <DayModal viewSwitch={viewSwitch} />
                </div>
            }
        </div>
    );
};

