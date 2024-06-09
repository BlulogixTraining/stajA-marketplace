import { useEffect, useState } from "react";
import classes from "./Filters.module.css";
import Range from "./Range";
import axios from "../../api/axios";
import Collapse from "react-bootstrap/Collapse";
import { AiOutlineControl } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

const Filters = ({ onSelectedValuesChange }) => {
  const [variants, setVariants] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [showSections, setShowSections] = useState({});

  useEffect(() => {
    const fetchVariants = async () => {
      try {
        const res = await axios.get(`/variants/get`);
        setVariants(res.data.variants);
      } catch (error) {
        console.error("Error fetching variants:", error);
      }
    };

    fetchVariants();
  }, []);

  const onFilterChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((val) => val !== value));
    }
  };

  useEffect(() => {
    onSelectedValuesChange(selectedValues);
  }, [selectedValues, onSelectedValuesChange]);

  console.log("selectedValues:", selectedValues);
  const toggleSection = (section) => {
    setShowSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const renderCheckbox = (category, value) => {
    if (category === "Colors") {
      return (
        <label key={value} className="d-flex align-items-center gap-1">
          <input
            type="checkbox"
            value={value}
            onChange={onFilterChange}
            checked={selectedValues.includes(value)}
          />

          <span
            style={{
              backgroundColor: value,
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              display: "inline-block",
              border: "1px solid #ccc",
            }}
          ></span>
        </label>
      );
    } else {
      return (
        <label key={value} className="d-flex align-items-center gap-1">
          <input
            type="checkbox"
            value={value}
            onChange={onFilterChange}
            checked={selectedValues.includes(value)}
          />
          {value}
        </label>
      );
    }
  };

  return (
    <div className={classes.filterMainSquare}>
      <div className="d-flex flex-column mb-3">
        <div className={classes.headerRow}>
          <h3 className={classes.cat_title}>Filters</h3>
          <AiOutlineControl size={35} />
        </div>
        <hr />
        <div className={classes.price}>
          <div
            onClick={() => toggleSection("price")}
            className={classes.smallHeader}
          >
            <h2>Price</h2>
            <IoIosArrowForward size={20} className={classes.closedarrow} />
          </div>
          <Collapse in={showSections.price}>
            <div>
              <Range />
            </div>
          </Collapse>
        </div>
        <hr />
        {variants.map((variant) => (
          <div key={variant._id} className={classes[variant.slug]}>
            <div
              onClick={() => toggleSection(variant.slug)}
              className={classes.smallHeader}
            >
              <h3>{variant.category}</h3>
              <IoIosArrowForward size={20} className={classes.closedarrow} />
            </div>
            <Collapse in={showSections[variant.slug]}>
              <div className="d-flex gap-4 fs-5 flex-wrap">
                {variant.values.map((value) =>
                  renderCheckbox(variant.category, value)
                )}
              </div>
            </Collapse>
            <hr />
          </div>
        ))}
        <button className={classes.applybutton}>Apply Filter</button>
      </div>
    </div>
  );
};

export default Filters;
