import classes from "./Inputs.module.css";
import Select from "react-select";
import Calculator from "./calculator";
import { useState } from "react";

const options = [
  { value: "km", label: "Kilometer" },
  { value: "m", label: "Meter" },
  { value: "cm", label: "Centimeter" },
  { value: "mm", label: "Millimeter" },
  { value: "nm", label: "Nanometer" },
  { value: "micrometer", label: "Micrometer" },
  { value: "pm", label: "Picometer" },
  { value: "ft", label: "Feet" },
  { value: "in", label: "Inches" },
  { value: "yd", label: "Yard" },
  { value: "mi", label: "Miles" },
  { value: "ly", label: "Lichtjahre" },
];

const Inputs = (props) => {
  const [inputValue, setInputValue] = useState(0);
  const [selectedUnit, setSelectedUnit] = useState("m");

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  
  const selectChangeHandler = (event) => {
    setSelectedUnit(event.value);
  };

  const buttonOnClickhandler = (event) => {
    event.preventDefault();
    props.onChangeOutputValue(Calculator(inputValue, selectedUnit));
    props.changeIsCalculated();
  }

  return (
    <div className={classes.Inputs}>
        <div className={classes.inputWrapper}>
          <input value={inputValue} className={classes.inputElement} type="number" placeholder="Zahl eingeben" onChange={inputChangeHandler}/>
          <Select className={classes.inputElement} options={options} placeholder="Maßeinheit"  onChange={selectChangeHandler}/>
        </div>
        <button onClick={buttonOnClickhandler} className={classes.button}>Berechnen</button>
    </div>
  );
};

export default Inputs;
