import React from "react";
import useAuth from "../hooks/useAuth";

const AddCraft = () => {
  const { user } = useAuth();

  const handleAddCraft = (e) => {
    e.preventDefault(); // Corrected typo here
    const form = e.target; // Corrected the form reference
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

    fetch("http://localhost:5000/allcraft", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
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
              <span className="label-text">Craft Image</span>
            </label>
            <input
              type="text"
              placeholder="Craft photo url"
              className="input input-bordered w-full"
              name="craftImage"
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
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="label">
              <span className="label-text">Sub Category Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter sub category name"
              className="input input-bordered w-full"
              name="subCategoryName"
            />
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
                <option value="inStock">In Stock</option>
                <option value="madeToOrder">Made to Order</option>
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
