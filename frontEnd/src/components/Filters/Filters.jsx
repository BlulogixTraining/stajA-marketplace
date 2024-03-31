// import classes from './Filters.module.css';
// import Range from "../Range/Range"

// const Filters =() => {
//     return(
//     <>
//         <div className={classes.filterMainSquare}>
//             <h2>Filters</h2>
//             <hr></hr>
//             <div className={classes.dressings}>
//                 <p>T-Shirts</p>
//                 <p>Shorts</p>
//                 <p>Shirts</p>
//                 <p>Hoodie</p>
//                 <p>Jeans</p>
//             </div>
//             <hr></hr>
//             <div className={classes.price}>
//                 <h2>Price</h2>
//                 <Range />
//             </div>
//             <hr></hr>
//             <div className={classes.colors}>
//                 <h2>Colors</h2>
//                 <button className={classes.red}>.</button>
//                 <button className={classes.blue}>.</button>
//                 <button className={classes.green}>.</button>
//                 <button className={classes.purple}>.</button>
//                 <button className={classes.yellow}>.</button>
//                 <button className={classes.cyan}>.</button>
//                 <button className={classes.black}>.</button>
//                 <button className={classes.gray}>.</button>
//             </div>
//             <hr></hr>
//             <div className={classes.size}>
//                 <h2>Size</h2>
//                 <button>X-Small</button>
//                 <button>Small</button>
//                 <button>Medium</button>
//                 <button>Large</button>
//                 <button>X-Large</button>
//             </div>
//             <hr></hr>
//             <div className={classes.style}>
//                 <h2>Dress Style</h2>
//                 <p>Casual</p>
//                 <p>Formal</p>
//                 <p>Party</p>
//                 <p>Gym</p>
//             </div>
//             <button className={classes.applybutton}>Apply Filter</button>
//         </div>
//     </>
//     )
// }

// export default Filters
import React, { useState } from 'react';
import classes from './Filters.module.css';
import Range from '../Range/Range';
import { Link } from "react-router-dom";

const Filters = () => {
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
        <>
            <div className={classes.filterMainSquare}>
                <h2>Filters</h2>
                <hr />
                <div className={classes.dressings}>
                        <Link to={`/products?dressing=T-Shirts`} style={{color: 'inherit', fontSize: '16px', fontFamily: 'inherit', fontWeight: 'normal', lineHeight: '1.5'}}>
                            <p>T-Shirts</p>
                        </Link>
                        <Link to={`/products?dressing=Shorts`} style={{color: 'inherit', fontSize: '16px', fontFamily: 'inherit', fontWeight: 'normal', lineHeight: '1.5'}}>
                            <p>Shorts</p>
                        </Link>
                        <Link to={`/products?dressing=Shirts`} style={{color: 'inherit', fontSize: '16px', fontFamily: 'inherit', fontWeight: 'normal', lineHeight: '1.5'}}>
                            <p>Shirts</p>
                        </Link>
                        <Link to={`/products?dressing=Hoodie`} style={{color: 'inherit', fontSize: '16px', fontFamily: 'inherit', fontWeight: 'normal', lineHeight: '1.5'}}>
                            <p>Hoodie</p>
                        </Link>
                    <Link to={`/products?dressing=Jeans`} style={{color: 'inherit', fontSize: '16px', fontFamily: 'inherit', fontWeight: 'normal', lineHeight: '1.5'}}>
                        <p>Jeans</p>
                    </Link>
                </div>
                <hr />
                <div className={classes.price}>
                    <h3 onClick={() => toggleSection('price')}>Price   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>&gt;</p></h3>
                    {showPrice && <Range />}
                </div>
                <hr />
                <div className={classes.colors}>
                    <h3 onClick={() => toggleSection('colors')}>Colors &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>&gt;</p></h3>
                    {showColors && (
                        <>
                            <Link to={`/products?color=red`}>
                                <button className={classes.red}>.</button>
                            </Link>
                            <Link to={`/products?color=blue`}>
                                <button className={classes.blue}>.</button>
                            </Link>
                            <Link to={`/products?color=green`}>
                                <button className={classes.green}>.</button>
                            </Link>
                            <Link to={`/products?color=purple`}>
                                <button className={classes.purple}>.</button>
                            </Link>
                            <Link to={`/products?color=yellow`}>
                                <button className={classes.yellow}>.</button>
                            </Link>
                            <Link to={`/products?color=cyan`}>
                                <button className={classes.cyan}>.</button>
                            </Link>
                            <Link to={`/products?color=black`}>
                                <button className={classes.black}>.</button>
                            </Link>
                            <Link to={`/products?color=gray`}>
                                <button className={classes.gray}>.</button>
                            </Link>
                        </>
                    )}
                </div>
                <hr />
                <div className={classes.size}>
                    <h3 onClick={() => toggleSection('size')}>Size  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>&gt;</p></h3>
                    {showSize && (
                        <>
                                <Link to={`/products?size=X-Small`}>
                                    <button>X-Small</button>
                                </Link>
                                <Link to={`/products?size=Small`}>
                                    <button>Small</button>
                                </Link>
                                <Link to={`/products?size=Medium`}>
                                    <button>Medium</button>
                                </Link>
                                <Link to={`/products?size=Large`}>
                                    <button>Large</button>
                                </Link>
                                <Link to={`/products?size=X-Large`}>
                                    <button>X-Large</button>
                                </Link>

                        </>
                    )}
                </div>
                <hr />
                <div className={classes.style}>
                    <h3 onClick={() => toggleSection('style')}>Dress Style &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>&gt;</a></h3>
                    {showStyle && (
                        <>
                            <div>
                                <Link to={`/products?type=casual`} style={{color: 'inherit', fontSize: '16px', fontFamily: 'inherit', fontWeight: 'normal', lineHeight: '1.5'}}>
                                    <p>Casual</p>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/products?type=Formal`} style={{color: 'inherit', fontSize: '16px', fontFamily: 'inherit', fontWeight: 'normal', lineHeight: '1.5'}}>
                                    <p>Formal</p>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/products?type=Party`} style={{color: 'inherit', fontSize: '16px', fontFamily: 'inherit', fontWeight: 'normal', lineHeight: '1.5'}}>
                                    <p>Party</p>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/products?type=Gym`} style={{color: 'inherit', fontSize: '16px', fontFamily: 'inherit', fontWeight: 'normal', lineHeight: '1.5'}}>
                                    <p>Gym</p>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
                <button className={classes.applybutton}>Apply Filter</button>
            </div>
        </>
    );
};

export default Filters;
