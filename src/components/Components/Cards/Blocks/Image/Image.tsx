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
};

/**
 * Description of Image component displayed in Storybook
 */

const Image: FC<ImageProps> = ({ src, alt, ImageNextJS }) => {
  if (ImageNextJS) {
    return <ImageNextJS src={src} className="rounded-t-lg" alt={alt} />;
  }
  return <img className="rounded-t-lg" src={src} alt={alt} />;
};

export default Image;
