import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var myStyle = {
    backgroundColor: 'orange',
    fontFamily: 'monospace',
    fontSize: '36px'
  };
  return (
    <div>
      <h1 style={myStyle}>Help Queue</h1>
      <Link to='/'>Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
