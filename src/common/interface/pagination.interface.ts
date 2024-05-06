import { IFilter } from './filter.interface';
import {
  IPaginationOption,
  IPaginationSimpleOption,
} from './pagination-option.interface';
import { ISearchInput } from './search.interface';
import { IUnique } from './unique.interface';

export interface IPagination {
  filter?: IFilter;
  search?: ISearchInput;
  unique?: IUnique;
  option: IPaginationOption | IPaginationSimpleOption;
  relation?: string[];
  platform?: string;
  offers?: string[];
  select?: string[];
  relationOn?: string;
  relationKeyword?: string;
  relationFilter?: IFilter;
}
export interface IPaginationWithFilters {
  filter?: IFilter[];
  search?: ISearchInput;
  unique?: IUnique;
  option: IPaginationOption | IPaginationSimpleOption;
  relation?: string[];
  platform?: string;
}

// export interface IPaginationTypeOrm {

// }

export interface IPaginated<T> {
  result: T[];
  page: number;
  perPage: number;
  total: number;
}
