import { Box, Grid, Typography } from "@mui/material";

const ItemCarInfo = ({ title, array, icon }) => {
  return (
    <>
      <Typography variant="h6" mb={1}>
        {title}
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          border: "1px solid white",
          borderRadius: "12px",
        }}
      >
        <Grid container spacing={1} p={2}>
          {array?.specialFeatures &&
            array.specialFeatures.map((item: string, index: number) => (
              <Grid
                display="flex"
                alignItems="center"
                gap={1}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
              >
                <div className="bg-gray-400 p-[1px] rounded-full ">{icon}</div>
                {item}
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default ItemCarInfo;
