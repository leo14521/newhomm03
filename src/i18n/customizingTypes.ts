export type CustomizingTreatment = { name: string; description: string };
export type CustomizingCategory = {
  id: string;
  title: string;
  description: { dt: string; dd: string };
  treatments?: CustomizingTreatment[];
};
