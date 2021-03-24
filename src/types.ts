export interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  avaiable: boolean;
  image: string;
}

export interface FoodForm {
  food: Omit<Food, 'id' | 'avaiable'>
}