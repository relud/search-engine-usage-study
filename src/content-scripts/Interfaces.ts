/* eslint-disable @typescript-eslint/no-unused-vars */

interface OrganicDetail {
  // Number of pixels between the top of the page and the top of the organic result.
  TopHeight: number,
  // Number of pixels between the top of the page and the bottom of the organic result.
  BottomHeight: number,
  // The page number that the organic result was on
  // (only relevant for DuckDuckGo because of the infinite scroll on its SERP pages).
  PageNum: number,
}

interface OrganicClick {
  // The ranking of the selected organic result.
  Ranking: number,
  // The attention duration when the click occurred.
  AttentionDuration: number,
  // If the whole page had loaded, including all dependent resources such as stylesheets and images when the selection occurred.
  PageLoaded: boolean,
}

interface ElementListeners {
  element: Element,
  clickListener: (event: MouseEvent) => void,
  mousedownListener: (event: MouseEvent) => void
}

interface ReplacementData {
  header: string,
  link: string,
  description: string,
  cite: string,
  citeSpan: string,
}
