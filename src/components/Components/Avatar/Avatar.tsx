/**
 * ?Avatar Component
 */

import { FC } from "react";
import { Image } from "../../Atoms/Blocks";
import * as cn from "./AvatarStyles";

export type AvatarProps = {
  size: "xsmall" | "small" | "base" | "large" | "xlarge";
  imgUrl: string;
};

/**
 * Description of Avatar component displayed in Storybook
 */

const Avatar: FC<AvatarProps> = ({ imgUrl, size }) => {
  return <Image src={imgUrl} alt="" className={`${cn.bAv} ${cn.size[size]} w-` } />;
};

export default Avatar;
