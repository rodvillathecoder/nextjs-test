import { useState, useEffect } from 'react';
import APIClient from '../services/API/APIClient'
import { ClothsData } from 'constants/types/cloths'; 

export const useCloths = () => {
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [clothsData, setClothsData] = useState<ClothsData | null>(null); 

  useEffect(() => {
    const execute = async () => {
      setLoading(true);
      try {
        const data = await APIClient.getClothsInfo();
        setClothsData(data);
      } catch (err) {
        setError(err as string);
      } finally {
        setLoading(false);
      }
    };

    execute();
  }, []);

  return { clothsData, error, loading };
};
