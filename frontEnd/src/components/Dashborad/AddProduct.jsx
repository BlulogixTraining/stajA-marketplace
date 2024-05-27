import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "../../api/axios";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("categories");
        setCategories(response.data.categories);
        console.log(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("category_id", data.category);
      formData.append("discount", data.discount);
      formData.append("stock", data.stock);
      imageFiles.forEach((file) => {
        formData.append("images", file);
      });

      console.log(formData);

      const response = await axios.post("products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      reset();
      setImageFiles([]);
      setImagePreviews([]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImageFiles((prev) => [...prev, file]);
      setImagePreviews((prev) => [...prev, preview]);
      // Clear the file input
      event.target.value = null;
    }
  };

  const removeImage = (index) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container-fluid mt-2">
      <h2 className="text-center">Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <div className="invalid-feedback">This field is required</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            id="description"
            rows="3"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && (
            <div className="invalid-feedback">This field is required</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className={`form-control ${errors.price ? "is-invalid" : ""}`}
            id="price"
            step="0.01"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <div className="invalid-feedback">This field is required</div>
          )}
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="discount" className="form-label">
              Discount
            </label>
            <input
              type="number"
              className={`form-control ${errors.discount ? "is-invalid" : ""}`}
              id="discount"
              step="0.01"
              {...register("discount", { required: true })}
            />
            {errors.discount && (
              <div className="invalid-feedback">This field is required</div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="stock" className="form-label">
              Stock
            </label>
            <input
              type="number"
              className={`form-control ${errors.stock ? "is-invalid" : ""}`}
              id="stock"
              {...register("stock", { required: true })}
            />
            {errors.stock && (
              <div className="invalid-feedback">This field is required</div>
            )}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className={`form-select ${errors.category ? "is-invalid" : ""}`}
            id="category"
            {...register("category", { required: true })}
          >
            <option value="">Select a category</option>
            {categories?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <div className="invalid-feedback">This field is required</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="images" className="form-label">
            Product Images
          </label>
          <input
            type="file"
            className={`form-control ${errors.images ? "is-invalid" : ""}`}
            id="images"
            onChange={handleImageChange}
          />
          {errors.images && (
            <div className="invalid-feedback">This field is required</div>
          )}
        </div>

        <div className="mb-3">
          {imagePreviews.length > 0 && (
            <div className="image-previews d-flex flex-wrap">
              {imagePreviews.map((src, index) => (
                <div key={index} className="position-relative m-2">
                  <img
                    src={src}
                    alt={`Preview ${index}`}
                    className="img-thumbnail"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <button
                    type="button"
                    className="btn btn-danger btn-sm position-absolute top-0 end-0"
                    onClick={() => removeImage(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-dark">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
