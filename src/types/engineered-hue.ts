import type { ColorValue, HuePresentation, PantoneReference } from "./color.js";
import type { HueScale } from "./hue-scale.js";

export type EngineeredHue = {
  id: string;
  type: "engineered";
  name: string;
  slug: string;
  description?: string;
  tags?: string[];
  color: ColorValue;
  /** Optional link to a related scale in the catalogue. */
  relatedScaleId?: HueScale["id"];
  pantoneReference?: PantoneReference;
} & HuePresentation;
