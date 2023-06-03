import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [priceFilter, setPriceFilter] = useState(500);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [ratingFilter, setRatingFilter] = useState("");
  const [sortingOrder, setSortingOrder] = useState("");
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [isHovered, setIsHovered] = useState(new Array(32).fill(true));
  const [pageUrl, setPageUrl] = useState("");
  const [showFiltersForSmallerDevices, setShowFiltersForSmallerDevices] =
    useState(false);
  const [productDetails, setProductDetails] = useState({
    _id: "",
    title: "",
    author: "",
    price: 0,
    description: {},
    genres: [],
    noOfPages: 0,
    img: "",
    categoryName: "",
    rating: 0,
  })
  

  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  const getProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const modifiedResponse = await response.json();
      setProducts(
        modifiedResponse.products.map((product) => ({
          ...product,
          isPresentInCart: false,
        }))
      );
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
      ? setSelectedCategories(
          [...selectedCategories].filter(
            (category) => category !== selectedCategory.categoryName
          )
        )
      : setSelectedCategories([
          ...selectedCategories,
          selectedCategory.categoryName,
        ]);
  };

  const handleRating = (selectedRating) => {
    setRatingFilter(selectedRating);
  };

  const handleSortingOrder = (orderSelected) => {
    setSortingOrder(orderSelected);
  };

  const addToCart = async (product) => {
    try {
      let response = await fetch("/api/user/cart", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify({ product }),
      });
      let { cart: cartItems } = await response.json();
      cartItems = cartItems.map((item) => ({ ...item, isPresentInCart: true }));
      setCart(cartItems);
    } catch (error) {
      console.error(error.message);
    }
  };

  const removeProductFromCart = async (productId) => {
    try {
      let response = await fetch(`/api/user/cart/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      });
      const { cart: cartItems } = await response.json();
      setCart(cartItems);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateProductQuantityInCart = async (productId, actionType) => {
    try {
      let response = await fetch(`/api/user/cart/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify({
          action: {
            type: actionType === "increment" ? "increment" : "decrement",
          },
        }),
      });
      let { cart: cartItems } = await response.json();
      setCart(cartItems);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addToWishlist = async (product) => {
    try {
      let response = await fetch("/api/user/wishlist", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify({ product }),
      });
      let { wishlist: wishlistItems } = await response.json();
      wishlistItems = wishlistItems.map((item) => ({
        ...item,
        isWishlisted: true,
      }));
      setWishList(wishlistItems);
    } catch (error) {
      console.error(error);
    }
  };

  const removeProductFromWishlist = async (productId) => {
    try {
      let response = await fetch(`/api/user/wishlist/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      });
      let { wishlist } = await response.json();
      wishlist = wishlist.map((item) =>
        item._id !== productId
          ? { ...item, isWishlisted: true }
          : { ...item, isWishlisted: false }
      );
      setWishList(wishlist);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addToCartHandler = (product, productId) => {
    if (token) {
      const findTheProductInCart = [...cart].find(
        ({ _id }) => _id === productId
      );
      if (findTheProductInCart === undefined) {
        addToCart(product);
        setProducts(
          [...products].map((product) =>
            product._id === productId
              ? { ...product, isPresentInCart: true }
              : { ...product }
          )
        );
        setWishList(
          [...wishList].map((item) =>
            item._id === productId
              ? { ...item, isPresentInCart: true }
              : { ...item }
          )
        );
        setProductDetails({...productDetails, isPresentInCart: true})
      } else {
        removeProductFromCart(productId);
        setProducts(
          [...products].map((product) =>
            product._id === productId
              ? { ...product, isPresentInCart: false }
              : { ...product }
          )
        );
        setWishList(
          [...wishList].map((product) =>
            product._id === productId
              ? { ...product, isPresentInCart: false }
              : { ...product }
          )
        );
      }
    } else {
      navigate("/signin");
    }
  };

  const addToWishlistHandler = (product, productId) => {
    if (token) {
      const findTheProductInWishlist = [...wishList].find(
        ({ _id }) => _id === productId
      );
      const indexOfWishlistedElement = [...products].findIndex(
        ({ _id }) => _id === productId
      );
      const copyOfIsHoveredState = [...isHovered];
      copyOfIsHoveredState[indexOfWishlistedElement] = false;
      setIsHovered(copyOfIsHoveredState);

      if (findTheProductInWishlist === undefined) {
        addToWishlist(product);
        setProducts(
          [...products].map((product) =>
            product._id === productId
              ? { ...product, isWishlisted: true }
              : { ...product }
          )
        );
        setCart(
          [...cart].map((item) =>
            item._id === productId
              ? { ...item, isWishlisted: true }
              : { ...item }
          )
        );
        setProductDetails({...productDetails, isWishlisted: true})
      } else {
        removeProductFromWishlist(productId);
        setProducts(
          [...products].map((product) =>
            product._id === productId
              ? { ...product, isWishlisted: false }
              : { ...product }
          )
        );
        setCart(
          [...cart].map((item) =>
            item._id === productId
              ? { ...item, isWishlisted: false }
              : { ...item }
          )
        );
      }
    } else {
      navigate("/signin");
    }
  };

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
      ? setSelectedCategories(
          [...selectedCategories].filter(
            (category) => category !== selectedCategory.categoryName
          )
        )
      : setSelectedCategories([
          ...selectedCategories,
          selectedCategory.categoryName,
        ]);

    navigate("/products");
  };

  const clearAllFilters = () => {
    setPriceFilter(500);
    setCategories(
      [...categories].map((category) => ({ ...category, isSelected: false }))
    );
    setSelectedCategories([]);
    setRatingFilter("");
    setSortingOrder("");
  };

  const handleMouseEnter = (productId) => {
    setProducts(
      [...products].map((product) =>
        product._id === productId
          ? { ...product, isWishlisted: !product.isWishlisted }
          : { ...product }
      )
    );
  };

  const handleMouseLeave = (productId) => {
    setProducts(
      [...products].map((product) =>
        product._id === productId
          ? { ...product, isWishlisted: !product.isWishlisted }
          : { ...product }
      )
    );
  };

  const toggleFilterContainer = () => {
    setShowFiltersForSmallerDevices((prevState) => !prevState);
  };

  const moveProductsFromWishlistToCart = (product, productId) => {
    if (token) {
      const productToMoveFromWishlistToCart = {
        ...product,
        isWishlisted: false,
      };
      addToCart(productToMoveFromWishlistToCart);
      removeProductFromWishlist(productId);
      setProducts(
        [...products].map((product) =>
          product._id === productId
            ? { ...product, isPresentInCart: true, isWishlisted: false }
            : { ...product }
        )
      );
    } else {
      navigate("/signin");
    }
  };

  const moveProductFromCartToWishlist = (product, productId) => {
    if (token) {
      const productToMoveFromCartToWishlist = {
        ...product,
        isPresentInCart: false,
      };
      addToWishlist(productToMoveFromCartToWishlist);
      removeProductFromCart(productId);
      setProducts(
        [...products].map((product) =>
          product._id === productId
            ? { ...product, isPresentInCart: false, isWishlisted: true }
            : { ...product }
        )
      );
    } else {
      navigate("/signin");
    }
  };

  const fetchProductDetails = async(productId) => {
    try {
      let res = await fetch(`/api/products/${productId}`)
      const {product} = await res.json()
      const isProductWishlisted = ([...products].find(({_id}) => _id === productId))?.isWishlisted
      const isProductPresentInCart = ([...products].find(({_id}) => _id === productId))?.isPresentInCart
      setProductDetails({...product, isWishlisted: isProductWishlisted, isPresentInCart: isProductPresentInCart});
    } catch (error) {
      console.log(error.message);
    }
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
        isHovered,
        pageUrl,
        showFiltersForSmallerDevices,
        productDetails,
        setPageUrl,
        handleSlider,
        handleCategory,
        handleRating,
        handleSortingOrder,
        addToCartHandler,
        addToWishlistHandler,
        viewParticularCategoryBooks,
        clearAllFilters,
        handleMouseEnter,
        handleMouseLeave,
        toggleFilterContainer,
        moveProductsFromWishlistToCart,
        updateProductQuantityInCart,
        moveProductFromCartToWishlist,
        fetchProductDetails
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
