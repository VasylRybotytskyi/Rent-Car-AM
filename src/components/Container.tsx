import { Box, Stack, Typography } from "@mui/material";

interface Props {
  header?: string;
  children?: React.ReactNode;
}

const Container = ({ header, children }: Props) => {
  return (
    <Box
      sx={{
        marginTop: "1rem",
        color: "text.primary",
        mx: "24px",
      }}
    >
      <Stack spacing={4}>
        {header && (
          <Box
            sx={{
              position: "relative",
              paddingX: { xs: "20px", md: 0 },
              maxWidth: "1366px",
              marginX: "auto",
              width: "100%",
              "&::before": {
                content: '""',
                position: "absolute",
                left: { xs: 20, md: 0 },
                top: "100%",
                height: "5px",
                width: "100px",
                backgroundColor: "primary.main",
              },
            }}
          >
            <Typography
              variant="h6"
              // fontWeight="700"
              textTransform="uppercase"
              color="white"
            >
              {header}
            </Typography>
          </Box>
        )}
        {children}
      </Stack>
    </Box>
  );
};

export default Container;
