import { useRef } from "react";

function RefinedSlider() {
  const catList = setUpCatList();
  const ref = useRef<Map<string, HTMLElement> | null>(new Map());
  const getMap = () => {
    return ref.current;
  };
  const handleClick = (cat: string) => {
    let catNodes = getMap();
    let catNode;
    if (catNodes) {
      catNode = catNodes?.get(cat);
    }
    catNode?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  return (
    <div className="w-1/2 h-1/2 flex flex-col gap-4">
      <div className=" w-full flex justify-center gap-6">
        <button
          onClick={() => handleClick(catList[0])}
          className="rounded-md px-1 py-2 text-white bg-blue-600"
        >
          Neo
        </button>
        <button
          onClick={() => handleClick(catList[3])}
          className="rounded-md px-1 py-2 text-white bg-red-600"
        >
          Bella
        </button>
        <button
          onClick={() => handleClick(catList[9])}
          className="rounded-md px-1 py-2 text-white bg-green-600"
        >
          Robert
        </button>
      </div>
      <div className="border border-black w-1/2 mx-auto h-full rounded-lg overflow-hidden">
        <ul className="w-full h-full  overflow-x-auto">
          {catList.map((cat) => {
            return (
              <li
                className="w-full h-full"
                key={`${cat}aa1`}
                ref={(node) => {
                  const map = getMap();
                  map?.set(cat, node!);
                  return () => {
                    map?.delete(cat);
                  };
                }}
              >
                <img className="w-full h-full object-cover" src={cat} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default RefinedSlider;

function setUpCatList() {
  const catList = [];
  for (let i = 0; i < 10; i++) {
    catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
  }
  return catList;
}
