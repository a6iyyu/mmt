export type Course = {
  title: string;
  slug: string;
  category: string;
  level: string;
  image: string;
  mentor: { name: string; avatar: string };
  price: string;
  duration: string;
  rating: number;
}