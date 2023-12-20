import "./App.css";
import CssDesign from "./components/css-design";
import { TailwindIndicator } from "./components/indicator";
import MobileCss from "./components/mobile-css";
import Simple from "./components/simple";

function App() {
  return (
    <div>
      <CssDesign />
      <div className="flex xl:flex-row lg:flex-col md:flex-col max-sm:flex-col">
        <MobileCss />
        <Simple />
      </div>
      <TailwindIndicator />
    </div>
  );
}

export default App;
