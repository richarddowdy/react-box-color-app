import React, { useState } from 'react';
import uuid from 'uuid/v4';
import Box from './Box';
import BoxForm from './BoxForm';

function BoxList() {

  const [boxes, setBoxes] = useState([]);

  const addBox = box => {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox])
  }

  const remove = id => {
    setBoxes(boxes.filter(box => box.id !== id))
  }

  return (
    <div>
      <BoxForm addBox={addBox} />

      <div>
        {boxes.map(box =>
          <Box
            key={ box.id}
            height={ box.height }
            width={ box.width }
            color={ box.color } 
            id={box.id}
            remove={ remove }
          />
        )}
      </div>
    </div>

  )
}

export default BoxList;