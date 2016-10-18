var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function() {
    return {
      totalSeconds: 0
    };
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);

    return ("0" + minutes).slice(-2) + ':' + ("0" + seconds).slice(-2);
  },
  render: function() {
    var {totalSeconds} = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
