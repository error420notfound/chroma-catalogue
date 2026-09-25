import type { ColorValue, ContrastExample, HuePresentation, ReferenceColor } from "./color.js";

export const HUE_SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
export type HueScaleStepNumber = (typeof HUE_SCALE_STEPS)[number];

export type HueScaleStep = {
  step: HueScaleStepNumber;
  color: ColorValue;
  label?: string;
} & HuePresentation;

export type HueScale = {
  id: string;
  type: "scale";
  name: string;
  slug: string;
  description?: string;
  tags?: string[];
  steps: HueScaleStep[];
  referenceColors?: ReferenceColor[];
  contrastExamples?: ContrastExample[];
};

export type CatalogueSectionIndexItem = {
  id: string;
  name: string;
  slug: string;
  file: string;
};

export type CatalogueSectionIndex = {
  catalogue: string;
  version: number;
  generatedFrom?: string[];
  note?: string;
  scales?: CatalogueSectionIndexItem[];
  hues?: CatalogueSectionIndexItem[];
};

export type CatalogueIndex = {
  schemaVersion: number;
  catalogue: string;
  scales: { index: string; count: number };
  engineered: { index: string; count: number };
};
