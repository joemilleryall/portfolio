'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_React$Component) {
    _inherits(Calendar, _React$Component);

    function Calendar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Calendar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            weekOne: [],
            weekTwo: [],
            weekThree: [],
            weekFour: [],
            weekFive: [],
            weekSix: []
        }, _this.buildWeekOne = function (firstDayIndex, weekData) {
            var date = 1;
            var weekOneArr = [];
            for (var i = 0; i < 7; i++) {
                if (i < firstDayIndex) {
                    weekOneArr.push(React.createElement("td", null));
                } else {
                    // weekData.today.setHours(19); 
                    // Daylight savings 
                    // let fullDate = new Date(weekData.year, weekData.monthIndex, date)
                    //     .toISOString()
                    //     .split("T")[0];
                    // let dateStr = weekData.today.toISOString().split("T")[0];
                    weekOneArr.push(React.createElement(
                        "td",
                        null,
                        date++
                    ));
                }
            }
            return { tableCells: weekOneArr, endDate: date };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Calendar, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var weekData = {
                monthIndex: new Date().getMonth(),
                year: new Date().getFullYear(),
                today: new Date()
            };
            var firstDayIndex = new Date(weekData.year, weekData.monthIndex).getDay();
            var initialWeek = this.buildWeekOne(firstDayIndex, weekData);
            this.setState({ weekOne: initialWeek.tableCells });
        }
    }, {
        key: "render",
        value: function render() {
            // if (this.state.isLoading {
            //     return 'Calendar is loading';
            // }
            var abrevDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var dayLabels = abrevDays.map(function (day) {
                return React.createElement(
                    "th",
                    { key: day },
                    day
                );
            });
            var monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var currentMonthIndex = new Date().getMonth();

            return React.createElement(
                "div",
                { className: "calendar-container" },
                React.createElement(
                    "div",
                    { className: "calendar" },
                    React.createElement(
                        "div",
                        { className: "month" },
                        React.createElement(
                            "div",
                            { className: "month-header" },
                            React.createElement(
                                "p",
                                null,
                                monthLabels[currentMonthIndex]
                            )
                        ),
                        React.createElement(
                            "table",
                            null,
                            React.createElement(
                                "thead",
                                null,
                                dayLabels
                            ),
                            React.createElement(
                                "tbody",
                                null,
                                React.createElement(
                                    "tr",
                                    null,
                                    this.state.weekOne
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    this.state.weekTwo
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    this.state.weekThree
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    this.state.weekFour
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    this.state.weekFive
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    this.state.weekSix
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Calendar;
}(React.Component);

// const Calendar = () => {

//     return(
//         <p>test passed</p>
//     )
// };


ReactDOM.render(React.createElement(Calendar, null), document.querySelector('#calendar'));