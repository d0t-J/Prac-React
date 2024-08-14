import MyButton from "./components/button";
import Alert from "./components/alert";
import React, { useState } from "react";

function App() {
  const [AlertVisibility, setAlertVisibility] = useState(false);

  const handleClick = () => {
    console.log("click");
    setAlertVisibility(true);
  };
  const handleClose = () => {
    setAlertVisibility(false);
  };
  
  return (
    <div>
      {AlertVisibility === true ? (
        <Alert onClose={handleClose}>Hello!</Alert>
      ) : null}
      <MyButton onclick={handleClick} color="dark">
        Hello
      </MyButton>
    </div>
  );
}

export default App;
