import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [priceFilter, setPriceFilter] = useState(500);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [ratingFilter, setRatingFilter] = useState("");
  const [sortingOrder, setSortingOrder] = useState("");

  const getProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const modifiedResponse = await response.json();
      setProducts(modifiedResponse.products);
    } catch (error) {
      console.error(error);
    }
  };

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
    getProducts();
    fetchCategories();
  }, []);

  const handleSlider = (amountToFilter) => {
    setPriceFilter(amountToFilter);
  };

  const handleCategory = (idOfselectedCategory) => {
    setCategories(
      [...categories].map((category) =>
        category._id === idOfselectedCategory
          ? { ...category, isSelected: !category.isSelected }
          : { ...category }
      )
    );

    const selectedCategory = [...categories].find(
      ({ _id }) => _id === idOfselectedCategory
    );

    selectedCategory.isSelected
      ? setSelectedCategories([...selectedCategories].filter(category => category !== selectedCategory.categoryName))
      : setSelectedCategories([...selectedCategories, selectedCategory.categoryName]);
  };

  const handleRating = (selectedRating) => {
    setRatingFilter(selectedRating)
  }

  const handleSortingOrder = (orderSelected) => {
    setSortingOrder(orderSelected)
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        categories,
        priceFilter,
        selectedCategories,
        ratingFilter,
        sortingOrder,
        handleSlider,
        handleCategory,
        handleRating,
        handleSortingOrder
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
