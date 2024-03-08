import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button } from "@mui/material";
import { StyledButton, StyledMenu } from "./FilterBarStyled";
import { brands, classAuto, pricePerDay, fuel } from "../../data/filter";

import {
  Brand,
  ClassAuto,
  Fuel,
  PricePerDay,
  SelectedFilter,
  StateType,
} from "../../Types/filterTypes";
interface FilterBarProps {
  setChecked: React.Dispatch<React.SetStateAction<SelectedFilter>>;
}

export default function FilterBar({ setChecked }: FilterBarProps) {
  const [state, setState] = useState<StateType>({
    anchorElBrand: null,
    anchorElClass: null,
    anchorElPrice: null,
    anchorElFuelType: null,
  });

  const open = {
    brand: Boolean(state.anchorElBrand),
    class: Boolean(state.anchorElClass),
    price: Boolean(state.anchorElPrice),
    fuelType: Boolean(state.anchorElFuelType),
  };

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    key: keyof StateType
  ) => {
    setState({ ...state, [key]: event.currentTarget });
  };

  const handleClose = () => {
    setState({
      ...state,
      anchorElBrand: null,
      anchorElClass: null,
      anchorElPrice: null,
      anchorElFuelType: null,
    });
  };

  const handleCheckboxChange = (
    value: string | number,
    checked: boolean,
    category:
      | "selectedBrands"
      | "selectedClasses"
      | "selectedPrices"
      | "selectedFuels"
  ) => {
    setChecked((prevState: SelectedFilter) => ({
      ...prevState,
      [category]: checked
        ? [...prevState[category], value]
        : prevState[category].filter((item) => item !== value),
    }));
  };

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
          // bgcolor: "#353535",
          borderRadius: "12px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{ display: "flex", gap: "20px", ml: "10px" }}
          component="form"
          noValidate
          autoComplete="off"
        >
          <StyledButton
            aria-controls={open.brand ? "brands-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open.brand ? "true" : undefined}
            disableElevation
            onClick={(event) => handleClick(event, "anchorElBrand")}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Марка
          </StyledButton>
          <StyledMenu
            id="brands-menu"
            MenuListProps={{
              "aria-labelledby": "brands-button",
            }}
            anchorEl={state.anchorElBrand}
            open={open.brand}
            onClose={handleClose}
          >
            {brands.map(({ brand, brandValue }: Brand) => (
              <MenuItem key={brandValue}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) =>
                        handleCheckboxChange(
                          brandValue,
                          e.target.checked,
                          "selectedBrands"
                        )
                      }
                    />
                  }
                  label={brand}
                  value={brandValue}
                />
              </MenuItem>
            ))}
          </StyledMenu>

          <StyledButton
            aria-controls={open.class ? "class-auto-menu" : undefined} // Змінено на відповідний ідентифікатор
            aria-haspopup="true"
            aria-expanded={open.class ? "true" : undefined} // Змінено на відповідний ідентифікатор
            disableElevation
            onClick={(event) => handleClick(event, "anchorElClass")} // Змінено на "anchorElClass"
            endIcon={<KeyboardArrowDownIcon />}
          >
            Клас авто
          </StyledButton>
          <StyledMenu
            id="class-auto-menu" // Змінено на унікальний ідентифікатор
            MenuListProps={{
              "aria-labelledby": "class-auto-button", // Змінено на відповідний ідентифікатор кнопки
            }}
            anchorEl={state.anchorElClass} // Змінено на "anchorElClass"
            open={open.class} // Змінено на відповідний ідентифікатор
            onClose={handleClose}
          >
            {classAuto.map(({ name, classValue }: ClassAuto) => (
              <MenuItem key={classValue}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) =>
                        handleCheckboxChange(
                          classValue,
                          e.target.checked,
                          "selectedClasses"
                        )
                      }
                    />
                  }
                  label={name}
                  value={classValue}
                />
              </MenuItem>
            ))}
          </StyledMenu>

          <StyledButton
            aria-controls={open.price ? "price-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open.price ? "true" : undefined}
            disableElevation
            onClick={(event) => handleClick(event, "anchorElPrice")}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Ціна за день
          </StyledButton>
          <StyledMenu
            id="price-menu"
            MenuListProps={{
              "aria-labelledby": "price-button",
            }}
            anchorEl={state.anchorElPrice}
            open={open.price}
            onClose={handleClose}
          >
            {pricePerDay.map(({ price, priceValue }: PricePerDay) => (
              <MenuItem key={priceValue}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) =>
                        handleCheckboxChange(
                          price,
                          e.target.checked,
                          "selectedPrices"
                        )
                      }
                    />
                  }
                  label={price}
                  value={priceValue}
                />
              </MenuItem>
            ))}
          </StyledMenu>

          <StyledButton
            aria-controls={open.fuelType ? "fuel-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open.fuelType ? "true" : undefined}
            disableElevation
            onClick={(event) => handleClick(event, "anchorElFuelType")}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Тип пального
          </StyledButton>
          <StyledMenu
            id="fuel-menu"
            MenuListProps={{
              "aria-labelledby": "fuel-button",
            }}
            anchorEl={state.anchorElFuelType}
            open={open.fuelType}
            onClose={handleClose}
          >
            {fuel.map(({ name, fuelValue }: Fuel) => (
              <MenuItem key={fuelValue}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) =>
                        handleCheckboxChange(
                          fuelValue,
                          e.target.checked,
                          "selectedFuels"
                        )
                      }
                    />
                  }
                  label={name}
                  value={fuelValue}
                />
              </MenuItem>
            ))}
          </StyledMenu>
        </Box>
        <Box sx={{ mr: "10px" }}>
          <StyledButton onClick={handleResetFilters}>Скинути все</StyledButton>
        </Box>
      </Box>
    </>
  );
}
