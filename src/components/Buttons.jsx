import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Buttons = () => {
  const classes = useStyles();
  const mystate = useSelector((state) => state.changeColor);
  const domElement = document.getElementById("root");

  const handleClick = (id) => {
    const color = mystate.filter((color) => color.id === id);
    domElement.style.backgroundColor = color[0].color;
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={() => handleClick(1)}>
        Primary
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleClick(2)}
      >
        Primary Light
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleClick(3)}
      >
        Secondary
      </Button>

      {/* Text Button */}
      <Button onClick={() => handleClick(4)}>Negative</Button>
      <Button color="primary" onClick={() => handleClick(5)}>
        Dark Red
      </Button>
      <Button color="secondary" onClick={() => handleClick(6)}>
        Dark Amber
      </Button>

      {/* Outlined Button */}
      <Button variant="outlined" onClick={() => handleClick(7)}>
        Light Amber
      </Button>
      <Button variant="outlined" color="primary" onClick={() => handleClick(8)}>
        Dark Green
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => handleClick(9)}
      >
        Light Green
      </Button>
    </div>
  );
};

export default Buttons;
