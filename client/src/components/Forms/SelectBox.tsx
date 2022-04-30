import { useState, useRef } from "react";
import cn from "classnames";
import { useFormContext, useFormState } from "react-hook-form";
import { useOutsideClick } from "@hooks";

import "./forms.scss";

type Option = {
  value: string;
  label: string;
};
type Props = {
  options: Option[];
  name: string;
};

export const SelectBox = ({ options, name }: Props) => {
  const { register, getValues, setValue } = useFormContext();
  const { errors } = useFormState({ name });

  const [isOpen, setOpen] = useState(false);
  const selectRef = useRef(null);
  useOutsideClick(selectRef, () => {
    setOpen(false);
  });

  const selectedValue: string | undefined = getValues()[name];
  return (
    <span>
      <select id={name} className="html-select" {...register(name)}>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <div
        ref={selectRef}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="custom-select-wrapper"
      >
        <label>{name}</label>
        <div className={cn("custom-select", { open: isOpen })}>
          <div className="custom-select__trigger">
            <span>
              {options.find((item) => item.value === selectedValue)?.label ||
                "Select"}
            </span>
            <div className="arrow"></div>
          </div>
          <div className="custom-options">
            {options.map((item) => (
              <div
                key={item.value}
                onClick={() => {
                  setValue(name, item.value);
                }}
                className="option-container"
              >
                <span
                  className={cn("custom-option", {
                    selected: selectedValue === item.value,
                  })}
                  data-value={item.value}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {errors[name] && <span>{errors[name].message}</span>}
    </span>
  );
};
