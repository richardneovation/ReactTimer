var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      time: 0,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            time: 0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  handleStatusChange: function(newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },
  startTimer: function() {
    this.setState({
      timerStatus: 'started'
    });

    this.timer = setInterval(() => {
      var newTime = this.state.time + 1;
      this.setState({
        time: newTime
      });
    },1000);
  },
  render: function() {
    var {time, timerStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={time} />
        <Controls type="timer" status={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
});

module.exports = Timer;
