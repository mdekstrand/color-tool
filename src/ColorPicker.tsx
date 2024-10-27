import { Signal } from "@preact/signals";
import Color from "colorjs.io";
import { ColorDisplay } from "./ColorSwatch";

export function ColorPicker({ color }: { color: Signal<Color> }) {
  const [L, c, h] = color.value.lch;

  function updateL(evt: InputEvent) {
    let elt = evt.currentTarget as HTMLInputElement;
    const newL = Number.parseFloat(elt.value);
    color.value = new Color("LCH", [newL, c, h]);
  }
  function updateC(evt: InputEvent) {
    let elt = evt.currentTarget as HTMLInputElement;
    const newC = Number.parseFloat(elt.value);
    color.value = new Color("LCH", [L, newC, h]);
  }
  function updateH(evt: InputEvent) {
    let elt = evt.currentTarget as HTMLInputElement;
    const newH = Number.parseFloat(elt.value);
    color.value = new Color("LCH", [L, c, newH]);
  }

  return (
    <div class="row">
      <div class="base-picker">
        <h2>Anchor Color</h2>
        <form id="base-color-picker" class="color-picker">
          <div class="form-row">
            <label for="L">Luminance</label>
            <input
              name="L"
              type="range"
              min="0"
              max="100"
              value={L}
              onInput={updateL}
            />
            <input type="text" size={2} value={L} onInput={updateL} />
          </div>
          <div class="form-row">
            <label for="c">Chroma</label>
            <input
              name="c"
              type="range"
              min="0"
              max="150"
              value={c}
              onInput={updateC}
            />
            <input type="text" size={2} value={c} onInput={updateC} />
          </div>
          <div class="form-row">
            <label for="h">Hue</label>
            <input
              name="h"
              type="range"
              min="0"
              max="360"
              value={h}
              onInput={updateH}
            />
            <input type="text" size={2} value={h} onInput={updateH} />
          </div>
        </form>

        <ColorDisplay color={color.value} />
      </div>
    </div>
  );
}
