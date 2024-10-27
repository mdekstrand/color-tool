import Color from "colorjs.io";

export function ColorSwatch({ color }: { color: Color }) {
  return (
    <div class="color-swatch" style={`--swatch-color: ${color.toString()}`} />
  );
}

export function ColorDisplay({ color }: { color: Color }) {
  return (
    <div class="color-display">
      <div class="color-string">
        {color.to("srgb").toString({ format: "hex" })}
      </div>
      <ColorSwatch color={color} />
    </div>
  );
}

export function SwatchRow({ colors }: { colors: Color[] }) {
  return (
    <div class="color-display">
      {colors.map((c) => <ColorSwatch color={c} />)}
    </div>
  );
}
