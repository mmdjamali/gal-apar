import { useEffect, useState } from "react";

type State = null | string;

const key = "gal-apar-currency";

const language_currency = {
  tr: "try",
  en: "usd",
  fa: "irr",
};

let memoryState: State = null;

const listeners: Array<(state: State) => void> = [];

export const changeState = (state?: State) => {
  if (state) localStorage.setItem(key, state);

  memoryState = localStorage.getItem(key) ?? "usd";

  listeners.forEach((setState) => setState(memoryState));
};

const initializeState = (language: "tr" | "en" | "fa") => {
  const stored = !!localStorage.getItem(key);
  if (!stored) {
    localStorage.setItem(key, language_currency[language ?? "en"]);
  }

  memoryState = localStorage.getItem(key);
  listeners.forEach((setState) => setState(memoryState));
};

export const useGetStoredCurrency = (lang: "tr" | "fa" | "en") => {
  const [state, setState] = useState<State>(memoryState);

  useEffect(() => {
    listeners.push(setState);

    if (!state) initializeState(lang);

    return () => {
      const idx = listeners.indexOf(setState);

      if (idx > -1) listeners.splice(idx, 1);
    };
  }, [state]);

  return {
    currency: state,
    changeCurrency: changeState,
  };
};
