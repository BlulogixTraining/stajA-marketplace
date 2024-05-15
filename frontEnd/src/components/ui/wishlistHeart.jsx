import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { FaHeart } from "react-icons/fa";
import styles from "./wishlistheart.module.css";

const WishlistHeart = ({ productId }) => {
  const [Wishlist, setWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const fetchWishlist = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/favorite/get`);
      setWishlist(response.data.favorite);
      console.log("all wish data", response.data.favorite);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, [productId]);

  const addToWishlist = async (productId) => {
    try {
      const response = await axios.post(`/favorite/add`, {
        product_id: productId,
      });
      if (response.status === 200 || response.status === 201) {
        setSuccess("Product added to wishlist successfully");
        setWishlist(response.data.product);

        console.log("aassresponse.data.favorite", response.data.product);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveFromWishlist = async (productId) => {
    try {
      const response = await axios.post(`/favorite/remove`, {
        product_id: productId,
      });
      if (response.status === 200 || response.status === 201) {
        setSuccess("Product removed from wishlist successfully");
        setWishlist(response.data.product);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (productId) => {
    if (Wishlist) {
      handleRemoveFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  return (
    <span
      className={`${styles.heart_icon} ${
        productId === Wishlist ? styles.heart_icon_active : ""
      }`}
      onClick={() => handleClick(productId)}
    >
      <FaHeart className="fs-3" />
    </span>
  );
};

export default WishlistHeart;
