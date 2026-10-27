import { createContext, useContext, useEffect, useState } from 'react';

const CurrencyContext = createContext({ currency: 'INR', setCurrency: () => {} });

const STORAGE_KEY = 'gofs-currency';

// Static HTML always renders INR; after hydration we switch to USD for
// visitors outside India (or to whatever they picked last time).
export function CurrencyProvider({ children }) {
  const [currency, setCurrencyState] = useState('INR');

  useEffect(() => {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch { /* storage blocked */ }
    if (saved === 'INR' || saved === 'USD') {
      setCurrencyState(saved);
      return;
    }
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (!/^Asia\/(Kolkata|Calcutta)$/.test(tz)) setCurrencyState('USD');
  }, []);

  const setCurrency = (next) => {
    setCurrencyState(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* storage blocked */ }
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
