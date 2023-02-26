type Reviews = {
  rating: number;
  text: string;
};

export type Products = {
  id: string;
  productName: string;
  imgUrl: string;
  category: string;
  price: number;
  shortDesc: string;
  description: string;
  reviews: Reviews[];
  avgRating: number;
};
