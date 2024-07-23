import Demo from "./components/Demo";
import Hero from "./components/Hero";

import "./App.css";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main
      className={`w-scree h-screen bg-background text-text flex flex-col items-center justify-start font-mono overflow-y-scroll px-6`}
    >
      <Nav />
      <Hero />
      <Demo />
    </main>
  );
};

export default App;
