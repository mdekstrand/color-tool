import { Signal } from "@preact/signals";

export type PaletteConfig = {
  hueCount: number;
};

export function PaletteSettings(
  { settings }: { settings: Signal<PaletteConfig> },
) {
  function updateHueCount(evt: InputEvent) {
    let elt = evt.currentTarget as HTMLInputElement;
    let n = Number.parseInt(elt.value);
    settings.value = Object.assign({}, settings.value, { hueCount: n });
  }

  return (
    <form class="palette-settings">
      <h2>Palette Settings</h2>
      <label for="count">Hue Count</label>
      <input
        name="count-text"
        type="number"
        size={2}
        value={settings.value.hueCount}
        onInput={updateHueCount}
      />
    </form>
  );
}
