import React from "react";
import { Link } from "react-router-dom";

const ArtCraftCard = ({ craft }) => {
  const { _id, itemName, craftImage, subCategoryName, name, customization } =
    craft;
  return (
    <>
      <tr>
        <th>{name}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-square h-12 w-12">
                <img src={craftImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{itemName}</div>
              <div className="text-sm opacity-80">{subCategoryName}</div>
            </div>
          </div>
        </td>

        <td>{customization}</td>
        <th>
          <Link to={`/craftDetails/${_id}`}>
            <button className="btn btn-ghost btn-xs">Details</button>
          </Link>
        </th>
      </tr>
    </>
  );
};

export default ArtCraftCard;
