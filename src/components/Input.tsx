import { HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface Props {
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    className?: string;
    registerOption: UseFormRegisterReturn;
    label?: string;
    error?: FieldError;
}

const Input = ({
    type = "text",
    placeholder = "وارد کنید",
    className = "",
    registerOption,
    label = "",
    error,
}: Props) => {
    return (
        <label>
            <div className="label">
                <span className="label-text text-base">{label}</span>
            </div>
            <input
                {...registerOption}
                type={type}
                placeholder={placeholder}
                className={`input input-bordered w-full mb-3 input-md ${className} ${error && "input-error"}`}
            />
        </label>
    );
};

export default Input;
