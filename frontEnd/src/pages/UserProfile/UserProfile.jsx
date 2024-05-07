import { useEffect, useState } from "react";
import classes from "./userProfile.module.css";
const url = "https://staja-marketplace.onrender.com";
import axios from "../../api/axios";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Breadcrumbs from "../../components/ui/Breadcrumb";

const UserProfile = () => {
  const { register, handleSubmit } = useForm({});
  const { loading, setloadig } = useState();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const onSubmit = (data) => {
    console.log("data", data);
  };
  const signOut = useSignOut();
  const redict = useNavigate();

  const loggout = () => {
    signOut();
    redict("/login");
  };
  const userImage = `https://staja-marketplace.onrender.com${userData?.image}`;

  const auth = useAuthUser();
  const fetchUserProfile = async () => {
    try {
      // setloadig(true);
      const response = await axios.get(`${url}/userprofile`);
      setUserData(response.data.user);
      console.log("response", response.data);
      // setloadig(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUserProfile();
  }, []);
  if (!userData || !userData.addresses) {
    return <p>loading</p>;
  }
  const address1 =
    userData.addresses.length > 0 ? userData.addresses[0].addressline1 : "";

  console.log("goo", address1);

  return (
    <div className="user-profile">
      {" "}
      <div className={`${classes.userHeader} container`}>
        <Breadcrumbs />
        <div className="card shadow-sm container mt-5 p-0 ">
          <div className={`${classes.header} card-header  py-3`}>
            <h4>
              Welcome <span> {auth?.name}</span>
            </h4>
          </div>
          <div className="card-body">
            <div className={classes.hero_profile}>
              <img
                src={userImage ? userImage : "https://via.placeholder.com/150"}
                alt="profile"
                className={`${classes.profile_img}  rounded-circle shadow-sm p-1 bg-white border border-2 border-red`}
              />

              <div className={classes.profile_info}>
                <h4 className="">{auth?.name}</h4>
                <p>{userData?.email}</p>
              </div>
            </div>
            <div className="mt-4">
              <div className={classes.profile_form}>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        {...register("firstName", {
                          required: true,
                          maxLength: 20,
                        })}
                        className=" d-flex w-100"
                        defaultValue={userData?.name}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        {...register("lastName", {
                          required: true,
                          maxLength: 20,
                        })}
                        className=" d-flex w-100"
                        defaultValue={userData?.lastname}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="email">Email</label>
                      <input
                        {...register("email")}
                        className=" d-flex w-100"
                        defaultValue={userData?.email}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="address">Address</label>
                      <input
                        {...register("address")}
                        className=" d-flex w-100"
                        defaultValue={address1}
                      />
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        {...register("phone")}
                        className=" d-flex w-100"
                        defaultValue={userData?.phone}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="address">Address 2</label>
                      <input
                        {...register("address")}
                        className=" d-flex w-100"
                        defaultValue={userData?.name}
                      />
                    </div>
                  </div>{" "}
                  <input type="submit" />
                </form>
              </div>
            </div>{" "}
            <div className="d-flex justify-content-end gap-3 ">
              {" "}
              <a
                onClick={() => loggout()}
                className="btn btn-dark"
                href="/login"
              >
                LoggOut
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
