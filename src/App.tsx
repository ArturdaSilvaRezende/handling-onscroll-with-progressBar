import { useState } from "react";
import "./App.css";
import { HandlingOnScroll } from "./components/HandlingOnScroll";
import { ProgressBar } from "./components/progressBar";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <main>
      <HandlingOnScroll setProgress={setProgress} />
      <ProgressBar progress={progress} />
    </main>
  );
}

export default App;
