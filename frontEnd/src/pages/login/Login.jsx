import { Link } from "react-router-dom";
import classes from "./Login.module.css";

import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      username: "User Name",
      password: "AAAAA",
    },
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };
  const name = watch("username");
  return (
    <div className={`${classes.contanier_height} container`}>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center h-100">
        <div className="col-12 col-md-3 ">
          <h1>Hello again</h1>
        </div>
        <div className="col-12 col-md-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column gap-2 "
          >
            <input
              type="text"
              className="form-control "
              {...register("username", {
                required: "This is required",
                onBlur: (e) => console.log(e),
              })}
            />
            {/* <p className="text-success ms-3">{name}</p> */}
            {errors.username && (
              <p className="text-danger">Username is required</p>
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
              className="form-control mb-1"
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}

            <input type="submit" className={classes.glass_button} />
            <Link to="/signup" className="text-center">
              {" "}
              Don't have an account? Sign up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
