import { useForm } from "react-hook-form";
import classes from "./SignUp.module.css";
import axios from "../../api/axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
const url = "https://staja-marketplace.onrender.com/users/signup";

import SignUpLogo from "../../../public/Group 4.svg";
const SignUp = () => {
  const { setAuth } = useContext(AuthContext);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
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
    },
  });

  const onSubmit = (data) => {
    const { name, lastname, email, password } = data;
    console.log(data);
    axios
      .post(url, JSON.stringify(data))
      .then((response) => {
        console.log(response);
        if (response.status === 200 || response.status === 201) {
          // const token = response.data.token;
          setAuth({ name, lastname, email, password });
          // localStorage.setItem("authToken", token);
          setSuccess(true);
        }
      })
      .catch((err) => {
        setSuccess(false);
        console.log(err);
        if (!err.response) {
          setErrMsg("No Server Response");
        } else if (err.response.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (err.response.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }
      });
  };

  if (success) {
    navigate("/");
  }
  return (
    <div
      className={`${classes.contanier_height} container-fluid text-center justify-content-center `}
    >
      <h3>
        Hello and welcome
        <br />
        <span className={classes.textGradient}>To ShopCoo</span>
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
