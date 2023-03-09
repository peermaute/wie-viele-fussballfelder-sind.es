import classes from "./App.module.css";
import Inputs from "./components/Inputs";
import Output from "./components/Output";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

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
      <h1 className={classes.shortTitle}>Umrechnung in Fussballfelder</h1>
      <Inputs
        onChangeOutputValue={onChangeOutputValue}
        changeIsCalculated={onChangeIsCalculated}
      />
    </div>
  );

  const output = (
    <Output value={outputValue} changeIsCalculated={onChangeIsCalculated} />
  );

  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <a href="https://peermaute.com/">/home</a>
      </header>
      <div className={classes.body}>
        {!isCalclulated && calculator}
        {isCalclulated && output}
      </div>
      <footer className={classes.footer}>
        <a className={classes.iconLink} href="https://github.com/peermaute/wie-viele-fussballfelder-sind.es">
          <i
            className={classes.icon + " bi bi-github"}
            id={classes.githubIcon}
          ></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
