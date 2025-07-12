export interface Book {
  id: string;
  title: string;
  author: string;
  category: 'Lower Primary' | 'Upper Primary' | 'Junior Secondary';
  price: number;
  imageUrl: string;
  description: string;
  stock: number;
}

export interface Order {
  id: string;
  date: string;
  status: 'Placed' | 'Processing' | 'Shipped' | 'Delivered';
  total: number;
  items: (Book & { quantity: number })[];
}

export const dummyBooks: Book[] = [
  {
    id: "grade-1",
    title: "Champion Creative Activities - Grade 1",
    author: "Jane Doe",
    category: "Lower Primary",
    price: 850,
    imageUrl: "/image1.png",
    description: "Engaging creative activities for Grade 1 learners, fostering imagination and foundational skills. Approved by KICD.",
    stock: 25,
  },
  {
    id: "grade-2",
    title: "Champion Creative Activities - Grade 2",
    author: "Jane Doe",
    category: "Lower Primary",
    price: 900,
    imageUrl: "/image2.png",
    description: "A fun and interactive book to build upon the creative skills of Grade 2 students. Approved by KICD.",
    stock: 30,
  },
  {
    id: "grade-3",
    title: "Champion Creative Activities - Grade 3",
    author: "John Smith",
    category: "Lower Primary",
    price: 950,
    imageUrl: "/image3.png",
    description: "Encourages creativity and critical thinking with a variety of activities for Grade 3. Approved by KICD.",
    stock: 15,
  },
  {
    id: "grade-4",
    title: "Champion Creative Arts - Grade 4",
    author: "John Smith",
    category: "Upper Primary",
    price: 1000,
    imageUrl: "/image4.png",
    description: "An introduction to the world of creative arts, covering various mediums and techniques for Grade 4. Approved by KICD.",
    stock: 22,
  },
  {
    id: "grade-5",
    title: "Champion Creative Arts - Grade 5",
    author: "Emily White",
    category: "Upper Primary",
    price: 1100,
    imageUrl: "/image5.png",
    description: "Develops artistic talents and appreciation with advanced projects and lessons for Grade 5 learners. Approved by KICD.",
    stock: 18,
  },
  {
    id: "grade-6",
    title: "Champion Creative Arts - Grade 6",
    author: "Emily White",
    category: "Upper Primary",
    price: 1250,
    imageUrl: "/image6.png",
    description: "A comprehensive guide to creative arts for Grade 6, preparing students for more complex artistic expression. Approved by KICD.",
    stock: 12,
  },
  {
    id: "grade-7",
    title: "Champion Creative Arts and Sports - Grade 7",
    author: "Michael Green",
    category: "Junior Secondary",
    price: 1400,
    imageUrl: "/image7.png",
    description: "An integrated approach to both creative arts and sports, promoting well-rounded development for Grade 7 students. Approved by KICD.",
    stock: 20,
  },
  {
    id: "grade-8",
    title: "Champion Creative Arts and Sports - Grade 8",
    author: "Michael Green",
    category: "Junior Secondary",
    price: 1500,
    imageUrl: "/image8.png",
    description: "Advanced concepts in creative arts and sports to challenge and inspire Grade 8 learners. Approved by KICD.",
    stock: 17,
  }
];

export const dummyOrders: Order[] = [
    {
        id: 'ORD-12345',
        date: '2025-07-10',
        status: 'Delivered',
        total: 2600.00,
        items: [
            { ...dummyBooks[0], quantity: 1 },
            { ...dummyBooks[4], quantity: 1 },
        ]
    },
    {
        id: 'ORD-67890',
        date: '2025-07-11',
        status: 'Processing',
        total: 3400.00,
        items: [
            { ...dummyBooks[6], quantity: 1 },
            { ...dummyBooks[7], quantity: 1 },
        ]
    }
];

export interface MockUser {
  id: string;
  name: string;
  email: string;
  password: string; // NOTE: In a real application, NEVER store plain text passwords. This should be a hash.
  isAdmin: boolean;
}

export const mockUsers: MockUser[] = [
  {
    id: 'user-1',
    name: 'Valued Customer',
    email: 'user@example.com',
    password: 'pass123',
    isAdmin: false,
  },
  {
    id: 'admin-1',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'pass123',
    isAdmin: true,
  }
];
