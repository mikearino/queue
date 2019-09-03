import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  var myStyle = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'monospace',
    fontSize: '24px'
  };
  var myOtherStyle = {
    fontSize: '100px'
  };
  return (
    <div style={myStyle}>
      <h3>{props.location} - {props.names}</h3>
      <p><em style={myOtherStyle}>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
