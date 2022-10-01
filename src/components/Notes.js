import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Notes = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
       <DeleteForeverIcon/>
      </button>
    </div>
  );
  }
export default Notes