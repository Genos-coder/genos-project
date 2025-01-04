"use client";

import TicTacToe from "@/components/mini/TicTacToe";

function Page() {
  const componentArr = [
    {
      name: "TicTacToe",
      component: <TicTacToe />,
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
