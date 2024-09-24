import { Button, ModifiedImg, Text } from "components/ui";
import React from "react";

export default function UserProfile1({
  coordinatesText = "Set coordinates for plates",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col justify-center items-center flex-1`}
    >
      <ModifiedImg
        src="images/img_frame_4.svg"
        alt="Frame Image"
        className="h-[0.75rem] w-[0.75rem]"
      />
      <div className="ml-[0.75rem] flex flex-1 items-center justify-between gap-[1.25rem] rounded-md border border-solid border-gray-300_02 px-[0.75rem] py-[0.50rem]">
        <Text
          size="textmd"
          as="p"
          className="text-[0.75rem] font-normal text-gray-300_02"
        >
          {coordinatesText}
        </Text>
        <ModifiedImg
          src="images/img_frame_2.svg"
          alt="Plate Image"
          className="h-[0.75rem] w-[0.75rem]"
        />
      </div>
      <Button
        shape="round"
        className="ml-[0.38rem] w-[2.00rem] rounded-md px-[0.50rem]"
      >
        <ModifiedImg src="images/img_frame_gray_300_02. svg" />
      </Button>
    </div>
  );
}
