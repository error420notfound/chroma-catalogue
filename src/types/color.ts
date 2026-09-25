export type ColorValue = {
  /** 6-digit sRGB hex, such as "#FF4F00". */
  hex: `#${string}`;
  /** OKLCH coordinates. L is 0–1, C is 0–0.5, H is 0–360. */
  oklch: { l: number; c: number; h: number; alpha?: number };
  /** Optional Display-P3 RGB values, each 0–1. */
  displayP3?: { r: number; g: number; b: number; alpha?: number };
};

export type ReferenceColor = {
  id: string;
  label: string;
  color: ColorValue;
};

export type ContrastExample = {
  id: string;
  label: string;
  /** Color used for the text or foreground in the sample. */
  foreground: ColorValue;
  /** Color behind the text or foreground. */
  background: ColorValue;
  /** Optional rendered sample text, e.g. "Aa". */
  sampleText?: string;
};

export type HuePresentation = {
  /** Preview treatment only; does not alter the stored base color. */
  displayOpacity?: number;
  /** Use automatic contrast-based foreground by default. */
  textColor?: "auto" | ColorValue;
  /** Examples are color pairs. The app calculates contrast results. */
  contrastExamples?: ContrastExample[];
};

export type PantoneReference = {
  code: string;
  system?: string;
  verified?: boolean;
};
