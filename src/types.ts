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

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  tags: string[];          // stored as text[] in Postgres
  link: string;
  github: string;
  isFeatured: boolean;     // true → sticky showcase card; false → bottom grid
  displayOrder: number;
  color?: string;
}
