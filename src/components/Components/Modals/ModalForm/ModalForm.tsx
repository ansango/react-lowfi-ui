/**
 * ?ModalForm Component
 */

import { FC, ReactElement } from "react";
// import * as cn from "./ModalFormStyles";

export type ModalFormProps = {
  opened: boolean;
  element: ReactElement;
};

/**
 * Description of ModalForm component displayed in Storybook
 */

const ModalForm: FC<ModalFormProps> = () => {
  return (
    <div>
      <span>ModalForm</span>
    </div>
  );
};

export default ModalForm;
