import { useEffect, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import axios from "../../api/axios";
import Select from "react-select";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      discount: 0,
      stock: 0,
      category: "",
      variants: [],
      details: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "variants",
  });

  const {
    fields: detailFields,
    append: appendDetail,
    remove: removeDetail,
  } = useFieldArray({
    control,
    name: "details",
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [variants, setVariants] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchCategoriesAndVariants = async () => {
      try {
        const categoriesResponse = await axios.get("categories");
        setCategories(categoriesResponse.data.categories);
        console.log("Categories Response:", categoriesResponse.data.categories);

        const variantsResponse = await axios.get("variants/get");
        if (Array.isArray(variantsResponse.data.variants)) {
          setVariants(variantsResponse.data.variants);
          console.log("Variants Response:", variantsResponse.data.variants);
        } else {
          console.error(
            "Variants data is not an array:",
            variantsResponse.data.variants
          );
        }

        const productDetailsResponse = await axios.get("/product/details");
        setProductDetails(productDetailsResponse.data.details);
      } catch (error) {
        console.error("Error fetching categories and variants:", error);
      }
    };

    fetchCategoriesAndVariants();
  }, []);

  const onSubmit = async (data) => {
    console.log("before submit:", data);
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

      const productVariants = data.variants.map((variant) => ({
        category_id: variant.category_id,
        values: variant.values.map((v) => v.value),
      }));

      const productDetails = data.details.map((detail) => ({
        key: detail.key,
        value: detail.value,
      }));

      formData.append("variants", JSON.stringify(productVariants));
      formData.append("details", JSON.stringify(productDetails));

      const response = await axios.post("products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response Data:", response.data);

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
            {categories.map((category) => (
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

        <div className="mb-3">
          <label htmlFor="variants" className="form-label">
            Product Variants
          </label>
          {fields.map((field, index) => (
            <div key={field.id} className="row mb-2">
              <div className="col-md-5">
                <select
                  className="form-select"
                  {...register(`variants[${index}].category_id`, {
                    required: true,
                  })}
                >
                  <option value="">Select Variant</option>
                  {variants.map((variant) => (
                    <option key={variant._id} value={variant._id}>
                      {variant.category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-5">
                <Controller
                  name={`variants[${index}].values`}
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <Select
                      {...field}
                      isMulti
                      options={
                        variants
                          .find(
                            (v) =>
                              v._id === watch(`variants[${index}].category_id`)
                          )
                          ?.values.map((value) => ({ value, label: value })) ||
                        []
                      }
                      onChange={(selected) => field.onChange(selected)}
                    />
                  )}
                />
              </div>
              <div className="col-md-2 d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => remove(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => append({ category_id: "", values: [] })}
          >
            Add Variant
          </button>
        </div>

        <div className="mb-3">
          <label htmlFor="details" className="form-label">
            Product Details
          </label>
          {detailFields.map((field, index) => (
            <div key={field.id} className="row mb-2">
              <div className="col-md-5">
                <select
                  className="form-select"
                  {...register(`details[${index}].key`, { required: true })}
                >
                  <option value="">Select Detail Key</option>
                  {productDetails.map((detail) => (
                    <option key={detail._id} value={detail._id}>
                      {detail.key}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control m-0"
                  {...register(`details[${index}].value`, { required: true })}
                />
              </div>
              <div className="col-md-2 d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => removeDetail(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => appendDetail({ key: "", value: "" })}
          >
            Add Detail
          </button>
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
