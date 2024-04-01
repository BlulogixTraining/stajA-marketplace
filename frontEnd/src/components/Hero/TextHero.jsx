import classes from "./Hero.module.css";
const TextHero = ({ Number, Text }) => {
  return (
    <div className={classes.text_cards}>
      <h3>{Number}</h3>
      <p>{Text}</p>
    </div>
  );
};

export default TextHero;
