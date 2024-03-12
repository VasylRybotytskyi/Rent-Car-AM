import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../redux/slices/userSlice";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { useAppDispatch } from "../hooks/use-redux";

const navData = [
  { name: "Каталог", icon: <WidgetsIcon />, link: "/cars" },
  { name: "Бронювання", icon: <BookmarkBorderIcon />, link: "/order" },
];

const NavBar = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

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
        {isAuth ? (
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
                  <ListItemText
                    primary={data.name}
                    primaryTypographyProps={{
                      sx: { display: { xs: "none", sm: "block" } },
                    }}
                  />
                  <ListItemText
                    primary={data.icon}
                    primaryTypographyProps={{
                      sx: { display: { xs: "block", sm: "none" } },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ) : null}
        {isAuth ? (
          <IconButton
            size="large"
            aria-haspopup="true"
            onClick={() => dispatch(removeUser())}
            color="inherit"
          >
            <ExitToAppIcon />
          </IconButton>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
