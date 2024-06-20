import { useEffect, useState } from "react";
import classes from "./Filters.module.css";
import Range from "./Range";
import axios from "../../api/axios";
import Collapse from "react-bootstrap/Collapse";
import { AiOutlineControl } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import Col from "react-bootstrap/esm/Col";

const url = "https://staja-marketplace.onrender.com";

const Filters = ({ onSelectedValuesChange }) => {
  const [variants, setVariants] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);

  useEffect(() => {
    const fetchVariants = async () => {
      try {
        const response = await axios.get("/variants/get");
        setVariants(response.data.variants);
      } catch (error) {
        console.error("Error fetching variants:", error);
      }
    };

    fetchVariants();
  }, []);

  const onFilterChange = (value) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((val) => val !== value)
      : [...selectedValues, value];

    setSelectedValues(newSelectedValues);
    onSelectedValuesChange(newSelectedValues);
    console.log(newSelectedValues);
  };

  const [showSections, setShowSections] = useState({});

  const toggleSection = (section) => {
    setShowSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className={classes.filterMainSquare}>
      <div className="d-flex flex-column mb-3">
        <div className={classes.headerRow}>
          <h3 className={classes.cat_title}>Filters</h3>
          <AiOutlineControl size={25} />
        </div>
        <hr />
        {variants.map((variant) => (
          <div key={variant._id}>
            <div className={classes[variant.category]}>
              <div
                className="d-flex justify-content-between"
                onClick={() => toggleSection(variant.category)}
              >
                <h4>{variant.category}</h4>
                <IoIosArrowForward size={20} className={classes.closedarrow} />
              </div>
              <Collapse in={showSections[variant.category]}>
                <div>
                  {variant.category === "Colors" ? (
                    <div>
                      {variant.values.map((color) => (
                        <div
                          key={color}
                          className="d-flex align-items-center gap-1"
                        >
                          <input
                            type="checkbox"
                            className="form-check-input m-0"
                            onChange={() => onFilterChange(color)}
                            checked={selectedValues.includes(color)}
                          />{" "}
                          <button
                            className=" m-1 p-0"
                            style={{
                              border: "none",
                              backgroundColor: "transparent",
                            }}
                            onClick={() => onFilterChange(color)}
                          >
                            <span
                              style={{
                                display: "inline-block",
                                width: "25px",
                                height: "25px",
                                borderRadius: "50%",
                                backgroundColor: color,
                                border: "1px solid #222",
                              }}
                            ></span>
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    variant.values.map((value) => (
                      <div key={value}>
                        <label className="px-2">
                          <input
                            type="checkbox"
                            className="form-check-input fw-bold fs-5 px-2 mx-1"
                            value={value}
                            onChange={() => onFilterChange(value)}
                            checked={selectedValues.includes(value)}
                          />
                          {value}
                        </label>
                      </div>
                    ))
                  )}
                </div>
              </Collapse>
            </div>
            <hr />
          </div>
        ))}
        <button
          className={classes.applybutton}
          onClick={() => {
            setSelectedValues([]);
            onSelectedValuesChange([]);
          }}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default Filters;
