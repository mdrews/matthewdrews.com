import React, {useRef} from 'react';

const ImageToggleOnMouseOver = ({primary, secondary}) => {
  
  const imageRef = useRef(null);

  return(<img
    onMouseOver={() => {imageRef.current.src = secondary}}
    onMouseOut={() => {imageRef.current.src = primary}}
    ref={imageRef}
    src={primary}
     />);
}

export default ImageToggleOnMouseOver;