import { IPagination } from "../../interface/Pagination/pagination.interface";

export const DefaultProductFilter: IPagination = {
  unique: {
    sku: {
      eq: 1,
    },
  },
  option: {
    page: {
      eq: 1,
    },
    sort: {
      eq: "banimodeCode",
    },
    limit: {
      eq: 10,
    },
  },
};
