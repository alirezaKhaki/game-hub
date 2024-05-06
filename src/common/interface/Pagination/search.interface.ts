export interface ISearchInput {
  keyword: { eq: string };
}

export interface ISearchWithLike {
  value: string;
  platform: number[];
  limit: number;
  page: number;
}
