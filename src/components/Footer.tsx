import { Link } from "react-router-dom";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import { icons } from "../data/footer";

interface Icon {
  icon: string;
  link: string;
}

const Footer = () => {
  return (
    <Box sx={{ px: "24px" }}>
      <Stack
        direction={{ md: "row" }}
        gap={4}
        justifyContent={{ xs: "center", md: "space-between" }}
        alignItems="center"
        py={2}
      >
        <Typography variant="h6" component={Link} to="/">
          АВТОПРОКАТ
        </Typography>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="body2">
            Усі права захищені "АВТОПРОКАТ" © {new Date().getFullYear()}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          {icons.map((icon: Icon, index: number) => (
            <IconButton
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ "&:hover": { transform: "scale(1.1)" } }}
            >
              <img src={icon.icon} alt={`icon-${index}`} width={24} />
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
