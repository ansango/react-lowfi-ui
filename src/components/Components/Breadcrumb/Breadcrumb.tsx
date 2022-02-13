/**
 * ?Breadcrumb Component
 */

import { FC, ReactNode } from "react";
import Icon from "../../Atoms/Icon/Icon";

import * as cn from "./BreadcrumbStyles";

export type BreadcrumbProps = {
  routes: {
    level: number;
    title: string;
    path: string;
    LinkElement?: FC<{ children: ReactNode }>;
    current?: boolean;
  }[];
  kind?: "solid" | "plain";
  className?: string;
};

/**
 * Description of Breadcrumb component displayed in Storybook
 */

const Breadcrumb: FC<BreadcrumbProps> = ({ routes, kind = "plain" }) => {
  return (
    <nav className={cn.bKind[kind]} aria-label="Breadcrumb">
      <ol className={cn.lBase}>
        {routes.map(({ title, level, LinkElement, current }) => {
          const isLevelOne = level === 1;
          return (
            <li key={level} className={cn.lItem}>
              {!current && LinkElement ? (
                <LinkElement>
                  <span className={cn.tLink}>
                    {!isLevelOne && <Icon icon="ChevronRightIcon" classIcon={cn.iArrow} />}
                    {isLevelOne && <Icon icon="HomeIcon" classIcon={cn.iBase} />}
                    {title}
                  </span>
                </LinkElement>
              ) : (
                <div>
                  <span className={cn.tCurrent}>
                    <Icon icon="ChevronRightIcon" classIcon={cn.iArrow} />
                    {title}
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
