import { Helmet } from "react-helmet";
import UserProfile from " ../../components/UserProfile";
import { ModifiedImg, Text, Heading, Button, Separator, Input } from "components/ui";
import React, { Suspense } from "react";

const engineeringPlateDetailsList = [
  {
    userImage: "images/img_frame_black_900_12x12.svg",
    userDescription:
      "Plate that has 20ft by 12 ft, apply soil pressures, pin ends",
  },
  {
    userImage: "images/img_frame_12x12.svg",
    userDescription:
      "Plate that has 20ft by 12 ft, apply soil pressures, pin ends",
  },
  {
    userImage: "images/img_frame_12x12.svg",
    userDescription:
      "Plate that has 20ft by 12 ft, apply soil pressures, pin ends",
  },
];

export default function MacBookPro140nePage() {
  return (
    <>
      <Helmet>
        <title>Model Builder - Advanced SAP2000 AI Integration</title>
        <meta
          name="description"
          content="Explore the Model Builder for SAP2000 AI with PM/PV Analysis. Start building precise models with our step-by-step workflow and save your progress effortlessly."
        />
      </Helmet>
      <div className="flex w-full justify-center bg-white-a700 px-[3.50rem] py-[4.88rem] 1g:py-[2.00rem] md:p-[1.25rem] sm:p-[1.00rem]">
        <div className="mb-[4.50rem] flex w-[60%] flex-col items-center gap-[1.88rem] 1g:w-full md:w-full">
          <div className="mx-auto w-full max-w-[47.88rem] self-stretch 1g:px-[1.25rem] md:px-[1.25rem]">
            <div className="flex items-center justify-between gap-[1.25rem]">
              <div className="flex flex-1">
                <Button
                  size="md"
                  colorScheme="gray_900"
                  className="w-full min-w-[8.13rem] max-w-[8.13rem] rounded-[16px] px-[1.13rem]"
                >
                  Model Builder
                </Button>
                <Button
                  size="md"
                  variant="outline"
                  colorScheme="black 900"
                  className="w-full min-w-[8.13rem] max-w-[8.13rem] rounded-[16px] !border-[0.5px] px-[0.69rem]"
                >
                  PM/PV Analysis
                </Button>
              </div>
              <div className="flex flex-wrap items-center">
                <ModifiedImg
                  src="images/img_frame.svg"
                  alt="Frame Image"
                  className="h-[1.00rem] w-[1.00rem]"
                />
                <ModifiedImg
                  src="images/img_lock.svg"
                  alt="Lock Image"
                  className="ml-[1.13rem] h-[1.50rem] w-[1.50rem]"
                />
                <Text
                  size="textlg"
                  as="p"
                  className="ml-[0.75rem] self-start text-[0.88rem] font-normal text-black-900"
                >
                  v4.0
                </Text>
              </div>
            </div>
            <div className="mt-[4.13rem]">
              <div className="flex flex-col items-center gap-[2.00rem]">
                <Heading size="text2x1" as="h1" className="text-[2.00rem]">
                  SAP2000 AI Model Builder
                </Heading>
                <div className="flex items-center justify-center gap-[1.00rem] self-stretch md:flex-col">
                  <div className="h-[2.50rem] flex-1 rounded-[20px] bg-gray-200 md:self-stretch" />
                  <Button
                    size="lg"
                    colorScheme="gray_900"
                    className="w-full min-w-[8.13rem] max-w-[8.13rem] rounded-[20px] px-[1.13rem]"
                  >
                    Start Thinking
                  </Button>
                  <ModifiedImg
                    src="images/img_frame_black_900.svg"
                    alt="Black Frame Image"
                    className="h-[1.00rem] w-[1.00rem] md:w-full"
                  />
                </div>
                <div className="mr-[16.63rem] flex gap-[0.63rem] self-stretch md:mr-0 md:flex-col">
                  <Suspense fallback={<div>Loading feed ...</div>}>
                    {engineeringPlateDetailsList.map((d, index) => (
                      <UserProfile
                        {...d}
                        key={"listContainer" + index}
                        className="border border-solid border-black-900"
                      />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
            <div className="mt-[1.88rem] flex items-start justify-center gap-[1.00rem] md:flex-col">
              <div className="h-[0.50rem] flex-1 rounded bg-gray-100 md:self-stretch" />
              <Text
                size="texts"
                as="p"
                className="self-center text-[0.63rem] font-normal text-gray-900"
              >
                0% Complete
              </Text>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[52.25rem] items-start justify-center self-stretch 1g:px-[1.25rem] md:flex-col md:px-[1.25rem]">
            <div className="flex flex-1 flex-col gap-[1.25rem] md:self-stretch">
              <div className="ml-[1.50rem] flex items-start justify-between gap-[1.25rem] md:ml-0">
                <div className="flex items-start gap-[1.00rem] self-center">
                  <Heading
                    as="h2"
                    className="self-center text-[1.25rem] font-medium text-black-900 1g:text-[1.06rem]"
                  >
                    Steps
                  </Heading>
                  <ModifiedImg
                    src="images/img_frame_black_900_14x14.svg"
                    alt="Steps Image"
                    className="mt-[0.25rem] h-[0.88rem] w-[0.88rem]"
                  />
                </div>
                <div className="flex flex-1 justify-end gap-[0.44rem]">
                  <Button
                    size="xs"
                    variant="outline"
                    shape="round"
                    colorScheme="black_900"
                    className="w-full min-w-[5.00rem] max-w-[5.00rem] rounded !border-[0.5px] px-[0.06rem] !text-gray-900"
                  >
                    Save Workflow
                  </Button>
                  <Button
                    size="xs"
                    shape="round"
                    colorScheme="gray 900 02"
                    className="w-full min-w-[3.13rem] max-w-[3.13rem] rounded border-[0.5px] border-solid border-black-900 px-[0.44rem]"
                  >
                    Run All
                  </Button>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center sm:flex-col">
                  <ModifiedImg
                    src="images/img_frame_gray_800.svg"
                    alt="Gray Frame Image"
                    className="h-[0.75rem] w-[0.75rem] sm:w-full"
                  />
                  <Input
                    shape="round"
                    placeholder={` Set coordinates for plates `}
                    className="ml-[0.75rem] rounded-md px-[0.63rem] sm:ml-0"
                  />
                  <Button
                    shape="round"
                    colorScheme="gray_100_01"
                    className="ml-[0.38rem] w-[2.00rem]"
                  >
                    <ModifiedImg src="images/img_frame_light_green_a700.svg" />
                  </Button>
                </div>
                <div className="mt-[0.63rem] flex items-center justify-center gap-[0.75rem] sm:flex-col">
                  <ModifiedImg
                    src="images/img_frame_gray_800. svg"
                    alt="Gray Image Four"
                    className="h-[0.75rem] w-[0.75rem] sm:w-full"
                  />
                  <div className="flex flex-1 justify-center gap-[0.38rem] sm:self-stretch">
                    <div className="flex flex-1 flex-col items-start gap-[0.50rem] rounded-md bg-gray-100_01 px-[0.38rem]">
                      <Text
                        size="textmd"
                        as="p"
                        className="ml-[0.38rem] mt-[0.50rem] text-[0.75rem] font-normal text-black-900 md:ml-0"
                      >
                        Set coordinates for plates
                      </Text>
                      <Separator
                        orientation="horizontal"
                        className="h-[0.06rem] w-[66%] bg-light_green-a700"
                      />
                    </div>
                    <Button
                      shape="round"
                      colorScheme="gray_100_01"
                      className="w-[2.00rem] rounded-md px-[0.50rem]"
                    >
                      <ModifiedImg src="images/img_frame_gray_900_03.svg" />
                    </Button>
                  </div>
                </div>
                <div className="mt-[0.50rem] flex items-center justify-center sm:flex-col">
                  <ModifiedImg
                    src="images/img_frame_gray_800. svg"
                    alt="Gray Image Five"
                    className="h-[0.75rem] w-[0.75rem] sm:w-full"
                  />
                  <div className="ml-[0.75rem] flex flex-1 items-center justify-between gap-[1.25rem] rounded-md border border-solid border-gray-900_03 px-[0.75rem] py-[0.50rem] sm:ml-0 sm: self-stretch">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[0.75rem] font-normal text-black-900"
                    >
                      Set coordinates for plates
                    </Text>
                    <ModifiedImg
                      src="images/img_frame_1.svg"
                      alt="Frame Image Six"
                      className="h-[0.75rem] w-[0.75rem]"
                    />
                  </div>
                  <Button
                    shape="round"
                    colorScheme="gray_100_01"
                    className="ml-[0.38rem] w-[2.00rem] rounded-md px-[0.50rem] sm:ml-0"
                  >
                    <ModifiedImg src="images/img_frame_gray_900_03.svg" />
                  </Button>
                </div>
                <div className="mt-[1.00rem] flex items-center justify-center gap-[0.75rem] sm:flex-col">
                  <ModifiedImg
                    src="images/img_frame_gray_800.svg"
                    alt="Gray Image Seven"
                    className="h-[0.75rem] w-[0.75rem] sm:w-full"
                  />
                  <div className="flex flex-1 justify-center gap-[0.38rem] sm:flex-col sm:self-stretch">
                    <div className="flex flex-1 items-center justify-center rounded-md bg-gray-100_01 p-[0.50rem] sm:self-stretch">
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[0.75rem] font-normal text-black-900"
                      >
                        Set coordinates for plates
                      </Text>
                      <div className="flex flex-1 justify-end gap-[0.50rem]">
                        <ModifiedImg
                          src="images/img_frame_red_a200.svg"
                          alt="Red Frame Image"
                          className="h-[0.75rem] w-[0.75rem]"
                        />
                        <ModifiedImg
                          src="images/img_frame_blue_gray_400_01.svg"
                          alt="Blue Gray Image"
                          className="h-[0.75rem] w-[0.75rem]"
                        />
                      </div>
                    </div>
                    <Button
                      shape="round"
                      className="w-[2.00rem] rounded-md px-[0.50rem]"
                    >
                      <ModifiedImg src="images/img_frame_gray_300_02.svg" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-[3.00rem] flex w-[38%] flex-col items-start gap-[1.25rem] self-center md:ml-0 md:w-full">
              <Heading
                as="h3"
                className="text-[1.25rem] font-medium text-black-900 lg:text-[1.06rem]"
              >
                Output
              </Heading>
              <div className="flex flex-col gap-[0.63rem] self-stretch rounded-md bg-blue_gray-100_33 p-[0.50rem]">
                <div>
                  <div>
                    <div className="flex justify-between gap-[1.25rem]">
                      <div className="flex items-center gap-[0.44rem]">
                        <ModifiedImg
                          src="images/img_frame_blue_gray_400_01_12x12.svg"
                          alt="Running Image"
                          className="h-[0.75rem] w-[0.75rem]"
                        />
                        <Text
                          as="p"
                          className="text-[0.50rem] font-normal text-blue_gray-400"
                        >
                          Running
                        </Text>
                      </div>
                      <div className="flex flex-1 items-center justify-end gap-[0.56rem]">
                        <Text
                          as="p"
                          className="text-[0.50rem] font-normal text-blue_gray-400"
                        >
                          SAP 2000 Disconnected
                        </Text>
                        <ModifiedImg
                          src="images/img_search.svg"
                          alt="Search Image One"
                          className="h-[0.75rem] w-[0.75rem]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-[0.44rem]">
                      <ModifiedImg
                        src="images/img_frame_2.svg"
                        alt="Ready Image"
                        className="h-[0.75rem] w-[0.75rem]"
                      />
                      <Text
                        as="p"
                        className="text-[0.50rem] font-normal text-blue_gray-400"
                      >
                        Ready
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="mb-[14.63rem] flex flex-col items-start">
                  <Text
                    as="p"
                    className="text-[0.50rem] font-normal text-black-900"
                  >
                    Set coordinates for plates, output 1 0,00
                  </Text>
                  <Text
                    as="p"
                    className="text-[0.50rem] font-normal text-black-900"
                  >
                    Set coordinates for plates, output 1 0,00
                  </Text>
                </div>
              </div>
            </div>
            <ModifiedImg
              src="images/img_search_black_900. svg"
              alt="Search Image Three"
              className="ml-[1.63rem] mt-[3.50rem] h-[0.88rem] w-[0.88rem] md:ml-0 md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
