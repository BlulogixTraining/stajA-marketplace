import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import classes from "./Login.module.css";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import ModelSuccess from "../../components/ui/ModelSuccess";
import SignUpLogo from "../../../public/Rectangle 20 (1).svg";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

const url = "https://staja-marketplace.onrender.com/users/login";

const Login = () => {
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
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
    try {
      const response = await axios.post(url, JSON.stringify(data));
      if (response.status === 200 || response.status === 201) {
        const { token, user } = response.data;
        const { _id: userID, name, email, role } = user;

        signIn({
          auth: { token },
          userState: { email, name, role, userId: userID },
          expires: 60 * 60 * 24 * 30,
        });
        localStorage.setItem("authToken", token);

        setSuccess(true);
      }
    } catch (err) {
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
      setModalShow(true);
    }
  }, [success]);

  const user = useAuthUser();
  const role = user?.role;

  const handleRedirect = () => {
    if (role === "seller") {
      window.location.href = "/dashboard";
    } else if (role === "customer") {
      window.location.href = "/";
    }
  };

  return (
    <div className={`${classes.contanier_height} container`}>
      {success && (
        <ModelSuccess
          show={modalShow}
          onHide={() => setModalShow(false)}
          onRedirect={handleRedirect}
        />
      )}
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center h-100 gap-5">
        <div className="col-12 col-md-3">
          <img
            src={SignUpLogo}
            alt="SignUp Logo"
            className="img-fluid h-100 w-100 object-fit-cover"
          />
        </div>
        <div className="col-12 col-md-5">
          <h3>
            <span className={classes.textGradient}>Login to ShopCoo</span>
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column gap-2"
          >
            {errMsg && <p className="text-danger">{errMsg}</p>}
            <input
              type="text"
              className="form-control"
              {...register("email", {
                required: "This is required",
              })}
            />
            {errors.email && <p className="text-danger">email is required</p>}
            <input
              {...register("password", {
                required: "This is required",
                minLength: {
                  value: 6,
                  message: "Password must have 6 characters",
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
              Don't have an account? Sign up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
