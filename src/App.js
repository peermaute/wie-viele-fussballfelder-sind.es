import classes from "./App.module.css";
import Inputs from "./components/Inputs";
import Output from "./components/Output";
import { useState } from "react";

function App() {
  const [isCalclulated, setIsCalculated] = useState(false);
  const [outputValue, setOutputValue] = useState();

  const onChangeIsCalculated = () => {
    setIsCalculated((prevState) => !prevState);
  };

  const onChangeOutputValue = (value) => {
    setOutputValue(value);
  };

  const calculator = (
    <div className={classes.calculator}>
      <h1 className={classes.urlTitle}>wie-viele-fussballfelder-sind.es</h1>
      <h1 className={classes.shortTitle}>Fussballfelder berechnen</h1>
      <Inputs onChangeOutputValue={onChangeOutputValue} changeIsCalculated={onChangeIsCalculated} />
    </div>
  );

  const output = <Output value={outputValue} changeIsCalculated={onChangeIsCalculated}/>;

  return (
    <div className={classes.App}>
      {!isCalclulated && calculator}
      {isCalclulated && output}
    </div>
  );
}

export default App;
