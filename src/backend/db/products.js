import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Lock Every Door",
    author: "Riley Sager",
    price: 500,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1540938359i/41837243.jpg",
    categoryName: "thriller",
    rating: 3.9,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "The Perks of being a wallflower",
    author: "Stephen Chbosky",
    price: 300,
    img: "https://m.media-amazon.com/images/I/41CiEb1Qx2L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    categoryName: "young-adult",
    rating: 4,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "Harry Potter and the Philosopher's Stone",
    author: "JK Rowling",
    price: 280,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1170803558l/72193.jpg",
    categoryName: "fantasy",
    rating: 5,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "A Man called Ove",
    author: "Fredrick Backman",
    price: 300,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405259930i/18774964.jpg",
    categoryName: "contemporary",
    rating: 4.3,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "The Kite Runner",
    author: "Khaled Hossaini",
    price: 290,
    img: "https://m.media-amazon.com/images/I/51bt7LtryoL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    categoryName: "bildungsroman",
    rating: 5,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "The Nightingale",
    author: "Kristin Hannah",
    price: 300,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681839850i/21853621.jpg",
    categoryName: "historical-fiction",
    rating: 4.5,
    isWishlisted: false
  },

  {
    _id: uuid(),
    title: "The Hunger Games",
    author: "Suzanne Collins",
    price: 300,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg",
    categoryName: "dystopian",
    rating: 4.5,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "Educated",
    author: "Tara Westover",
    price: 1000,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg",
    categoryName: "memoir",
    rating: 1.5,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "The Whisper Man",
    author: "Alex North",
    price: 500,
    img:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579073397l/51540935.jpg",
    categoryName: "thriller",
    rating: 4.5,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "Heartstopper",
    author: "Alice Oseman",
    price: 500,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1541887843i/40495957.jpg",
    categoryName: "young-adult",
    rating: 5,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "The Night Circus",
    author: "Erin Morgenstern",
    price: 300,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387124618i/9361589.jpg",
    categoryName: "fantasy",
    rating: 4.5,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "The Secret History",
    author: "Donna Tartt",
    price: 700,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1451554846i/29044.jpg",
    categoryName: "contemporary",
    rating: 3.8,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "Little Women",
    author: "Louisa May Alcott",
    price: 150,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562690475i/1934.jpg",
    categoryName: "bildungsroman",
    rating: 3.9,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "The Boy in Striped Pajamas",
    author: "John Boyne",
    price: 280,
    img: "https://m.media-amazon.com/images/I/51VCWuza-EL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    categoryName: "historical-fiction",
    rating: 4.5,
    isWishlisted: false
  },

  {
    _id: uuid(),
    title: "Station Eleven",
    author: "Emily St. John Mandel",
    price: 500,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680459872i/20170404.jpg",
    categoryName: "dystopian",
    rating: 4.4,
    isWishlisted: false
  },

  {
    _id: uuid(),
    title: "Persepolis",
    author: "Marjane Satrapi",
    price: 850,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327876995i/991197.jpg",
    categoryName: "memoir",
    rating: 5,
    isWishlisted: false
  },

  {
    _id: uuid(),
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 300,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg",
    categoryName: "thriller",
    rating: 2.5,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "Truly Devious",
    author: "Maureen Johnson",
    price: 500,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1498501619i/29589074.jpg",
    categoryName: "young-adult",
    rating: 3,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "Game of Thrones",
    author: "George R.R. Martin",
    price: 800,
    img: "https://m.media-amazon.com/images/I/51uSCR1ur+L._SY344_BO1,204,203,200_.jpg",
    categoryName: "fantasy",
    rating: 1.5,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "Normal People",
    author: "Sally Rooney",
    price: 600,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1571423190i/41057294.jpg",
    categoryName: "contemporary",
    rating: 3.8,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "To Kill A Mockingbird",
    author: "Harper Lee",
    price: 250,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg",
    categoryName: "bildungsroman",
    rating: 4.1,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "All the light we cannot see",
    author: "Anthony Doerr",
    price: 480,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1451445646i/18143977.jpg",
    categoryName: "historical-fiction",
    rating: 3.5,
    isWishlisted: false
  },

  {
    _id: uuid(),
    title: "Thunderhead",
    author: "Neal Shusterman",
    price: 500,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1505658534i/33555224.jpg",
    categoryName: "dystopian",
    rating: 4.8,
    isWishlisted: false
  },

  {
    _id: uuid(),
    title: "Crying in H mart",
    author: "Michelle Zauner",
    price: 450,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1601937850i/54814676.jpg",
    categoryName: "memoir",
    rating: 3.7,
    isWishlisted: false
  },

  {
    _id: uuid(),
    title: "Gone Girl",
    author: "Gillian Flynn",
    price: 200,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554086139i/19288043.jpg",
    categoryName: "thriller",
    rating: 3.8,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "The Inheritance Games",
    author: "Jenniffer Lynn ",
    price: 400,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1587396413i/52439531.jpg",
    categoryName: "young-adult",
    rating: 4.1,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "Chronicles of Narnia",
    author: "C.S. Lewis",
    price: 900,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661032875i/11127.jpg",
    categoryName: "fantasy",
    rating: 3.5,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "A Little Life",
    author: "Hanya Yanagihara",
    price: 650,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1446469353i/22822858.jpg",
    categoryName: "contemporary",
    rating: 3.1,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    price: 350,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1557343311i/10210.jpg",
    categoryName: "bildungsroman",
    rating: 4.6,
    isWishlisted: false
  },
  {
    _id: uuid(),
    title: "The Paris Library",
    author: "Mark Pryor",
    price: 520,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1583066862i/52761909.jpg",
    categoryName: "historical-fiction",
    rating: 4.5,
    isWishlisted: false
  },

  {
    _id: uuid(),
    title: "Maze Runner",
    author: "James Dashner",
    price: 600,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1375596592i/6186357.jpg",
    categoryName: "dystopian",
    rating: 5,
    isWishlisted: false
  },

  {
    _id: uuid(),
    title: "Becoming",
    author: "Michelle Obama",
    price: 450,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg",
    categoryName: "memoir",
    rating: 3.9,
    isWishlisted: false
  },
];
