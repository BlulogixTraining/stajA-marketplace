import { FaCircleCheck } from "react-icons/fa6";
import classes from "./StoreSeller.module.css";
const StoreSeller = () => {
  return (
    <div className="container-fluid">
      <div className="container mt-3 ">
        <div className={`row  ${classes.storeHero}  `}>
          <div
            className={`bg col-lg-4 py-4 d-flex align-items-center gap-3  ${classes.content}`}
          >
            <div className=" w-25  overflow-hidden">
              <img
                src="https://via.placeholder.com/300"
                alt="store"
                className="img-fluid rounded-circle object-fit-cover"
              />
            </div>

            <div className="d-flex align-items-center  gap-2">
              <h2 className="text-center">Store Name</h2>
              <FaCircleCheck className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoreSeller;
