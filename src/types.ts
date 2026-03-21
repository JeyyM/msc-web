export interface Person {
  id: string;
  fullName: string;
  role: string;
  committee: string;
  category: 'Executive Board' | 'Committee Head' | 'Member' | 'Alumni';
  imageUrl: string;
  bio: string;
  displayOrder: number;
  isActive: boolean;
  color?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  category: string;
  location: string;
  status: 'Upcoming' | 'Past' | 'Hidden';
  isFeatured: boolean;
  registrationLink: string;
  displayOrder: number;
  color?: string;
}
