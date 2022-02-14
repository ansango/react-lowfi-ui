/**
 * ?Image Component
 */

import { FC } from "react";
// import * as cn from "./ImageStyles";

export type ImageProps = {
  /**
   * string
   */
  src: string;
  /**
   * string
   */
  alt: string;
  /**
   * ImageNextJS
   */
  ImageNextJS?: any;
  /**
   * className
   */
  className?: string;
};

/**
 * Description of Image component displayed in Storybook
 */

const Image: FC<ImageProps> = ({ src, alt, ImageNextJS, className }) => {
  if (ImageNextJS) {
    return <ImageNextJS src={src} className={className} alt={alt} />;
  }
  return <img className={className} src={src} alt={alt} />;
};

export default Image;
