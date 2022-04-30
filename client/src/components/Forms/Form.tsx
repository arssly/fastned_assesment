import { ReactNode } from "react";
import {
  useForm,
  SubmitHandler,
  UnpackNestedValue,
  DeepPartial,
  FormProvider,
} from "react-hook-form";

import "./forms.scss";

type Props<FormValues> = {
  onSubmit: SubmitHandler<FormValues>;
  schema?: any;
  formName: string;
  defaultValues?: UnpackNestedValue<DeepPartial<FormValues>>;
  children: ReactNode;
};

export const Form = <FormValues,>(props: Props<FormValues>) => {
  const { formName, defaultValues, children, onSubmit } = props;
  const methods = useForm<FormValues>({
    defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <form name={formName} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
