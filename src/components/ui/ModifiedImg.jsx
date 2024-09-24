import React from "react";

const ModifiedImg = ({
  className,
  src = "defaultNoData.png",
  alt = "testModifiedImg",
  ...restProps
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );
};
export { ModifiedImg };
