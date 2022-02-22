import { ReactChild, ReactNode } from "react";

export type CardFormProps = {
  header?: ReactChild;
  children: ReactNode;
  footer?: ReactChild;
};
