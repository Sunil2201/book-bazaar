import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [priceFilter, setPriceFilter] = useState(500);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [ratingFilter, setRatingFilter] = useState("");
  const [sortingOrder, setSortingOrder] = useState("");
  const [cart, setCart] = useState([])
  const [wishList, setWishList] = useState([])
  const encodedToken = localStorage.getItem("token");

  const navigate = useNavigate()
  const{token} = useContext(AuthContext)

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

  const addToCart = async(product) => {
    try {
      let response = await fetch("/api/user/cart", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          "authorization": encodedToken
        },
        body: JSON.stringify({product})
      })
      const {cart: cartItems} = await response.json()
      setCart(cartItems)
    } catch (error) {
      console.error(error);
    }
  }

  const addToWishlist = async(product) => {
    try {
      let response = await fetch("/api/user/wishlist", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          "authorization": encodedToken
        },
        body: JSON.stringify({product})
      })
      const {wishlist: wishlistItems} = await response.json()
      setWishList(wishlistItems)
    } catch (error) {
      console.error(error)
    }
  }

  const addToCartHandler = (product) => {
    token ? 
    (
      addToCart(product)
    ) : (
      navigate("/signin")
    );
  }

  const addToWishlistHandler = (product) => {
    token ? 
    (
      addToWishlist(product)
    ):(
      navigate("/signin")
    )
  }

  const viewParticularCategoryBooks = (idOfselectedCategory) => {
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

      navigate("/products")
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
        cart,
        wishList,
        handleSlider,
        handleCategory,
        handleRating,
        handleSortingOrder,
        addToCartHandler,
        addToWishlistHandler,
        viewParticularCategoryBooks
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
