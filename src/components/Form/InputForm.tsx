import clsx from "clsx";
import * as React from "react";
import { IconType } from "react-icons";
import Typography from "../Typografy/Text";

export type InputProps = {
  /** Input label */
  label: string | null;
  /**
   * id to be initialized with React Hook Form,
   * must be the same with the pre-defined types.
   */
  id: string;
  /** Input placeholder */
  placeholder?: string;
  /** Small text below input, useful for additional information */
  helperText?: string;
  /**
   * Input type
   * @example text, email, password
   */
  type?: React.HTMLInputTypeAttribute;

  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  leftIcon?: IconType | string;
  rightNode?: React.ReactNode;
  containerClassName?: string;
  errorMessage?: string;
  variant?: "outline" | "solid" | "underlined";
} & React.ComponentPropsWithoutRef<"input">;

export default function Input({
  label,
  placeholder = "",
  helperText,
  id,
  type = "text",
  disabled,
  readOnly = false,
  hideError = false,
  leftIcon: LeftIcon,
  rightNode,
  containerClassName,
  errorMessage,
  color = "sky",
  variant = "outline",
  ...rest
}: InputProps) {
  const withLabel = label !== null;

  return (
    <div className={containerClassName}>
      {withLabel && (
        <Typography as='label' variant='s3' className='block' htmlFor={id}>
          {label}
        </Typography>
      )}
      <div className={clsx("relative", withLabel && "mt-1")}>
        {LeftIcon && (
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            {typeof LeftIcon === "string" ? (
              <Typography variant='s4'>{LeftIcon}</Typography>
            ) : (
              <LeftIcon size='1em' className='text-xl text-typo' />
            )}
          </div>
        )}
        <input
          {...rest}
          type={type}
          name={id}
          id={id}
          readOnly={readOnly}
          disabled={disabled}
          className={clsx(
            "flex w-full",
            "min-h-[2.25rem] py-0 md:min-h-[2.5rem]",
            (readOnly || disabled) && LeftIcon && "pl-9",
            rightNode && "pr-10",
            variant === "outline" && [
              color === "sky" && [
                " focus:border-sky-500 focus:ring-sky-500 border-gray-300 rounded-lg shadow-sm",
              ],
              color === "pink" && [
                " focus:border-pink-500 focus:ring-pink-500 border-gray-300 rounded-lg shadow-sm",
              ],
              color === "green" && [
                " focus:border-green-500 focus:ring-green-500 border-gray-300 rounded-lg shadow-sm",
              ],
              color === "yellow" && [
                " focus:border-yellow-500 focus:ring-yellow-500 border-gray-300 rounded-lg shadow-sm",
              ],
              color === "red" && [
                " focus:border-red-500 focus:ring-red-500 border-gray-300 rounded-lg shadow-sm",
              ],
              color === "purple" && [
                " focus:border-purple-500 focus:ring-purple-500 border-gray-300 rounded-lg shadow-sm",
              ],
              color === "blue" && [
                " focus:border-blue-500 focus:ring-blue-500 border-gray-300 rounded-lg shadow-sm",
              ],
              color === "indigo" && [
                " focus:border-indigo-500 focus:ring-indigo-500 border-gray-300 rounded-lg shadow-sm",
              ],
              color === "gray" && [
                " focus:border-gray-500 focus:ring-gray-500 border-gray-300 rounded-lg shadow-sm",
              ],
              color === "indigo" && [
                " focus:border-indigo-500 focus:ring-indigo-500 border-gray-300 rounded-lg shadow-sm",
              ],
            ],
            variant === "solid" && [
              color === "sky" && [
                " bg-sky-50 border-transparent focus:border-sky-500 focus:ring-sky-500 rounded-lg shadow-sm",
              ],
              color === "pink" && [
                " bg-pink-50 border-transparent focus:border-pink-500 focus:ring-pink-500 rounded-lg shadow-sm",
              ],
              color === "green" && [
                " bg-green-50 border-transparent focus:border-green-500 focus:ring-green-500 rounded-lg shadow-sm",
              ],
              color === "yellow" && [
                " bg-yellow-50 border-transparent focus:border-yellow-500 focus:ring-yellow-500 rounded-lg shadow-sm",
              ],
              color === "red" && [
                " bg-red-50 border-transparent focus:border-red-500 focus:ring-red-500 rounded-lg shadow-sm",
              ],
              color === "purple" && [
                " bg-purple-50 border-transparent focus:border-purple-500 focus:ring-purple-500 rounded-lg shadow-sm",
              ],
              color === "blue" && [
                " bg-blue-50 border-transparent focus:border-blue-500 focus:ring-blue-500 rounded-lg shadow-sm",
              ],
              color === "indigo" && [
                " bg-indigo-50 border-transparent focus:border-indigo-500 focus:ring-indigo-500 rounded-lg shadow-sm",
              ],
              color === "cyan" && [
                " bg-cyan-50 border-transparent focus:border-cyan-500 focus:ring-cyan-500 rounded-lg shadow-sm",
              ],
              color === "emerald" && [
                " bg-emerald-50 border-transparent focus:border-emerald-500 focus:ring-emerald-500 rounded-lg shadow-sm",
              ],
            ],
            variant === "underlined" && [
              color === "sky" && [
                " focus:border-b-sky-500 border-b-2 border-0 border-gray-200 focus:outline-none focus:ring-0",
              ],
              color === "pink" && [
                " focus:border-b-pink-500 border-b-2 border-0 border-gray-200 focus:outline-none focus:ring-0",
              ],
              color === "green" && [
                " focus:border-b-green-500 border-b-2 border-0 border-gray-200 focus:outline-none focus:ring-0",
              ],
              color === "yellow" && [
                " focus:border-b-yellow-500 border-b-2 border-0 border-gray-200 focus:outline-none focus:ring-0",
              ],
              color === "red" && [
                " focus:border-b-red-500 border-b-2 border-0 border-gray-200 focus:outline-none focus:ring-0",
              ],
              color === "purple" && [
                " focus:border-b-purple-500 border-b-2 border-0 border-gray-200 focus:outline-none focus:ring-0",
              ],
              color === "blue" && [
                " focus:border-b-blue-500 border-b-2 border-0 border-gray-200 focus:outline-none focus:ring-0",
              ],
              color === "indigo" && [
                " focus:border-b-indigo-500 border-b-2 border-0 border-gray-200 focus:outline-none focus:ring-0",
              ],
              color === "cyan" && [
                " focus:border-b-cyan-500 border-b-2 border-0 border-gray-200 focus:outline-none focus:ring-0",
              ],
            ]
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />
        {rightNode && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
            {rightNode}
          </div>
        )}
      </div>
      {helperText && (
        <Typography variant='c1' color='secondary' className='mt-1'>
          {helperText}
        </Typography>
      )}
      {!hideError && errorMessage && (
        <Typography variant='c1' color='danger' className='mt-1'>
          {errorMessage}
        </Typography>
      )}
    </div>
  );
}
