import { useEffect, useState } from "react";
import classes from "./Filters.module.css";
import Range from './Range'
import axios from "../../api/axios";
import Collapse from 'react-bootstrap/Collapse';
import { AiOutlineControl } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Col from "react-bootstrap/esm/Col";

const url = "https://staja-marketplace.onrender.com";


const Filters = ({ onSelectedValuesChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${url}/categories`);
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  const [selectedValues, setSelectedValues] = useState([]);

  // Handler to update selected values
  const onFilterChange1 = (e) => {
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

  const [showDressings, setShowDressings] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    const [showColors, setShowColors] = useState(false);
    const [showSize, setShowSize] = useState(false);
    const [showStyle, setShowStyle] = useState(false);

    const toggleSection = (section) => {
        switch (section) {
            case 'dressings':
                setShowDressings(!showDressings);
                break;
            case 'price':
                setShowPrice(!showPrice);
                break;
            case 'colors':
                setShowColors(!showColors);
                break;
            case 'size':
                setShowSize(!showSize);
                break;
            case 'style':
                setShowStyle(!showStyle);
                break;
            default:
                break;
        }
    };


  return (
    <div className={classes.filterMainSquare}>
      <div className="d-flex flex-column mb-3">
        <div className={classes.headerRow}>
          <h3 className={classes.cat_title}>Filters</h3>
          <AiOutlineControl size={35}/>
        </div>
        <hr/>
        {/* {categories.map((category) => (
          <label key={category._id} className="px-2">
            <input
              id={category._id}
              type="checkbox"
              className="form-check-input fw-bold  fs-5 px-2 mx-1"
              value={category.slug}
              onChange={onFilterChange1}
              checked={selectedValues.includes(category.slug)}
            />
            {category.name}
          </label>
        ))} */}
                <div className={classes.dressings}>
                  <p className={classes.item}>
                    <a style={{ color: 'rgba(0,0,0,0.6)' }}>T-Shirts</a>
                    <IoIosArrowForward className={classes.closedarrow}/>
                  </p>
                  <p className={classes.item}>
                    <a style={{ color: 'rgba(0,0,0,0.6)' }}>Shorts</a>
                    <IoIosArrowForward className={classes.closedarrow}/>
                  </p>
                  <p className={classes.item}>
                    <a style={{ color: 'rgba(0,0,0,0.6)' }}>Shirts</a>
                    <IoIosArrowForward className={classes.closedarrow}/>
                  </p>
                  <p className={classes.item}>
                    <a style={{ color: 'rgba(0,0,0,0.6)' }}>Hoodie</a>
                    <IoIosArrowForward className={classes.closedarrow}/>
                  </p>
                  <p className={classes.item}>
                    <a style={{ color: 'rgba(0,0,0,0.6)' }}>Jeans</a>
                    <IoIosArrowForward className={classes.closedarrow}/>
                  </p>
                </div>
                <hr />
                <div className={classes.price}>
                  <div className={classes.smallHeader}>
                    <h2 onClick={() => toggleSection('price')}>Price</h2>
                    <IoIosArrowForward size={20} className={classes.closedarrow}/>
                  </div>
                    <Collapse in={showPrice}>
                      <div>
                        <Range/>
                      </div>
                    </Collapse>
                </div>
                <hr />
                <div className={classes.colors}>
                  <div className={classes.smallHeader}>
                    <h3 onClick={() => toggleSection('colors')}>Colors</h3>
                    <IoIosArrowForward size={20} className={classes.closedarrow}/>
                  </div>
                    <Collapse in={showColors}>
                          <div>
                              <button className={classes.green}>.</button>
                              <button className={classes.red}>.</button>
                              <button className={classes.yellow}>.</button>
                              <button className={classes.orange}>.</button>
                              <button className={classes.cyan}>.</button>
                              <button className={classes.blue}>.</button>
                              <button className={classes.purple}>.</button>
                              <button className={classes.pink}>.</button>
                              <button className={classes.white}>.</button>
                              <button className={classes.black}>.</button>
                          </div>
                    </Collapse>
                </div>
                <hr />
                <div className={classes.size}>
                  <div className={classes.smallHeader}>
                    <h3 onClick={() => toggleSection('size')}>Size</h3>
                    <IoIosArrowForward size={20} className={classes.closedarrow}/>
                  </div>
                    <Collapse in={showSize}>
                        <div>
                            <button>XX-Small</button>
                            <button>X-Small</button>
                            <button>Small</button>
                            <button>Medium</button>
                            <button>Large</button>
                            <button>X-Large</button>
                            <button>XX-Large</button>
                            <button>3X-Large</button>
                            <button>4X-Large</button>
                        </div>
                    </Collapse>
                </div>
                <hr />
                <div className={classes.style}>
                  <div className={classes.smallHeader}>
                    <h3 onClick={() => toggleSection('style')}>Dress Style</h3>
                    <IoIosArrowForward size={20} className={classes.closedarrow}/>
                  </div>
                    <Collapse in={showStyle}>
                        <div>
                            <p className={classes.item}>
                              <a style={{ color: 'rgba(0,0,0,0.6)' }}>Casual</a>
                              <IoIosArrowForward className={classes.closedarrow}/>
                              </p>
                              <p className={classes.item}>
                                <a style={{ color: 'rgba(0,0,0,0.6)' }}>Formal</a>
                                <IoIosArrowForward className={classes.closedarrow}/>
                              </p>
                              <p className={classes.item}>
                                <a style={{ color: 'rgba(0,0,0,0.6)' }}>Party</a>
                                <IoIosArrowForward className={classes.closedarrow}/>
                              </p>
                              <p className={classes.item}>
                                <a style={{ color: 'rgba(0,0,0,0.6)' }}>Gym</a>
                                <IoIosArrowForward className={classes.closedarrow}/>
                              </p>
                        </div>
                    </Collapse>
                </div>
                <button className={classes.applybutton}>Apply Filter</button>
      </div>
      {/* <div className="d-flex flex-column">
        <h3 className={classes.cat_title}>Category:</h3>
        {categories.map((category) => (
          <label key={category._id} className="px-2">
            <input
              id={category._id}
              type="checkbox"
              className="form-check-input fw-bold  fs-5 px-2 mx-1"
              value={category.slug}
              onChange={onFilterChange1}
              checked={selectedValues.includes(category.slug)}
            />
            {category.name}
          </label>
        ))}
      </div> */}
    </div>
  );
};

export default Filters;
