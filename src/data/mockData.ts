import { Person, Event } from '../types';

export const mockMembers: Person[] = [
  {
    id: '1',
    fullName: 'Maria Santos',
    role: 'President',
    committee: 'Executive Board',
    category: 'Executive Board',
    imageUrl: 'https://picsum.photos/seed/maria/600/800',
    bio: 'Computer Science major passionate about AI and community building.',
    displayOrder: 1,
    isActive: true,
    color: '#00A4EF'
  },
  {
    id: '2',
    fullName: 'Juan Dela Cruz',
    role: 'VP for Internal Affairs',
    committee: 'Executive Board',
    category: 'Executive Board',
    imageUrl: 'https://picsum.photos/seed/juan/600/800',
    bio: 'Information Systems student focusing on enterprise architecture.',
    displayOrder: 2,
    isActive: true,
    color: '#7FBA00'
  },
  {
    id: '3',
    fullName: 'Ana Reyes',
    role: 'VP for External Affairs',
    committee: 'Executive Board',
    category: 'Executive Board',
    imageUrl: 'https://picsum.photos/seed/ana/600/800',
    bio: 'Marketing major bridging the gap between tech and business.',
    displayOrder: 3,
    isActive: true,
    color: '#FFB900'
  },
  {
    id: '4',
    fullName: 'Carlos Mendoza',
    role: 'Secretary General',
    committee: 'Executive Board',
    category: 'Executive Board',
    imageUrl: 'https://picsum.photos/seed/carlos/600/800',
    bio: 'Software Engineering student with a love for clean code and documentation.',
    displayOrder: 4,
    isActive: true,
    color: '#F25022'
  },
  {
    id: '5',
    fullName: 'Elena Garcia',
    role: 'Director of Technology',
    committee: 'Technology',
    category: 'Committee Head',
    imageUrl: 'https://picsum.photos/seed/elena/600/800',
    bio: 'Full-stack developer specializing in .NET and Azure cloud services.',
    displayOrder: 5,
    isActive: true,
    color: '#00A4EF'
  },
  {
    id: '6',
    fullName: 'Miguel Torres',
    role: 'Director of Creatives',
    committee: 'Creatives',
    category: 'Committee Head',
    imageUrl: 'https://picsum.photos/seed/miguel/600/800',
    bio: 'UI/UX designer creating intuitive experiences for student applications.',
    displayOrder: 6,
    isActive: true,
    color: '#7FBA00'
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Azure AI Hackathon 2026',
    date: 'Nov 12-14, 2026',
    time: '9:00 AM - 5:00 PM',
    shortDescription: 'Join us for a 48-hour hackathon focused on building intelligent applications using Microsoft Azure AI services.',
    fullDescription: 'Join us for a 48-hour hackathon focused on building intelligent applications using Microsoft Azure AI services. Compete for prizes and learn from mentors.',
    imageUrl: 'https://picsum.photos/seed/hackathon/800/400',
    category: 'Hackathon',
    location: 'DLSU Henry Sy Sr. Hall',
    status: 'Upcoming',
    isFeatured: true,
    registrationLink: '#',
    displayOrder: 1,
    color: '#00A4EF'
  },
  {
    id: '2',
    title: 'Power Platform Workshop',
    date: 'Oct 25, 2026',
    time: '1:00 PM - 4:00 PM',
    shortDescription: 'Learn how to build low-code applications and automate workflows with Microsoft Power Platform.',
    fullDescription: 'Learn how to build low-code applications and automate workflows with Microsoft Power Platform. Perfect for beginners and non-CS majors.',
    imageUrl: 'https://picsum.photos/seed/workshop/800/400',
    category: 'Workshop',
    location: 'Online via Microsoft Teams',
    status: 'Upcoming',
    isFeatured: false,
    registrationLink: '#',
    displayOrder: 2,
    color: '#FFB900'
  },
  {
    id: '3',
    title: 'GitHub Copilot Masterclass',
    date: 'Oct 15, 2026',
    time: '2:00 PM - 5:00 PM',
    shortDescription: 'Discover how AI can accelerate your coding workflow with GitHub Copilot in Visual Studio Code.',
    fullDescription: 'Discover how AI can accelerate your coding workflow with GitHub Copilot in Visual Studio Code. Live demonstrations and hands-on practice.',
    imageUrl: 'https://picsum.photos/seed/code/800/400',
    category: 'Masterclass',
    location: 'Gokongwei Building, DLSU',
    status: 'Upcoming',
    isFeatured: false,
    registrationLink: '#',
    displayOrder: 3,
    color: '#7FBA00'
  },
  {
    id: '4',
    title: 'MSC General Assembly',
    date: 'Sep 30, 2026',
    time: '5:00 PM - 7:00 PM',
    shortDescription: 'Kick off the new academic year with the DLSU Microsoft Student Clubs.',
    fullDescription: 'Kick off the new academic year with the DLSU Microsoft Student Clubs. Meet the officers, learn about our upcoming initiatives, and grab some swag!',
    imageUrl: 'https://picsum.photos/seed/assembly/800/400',
    category: 'Community',
    location: 'Yuchengco Hall, DLSU',
    status: 'Past',
    isFeatured: false,
    registrationLink: '#',
    displayOrder: 4,
    color: '#F25022'
  }
];
