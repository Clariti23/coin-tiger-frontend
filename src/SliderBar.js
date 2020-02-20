// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Slider from "@material-ui/core/Slider";

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: 300
//   },
//   margin: {
//     height: theme.spacing(3)
//   }
// }));

// const marks = [
//   {
//     value: 1000,
//     label: "$1000"
//   },
//   {
//     value: 2500,
//     label: "$2,500"
//   },
//   {
//     value: 5000,
//     label: "$5,000"
//   }
// ];

// // function calculate(initialBasketValue, value)

// export default function DiscreteSlider(props) {
//   const classes = useStyles();

//   let valuetext = (event, value) => {
//     props.handleValueChange(value);
//   };

//   return (
//     <div className={classes.root}>
//       <Typography id="discrete-slider" gutterBottom>
//         Amount in $
//       </Typography>
//       <Slider
//         defaultValue={0}
//         onChangeCommitted={valuetext}
//         aria-labelledby="discrete-slider"
//         valueLabelDisplay="auto"
//         step={500}
//         marks={marks}
//         min={0}
//         max={5000}
//       />
//       <div className={classes.margin} />
//     </div>
//   );
// }
