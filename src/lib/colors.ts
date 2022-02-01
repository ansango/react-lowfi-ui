export type ColorProps = {
  name: string;
  value: string;
};

const BlueLightLink: ColorProps = {
  name: "Blue Light Link",
  value: "#4FC3F7",
};

const BlueMidLink: ColorProps = {
  name: "Blue Mid Link",
  value: "#29B6F6",
};

const BlueLink: ColorProps = {
  name: "Blue Link",
  value: "#03A9F4",
};

const BlueScaleLink = [BlueLink, BlueMidLink, BlueLightLink];

const BlueLight: ColorProps = {
  name: "Blue Light",
  value: "#E6F5FF",
};

const BlueMid: ColorProps = {
  name: "Blue Mid",
  value: "#B3E5FC",
};

const Blue: ColorProps = {
  name: "Blue",
  value: "#81D4FA",
};

const BlueScale: ColorProps[] = [Blue, BlueMid, BlueLight];

const CyanLight: ColorProps = {
  name: "Cyan Light",
  value: "#E0F7FA",
};

const CyanMid: ColorProps = {
  name: "Cyan Mid",
  value: "#B2EBF2",
};

const Cyan: ColorProps = {
  name: "Cyan",
  value: "#80DEEA",
};

const CyanScale: ColorProps[] = [Cyan, CyanMid, CyanLight];

const GreenLight: ColorProps = {
  name: "Green Light",
  value: "#E8F5E9",
};

const GreenMid: ColorProps = {
  name: "Green Mid",
  value: "#C8E6C9",
};

const Green: ColorProps = {
  name: "Green",
  value: "#A5D6A7",
};

const GreenScale: ColorProps[] = [Green, GreenMid, GreenLight];

const YellowLight: ColorProps = {
  name: "Yellow Light",
  value: "#FFFDE7",
};

const YellowMid: ColorProps = {
  name: "Yellow Mid",
  value: "#FFF9C4",
};

const Yellow: ColorProps = {
  name: "Yellow",
  value: "#FFF176",
};

const YellowScale: ColorProps[] = [Yellow, YellowMid, YellowLight];

const OrangeLight: ColorProps = {
  name: "Orange Light",
  value: "#FFECB3",
};

const OrangeMid: ColorProps = {
  name: "Orange Mid",
  value: "#FFE0B2",
};

const Orange: ColorProps = {
  name: "Orange",
  value: "#FFCC80",
};

const OrangeScale: ColorProps[] = [Orange, OrangeMid, OrangeLight];

const RedLight: ColorProps = {
  name: "Red Light",
  value: "#FFCDD2",
};

const RedMid: ColorProps = {
  name: "Red Mid",
  value: "#EF9A9A",
};

const Red: ColorProps = {
  name: "Red",
  value: "#E57373",
};

const RedScale: ColorProps[] = [Red, RedMid, RedLight];

const PinkLight: ColorProps = {
  name: "Pink Light",
  value: "#F8BBD0",
};

const PinkMid: ColorProps = {
  name: "Pink Mid",
  value: "#F48FB1",
};

const Pink: ColorProps = {
  name: "Pink",
  value: "#F06292",
};

const PinkScale: ColorProps[] = [Pink, PinkMid, PinkLight];

const PurpleLight: ColorProps = {
  name: "Purple Light",
  value: "#E1BEE7",
};

const PurpleMid: ColorProps = {
  name: "Purple Mid",
  value: "#C5CAE9",
};

const Purple: ColorProps = {
  name: "Purple",
  value: "#9575CD",
};

const PurpleScale: ColorProps[] = [Purple, PurpleMid, PurpleLight];

const GrayScale: ColorProps[] = [
  { name: "Black", value: "#000000" },
  { name: "Gray Dark", value: "#212121" },
  { name: "Gray", value: "#424242" },
  { name: "Gray Light", value: "#757575" },
  { name: "Extra Light Gray", value: "#BDBDBD" },
  { name: "Ultra Light Gray", value: "#E0E0E0" },
  { name: "White", value: "#FFFFFF" },
];

const Colors: ColorProps[] = [
  ...BlueScaleLink,
  ...CyanScale,
  ...GreenScale,
  ...YellowScale,
  ...OrangeScale,
  ...RedScale,
  ...PinkScale,
  ...PurpleScale,
  ...GrayScale,
];

const ColorNames: string[] = Colors.map((color) => color.name);

const ColorValues: string[] = Colors.map((color) => color.value);

export {
  Colors,
  ColorNames,
  ColorValues,
  BlueScale,
  BlueScaleLink,
  CyanScale,
  GreenScale,
  YellowScale,
  OrangeScale,
  RedScale,
  PinkScale,
  PurpleScale,
  GrayScale,
};
