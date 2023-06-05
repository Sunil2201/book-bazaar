import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "thriller",
    description:
      "Books that involve suspense, crime, or mystery, keeping readers engaged with unexpected twists and turns.",
    isSelected: false
  },
  {
    _id: uuid(),
    categoryName: "young-adult",
    description:
      "Books specifically targeted towards teenagers and young adults, covering a wide range of genres but with protagonists in that age group.",
    isSelected: false
  },
  {
    _id: uuid(),
    categoryName: "fantasy",
    description:
      "Books featuring magic, mythical creatures, and fantastical elements, often set in entirely fictional realms.",
    isSelected: false
  },
  {
    _id: uuid(),
    categoryName: "contemporary",
    description:
      "Engaging narratives that delve into the complexities of modern life, addressing current social, cultural, and personal themes with a relatable and realistic approach.",
    isSelected: false
  },
  {
    _id: uuid(),
    categoryName: "bildungsroman",
    description:
      "Captivating tales of personal growth and self-discovery as protagonists navigate the challenges of adolescence and come of age, gaining wisdom and insight along the way.",
    isSelected: false
  },
  {
    _id: uuid(),
    categoryName: "historical-fiction",
    description:
      "Books set in a specific historical period, incorporating fictional characters and events within a historical context.",
    isSelected: false
  },
  {
    _id: uuid(),
    categoryName: "dystopian",
    description:
      "The dystopian genre explores dark and oppressive future societies, highlighting the consequences of societal flaws and challenging the status quo.",
    isSelected: false
  },
  {
    _id: uuid(),
    categoryName: "non-fiction",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    isSelected: false
  },
];
