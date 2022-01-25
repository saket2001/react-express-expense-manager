import React from "react";
import { BackBtn } from "../Components/BackBtn";
import { Categories } from "../Components/Categories";
import { InputGroup } from "../Components/InputGroup";
import { Layout } from "../Components/Layout";
import { SelectBtn } from "../Components/SelectBtn";
import { TextArea } from "../Components/TextArea";

const WalletsOptions = [
  {
    name: "Main",
  },
];

const TypeOptions = [
  {
    name: "Expense",
  },
  {
    name: "Income",
  },
];

export const Add = () => {
  return (
    <Layout>
      <form className="grid grid-cols-1 gap-1 p-2 py-4">
        <BackBtn link="/dashboard" />
        {/*categories div  */}
        <Categories />
        {/* row 1 */}
        <div className="flex items-center gap-5 p-2">
          <div className="flex flex-col justify-center gap-1">
            <p className="font-semibold text-lg text-gray-800">Wallet</p>
            <SelectBtn title="Main" options={WalletsOptions} />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="font-semibold text-lg text-gray-800">Type</p>
            <SelectBtn title="Expense" options={TypeOptions} />
          </div>
        </div>
        {/* amount */}
        <div className="flex flex-col justify-center gap-1">
          <InputGroup
            label="Amount"
            placeholder="Expense Amount"
            type="Number"
            required={true}
          />
        </div>
        {/* date time*/}
        <div className="flex flex-col justify-center gap-1">
          <InputGroup
            label="Date & Time"
            placeholder="Expense Amount"
            type="datetime-local"
            required={true}
          />
        </div>
        {/* description */}
        <div className="flex flex-col justify-center gap-1">
          <TextArea
            label="Description"
            placeholder="Add some description to remember your expense later"
          />
        </div>
        {/* submit button */}
        <button className="bg-blue-800 text-gray-100 my-3 mx-2 px-3 py-1 rounded-md text-lg transition-all hover:bg-blue-700 hover:shadow-lg">
          Submit
        </button>
      </form>
    </Layout>
  );
};
