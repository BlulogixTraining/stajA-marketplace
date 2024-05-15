import { useEffect, useState } from "react";
import Breadcrumbs from "../components/ui/Breadcrumb";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import { FaHeart } from "react-icons/fa"; // Import heart icon
import classes from "./WishList.module.css";
const url = "https://staja-marketplace.onrender.com";
const WishList = () => {
  const [wishlist, setWishlist] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchWishlist = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${url}/favorite/get`);
      setWishlist(response.data.favorite);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const removeFromWishlist = async (productId) => {
    try {
      const response = await axios.post(`${url}/favorite/remove`, {
        product_id: productId,
      });
      if (response.status === 200 || response.status === 201) {
        setWishlist(response.data.favorite);
      }

      const newWishlist = wishlist.filter(
        (product) => product._id !== productId
      );
      setWishlist(newWishlist);
    } catch (error) {
      console.error(error);
    }
  };

  if (!wishlist) {
    return (
      <div className="container">
        <Breadcrumbs />
        <h1>WishList</h1>
        <div className="row">
          <div className="col d-flex flex-column gap-2  ">
            <h3 className="text-center">Your wishlist is empty</h3>
            <div className="d-flex justify-content-center">
              <Link to="/products" className="btn btn-secondary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Breadcrumbs />
      <h1>WishList</h1>
      <div className="row">
        {" "}
        <div className="col d-flex flex-wrap justify-content-center justify-content-lg-start mt-3 mt-md-0 gap-4 gap-md-0   ">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className={`col col-md-3 mb-5 mt-4 ${classes.wishlist_card}`}
            >
              <span
                className={`heart-icon ${classes.favorite}`}
                onClick={() => removeFromWishlist(product._id)}
              >
                <FaHeart className="fs-3" />
              </span>
              <Card
                productSlug={product.slug}
                rating={product.averagerating}
                name={product.name}
                img={`${url}${product.image[0]}`}
                price={product.price}
                discount={product.discount}
              />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
