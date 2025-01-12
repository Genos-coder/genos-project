"use client";

import ImageSlider from "@/components/mini/ImageSlider";
import RestrictedInput from "@/components/mini/RestrictedInput";
import StickyCursor from "@/components/mini/StickyCursor";
import TicTacToe from "@/components/mini/TicTacToe";
import PopoverDemo from "@/components/testComponent/PopoverDemo";
function Page() {
  const componentArr = [
    {
      name: "TicTacToe",
      component: <TicTacToe />,
    },
    {
      name: "StickyCursor",
      component: <StickyCursor />,
    },
    {
      name: "Image Slider",
      component: <ImageSlider />,
    },
    {
      name: "Restricted Input",
      component: <RestrictedInput />,
    },
  ];
  return (
    <div className="flex flex-col h-full w-full">
      {componentArr.map((item) => {
        return (
          <div
            className="h-screen w-full flex justify-center items-center"
            key={`${item.name}a1`}
          >
            {item.component}
          </div>
        );
      })}
    </div>
  );
}
export default Page;
