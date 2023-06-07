import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const { token, setToken, setUser, address} = useContext(AuthContext);

  const [fetchedProducts, setFetchedProducts] = useState([]);
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
  });
  const [searchedKeyword, setSearchedKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  const [productLoading, setProductLoading] = useState(true);
  const [selectedAddress, setSelectedAddress] = useState(address!== null && address[0]?._id);

  const [orderDetails, setOrderDetails] = useState({
    orderId: "",
    totalAmount: 0,
    orderAddress: "",
    orderedProducts: []
  })

  const navigate = useNavigate();
  

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
      setFetchedProducts(
        modifiedResponse.products.map((product) => ({
          ...product,
          isPresentInCart: false,
        }))
      );
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const normalRes = await response.json();
      setCategories(normalRes.categories);
      setLoading(false);
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
      toast.error("Couldn't add the product to card");
    }
  };

  const getCartProducts = async () => {
    try {
      const res = await fetch("/api/user/cart", {
        headers: { authorization: token },
      });
      if (res.status === 200) {
        const {cart: cartItems} = await res.json();
        setCart(cartItems)
      }
    } catch (err) {
      console.log(err.message);
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
      toast.error("Couldn't remove the product to card");
    }
  };

  const updateProductQuantityInCart = async (
    product,
    productId,
    actionType
  ) => {
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
      toast.success(`${product.title}'s quantity updated in cart!`);
    } catch (error) {
      console.log(error.message);
      toast.error("Could'nt update the product quantity");
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
      console.error(error.message);
      toast.error("Couldn't add the product to wishlist");
    }
  };

  const getWishlistProducts = async () => {
    try {
      const res = await fetch("/api/user/wishlist", {
        headers: { authorization: token },
      });
      if (res.status === 200) {
        const {wishlist: wishlistItems} = await res.json();
        setWishList(wishlistItems);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

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
      toast.error("Couldn't remove the product from wishlist");
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
        setProductDetails({ ...productDetails, isPresentInCart: true });
        toast.success(`${product.title} added to cart successfully!`);
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
        toast.success(`${product.title} removed from cart successfully!`);
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
        setProductDetails({ ...productDetails, isWishlisted: true });
        toast.success(`${product.title} added to wishlist successfully!`);
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
        toast.success(`${product.title} removed from wishlist successfully!`);
      }
    } else {
      navigate("/signin");
    }
  };

  const viewParticularCategoryBooks = (idOfselectedCategory) => {
    setCategories(
      [...categories].map((category) =>
        category._id === idOfselectedCategory
          ? { ...category, isSelected: true }
          : { ...category, isSelected: false }
      )
    );

    const selectedCategory = [...categories].find(
      ({ _id }) => _id === idOfselectedCategory
    );

    setSelectedCategories([selectedCategory.categoryName]);
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
    setProducts([...fetchedProducts]);
    setSearchedKeyword("");
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

  const addProductFromCartToWishlist = (product, productId) => {
    if (token) {
      const productToMoveFromCartToWishlist = {
        ...product,
        isPresentInCart: true,
      };
      addToWishlist(productToMoveFromCartToWishlist);
      setProducts(
        [...products].map((product) =>
          product._id === productId
            ? { ...product, isPresentInCart: true, isWishlisted: true }
            : { ...product }
        )
      );
      setCart(
        [...cart].map((item) =>
          item._id === productId ? { ...item, isWishlisted: true } : { ...item }
        )
      );
      toast.success(`${product.title} added to wishlist successfully!`);
    } else {
      navigate("/signin");
    }
  };

  const fetchProductDetails = async (productId) => {
    try {
      let res = await fetch(`/api/products/${productId}`);
      const { product } = await res.json();
      const isProductWishlisted = [...products].find(
        ({ _id }) => _id === productId
      )?.isWishlisted;
      const isProductPresentInCart = [...products].find(
        ({ _id }) => _id === productId
      )?.isPresentInCart;
      setProductDetails({
        ...product,
        isWishlisted: isProductWishlisted,
        isPresentInCart: isProductPresentInCart,
      });
      setProductLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const searchForProducts = (e) => {
    const enteredValue = e.target.value;
    setSearchedKeyword(enteredValue);
    setTimeout(() => {
      if (enteredValue.length >= 0) {
        navigate("/products");
        setProducts(
          [...fetchedProducts].filter(({ title }) =>
            title.toLowerCase().includes(enteredValue.toLowerCase())
          )
        );
      }
    }, 500);
  };

  const isProductPresentInCart = (productId) => {
    return [...cart].find(({_id}) => _id === productId)
  }

  const isProductPresentInWishlist = (productId) => {
    return [...wishList].find(({_id}) => _id === productId)
  }

  const handleUserLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    localStorage.removeItem("address");
    setToken("");
    setUser({});
    navigate("/");
    clearAllFilters();
    toast.success("You have been logged out successfully.")
  }

  const showSummerSaleProducts = () => {
    setProducts([...fetchedProducts].filter(({discountPercent}) => discountPercent === 25))
    navigate("/products");
  }

  const showEverydaySaleProducts = () => {
    setProducts([...fetchedProducts].filter(({discountPercent}) => discountPercent === 45))
    navigate("/products");
  }

  const handleAddressSelect = (e) => {
    setSelectedAddress(e.target.id);
  };

  const calculateDiscountAmount = (discountRate, originalPrice) => {
    const discountPercentage = discountRate / 100;
    const discountAmount = originalPrice * discountPercentage;

    return Math.floor(discountAmount);
  }; 

  const calculateTotalAmount = () => {
    const totalPrice  = [...cart].reduce(
      (total, product) => total + product.qty * product.price,
      0
    )
    const discountAmount = [...cart].reduce(
      (total, product) => total + product.qty * calculateDiscountAmount(product.discountPercent, product.price),
      0
    )

    return totalPrice-discountAmount
  }

  const addressSelectedByUser = address !== null && address.find(({_id}) => _id === selectedAddress)

  const handlePlaceOrder = () => {
    setOrderDetails({
      orderId: uuid(),
      totalAmount: calculateTotalAmount(),
      orderAddress: addressSelectedByUser,
      orderedProducts: [...cart]
    });
    setCart([])
    navigate("/orderSummary");
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
        searchedKeyword,
        loading,
        productLoading,
        selectedAddress,
        orderDetails,
        setCategories,
        setSelectedCategories,
        setPageUrl,
        setProductLoading,
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
        addProductFromCartToWishlist,
        fetchProductDetails,
        searchForProducts,
        getCartProducts,
        getWishlistProducts,
        handleUserLogout,
        isProductPresentInCart,
        isProductPresentInWishlist,
        showSummerSaleProducts,
        showEverydaySaleProducts,
        handleAddressSelect,
        handlePlaceOrder
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
