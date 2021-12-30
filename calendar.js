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
            weekSix: [],
            monthOriginDate: new Date()
        }, _this.daysInMonth = function (m, y) {
            return new Date(y, m, 0).getDate();
        }, _this.buildWeekOne = function (firstDayIndex) {
            var date = 1;
            var weekOneArr = [];
            for (var i = 0; i < 7; i++) {
                if (i < firstDayIndex) {
                    weekOneArr.push(React.createElement('td', { key: Math.floor(Math.random() * 9000) + 1000 }));
                } else {
                    weekOneArr.push(React.createElement(
                        'td',
                        { key: Math.floor(Math.random() * 9000) + 1000 },
                        date++
                    ));
                }
            }
            return { tableCells: weekOneArr, endDate: date };
        }, _this.buildWeek = function (startDate, totalDays, weekData) {
            var weekArr = [];
            for (var i = 0; i < 7; i++) {
                if (startDate > totalDays) {
                    weekArr.push(React.createElement('td', { key: Math.floor(Math.random() * 9000) + 1000 }));
                } else {
                    // weekData.today.setHours(19); Daylight savings 

                    weekArr.push(React.createElement(
                        'td',
                        { key: Math.floor(Math.random() * 9000) + 1000 },
                        startDate++
                    ));
                }
            }
            return weekArr;
        }, _this.nextMonth = function () {
            var year = _this.state.monthOriginDate.getFullYear();
            var month = _this.state.monthOriginDate.getMonth() + 1;

            _this.setState({ monthOriginDate: new Date(year, month, 1) });

            var weekData = {
                monthIndex: month,
                year: year,
                today: new Date()
            };
            console.log('if');

            var totalDays = _this.daysInMonth(weekData.monthIndex + 1, weekData.year);
            var firstDayIndex = new Date(weekData.year, weekData.monthIndex).getDay();

            var initialWeek = _this.buildWeekOne(firstDayIndex);
            var second = _this.buildWeek(initialWeek.endDate, totalDays, weekData);
            var third = _this.buildWeek(initialWeek.endDate + 7, totalDays, weekData);
            var fourth = _this.buildWeek(initialWeek.endDate + 14, totalDays, weekData);
            var fifth = _this.buildWeek(initialWeek.endDate + 21, totalDays, weekData);

            if (initialWeek.endDate + 28 <= totalDays) {
                var sixth = _this.buildWeek(initialWeek.endDate + 28, totalDays, weekData);
                _this.setState({
                    weekOne: initialWeek.tableCells,
                    weekTwo: second,
                    weekThree: third,
                    weekFour: fourth,
                    weekFive: fifth,
                    weekSix: sixth
                });
            } else {
                _this.setState({
                    weekOne: initialWeek.tableCells,
                    weekTwo: second,
                    weekThree: third,
                    weekFour: fourth,
                    weekFive: fifth,
                    weekSix: null
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Calendar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var year = this.state.monthOriginDate.getFullYear();
            var monthInd = this.state.monthOriginDate.getMonth();

            var weekData = {
                monthIndex: monthInd,
                year: year,
                today: new Date()
            };

            var totalDays = this.daysInMonth(weekData.monthIndex + 1, weekData.year);
            var firstDayIndex = new Date(weekData.year, weekData.monthIndex).getDay();

            var initialWeek = this.buildWeekOne(firstDayIndex);
            var second = this.buildWeek(initialWeek.endDate, totalDays, weekData);
            var third = this.buildWeek(initialWeek.endDate + 7, totalDays, weekData);
            var fourth = this.buildWeek(initialWeek.endDate + 14, totalDays, weekData);
            var fifth = this.buildWeek(initialWeek.endDate + 21, totalDays, weekData);

            if (initialWeek.endDate + 28 <= totalDays) {
                var sixth = this.buildWeek(initialWeek.endDate + 28, totalDays, weekData);
                this.setState({
                    weekOne: initialWeek.tableCells,
                    weekTwo: second,
                    weekThree: third,
                    weekFour: fourth,
                    weekFive: fifth,
                    weekSix: sixth
                });
            } else {
                this.setState({
                    weekOne: initialWeek.tableCells,
                    weekTwo: second,
                    weekThree: third,
                    weekFour: fourth,
                    weekFive: fifth
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var abrevDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var dayLabels = abrevDays.map(function (day) {
                return React.createElement(
                    'th',
                    { key: day },
                    day
                );
            });
            var monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            return React.createElement(
                'div',
                { className: 'calendar-container' },
                React.createElement(
                    'div',
                    { className: 'calendar' },
                    React.createElement(
                        'div',
                        { className: 'month' },
                        React.createElement(
                            'div',
                            { className: 'month-header' },
                            React.createElement(
                                'p',
                                null,
                                monthLabels[this.state.monthOriginDate.getMonth()]
                            )
                        ),
                        React.createElement(
                            'table',
                            null,
                            React.createElement(
                                'thead',
                                null,
                                React.createElement(
                                    'tr',
                                    null,
                                    dayLabels
                                )
                            ),
                            React.createElement(
                                'tbody',
                                null,
                                React.createElement(
                                    'tr',
                                    null,
                                    this.state.weekOne
                                ),
                                React.createElement(
                                    'tr',
                                    null,
                                    this.state.weekTwo
                                ),
                                React.createElement(
                                    'tr',
                                    null,
                                    this.state.weekThree
                                ),
                                React.createElement(
                                    'tr',
                                    null,
                                    this.state.weekFour
                                ),
                                React.createElement(
                                    'tr',
                                    null,
                                    this.state.weekFive
                                ),
                                React.createElement(
                                    'tr',
                                    null,
                                    this.state.weekSix
                                )
                            )
                        ),
                        React.createElement(
                            'button',
                            { onClick: function onClick() {
                                    return _this2.nextMonth();
                                } },
                            'next'
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