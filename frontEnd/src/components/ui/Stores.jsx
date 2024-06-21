import { useEffect, useState } from "react";
import axios from "../../api/axios";
import storeimg from "../../assets/store.webp";
import { Link } from "react-router-dom";
const Stores = () => {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get("/seller/all");
        setStores(response.data.sellers);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStores();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mt-5">Stores</h1>
        <div className="row justify-content-center gap-3 mt-5">
          {stores.map((store) => (
            <div className="col-12 col-md-5 col-lg-5 p-0" key={store._id}>
              <Link to={`/store/${store.sellerSlug}`}>
                <div className=" position-relative mb-4">
                  <img
                    src={storeimg}
                    className="card-img-top  rounded rounded-2"
                    alt={store.name}
                  />
                  <div
                    className="card-body d-flex justify-content-center align-items-center text-center position-absolute  "
                    style={{
                      bottom: "0",
                      top: "0",
                      left: "0",
                      backgroundColor: "rgba(0,0,0,0.8)",
                      color: "white",
                      padding: "0.6rem",
                    }}
                  >
                    <h5 className="card-title text-center store-title  ">
                      {store.name}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stores;
