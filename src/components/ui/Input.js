import * as React from "react";
import { cn } from "lib/utils";
import { cva } from "class-variance-authority";

const inputvariants = cva(
  "w-full flex items-center justify-center cursor-text flex-grow",
  {
    variants: {
      fill: {
        gray_100_01: "bg-gray-100_01 text-black-900",
        gray_800_01: "bg-gray-800_01 text-gray-300_02",
      },
      size: {
        XS: "h-[2.00rem] px-[0.63rem] text-[0.75rem]",
        sm: "h-[2.50rem] px-[0.63rem] text-[0.88rem]",
      },
      shape: {
        round: "rounded-md",
      },
    },
    defaultvariants: {},
  }
);

const Input = React.forwardRef(
  (
    {
      variant = "fill",
      colorscheme = "gray_100_01",
      shape,
      size = "xs",
      className,
      type,
      ...props
    },
    ref
  ) => {
    return (
      <input
        type={type}
        className={cn(
          inputvariants({ [variant]: colorscheme, size, shape, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const InputGroup = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn("relative flex w-full", className)}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";

const InputLeftElement = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "absolute aspect-square h-full left-0 justify-center flex items-center",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

InputLeftElement.displayName = "InputLeftElement";

const InputRightElement = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "absolute aspect-square h-full right-0 justify-center flex items-center",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

InputRightElement.displayName = "InputRightElement";

export { Input, InputGroup, InputLeftElement, InputRightElement };
