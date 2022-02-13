/**
 * ?Breadcrumb Component
 */

import { FC, ReactNode } from "react";
import Icon from "../../Atoms/Icon/Icon";

// import * as cn from "./BreadcrumbStyles";

export type BreadcrumbProps = {
  routes: {
    level: number;
    title: string;
    path: string;
    LinkElement?: FC<{ children: ReactNode }>;
    current?: boolean;
  }[];
  className?: string;
};

/**
 * Description of Breadcrumb component displayed in Storybook
 */

const Breadcrumb: FC<BreadcrumbProps> = ({ routes }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {routes.map(({ title, level, LinkElement, current }) => {
          const isLevelOne = level === 1;
          return (
            <li key={level} className="flex items-center">
              {!current && LinkElement ? (
                <LinkElement>
                  <span className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    {!isLevelOne && <Icon icon="ChevronRightIcon" classIcon="mr-2 w-4 h-4" />}
                    {isLevelOne && <Icon icon="HomeIcon" classIcon="mr-2 w-4 h-4" />}
                    {title}
                  </span>
                </LinkElement>
              ) : (
                <div>
                  <span className="inline-flex items-center ml-1 text-sm font-medium md:ml-2 dark:text-gray-500">
                    <Icon icon="ChevronRightIcon" classIcon="mr-2 w-4 h-4" />
                    <span className="text-gray-400">{title}</span>
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
