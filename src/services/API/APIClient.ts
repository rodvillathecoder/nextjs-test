import { ClothsData } from '../../constants/types/cloths';
import APIdata from './API-data';

class APIClient {
  async getClothsInfo(): Promise<ClothsData> {
    const { data } = await APIdata.get();

    const transformedData = data.map((item: any) => ({
      id: parseInt(item.id),
      imageUrl: item.imageUrl, 
      name: item.name,
      price: item.price, 
      discountPrice: item.discountPrice ? item.discountPrice : undefined, 
      subText: item.subText ? item.subText : undefined,
    }));

    return { data: transformedData, totalItems: transformedData.length };
  }
}

export default new APIClient();
