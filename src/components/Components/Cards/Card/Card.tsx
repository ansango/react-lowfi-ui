/**
 * ?Card Component
 */

import { FC } from "react";
// import * as cn from "./CardStyles";

export type CardProps = {
  /**
   * string
   */
  title: string;
  /**
   * string | string[]
   */
  content: string | string[];
  /**
   * ()=> void
   */
  action?: () => void;
};

/**
 * Description of Card component displayed in Storybook
 */

const Card: FC<CardProps> = ({ title, content, action }) => {
  const simpleContent = typeof content === "string";

  return (
    <div
      className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
      onClick={action}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      {simpleContent ? (
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">{content}</p>
      ) : (
        content.map((item, index) => (
          <p key={index} className="font-normal text-gray-700 dark:text-gray-400 mb-2">
            {item}
          </p>
        ))
      )}
    </div>
  );
};

export default Card;
