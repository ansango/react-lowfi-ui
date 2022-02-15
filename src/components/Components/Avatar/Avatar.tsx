/**
 * ?Avatar Component
 */

import { FC } from "react";
import { Image } from "../../Atoms/Blocks";
import * as cn from "./AvatarStyles";

export type AvatarProps = {
  /**
   * xsmall | small | medium | large | xlarge
   */
  size: "xsmall" | "small" | "base" | "large" | "xlarge";
  /**
   * string
   */
  imgUrl: string;
};

/**
 * Show image for user or products
 */

const Avatar: FC<AvatarProps> = ({ imgUrl, size }) => {
  return <Image src={imgUrl} alt="" className={`${cn.bAv} ${cn.size[size]} w-`} />;
};

export default Avatar;
