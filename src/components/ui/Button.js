import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "lib/utils";

export const buttonVariants = cva(
  "w-full flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap",
  {
    variants: {
      fill: {
        gray_900_02: "bg-gray-900_02 text-white-a700",
        gray_800_01: "bg-gray-800_01 text-gray-50",
        gray_300_01: "bg-gray-300_01 text-gray-900_02",
        gray_300: "bg-gray-300",
        gray_900: "bg-gray-900 text-white-a700",
        gray_100_01: "bg-gray-100_01",
        gray_900_03: "bg-gray-900_03",
      },
      outline: {
        black_900:
          "border-black-900 border-[0.5px] border-solid text-black-900",
      },
      size: {
        lg: "h-[2.50rem] px-[1.13rem] text-[0.88rem]",
        XS: "h-[1.25rem] px-[0.13rem] text-[0.63rem]",
        md: "h-[2.00rem] px-[1.13rem] text-[0.88rem]",
        sm: "h-[2.00rem] px-[0.50rem]",
      },
      shape: {
        round: "rounded",
      },
    },
    defaultvariants: {},
  }
);

export const Button = React.forwardRef(
  (
    {
      colorscheme = "gray_900_03",
      variant = "fill",
      shape,
      size = "sm",
      children,
      leftIcon,
      rightIcon,
      className,
      aschild = false,
      ...props
    },
    ref
  ) => {
    const Comp = aschild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({ [variant]: colorscheme, size, shape, className })
        )}
        ref={ref}
        {...props}
      >
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
      </Comp>
    );
  }
);
Button.displayName = "Button";
