import React from "react";

const sizes = {
  textxs: "text-[0.50rem] font-normal not-italic",
  texts: "text-[0.63rem] font-normal not-italic",
  textmd: "text-[0.75rem] font-normal not-italic",
  textlg: "text-[0.88rem] font-normal not-italic",
};
const Text = ({
  children,
  className = "",
  as,
  size = "textxs",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-black-900 font-inter ${className} ${sizes[size]} `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
