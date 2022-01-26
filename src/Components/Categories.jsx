import React from "react";
import { Category } from "./Category";

export const Categories = () => {
  return (
    <div className="grid grid-cols-4 place-items-center p-4 m-2 gap-3 rounded-md bg-cyan-200 shadow-sm">
      <Category
        icon={<i class="fas fa-utensils text-xl text-gray-700"></i>}
        title="Food"
      />
      <Category
        icon={<i class="fas fa-bus text-xl text-gray-700"></i>}
        title="Travel"
      />
      <Category
        icon={<i class="fas fa-heartbeat text-xl text-gray-700"></i>}
        title="Health"
      />
      <Category
        icon={<i class="fas fa-gift text-xl text-gray-700"></i>}
        title="Gifts"
      />
      <Category
        icon={<i class="fa fa-book text-xl text-gray-700"></i>}
        title="Education"
      />
      <Category
        icon={<i class="fas fa-shopping-bag text-xl text-gray-700"></i>}
        title="Grocery"
      />
      <Category
        icon={<i class="fas fa-home text-xl text-gray-700"></i>}
        title="Home"
      />
      <Category
        icon={<i class="fas fa-user-alt text-xl text-gray-700"></i>}
        title="Salon"
      />
      <Category
        icon={<i class="fas fa-university text-xl text-gray-700"></i>}
        title="Payments"
      />
      <Category
        icon={<i class="fas fa-question text-xl text-gray-700"></i>}
        title="Other"
      />
    </div>
  );
};
