import Demo from "./components/Demo";
import Hero from "./components/Hero";

import "./App.css";

const App = () => {
  return (
    <main
      className={`w-scree h-screen bg-background text-text flex flex-col items-center justify-start font-mono overflow-y-scroll`}
    >
      <nav className="flex items-center justify-between w-full px-10 pt-3 mb-10">
        <p className={`text-3xl font-semibold italic`}>Sumz</p>

        <button
          type="button"
          onClick={() => window.open(`https://github.com/ksyksy815`)}
          className="hover:underline"
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
