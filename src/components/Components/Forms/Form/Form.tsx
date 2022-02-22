/**
 * ?Form Component
 */

import { FC, ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
// import * as cn from "./FormStyles";

export type FormProps = {
  defaultValues?: any;
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
  className?: string;
};

/**
 * Description of Form component displayed in Storybook
 */

const Form: FC<FormProps> = ({ defaultValues, children, onSubmit, className }) => {
  const methods = useForm({ defaultValues });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
