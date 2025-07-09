// lib/data.ts
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
      author: "Dr. Evelyn Reed",
      price: 29.99,
      imageUrl: "https://placehold.co/300x450/2e3192/ffffff?text=Quantum+Physics",
      category: "Science",
      isFeatured: true,
      description: "An accessible introduction to the fascinating world of quantum mechanics."
    },
    {
      id: "2",
      title: "The Art of Python",
      author: "Leo Chen",
      price: 45.50,
      imageUrl: "https://placehold.co/300x450/3871c1/ffffff?text=The+Art+of+Python",
      category: "Technology",
      isFeatured: true,
      description: "Master the elegant and powerful Python programming language."
    },
    {
      id: "3",
      title: "History of Ancient Civilizations",
      author: "Prof. Alistair Finch",
      price: 35.00,
      imageUrl: "https://placehold.co/300x450/00aaeb/2b2b2b?text=Ancient+History",
      category: "History",
      isFeatured: true,
      description: "A comprehensive survey of the world's greatest ancient empires."
    },
    {
      id: "4",
      title: "Fundamentals of Economics",
      author: "Maria Garcia",
      price: 52.00,
      imageUrl: "https://placehold.co/300x450/2b2b2b/ffffff?text=Economics",
      category: "Business",
      isFeatured: true,
      description: "Explore the core principles that drive modern economies."
    },
      {
      id: "5",
      title: "Introduction to Calculus",
      author: "Johnathan Sterling",
      price: 65.00,
      imageUrl: "https://placehold.co/300x450/2e3192/ffffff?text=Calculus",
      category: "Mathematics",
      isFeatured: false,
      description: "A rigorous yet clear guide to the concepts of limits, derivatives, and integrals."
    },
    {
      id: "6",
      title: "Modernist Literature",
      author: "Eleanor Vance",
      price: 28.75,
      imageUrl: "https://placehold.co/300x450/3871c1/ffffff?text=Modernist+Lit",
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