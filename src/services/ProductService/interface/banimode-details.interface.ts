export interface IBanimodeDetails {
  // id_product_attribute: number;
  product_name: string;
  product_price: number;
  product_reference: string;
  product_description: string;
  product_description_short: string;
  product_meta_keywords: string;
  id_color: number;
  product_manufacturer_name: string;
  product_manufacturer_en_name: string;
  product_manufacturer_slug: string;
  product_manufacturer_id: number;
  color_name: string;
  color_slug: string;
  color_value: string;
  images: {
    cart_default: string[];
    small_default: string[];
    medium_default: string[];
    home_default: string[];
    large_default: string[];
    thickbox_default: string[];
    thickbox_default2x: string[];
    zoom: string[];
  };
  size: [
    {
      reference: string;
      quantity: number;
      active: number;
      name: string;
      id_size: number;
      slug: string;
      id_product_attribute?: string;
    },
  ];
  product_size_guide: string[][];
  product_features: [
    {
      title: string;
      value: string;
    },
  ];
  size_chart_support: boolean;
  tags?: string[];
}
