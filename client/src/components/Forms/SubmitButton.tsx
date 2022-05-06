import { SubmitHandler, useFormContext } from "react-hook-form";
import { Button, ButtonProps } from "../Button";

type Props<FV> = ButtonProps & {
  submit: SubmitHandler<FV>;
};

export const SubmitButton = <FV,>({ submit, ...rest }: Props<FV>) => {
  const { handleSubmit } = useFormContext<FV>();
  return (
    <Button
      {...rest}
      onClick={() => {
        handleSubmit(submit)();
      }}
    />
  );
};
