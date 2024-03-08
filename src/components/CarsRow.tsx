import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
}

const CarsRow = ({ title }: Props) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ px: "24px" }}>
        {title}
      </Typography>
    </Box>
  );
};

export default CarsRow;
