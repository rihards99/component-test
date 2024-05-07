import Image from "next/image";
import CurrencySelector from "./CurrencySelector";

export default function Home() {
  return (
    <main className="mainCentered">
      <p>Currency Selector:</p>
      <CurrencySelector/>
    </main>
  );
}
