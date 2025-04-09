export interface Promoproduct {
  id: number;
  title: string;
  size: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  imageUrl: string;
  badge?: string;
}
