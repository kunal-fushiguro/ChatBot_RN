import { HistoryProps, StoreProps } from "@/types";
import { create } from "zustand";

export const useStore = create<StoreProps>()((set) => ({
  text: "",
  changeText: (value: string) => set({ text: value }),
  emptyText: () => set({ text: "" }),
  history: [],
  setHistory: ({ prompt, time }: HistoryProps) =>
    set((state) => ({
      history: [...state.history, { prompt, time }],
    })),
  aiResponse: [],
  setAiResponse: (text: string) =>
    set((state) => ({ aiResponse: [...state.aiResponse, text] })),
}));
