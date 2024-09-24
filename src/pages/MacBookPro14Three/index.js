import UserProfile from "../../components/UserProfile";
import { ModifiedImg, Button, Input, Heading } from "components/ui";
import React, { Suspense } from "react";

const grayEngineeringPlateDetailsList = [
  {
    userImage: "images/img_frame_gray_300_02_12x12.svg",
    userDescription:
      "Plate that has 20ft by 12 ft, apply soil pressures, pin ends",
  },
  {
    userImage: "images/img_frame_3.svg",
    userDescription:
      "Plate that has 20ft by 12 ft, apply soil pressures, pin ends",
  },
  {
    userImage: "images/img_frame_3.svg",
    userDescription:
      "Plate that has 20ft by 12 ft, apply soil pressures, pin ends",
  },
];

export default function MainContentSection() {
  return (
    <div className="mt-[4.13rem] flex justify-center px-[3.50rem] md:px-[1.25rem] sm:px-[1.00rem]">
      <div className="flex w-[54%] flex-col items-center gap-[2.00rem] 1g:w-full md:w-full">
        <Heading
          size="text2x1"
          as="h1"
          className="text-[2.00rem] font-medium text-gray-50 1g:text-[1.69rem] md: text-[1.63rem] sm: text-[1.50rem]"
        >
          SAP2000 AI Model Builder
        </Heading>
        <div className="mx-auto flex w-full max-w-[47.88rem] items-center justify-center gap-[1.00rem] self-stretch 1g:px-[1.25rem] md: flex-col md:px-[1.25rem]">
          <Input
            size="sm"
            colorScheme="gray_800_01"
            placeholder={`What do you want to build?`}
            className="rounded-[20px] px-[0.63rem] font-light"
          />
          <Button
            size="1g"
            colorScheme="gray_300_01"
            className="w-full min-w-[8.13rem] max-w-[8.13rem] rounded-[20px] px-[1.13rem]"
          >
            Start Thinking
          </Button>
          <ModifiedImg
            src="images/img_frame_gray_50_16x16.svg"
            alt="Placeholder Image"
            className="h-[1.00rem] w-[1.00rem] md:w-full"
          />
        </div>
        <div className="mr-[17.00rem] flex gap-[0.63rem] self-stretch md:mr-0 md:flex-col">
          <Suspense fallback={<div>Loading feed ...</div>}>
            {grayEngineeringPlateDetailsList.map((d, index) => (
              <UserProfile
                {...d}
                key={"featuresList" + index}
                className="bg-gray-900_03"
              />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
