import { ReactChild, ReactNode } from "react";

type CardFormProps = {
  header?: ReactChild;
  children: ReactNode;
  footer?: ReactChild;
};

export default CardFormProps;
