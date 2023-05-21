import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "500",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347228056i/714711.jpg",
    categoryName: "thriller",
    rating: 3.5
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "300",
    categoryName: "young-adult",
    rating: 4
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "100",
    categoryName: "fantasy",
    rating: 2,
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "700",
    categoryName: "contemporary",
    rating: 1
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "600",
    categoryName: "bildungsroman",
    rating: 5
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "historical-fiction",
    rating: 1.5
  },
];
