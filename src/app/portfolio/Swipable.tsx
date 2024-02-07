import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import { Fade, Modal } from "@mui/material";
import Image from "next/image";

const useStyles = makeStyles(() => ({
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {},
  },
  img: {
    outline: "none",
  },
}));
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper({ images }: { images: string[] }) {
  const classes = useStyles();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const [image, setImage] = useState("false");

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (value: string) => {
    setImage(value);
    setOpen(true);
    console.log(image);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  if (images.length === 0) return null;
  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          pl: 2,
          bgcolor: "background.default",
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                onClick={() => handleImage(step)}
                sx={{
                  height: 200,
                  display: "block",
                  maxWidth: 400,
                  overflow: "hidden",
                  objectFit: "contain",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  width: "100%",
                }}
                src={step || "https://source.unsplash.com/random?wallpapers"}
                alt={step || "https://source.unsplash.com/random?wallpapers"}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} timeout={500} className={classes.img}>
          <Image
            src={image}
            alt="modal"
            style={{
              maxHeight: "70%",
              maxWidth: "40%",
              objectFit: "contain",
              // dark grey background
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          />
        </Fade>
      </Modal>
    </Box>
  );
}
export default SwipeableTextMobileStepper;
