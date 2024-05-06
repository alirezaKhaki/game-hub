import { IFilter } from './filter.interface';
import { ISearchInput } from './search.interface';
import { IUnique } from './unique.interface';

export interface ISelect {
  select: string[];
  table: string;
  where?: IFilter;
  search?: ISearchInput;
  distinct?: IUnique;
  orderBy?: string;
  ascent?: number;
  limit?: number;
  offset?: number;
  relation?: string[];
  relationKeyword?: string;
  relationOn?: string;
  relationFilter?: IFilter;
}
