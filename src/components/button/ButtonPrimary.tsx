import { Button } from "@mui/material";
import "./ButtonPrimary.css";

const ButtonPrimary = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        display: "block",
        cursor: "pointer",
        padding: "0.8em 1.4em",
        fontWeight: "500",
        fontSize: "0.9rem",
        textTransform: "lowercase",
        borderRadius: 0,
        border: "2px solid #2978b5",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          color: "#fcfcfc",
          backgroundColor: "#2978b5",
          right: "100%",
          bottom: 0,
          left: 0,
          top: 0,
          transition: "right 0.2s ease-in-out",
        },
        "&:hover:before": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "#fcfcfc",
          left: "100%",
          top: 0,
          transition: "left 0.2s ease-in-out",
        },
        "&:hover:after": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "#fcfcfc",
          right: "100%",
          top: 0,
          transition: "right 0.2s ease-in-out",
        },
      }}
    >
      meu e-mail
    </Button>
  );
};

export default ButtonPrimary;

// .btn--outline:hover,
// .btn--outline:focus {
//   color: var(--clr-bg);
