import classes from "./Showcase.module.css";
import Card from "../Card/Card";
import shirt from "../../assets/shirt.jpg";
const Showcase = ({ title }) => {
  return (
    <div className="container text-center mt-5  ">
      <h1 className={classes.title}>{title}</h1>

      <div className="row justify-content-center gap-5 gap-lg-3 mt-5">
        <Card
          img={shirt}
          title="T-SHIRT WITH TAPE DETAILS"
          price="120"
          discount="260"
        />{" "}
        <Card
          img={shirt}
          title="T-SHIRT WITH TAPE DETAILS"
          price="120"
          discount="260"
        />{" "}
        <Card
          img={shirt}
          title="T-SHIRT WITH TAPE DETAILS"
          price="120"
          discount="260"
        />
        <Card
          img={shirt}
          title="T-SHIRT WITH TAPE DETAILS"
          price="120"
          discount="260"
        />
      </div>
    </div>
  );
};

export default Showcase;
