import Color from "colorjs.io";

export function hueSequence(base: Color, count: number): Color[] {
  let colors = [base];
  let deltaH = 360 / count;

  let color = base.clone();
  for (let i = 1; i < count; i++) {
    color.lch.h += deltaH;
    colors.push(color.clone());
  }

  return colors;
}
