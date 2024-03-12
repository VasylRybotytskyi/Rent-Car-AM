import { Box } from "@mui/material";
import { StyledButton } from "./FilterBarStyled";
import FilterItem from "./FilterItem";
import { SelectedFilter } from "../../Types/filterTypes";
// import ModalFilter from "../modal/ModalFilter";
import TemporaryDrawer from "./FilterDrawer";
interface FilterBarProps {
  setChecked: React.Dispatch<React.SetStateAction<SelectedFilter>>;
}
export default function FilterBar({ setChecked }: FilterBarProps) {
  const handleResetFilters = () => {
    setChecked({
      selectedBrands: [],
      selectedClasses: [],
      selectedPrices: [],
      selectedFuels: [],
    });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          mt: "70px",
          mx: { xs: "16px", sm: "24px" },
          p: "8px",
          border: "2px solid white",
          borderRadius: "12px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "none",
            gap: "20px",
            ml: "10px",
            "@media (max-width: 768px)": {
              display: "flex",
            },
          }}
        >
          <TemporaryDrawer setChecked={setChecked} />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            ml: "10px",
            "@media (max-width: 768px)": {
              display: "none",
            },
          }}
        >
          <FilterItem setChecked={setChecked} />
        </Box>

        <Box sx={{ mr: "10px" }}>
          <StyledButton onClick={handleResetFilters}>Скинути все</StyledButton>
        </Box>
      </Box>
    </>
  );
}
