import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const AddCraft = () => {
  const { user } = useAuth();
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetch("https://artcraft-server.vercel.app/categories")
      .then((response) => response.json())
      .then((data) => {
        setSubCategories(data);
      })
      .catch((error) => {
        toast.error("Error fetching categories:", error);
      });
  }, []);

  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const craftImage = form.craftImage.value;
    const itemName = form.itemName.value;
    const subCategoryName = form.subCategoryName.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processTime = form.processTime.value;
    const customization = form.customization.value;
    const stock = form.stock.value;
    const name = form.name.value;
    const email = form.email.value;

    const craftInfo = {
      craftImage,
      itemName,
      subCategoryName,

      shortDescription,
      price,
      rating,
      processTime,
      customization,
      stock,
      name,
      email,
    };

    fetch("https://artcraft-server.vercel.app/allcraft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(craftInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        e.target.reset();
      });
  };

  return (
    <div>
      <h1 className="text-lg text-center font-semibold">Craft Item</h1>
      <p className="italic text-center text-textsecondary">
        Add your craft item
      </p>
      <form onSubmit={handleAddCraft}>
        <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-4 gap-4">
          <div className="col-span-2 md:col-span-1">
            <label className="label">
              <span className="label-text">Item Image</span>
            </label>
            <input
              type="text"
              placeholder="Items photo url"
              className="input input-bordered w-full"
              name="craftImage"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter craft name"
              className="input input-bordered w-full"
              name="itemName"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="label">
              <span className="label-text">Sub Category Name</span>
            </label>
            <select
              name="subCategoryName"
              className="select select-bordered w-full"
            >
              {subCategories.map((subCategory) => (
                <option
                  key={subCategory._id}
                  value={subCategory.subCategoryName}
                >
                  {subCategory.subCategoryName}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-2 md:col-span-1 row-span-2 mb-4">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full h-full resize-none mb-2"
              placeholder="Enter short description"
              name="shortDescription"
            ></textarea>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Enter price"
              className="input input-bordered w-full"
              name="price"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              placeholder="Enter rating"
              className="input input-bordered w-full"
              name="rating"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="text"
              placeholder="Enter processing time"
              className="input input-bordered w-full"
              name="processTime"
            />
          </div>

          <div className="flex col-span-2 md:col-span-1">
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="customizationYes"
                  name="customization"
                  value="Yes"
                  className="radio radio-xs"
                  defaultChecked
                />
                <label htmlFor="customizationYes">Yes</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="customizationNo"
                  name="customization"
                  value="No"
                  className="radio radio-xs"
                />
                <label htmlFor="customizationNo">No</label>
              </div>
            </div>
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <select name="stock" className="select select-bordered w-full">
                <option value="In stock">In Stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter user name"
              className="input input-bordered w-full"
              name="name"
              defaultValue={user?.displayName}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter user email"
              className="input input-bordered w-full"
              name="email"
              defaultValue={user?.email}
            />
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <button className="bg-bgprimary text-white font-semibold px-6 rounded-md my-4 py-2 w-full md:w-fit">
            Add Craft
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCraft;
