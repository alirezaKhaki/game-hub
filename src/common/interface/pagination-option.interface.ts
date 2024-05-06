export interface IPaginationOption {
  sort?: { eq: string };
  ascent?: { eq: number };
  limit?: { eq: number };
  page?: { eq: number };
}

export interface IPaginationSimpleOption {
  sort?: string;
  ascent?: number;
  limit?: number;
  page?: number;
  take?: number;
  skip?: number;
}
