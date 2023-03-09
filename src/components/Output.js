import classes from "./Output.module.css";
import fieldImage from "../img/soccer-field-471.png";

const Output = (props) => {
  const buttonOnClickhandler = (event) => {
    event.preventDefault();
    props.changeIsCalculated();
  };

  const fussballfeldText = props.value === 1 ? "Fussballfeld" : "Fussballfelder";
  const outputText = props.value + " " + fussballfeldText;

  return (
    <div className={classes.output}>
      <h1>{outputText}</h1>
      <img src={fieldImage} alt="Fussballfeld" />
      <button onClick={buttonOnClickhandler} className={classes.button}>
        Neu berechnen
      </button>
    </div>
  );
};

export default Output;
