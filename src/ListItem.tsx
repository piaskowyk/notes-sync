import React from 'react';
import './ListItem.css';

function ListItem(props:any) {
  return (
    <div className="ListItem" onClick={props.onClick}>
      <div className="ActionBar">
        <div id="Remove">x</div>
      </div>
      <div className="NotesName">Mleko notes</div>
      <div className="Bottombar">
        <div className="NotesStart">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className="NotesDate">10.12.2019</div>
      </div>
    </div>
  );
}

export default ListItem;
