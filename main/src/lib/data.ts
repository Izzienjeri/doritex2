export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  category: string;
  isFeatured: boolean;
  description: string;
}

export const dummyBooks: Book[] = [
  {
    id: "1",
    title: "Quantum Physics for Beginners",
    author: "Dr. Wanjiku Mwangi",
    price: 3200,
    imageUrl: "https://images.unsplash.com/photo-1667312939934-60fc3bfa4ec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    category: "Science",
    isFeatured: true,
    description: "An accessible introduction to the fascinating world of quantum mechanics."
  },
  {
    id: "2",
    title: "The Art of Python",
    author: "Brian Otieno",
    price: 4800,
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    category: "Technology",
    isFeatured: true,
    description: "Master the elegant and powerful Python programming language."
  },
  {
    id: "3",
    title: "History of Ancient Civilizations",
    author: "Prof. Achieng' Omondi",
    price: 3700,
    imageUrl: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2tzfGVufDB8fDB8fHww",
    category: "History",
    isFeatured: true,
    description: "A comprehensive survey of the world's greatest ancient empires."
  },
  {
    id: "4",
    title: "Fundamentals of Economics",
    author: "Grace Wairimu",
    price: 5500,
    imageUrl: "https://images.unsplash.com/photo-1732304720653-86e4fa903345?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWNvbm9taWNzJTIwYm9va3N8ZW58MHx8MHx8fDA%3D",
    category: "Business",
    isFeatured: true,
    description: "Explore the core principles that drive modern economies."
  },
  {
    id: "5",
    title: "Introduction to Calculus",
    author: "Samuel Kiprotich",
    price: 6800,
    imageUrl: "https://images.unsplash.com/photo-1731983568664-9c1d8a87e7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbGN1bHVzJTVDJTIwYm9va3N8ZW58MHx8MHx8fDA%3D",
    category: "Mathematics",
    isFeatured: false,
    description: "A rigorous yet clear guide to the concepts of limits, derivatives, and integrals."
  },
  {
    id: "6",
    title: "Modernist Literature",
    author: "Linda Naliaka",
    price: 3000,
    imageUrl: "https://images.unsplash.com/photo-1630852722952-5a87d3ca2d95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpdGVyYXR1cmUlMjBib29rc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Literature",
    isFeatured: false,
    description: "An analysis of the groundbreaking works of the early 20th century."
  },
];

export const dummyCategories = [
  { name: "Science", imageUrl: "https://placehold.co/600x400/00aaeb/ffffff?text=Science" },
  { name: "Technology", imageUrl: "https://placehold.co/600x400/3871c1/ffffff?text=Technology" },
  { name: "History", imageUrl: "https://placehold.co/600x400/2e3192/ffffff?text=History" },
  { name: "Business", imageUrl: "https://placehold.co/600x400/2b2b2b/ffffff?text=Business" },
  { name: "Mathematics", imageUrl: "https://placehold.co/600x400/00aaeb/ffffff?text=Mathematics" },
  { name: "Literature", imageUrl: "https://placehold.co/600x400/3871c1/ffffff?text=Literature" },
];
