import { FormPrimaryValue } from "./formTypes";

export interface Brand {
  brand: string;
  brandValue: string;
}

export interface ClassAuto {
  name: string;
  classValue: string;
}

export interface PricePerDay {
  price: number;
  priceValue: number;
}

export interface Fuel {
  name: string;
  fuelValue: string;
}

export type Car = {
  carBrand: string;
  id: string;
  price: number;
  name: string;
  imagePath: { url: string }[]; // Оголосіть imagePath як масив об'єктів з властивістю url
  carClass: "economy" | "business" | "midsize" | "crossover"; // Клас авто
  carFuel: "petrol" | "diesel" | "electric"; // Тип автомобіля
  rating: number;
  specialFeatures: string[];
  configuration: string;
  transmission: string;
  description: string;
  speedLimit: number;
  year: number;
  hp: number;
  engine: string;
  formData?: FormPrimaryValue;
};

export type SelectedFilter = {
  selectedBrands: string[];
  selectedClasses: string[];
  selectedPrices: number[];
  selectedFuels: string[];
};

export type StateType = {
  anchorElBrand: HTMLElement | null;
  anchorElClass: HTMLElement | null;
  anchorElPrice: HTMLElement | null;
  anchorElFuelType: HTMLElement | null;
};
