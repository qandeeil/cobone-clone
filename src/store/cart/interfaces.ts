export interface IInitialState {
  isLoading: Boolean;
  isError: string | undefined;
  products: IProduct[];
}

export interface IProduct {
  _id: string;
  image: string;
  name: string;
  reviews: IReviews[];
  forLimited: boolean;
  bought: number;
  background?: string;
  options: IOptions[];
  selectedOption?: ISelectedOption;
}

export interface ISelectedOption {
  _id: string;
  price: number;
  discount: number;
  description: string;
  quantity: number;
}

export interface IOptions {
  selectedOption: any;
  _id: string;
  price: number;
  discount: number;
  description: string;
}

interface IReviews {
  _id: string;
  rate: number;
}
