import React from 'react';

function Box({ height, width, color, remove, id }){
  const handleRemove = () => {
    remove(id);
  };

  return (
    <div data-testid="box" onClick={handleRemove}>
      <div style={{ height: `${height}px`, width: `${width}px`, backgroundColor: color }}></div>
      {/* <button onClick={ handleRemove }>X</button> */}
    </div>
  )
}

export default Box;