import { useParams } from "react-router-dom";

const Product = () => {
  const para = useParams();
  console.log(para);
  return (
    <div>
      <h1>{para.productId}</h1>
      <p>This is the product page.</p>
    </div>
  );
};

export default Product;
