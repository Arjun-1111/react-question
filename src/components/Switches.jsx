import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "50px",
    height: "24px",
    padding: "0px",
    marginBottom: "10px",
    marginTop: "5px",
  },
  switchBase: {
    padding: "1px",
    "&$checked": {
      "& + $track": {
        backgroundColor: "red",
      },
    },
  },
  thumb: {
    color: "white",
    width: "20px",
    height: "20px",
    margin: "1px",
  },
  track: {
    borderRadius: "20px",
    backgroundColor: "#000",
    opacity: "1 !important",
    "&:after, &:before": {
      color: "#fff",
      fontSize: "11px",
      position: "absolute",
      top: "6px",
      fontWeight: "bold",
    },
    "&:after": {
      content: "'On'",
      left: "8px",
    },
    "&:before": {
      content: "'Off'",
      right: "7px",
    },
  },
  checked: {
    transform: "translateX(26px) !important",
  },
});

const Switches = () => {
  const mystate = useSelector((state) => state.changeColor);
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
  });

  const domElement = document.getElementById("root");

  const handleChange = (e, id) => {
    setState({ ...state, [e.target.name]: e.target.checked });
    if (state[e.target.name] === false) {
      const color = mystate.filter((color) => color.id === id);
      domElement.style.backgroundColor = color[0].color;
    } else {
      domElement.style.backgroundColor = "#fff";
    }
  };

  const classes = useStyles();
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedB}
              onChange={(e) => handleChange(e, 3)}
              name="checkedB"
              color="secondary"
            />
          }
          label="change color"
        />

        <Switch
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
          }}
          checked={state.checkedA}
          onChange={(e) => handleChange(e, 12)}
          name="checkedA"
          color="secondary"
        />
      </FormGroup>
    </>
  );
};

export default Switches;
