import { useState } from "react";
export const Calendar = () => {
    const [viewState, setViewState] = useState('false');
    return (
        <div className="calendar-container">
            {viewState} --

        </div>
    );
};

// ReactDOM.render(<Calendar />, document.querySelector('#calendar')); 

// If i were to add all the components, I would need to add all those scripts tags to the body in the HTML. 
// this doesnt deem ideal with all those tags. 

// could I make the calendar is own repo like chase suggested - and just copy the build folder here to make it simple? is that possible?