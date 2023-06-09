import React, { useContext, useEffect, useState } from "react";
import "./Categories.css";
import { ProductsContext } from "../../contexts/ProductsContext";
import Spinner from "../Spinner";

function Categories() {
  const [categories, setCategories] = useState([]);
  const {loading, viewParticularCategoryBooks} = useContext(ProductsContext)

  const categoryImages = [
    `${process.env.PUBLIC_URL}/fantasy.jpg`,
    `${process.env.PUBLIC_URL}/bildungsroman.jpg`,
    `${process.env.PUBLIC_URL}/contemporary.jpg`,
    `${process.env.PUBLIC_URL}/historical-fiction.jpeg`,
    `${process.env.PUBLIC_URL}/non-fiction.jpg`,
    `${process.env.PUBLIC_URL}/thriller-genre.png`,
    `${process.env.PUBLIC_URL}/dystopian.png`,
    `${process.env.PUBLIC_URL}/young-adult.jpg`,
  ];

  const mergeCategoryImagesAndCategories = () => {
    const mergedCategories = categories.map((category) => {
      const categoryImage = categoryImages.find((image) =>
        image.includes(
          categories.length > 0 &&
            category.categoryName.toLowerCase().replace(" ", "-")
        )
      );
      return {
        ...category,
        image: categoryImage || null,
      };
    });

    return mergedCategories;
  };

  const mergedCategories = mergeCategoryImagesAndCategories();

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const normalRes = await response.json();
      setCategories(normalRes.categories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if(loading){
    return <Spinner />
  }

  return (
    <div className="bookCategoriesContainer">
      <h2>Featured Book Categories</h2>
      <div className="image-container">
        {mergedCategories.map(({ image, categoryName, _id }, index) => (
          <div key={index} className="singleCategory" onClick={() => viewParticularCategoryBooks(_id)}>
            <img
              key={index}
              src={image}
              alt={`${index}`}
              className="rounded-image"
            />
            <p>{categoryName}</p>
          </div>
        ))}
      </div>
      {/* <NavLink to="/products">Go to products</NavLink> */}
    </div>
  );
}

export default Categories;
