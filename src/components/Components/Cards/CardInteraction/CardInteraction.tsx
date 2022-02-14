/**
 * ?CardInteraction Component
 */

import { FC } from "react";
// import * as cn from "./CardInteractionStyles";
import img from "../../../../../assets/profile-picture-3.jpg";
import { DropdownIcon } from "../../Dropdowns";
export type CardInteractionProps = {
  /**
   * Description of options in Storybook
   */
  option?: "option__one" | "option__two" | "option__three";
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Class Name override
   */
  className?: string;
};

/**
 * Description of CardInteraction component displayed in Storybook
 */

const CardInteraction: FC<CardInteractionProps> = () => {
  return (
    <div className="max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
        <DropdownIcon
          button={{
            icon: "DotsVerticalIcon",
          }}
          placement="bottom-start"
          options={[
            {
              label: "Option One",
              action: () => console.log("Option One"),
            },
          ]}
        />
      </div>
      <div className="flex flex-col items-center pb-10">
        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={img} alt="Bonnie image" />
        <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <a
            href="#"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add friend
          </a>
          <a
            href="#"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardInteraction;
