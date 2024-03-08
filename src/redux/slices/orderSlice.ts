import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../../Types/filterTypes";

interface OrderState {
  orderCars: Car[];
}

const initialState: OrderState = {
  orderCars: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<Car>) => {
      const { id } = action.payload;
      // Перевіряємо, чи вже є автомобіль з таким же ідентифікатором
      const existingCar = state.orderCars.find((car) => car.id === id);
      if (!existingCar) {
        // Якщо не існує, додаємо новий автомобіль до списку
        state.orderCars.push(action.payload);
      }
    },
    removeFromOrder: (state, action: PayloadAction<string>) => {
      const carIdToRemove = action.payload;
      // Фільтруємо список автомобілів, залишаючи тільки ті, які не мають вказаний ідентифікатор
      state.orderCars = state.orderCars.filter(
        (car) => car.id !== carIdToRemove
      );
    },
  },
});

export const { addToOrder, removeFromOrder } = orderSlice.actions;
export default orderSlice.reducer;
