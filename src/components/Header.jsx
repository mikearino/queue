import React from 'react';

function Header(){
  var myStyle = {
    backgroundColor: 'orange',
    fontFamily: 'monospace',
    fontSize: '36px'
  };
  return (
    <h1 style={myStyle}>Help Queue</h1>
  );
}

export default Header;
