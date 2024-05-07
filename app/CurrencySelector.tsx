"use client"

import { useState } from "react";

const AVAILABLE_CURRENCIES = ["EUR", "PLN", "GEL", "DKK", "CZK", "GBP", "SEK", "USD", "RUB"];

export default function CurrencySelector() {
  const [currencies, setCurrencies] = useState<string[]>([]);

  const onCurrencyChange = (currency: string) => {
    setCurrencies(currencies.includes(currency) ? currencies.filter((c) => c !== currency) : [...currencies, currency]); 
  };

  const onRemoveCurrency = (currency: string) => {
    setCurrencies(currencies.filter((c) => c !== currency));
  };

  return (
    <div className="currencySelectorWrapper">
      <div className="selectedLanguages">
        {currencies.map((currency) => (
          <div key={currency} className="selectedLanguage">
            <label>{currency}</label>
            <div className="removeCurrencyButton" onClick={() => onRemoveCurrency(currency)}>+</div>
          </div>
        ))}
      </div>


      <div className="availableLanguages">
        {AVAILABLE_CURRENCIES.map((currency) => (
          <div
            key={currency}
            className={"availableLanguage " + (currencies.includes(currency) ? "selected" : "")}
            onClick={() => onCurrencyChange(currency)}
          >
            <div className={"checkbox"}>
              {currencies.includes(currency) && <div className="cross">❌</div>}
            </div>
            <label>{currency}</label>
          </div>
        ))}
      </div>
    </div>
  );
}