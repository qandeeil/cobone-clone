export interface IInitialState {
  isLoading: Boolean;
  isError: string | undefined;
  products: IProduct[];
}

export interface IProduct {
  _id: string;
  image: string;
  name: string;
  price: number;
  discount: number;
  reviews: IReviews[];
  forLimited: boolean;
  bought: number;
  quantity: number;
  background?: string;
}

interface IReviews {
  _id: string;
  rate: number;
}
