// shared/model/city.ts
export interface City {
  id?: string;
  name: string;
  province: string;
  population?: number;
  highlights?: string[];
  rating?: number;
}
