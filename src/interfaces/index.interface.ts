export interface card {
  image?: string;
  title?: string;
  content?: string;
  icon?: { spicy?: boolean; vegan?: boolean; vegetarian?: boolean };
  price?: number;
  link?: string;
  aboveTitle?: string;
}

export interface gallery {
  size?: string;
  seeMoreLink?: string;
  seeMoreText?: string;
  cards: card[];
}

export interface chef {
  _id: string;
  name: { fName: string; lName: string };
  image: string;
  description: string;
  ofTheWeek: Boolean;
}

export interface restaurant {
  _id: string;
  name: string;
  image: string;
  chef: chef;
  isPopular: Boolean;
}

export interface dish {
  _id: string;
  name: string;
  image: string;
  price: number;
  ingredients: string[];
  tags: { vegan: boolean; vegetarian: boolean; spicy: boolean };
  restaurant: restaurant;
  isSignature: Boolean;
}
