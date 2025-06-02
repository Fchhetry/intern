import React, { useLayoutEffect, useRef, useState } from 'react'; //runs after all DOM updates but before the browser repaints

function ExUseLayoutEffect() {//uses hooks to interact with the DOM
  const boxRef = useRef(null);//get a reference to a DOM element
  const [boxWidth, setBoxWidth] = useState(0);// to store and update state

  useLayoutEffect(() => { //runs after the DOM is updated but before the browser paints
    if (boxRef.current) {
      setBoxWidth(boxRef.current.getBoundingClientRect().width); //gets the actual width in pixels of the div
    }
  }, []);

  return (
    <div>
      <div ref={boxRef} style={{ width: '50%', backgroundColor: '#ddd', padding: '10px' }}>
        This box is 50% of the container's width
      </div>
      <p>Box width: {boxWidth}px</p>
    </div>
  );
}

export default ExUseLayoutEffect;
