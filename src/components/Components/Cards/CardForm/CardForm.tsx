/**
 * ?CardForm Component
 */

import { FC, ReactNode, ReactChild } from "react";

// import * as cn from "./CardFormStyles";

export type CardFormProps = {
  header?: ReactChild;
  children: ReactNode;
  footer?: ReactChild;
};

/**
 * Get started with a large variety of Tailwind CSS card examples for your web project
 */

const CardForm: FC<CardFormProps> = ({ children, header, footer }) => {
  return (
    <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 space-y-6">
      {header}
      {children}
      {footer}
    </div>
  );
};

export default CardForm;
