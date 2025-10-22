import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "The page you are looking for does not exist.",
  openGraph: {
    title: "404 Not Found",
    description: "The page you are looking for does not exist.",
  },
  twitter: {
    title: "404 Not Found",
    description: "The page you are looking for does not exist.",
  },
};

export default function NotFound() {
  return <h1>404 - Not Found</h1>;
}