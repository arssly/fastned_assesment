import { FC } from "react";
import cn from "classnames";
import { useFormContext, useFormState } from "react-hook-form";

type Props = {
  name: string;
  className?: string;
};
export const TextInput: FC<Props> = ({ name, className }) => {
  const { register } = useFormContext();
  const { errors } = useFormState({ name });

  return (
    <span className={cn("text-input", className)}>
      <label htmlFor={name}>{name}</label>
      <input type="text" {...register(name)} placeholder={name} />
      {errors[name] && (
        <span className="form-error-message">{errors[name]?.message}</span>
      )}
    </span>
  );
};
