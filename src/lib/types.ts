
export interface Chip {
  id: string;
  name: string;
  brand: string;
  imageUrl: string;
  description: string;
  flavor: string;
  region: string;
  country: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  createdAt: string;
}

export interface ChipReview {
  id: string;
  chipId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Region {
  id: string;
  name: string;
  countries: string[];
  popularChips: Chip[];
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  region: string;
  favoriteFlavors: string[];
  reviewCount: number;
}

export type ChipSubmission = Omit<Chip, 'id' | 'rating' | 'reviewCount' | 'createdAt'>;
