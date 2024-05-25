import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import classes from "./Login.module.css";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import ModelSuccess from "../../components/ui/ModelSuccess";
const url = "https://staja-marketplace.onrender.com/users/login";
import SignUpLogo from "../../../public/Rectangle 20 (1).svg";

const Login = () => {
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  const signIn = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "bashiralrayes6@gmail.com",
      password: "123asd1122",
    },
  });
  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const response = await axios.post(url, JSON.stringify(data));
      if (response.status === 200 || response.status === 201) {
        const token = response.data.token;
        const userID = response.data.user._id;
        const name = response.data.user.name;

        const email = response.data.user.email;

        signIn({
          auth: {
            token: token,
          },
          userState: {
            email: email,
            name: name,
          },
          expires: 60 * 60 * 24 * 30,
        });
        // setAuthData({ token, userID });
        localStorage.setItem("authToken", token);

        setSuccess(true);
      }
    } catch (err) {
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
    }
  };
  useEffect(() => {
    if (success) {
      console.log(90);
      setModalShow(true);

      // navigate("/");
    }
  }, [success]);

  return (
    <div className={`${classes.contanier_height} container`}>
      {" "}
      {success && (
        <ModelSuccess
          show={modalShow}
          onHide={() => {
            setModalShow(false);
            // navigate("/");
          }}
        />
      )}
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center h-100 gap-5">
        <div className="col-12 col-md-3 ">
          <div className="">
            <img
              src={SignUpLogo}
              alt="SignUp Logo"
              className="img-fluid h-100 w-100 object-fit-cover "
            />
          </div>{" "}
        </div>
        <div className="col-12 col-md-5">
          <h3>
            <span className={classes.textGradient}>Login to ShopCoo</span>
          </h3>{" "}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column gap-2 "
          >
            {errMsg && <p className="text-danger">{errMsg}</p>}
            <input
              type="text"
              className="form-control "
              {...register("email", {
                required: "This is required",
                // onBlur: (e) => console.log(e),
              })}
            />
            {/* <p className="text-success ms-3">{name}</p> */}
            {errors.email && <p className="text-danger">email is required</p>}
            <input
              {...register("password", {
                required: "This is required",
                minLength: {
                  value: 6,
                  message: "Password must have 6 charcters",
                },
              })}
              type="password"
              className="form-control mb-1"
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}

            <input type="submit" className={classes.glass_button} />
            <Link to="/signup" className="text-center">
              {" "}
              Donsst have an account? Sign up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
