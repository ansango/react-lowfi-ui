type CardEcommerceProps = {
  onDetail: () => void;
  product: {
    title: string;
    price: number;
    image?: string;
    rating: number;
  };
  action: {
    label: string;
    action: () => void;
  };
};

export default CardEcommerceProps;
