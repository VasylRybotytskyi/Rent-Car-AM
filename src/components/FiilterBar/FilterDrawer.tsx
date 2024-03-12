import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import FilterItem from "./FilterItem";
import { SelectedFilter } from "../../Types/filterTypes";
import { StyledButton } from "./FilterBarStyled";
import { Typography } from "@mui/material";
interface FilterBarProps {
  setChecked: React.Dispatch<React.SetStateAction<SelectedFilter>>;
}
export default function TemporaryDrawer({ setChecked }: FilterBarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ p: "25px" }} role="presentation">
      <Typography sx={{ color: "#fff", textAlign: "center", pb: "10px" }}>
        Фільтр
      </Typography>
      <FilterItem setChecked={setChecked} />
    </Box>
  );

  return (
    <div>
      <StyledButton
        size="small"
        sx={{ color: "#fff" }}
        onClick={toggleDrawer(true)}
      >
        Фільтр
      </StyledButton>

      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            bgcolor: "black",
            width: "60%",
          },
        }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
