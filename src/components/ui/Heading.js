import React from "react";

const sizes = {
  textxl: "text-[1.25rem] font-medium lg:text-[1.06rem]",
  text2x1:
    "text-[2.00rem] font-medium lg:text-[1.69rem] md: text-[1.88rem] sm:text-[1.75rem]",
};
const Heading = ({
  children,
  className = "",
  size = "textxl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-black-900 font-inter ${className} ${sizes[size]} `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Heading;
