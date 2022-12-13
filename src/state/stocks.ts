import { StockEntry } from "./types";
import create from 'zustand'

export interface StocksState {
    purchased: StockEntry[]
}

export const useStocksState = create<StocksState>()((set) => ({
    purchased: []
}))