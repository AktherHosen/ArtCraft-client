import React from "react";
import toast from "react-hot-toast";

const AddSubCategory = () => {
  const handleAddCategory = (e) => {
    e.preventDefault();
    const form = e.target;
    const subCategoryImage = form.subCategoryImage.value;
    const subCategoryName = form.subCategoryName.value;
    const categoryInfo = { subCategoryImage, subCategoryName };

    fetch("http://localhost:5000/categories", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(categoryInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Category added successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Error adding category:", error);
        toast.error("Failed to add category!");
      });
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-center font-semibold uppercase mb-2">
          Add SubCategory
        </h1>
        <form
          onSubmit={handleAddCategory}
          className="w-full md:w-[400px]  flex flex-col justify-center border p-4 rounded-md shadow-md"
        >
          <div className="grid grid-cols-1 gap-2">
            <div className="col-span-2 md:col-span-1">
              <label className="label">
                <span className="label-text">Sub Category Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter sub category name"
                className="input input-bordered w-full"
                name="subCategoryName"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="label">
                <span className="label-text">Sub Category Image</span>
              </label>
              <input
                type="text"
                placeholder="Sub Category photo url"
                className="input input-bordered w-full"
                name="subCategoryImage"
                required
              />
            </div>
          </div>
          <div className="flex justify-center ">
            <button className="bg-bgprimary text-white font-semibold px-6 rounded-md my-4 py-2 w-full md:w-fit">
              Add Sub Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSubCategory;
