var React = require('react');

var ErrorModel = Reacr.createClass({
  componentDidMount: function () {
    var modal = new Foundation.reveal($('#error-modal'));
    modal.open();
  },
  render:function(){
    return(
      <div id="error-modal" className="reveal tiny text-center"data-reveal="">
        <h4>some Title</h4>
        <p>Our Error Message</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
