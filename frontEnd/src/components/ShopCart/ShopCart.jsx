const ShopCart = () => {
  return (
    <div className="contianer">
      <div className="row">
        <div className="box d-flex gap-4 border border-1  border-dark-subtle p-4 rounded ">
          <div className="">
            <img
              src="https://via.placeholder.com/150"
              alt="product"
              className="rounded img-fluid"
            />
          </div>{" "}
          <div className="flex-fill">
            <h4>Product Name</h4>
            <p>Size: Large</p>
            <p>Color: blue</p>
            <div className="d-flex">
              <p className="flex-fill fw-bold">$200</p>

              <div className="d-flex gap-2 bg-light justify-content-center align-items-center rounded-5 ">
                <button className="btn btn-light rounded-5 text-dark fs-5">
                  +
                </button>
                <span>1</span>
                <button className="btn btn-light rounded-5 fs-5">-</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
