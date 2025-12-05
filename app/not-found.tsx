import type { Metadata } from "next";
import NotFoundClient from "@/app/client/not-found";

export const metadata: Metadata = {
  title: "404 | Lab MMT",
  description: "The page you are looking for does not exist.",
  openGraph: {
    title: "404 | Lab MMT",
    description: "The page you are looking for does not exist.",
  },
  twitter: {
    title: "404 | Lab MMT",
    description: "The page you are looking for does not exist.",
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}