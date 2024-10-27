import "./App.css";
import { ColorPicker } from "./ColorPicker";

import { signal } from "@preact/signals";
import Color from "colorjs.io";
import { hueSequence } from "./color";
import { SwatchRow } from "./ColorSwatch";
import { PaletteSettings } from "./PaletteSettings";

const baseColor = signal(new Color("LCH", [50, 50, 0]));
const settings = signal({ hueCount: 6 });

function App() {
  return (
    <main class="container">
      <h1>ColorTool</h1>

      <div class="row">
        <div class="settings">
          <ColorPicker color={baseColor} />
          <PaletteSettings settings={settings} />
        </div>
        <div class="palette">
          <h2>Hue Progression</h2>
          <SwatchRow
            colors={hueSequence(baseColor.value, settings.value.hueCount)}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
