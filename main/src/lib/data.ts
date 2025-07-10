// === lib/data.ts ===
export interface Book {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

export const dummyBooks: Book[] = [
  {
    id: "grade-1",
    title: "Champion Creative Activities - Grade 1",
    price: 850,
    imageUrl: "/image1.png",
    description: "Engaging creative activities for Grade 1 learners, fostering imagination and foundational skills. Approved by KICD."
  },
  {
    id: "grade-2",
    title: "Champion Creative Activities - Grade 2",
    price: 900,
    imageUrl: "/image2.png",
    description: "A fun and interactive book to build upon the creative skills of Grade 2 students. Approved by KICD."
  },
  {
    id: "grade-3",
    title: "Champion Creative Activities - Grade 3",
    price: 950,
    imageUrl: "/image3.png",
    description: "Encourages creativity and critical thinking with a variety of activities for Grade 3. Approved by KICD."
  },
  {
    id: "grade-4",
    title: "Champion Creative Arts - Grade 4",
    price: 1000,
    imageUrl: "/image4.png",
    description: "An introduction to the world of creative arts, covering various mediums and techniques for Grade 4. Approved by KICD."
  },
  {
    id: "grade-5",
    title: "Champion Creative Arts - Grade 5",
    price: 1100,
    imageUrl: "/image5.png",
    description: "Develops artistic talents and appreciation with advanced projects and lessons for Grade 5 learners. Approved by KICD."
  },
  {
    id: "grade-6",
    title: "Champion Creative Arts - Grade 6",
    price: 1250,
    imageUrl: "/image6.png",
    description: "A comprehensive guide to creative arts for Grade 6, preparing students for more complex artistic expression. Approved by KICD."
  },
  {
    id: "grade-7",
    title: "Champion Creative Arts and Sports - Grade 7",
    price: 1400,
    imageUrl: "/image7.png",
    description: "An integrated approach to both creative arts and sports, promoting well-rounded development for Grade 7 students. Approved by KICD."
  },
  {
    id: "grade-8",
    title: "Champion Creative Arts and Sports - Grade 8",
    price: 1500,
    imageUrl: "/image8.png",
    description: "Advanced concepts in creative arts and sports to challenge and inspire Grade 8 learners. Approved by KICD."
  }
];