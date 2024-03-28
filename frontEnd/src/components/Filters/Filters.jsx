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
                <h2>Filters <p>(Press To Expand)</p></h2>
                <hr />
                <div className={classes.dressings}>
                    <p>T-Shirts</p>
                    <p>Shorts</p>
                    <p>Shirts</p>
                    <p>Hoodie</p>
                    <p>Jeans</p>
                </div>
                <hr />
                <div className={classes.price}>
                    <h2 onClick={() => toggleSection('price')}>Price</h2>
                    {showPrice && <Range />}
                </div>
                <hr />
                <div className={classes.colors}>
                    <h3 onClick={() => toggleSection('colors')}>Colors</h3>
                    {showColors && (
                        <>
                            <button className={classes.red}>.</button>
                            <button className={classes.blue}>.</button>
                            <button className={classes.green}>.</button>
                            <button className={classes.purple}>.</button>
                            <button className={classes.yellow}>.</button>
                            <button className={classes.cyan}>.</button>
                            <button className={classes.black}>.</button>
                            <button className={classes.gray}>.</button>
                        </>
                    )}
                </div>
                <hr />
                <div className={classes.size}>
                    <h3 onClick={() => toggleSection('size')}>Size</h3>
                    {showSize && (
                        <>
                            <button>X-Small</button>
                            <button>Small</button>
                            <button>Medium</button>
                            <button>Large</button>
                            <button>X-Large</button>
                        </>
                    )}
                </div>
                <hr />
                <div className={classes.style}>
                    <h3 onClick={() => toggleSection('style')}>Dress Style</h3>
                    {showStyle && (
                        <>
                            <p>Casual</p>
                            <p>Formal</p>
                            <p>Party</p>
                            <p>Gym</p>
                        </>
                    )}
                </div>
                <button className={classes.applybutton}>Apply Filter</button>
            </div>
        </>
    );
};

export default Filters;
