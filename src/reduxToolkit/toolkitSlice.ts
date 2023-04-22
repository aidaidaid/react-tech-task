import clientsDB from "../server";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { store } from "./toolkit";

interface ToolkitState {
  clients: Client[];
  credits: Credit[];
  currentClient: Client | null;
}

export interface Client {
  factAddress: string,
  fin: string,
  kod: string,
  name: string,
  registrationAddress: string,
  birthDate: string,
  phoneMob: string,
  phoneHome: string
}

interface Credit {
    sector: string,
    monthlyIncome: string,
    experienceYears: string,
    experienceMonths: string,
    region: string,
    businessAddress: string,
		currency: string,
		purpose: string,
		amount: string,
		duration: string,
		percent: string,
		guarantors: Client[],
}

const initialState: ToolkitState = {
  clients: clientsDB,
  credits: [],
  currentClient: null,
};

const slice = createSlice({
      name: "toolkit",
      initialState,
      reducers: {
          setClient: (state, action: PayloadAction<Client>) => {
            state.clients = [...state.clients, action.payload];
          },
          setCredit: (state, action: PayloadAction<Credit>) => {
            state.credits = [...state.credits, action.payload];
          },
          setCurrentClient: (state, action: PayloadAction<Client> ) => {
            state.currentClient = action.payload;
          }
        }
    })

export default slice.reducer;

export const { setClient, setCredit, setCurrentClient } = slice.actions;

export const selectClients = (state: ReturnType<typeof store.getState>) => state.toolkit.clients;
export const selectCredits = (state: ReturnType<typeof store.getState>) => state.toolkit.credits;
export const selectCurrentClient = (state: ReturnType<typeof store.getState>) => state.toolkit.currentClient;
