export interface Cloth {
  id: number; 
  imageUrl: string;
  name: string;
  price: string;
  discountPrice?: string;
  subText?: string;
}

export interface ClothsData {
  data: Cloth[];
  totalItems: number;
}
