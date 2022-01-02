
const Calendar = () => {
    const [viewState, setViewState] = React.useState('false');
    return (
        <div className="calendar-container">
            {viewState}
        </div>
    );
};

ReactDOM.render(<Calendar />, document.querySelector('#calendar'));