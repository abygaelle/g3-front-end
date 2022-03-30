import { useState } from "react";

const ToggleForm = ({form, buttonText}) => {
  const [displayState, setDisplayState] = useState(-1) // -1 hide form, 1 show form
  const toggleDisplay = () => setDisplayState(displayState * -1)
  return ( 
    <>
      {displayState === -1
        ?
          <button onClick={()=> toggleDisplay()}>{buttonText}</button>
        :
        <>
          {form}
          <button onClick={()=> toggleDisplay()}>cancel</button>
        </>        
      }
    </>
  );
}
 
export default ToggleForm;