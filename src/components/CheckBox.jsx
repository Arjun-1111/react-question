import React, { useState } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
import { useSelector } from "react-redux";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  checkedIcon: {
    backgroundColor: "#fff",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    borderRadius: 3,
    width: 20,
    height: 20,
  },
});

const CheckBox = () => {
  const mystate = useSelector((state) => state.changeColor);
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
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
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedA}
              onChange={(e) => handleChange(e, 10)}
              name="checkedA"
            />
          }
          label="Change Color"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={(e) => handleChange(e, 13)}
              name="checkedB"
            />
          }
          label="Change Color"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedC}
              onChange={(e) => handleChange(e, 15)}
              name="checkedC"
              indeterminate
            />
          }
          label="new Color"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedD}
              onChange={(e) => handleChange(e, 14)}
              name="checkedD"
              color="default"
            />
          }
          label="new Color"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedE}
              onChange={(e) => handleChange(e, 8)}
              name="checkedE"
              color="default"
              checkedIcon={
                <AddOutlinedIcon
                  color="secondary"
                  className={classes.checkedIcon}
                />
              }
            />
          }
          label="new Color"
        />
      </FormGroup>
    </>
  );
};

export default CheckBox;
