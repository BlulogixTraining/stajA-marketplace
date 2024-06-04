import { useForm } from "react-hook-form";
import classes from "./SignUp.module.css";
import axios from "../../api/axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
const url = "https://staja-marketplace.onrender.com/users/signup";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import SignUpLogo from "../../../public/Group 4.svg";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
const SignUp = () => {
  const { setAuth } = useContext(AuthContext);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const signIn = useSignIn();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Your Name",
      lastname: "Your Last Name",
      email: "name@gmail.com",
      password: "123456sadf",
      role: "customer",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(url, data);

      const token = response.data.token;
      const userID = response.data.user._id;
      const name = response.data.user.name;

      const email = response.data.user.email;
      const role = response.data.user.role;

      signIn({
        auth: {
          token: token,
        },
        userState: {
          name: name,
          userId: userID,
          email: email,
          role: role,
        },
        expires: 60 * 60 * 24 * 30,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const user = useAuthUser();
  const role = user?.role;

  if (role == "seller") {
    return <Navigate to="/dashboard" />;
  } else if (role == "customer") {
    return <Navigate to="/" />;
  }
  return (
    <div
      className={`${classes.contanier_height} container-fluid text-center justify-content-center `}
    >
      <h3>
        <h4 className={classes.textGradient}>ShopCoo</h4>
      </h3>{" "}
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center h-100 gap-5">
        <div className="col-12 col-md-2 ">
          <div className={classes.Box_con}>
            <img
              src={SignUpLogo}
              alt="SignUp Logo"
              className="img-fluid h-100 w-100  "
            />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column gap-2"
          >
            <input
              type="text"
              className="form-control "
              {...register("name", {
                required: "This is required",
                onBlur: (e) => console.log(e),
              })}
            />
            {/* <p>{name}</p> */}
            {errors.name && <p className="text-danger">Username is required</p>}
            <input
              type="text"
              className="form-control"
              {...register("lastname", {
                required: "This is required",
              })}
            />

            <input
              type="text"
              className="form-control"
              {...register("email", {
                required: "email is required",
                validate: (value) => {
                  return value.includes("@") || "email must include @";
                },
              })}
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}

            <select
              className="form-select"
              {...register("role", {
                required: "This is required",
              })}
            >
              <option value="customer">Customer</option>
              <option value="seller">Seller</option>
            </select>
            {errors.role && (
              <p className="text-danger">{errors.role.message}</p>
            )}

            <input
              {...register("password", {
                required: "This is required",
                minLength: {
                  value: 6,
                  message: "Password must have 6 charcters",
                },
              })}
              type="password"
              className="form-control"
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}

            <input type="submit" className={classes.glass_button} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
