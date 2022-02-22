type CardPricingProps = {
  /**
   * string
   */
  title: string;
  /**
   * string
   */
  price: string;
  /**
   * string
   */
  currency: string;
  /**
   * string
   */
  period: string;
  /**
   * {title: string; included: boolean}[]
   */
  features: {
    title: string;
    included: boolean;
  }[];
  /**
   * { title: string; action: () => void }
   */
  action: {
    label: string;
    action: () => void;
  };
};

export default CardPricingProps;