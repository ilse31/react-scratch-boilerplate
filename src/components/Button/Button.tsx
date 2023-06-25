import React from "react";
import { IconType } from "react-icons";
import clsxm from "src/helpers/clsx";
import { ImSpinner2 } from "react-icons/im";

const ButtonVariant = [
  "primary",
  "secondary",
  "danger",
  "outline",
  "ghost",
  "warning",
  "sky",
  "rose",
  "pink",
  "purple",
  "violet",
  "indigo",
  "cyan",
] as const;
const ButtonSize = ["sm", "base", "lg"] as const;

type ButtonProps = {
  isLoading?: boolean;
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = "primary",
      size = "base",
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          "inline-flex capitalize items-center justify-center rounded-md font-medium",
          "focus:outline-none focus-visible:ring",
          "shadow-sm",
          "transition-colors duration-300",
          //#region  //*=========== Size ===========
          [
            size === "lg" && [
              "min-h-[2.75rem] px-3.5 md:min-h-[3rem]",
              "text-base",
            ],
            size === "base" && [
              "min-h-[2.25rem] px-3 md:min-h-[2.5rem]",
              "text-sm md:text-base",
            ],
            size === "sm" && [
              "min-h-[1.75rem] px-2 md:min-h-[2rem]",
              "text-xs md:text-sm",
            ],
          ],
          [
            variant === "primary" && [
              "bg-primary-500 text-white",
              "border border-primary-600",
              "hover:bg-primary-600 hover:text-white",
              "active:bg-primary-700",
              "disabled:bg-primary-700",
              "focus-visible:ring-primary-400",
            ],
            variant === "secondary" && [
              "bg-secondary-500 text-white",
              "border border-secondary-600",
              "hover:bg-secondary-600 hover:text-white",
              "active:bg-secondary-700",
              "disabled:bg-secondary-700",
              "focus-visible:ring-secondary-400",
            ],
            variant === "danger" && [
              "bg-red-500 text-white",
              "border border-red-600",
              "hover:bg-red-600 hover:text-white",
              "active:bg-red-700",
              "disabled:bg-red-700",
              "focus-visible:ring-red-400",
            ],
            variant === "warning" && [
              "bg-amber-500 text-white",
              "border border-amber-500",
              "hover:bg-amber-600 hover:text-white",
              "active:bg-amber-700",
              "disabled:bg-amber-700",
              "focus-visible:ring-amber-400",
            ],
            variant === "outline" && [
              "text-typo",
              "border border-gray-300",
              "hover:bg-light focus-visible:ring-primary-400 active:bg-typo-divider disabled:bg-typo-divider",
            ],
            variant === "ghost" && [
              "text-primary-500",
              "shadow-none",
              "hover:bg-primary-50 focus-visible:ring-primary-400 active:bg-primary-100 disabled:bg-primary-100",
            ],
            variant === "sky" && [
              "bg-sky-500 text-white",
              "border border-sky-600",
              "hover:bg-sky-600 hover:text-white",
              "active:bg-sky-700",
              "disabled:bg-sky-700",
              "focus-visible:ring-sky-400",
              "focus:ring-offset-sky-100",
            ],
            variant === "rose" && [
              "bg-rose-500 text-white",
              "border border-rose-600",
              "hover:bg-rose-600 hover:text-white",
              "active:bg-rose-700",
              "disabled:bg-rose-700",
              "focus-visible:ring-rose-400",
            ],
            variant === "pink" && [
              "bg-pink-500 text-white",
              "border border-pink-600",
              "hover:bg-pink-600 hover:text-white",
              "active:bg-pink-700",
              "disabled:bg-pink-700",
              "focus-visible:ring-pink-400",
            ],
            variant === "purple" && [
              "bg-purple-500 text-white",
              "border border-purple-600",
              "hover:bg-purple-600 hover:text-white",
              "active:bg-purple-700",
              "disabled:bg-purple-700",
              "focus-visible:ring-purple-400",
            ],
            variant === "violet" && [
              "bg-violet-500 text-white",
              "border border-violet-600",
              "hover:bg-violet-600 hover:text-white",
              "active:bg-violet-700",
              "disabled:bg-violet-700",
              "focus-visible:ring-violet-400",
            ],
            variant === "indigo" && [
              "bg-indigo-500 text-white",
              "border border-indigo-600",
              "hover:bg-indigo-600 hover:text-white",
              "active:bg-indigo-700",
              "disabled:bg-indigo-700",
              "focus-visible:ring-indigo-400",
            ],
            variant === "cyan" && [
              "bg-cyan-500 text-white",
              "border border-cyan-600",
              "hover:bg-cyan-600 hover:text-white",
              "active:bg-cyan-700",
              "disabled:bg-cyan-700",
              "focus-visible:ring-cyan-400",
            ],
          ],
          //#endregion  //*======== Variants ===========
          "disabled:cursor-not-allowed",
          isLoading &&
            "relative text-transparent transition-none hover:text-transparent disabled:cursor-wait",
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              {
                "text-white": [
                  "primary",
                  "secondary",
                  "danger",
                  "warning",
                ].includes(variant),
                "text-primary-500": ["outline", "ghost"].includes(variant),
              }
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {LeftIcon && (
          <div
            className={clsxm([
              size === "lg" && "mr-3",
              size === "base" && "mr-2",
              size === "sm" && "mr-1",
            ])}
          >
            <LeftIcon
              size='1em'
              className={clsxm("text-base", leftIconClassName)}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div
            className={clsxm([
              size === "lg" && "ml-3",
              size === "base" && "ml-2",
              size === "sm" && "ml-1",
            ])}
          >
            <RightIcon
              size='1em'
              className={clsxm("text-base", rightIconClassName)}
            />
          </div>
        )}
      </button>
    );
  }
);

export default Button;
