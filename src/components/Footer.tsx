import { Link } from "react-router-dom";
import { Typography, IconButton, Grid } from "@mui/material";
import { icons } from "../data/footer";
import { FooterIcon } from "../Types/Props";

const Footer = () => {
  return (
    <Grid
      container
      sx={{ px: "24px", borderTop: "1px solid #fff", my: "10px" }}
      spacing={2}
    >
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        display="flex"
        justifyContent={{ xs: "center", sm: "start" }}
        alignItems="center"
      >
        <Typography variant="h6" component={Link} to="/">
          АВТОПРОКАТ
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        display="flex"
        justifyContent={{ xs: "center", sm: "end", md: "center" }}
        alignItems="center"
      >
        <Typography variant="caption">
          Усі права захищені "АВТОПРОКАТ" © {new Date().getFullYear()}
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        md={4}
        display="flex"
        justifyContent={{ xs: "center", md: "end" }}
        alignItems="center"
      >
        {icons.map((icon: FooterIcon, index: number) => (
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
      </Grid>
    </Grid>
  );
};

export default Footer;
