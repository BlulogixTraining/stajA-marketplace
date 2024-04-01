import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <div className={`${classes.button} px-3`}>
      <button className={classes.btn_17}>
        <span className={classes.text_container}>
          <span className={classes.text}>{props.Name}</span>
        </span>
      </button>
    </div>
  );
};

export default Button;
