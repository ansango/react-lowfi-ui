/**
 * ?CardList Component
 */

import { FC } from "react";
import Avatar from "../../Avatar/Avatar";
// import * as cn from "./CardListStyles";

export type CardListProps = {
  detail: {
    title: string;
    onDetail: () => void;
  };
  title: string;
  avatar: "xsmall" | "small" | "base" | "large" | "xlarge";
  data: {
    name: string;
    description: string;
    image: string;
    bold?: string;
  }[];
};

/**
 * Description of CardList component displayed in Storybook
 */

const CardList: FC<CardListProps> = ({ title, data, detail, avatar }) => {
  return (
    <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{title}</h3>
        <span
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer"
          onClick={detail.onDetail}
        >
          {detail.title}
        </span>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {data.map(({ name, description, image, bold }, index) => (
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Avatar size={avatar} imgUrl={image} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">{description}</p>
                </div>
                {bold && (
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {bold}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardList;
