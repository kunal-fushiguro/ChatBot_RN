export interface HistoryProps {
  prompt: string;
  time: Date;
}

export interface StoreProps {
  text: string;
  changeText: (value: string) => void;
  emptyText: () => void;
  history: HistoryProps[] | [];
  setHistory: ({ prompt, time }: HistoryProps) => void;
  aiResponse: [] | string[];
  setAiResponse: (text: string) => void;
}

export interface UserPromptProps {
  text: string;
}
