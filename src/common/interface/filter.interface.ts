enum operators {
  equal = 'eq',
  greaterThan = 'gt',
  lessThan = 'lt',
  greaterThanEqual = 'gte',
  lessThanEqual = 'lte',
  contain = 'ct',
  notEqual = 'neq',
  in = 'in',
  isNot = 'isnt',
  exist = 'ex',
}

export interface IFilter {
  [key: string]: TFilterValue;
}

export type TFilterValue = {
  [key in operators]?:
    | string
    | number
    | string[]
    | number[]
    | boolean
    | boolean[]
    | Record<string, unknown>;
};
