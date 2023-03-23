import { Typography } from "@mui/material";

const CustomLink = ({ text }) => {
  return (
    <Typography variant="h3" fontWeight={500} fontSize="1rem">
      <a>{text}</a>
    </Typography>
  );
};

export default CustomLink;
