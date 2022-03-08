import React from "react";
import { Category } from "./Category";

export const Categories = ({ sendCategory }) => {
  return (
    <div className="grid grid-cols-4 place-items-center p-4 m-2 gap-3 rounded-md bg-cyan-200 shadow-sm">
      <Category
        icon={<i class="fas fa-utensils text-xl"></i>}
        title="Food"
        sendCategory={(val) => sendCategory(val)}
      />
      <Category
        icon={<i class="fas fa-bus text-xl"></i>}
        title="Travel"
        sendCategory={(val) => sendCategory(val)}
      />
      <Category
        icon={<i class="fas fa-heartbeat text-xl"></i>}
        title="Health"
        sendCategory={(val) => sendCategory(val)}
      />
      <Category
        icon={<i class="fas fa-gift text-xl"></i>}
        title="Gifts"
        sendCategory={(val) => sendCategory(val)}
      />
      <Category
        icon={<i class="fa fa-book text-xl"></i>}
        title="Education"
        sendCategory={(val) => sendCategory(val)}
      />
      <Category
        icon={<i class="fas fa-shopping-bag text-xl"></i>}
        title="Grocery"
        sendCategory={(val) => sendCategory(val)}
      />
      <Category
        icon={<i class="fas fa-home text-xl"></i>}
        title="Home"
        sendCategory={(val) => sendCategory(val)}
      />
      <Category
        icon={<i class="fas fa-user-alt text-xl"></i>}
        title="Salon"
        sendCategory={(val) => sendCategory(val)}
      />
      <Category
        icon={<i class="fas fa-university text-xl"></i>}
        title="Payments"
        sendCategory={(val) => sendCategory(val)}
      />
      <Category
        icon={<i class="fas fa-question text-xl"></i>}
        title="Other"
        sendCategory={(val) => sendCategory(val)}
      />
    </div>
  );
};
