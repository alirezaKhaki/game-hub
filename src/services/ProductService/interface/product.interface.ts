import { IBanimodeDetails } from './banimode-details.interface';
import { IErpDetails } from './erp-details.interface';


export interface IProduct {
  id?: string;
  active: boolean;
  quantity: number;
  barcode: string;
  mainCode: number;
  sku: string;
  styleCode: string;
  platforms: string[];
  tsCode: number;
  priceTsCode: number;
  basePrice: number;
  salePrice: number;
  actualPrice?: number;
  searchList: string[];
  banimodeCode: number;
  size: string;
  code: string;
  banimodeAttributeId: number;
  orderCount: number;
  returnable: boolean;
  erpDetails: IErpDetails;
  banimodeDetails: IBanimodeDetails;
  title?: string;
  label?: string;
  labelDetail?: ILabelDetail;
}

export interface ILabelDetail {
  color?: string;
  expirationDate?: string;
}

export interface ISuggestion {
  id: string;
  title: string;
  styleCode: string;
  barcode: string;
  images: string[];
  sort: number;
  subGroup: string;
}
