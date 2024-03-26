import { useForm } from "react-hook-form";
import classes from "./SignUp.module.css";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "Your Name",
      email: "name@gmail.com",
      password: "123456",
    },
  });
  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div className={`${classes.contanier_height} container`}>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center h-100">
        <div className="col-12 col-md-3">
          <h3>
            Hello and welcome
            <br />
            <span className={classes.textGradient}>to Our MarketPlace</span>
          </h3>
        </div>
        <div className="col-12 col-md-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column gap-2"
          >
            <input
              type="text"
              className="form-control "
              {...register("username", {
                required: "This is required",
                onBlur: (e) => console.log(e),
              })}
            />
            {/* <p>{name}</p> */}
            {errors.username && (
              <p className="text-danger">Username is required</p>
            )}

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
