import { ReactNode } from "react";
import {
  useForm,
  SubmitHandler,
  UnpackNestedValue,
  DeepPartial,
  FormProvider,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "./forms.scss";

type Props<FormValues> = {
  onSubmit: SubmitHandler<FormValues>;
  schema?: any;
  formName: string;
  defaultValues?: UnpackNestedValue<DeepPartial<FormValues>>;
  children: ReactNode | ReactNode[];
};

export const Form = <FormValues,>(props: Props<FormValues>) => {
  const { formName, defaultValues, children, onSubmit, schema } = props;
  const methods = useForm<FormValues>({
    mode: "all",
    defaultValues,
    resolver: schema ? yupResolver(schema) : undefined,
  });
  return (
    <FormProvider {...methods}>
      <form name={formName} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
