export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalDocument = {
  title: string;
  updatedLine: string;
  sections: LegalSection[];
};
