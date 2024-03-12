import { configureStore } from "@reduxjs/toolkit";
import { carsApi } from "./services/carsApi";
import orderSlice from "./slices/orderSlice";
import userSlice from "./slices/userSlice"; // Імпортуйте користувача
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedOrderReducer = persistReducer(persistConfig, orderSlice);
const persistedUserReducer = persistReducer(persistConfig, userSlice);

export const store = configureStore({
  reducer: {
    order: persistedOrderReducer,
    user: persistedUserReducer,
    [carsApi.reducerPath]: carsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(carsApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
