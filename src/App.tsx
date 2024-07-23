import Demo from "./components/Demo";
import Hero from "./components/Hero";

import "./App.css";
import { logo } from "./assets";

const App = () => {
  return (
    <main
      className={`w-scree h-screen bg-background text-text flex flex-col items-center justify-start font-mono`}
    >
      <nav className="flex items-center justify-between w-full px-10 pt-3 mb-10">
        <img src={logo} alt="Sumz_logo" className="object-contain w-28" />

        <button
          type="button"
          onClick={() => window.open(`https://github.com/ksyksy815`)}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <Hero />
      <Demo />
    </main>
  );
};

export default App;
