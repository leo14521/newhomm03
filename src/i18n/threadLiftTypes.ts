export type ThreadLiftFeature = { title: string; sub: string; description: string; anchorId?: string };

export type ThreadLiftPageContent = {
  /** Tailwind grid cols at lg, e.g. "lg:grid-cols-3" for five cards */
  featureGridClass?: string;
  /** Optional id on the solution feature grid (e.g. deep link) */
  solutionUlId?: string;
  heroTitleKr: string;
  heroDesc: string;
  aboutKicker: string;
  aboutH2: string;
  aboutParas: string[];
  solutionKicker: string;
  solutionBefore: string;
  solutionAccent: string;
  solutionAfter: string;
  features: ThreadLiftFeature[];
  recommend: string[];
  flow: string[];
  forYouKicker: string;
  forYouH2: string;
  flowKicker: string;
  flowH2: string;
  footnote: string;
};
