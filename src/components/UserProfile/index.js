import { Text, ModifiedImg } from "components/ui";
import React from "react";

export default function UserProfile({
  userImage = "images/img_frame_black_900_12x12.svg",
  userDescription = "Plate that has 20ft by 12 ft, apply soil pressures, pin ends",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center w-[32%] md:w-full gap-[0.75rem] p-[0.63rem] rounded-1g `}
    >
      <ModifiedImg
        src={userImage}
        alt="Image Frame"
        className="h-[0.75rem] w-[0.75rem]"
      />
      <Text
        size="texts"
        as="p"
        className="w-[88%] text-[0.63rem] font-normal leading-[0.75rem] text-black-900"
      >
        {userDescription}
      </Text>
    </div>
  );
}
