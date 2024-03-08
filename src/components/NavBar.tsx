import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import User from "./common/User";

const navData = [
  { name: "Каталог", link: "/cars" },
  { name: "Бронювання", link: "/order" },
];

const NavBar = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 15) {
        setBackgroundColor("rgba(0,0,0,1)");
      } else {
        setBackgroundColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      sx={{
        backgroundColor: backgroundColor,
        transition: "background-color 0.5s ease",
      }}
      elevation={0}
    >
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1 }}>
          АВТОПРОКАТ
        </Typography>
        <List component="nav" sx={{ display: "flex" }}>
          {navData.map((data, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton
                component={Link}
                to={data.link}
                sx={{
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                <ListItemText primary={data.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <User />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
