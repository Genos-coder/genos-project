import {
  forwardRef,
  type MutableRefObject,
  useImperativeHandle,
  useRef,
} from "react";
import Wrapper from "./Wrapper";

function RestrictedInput() {
  const refContainer = useRef<HandleType>(null);
  const handleClick = () => {
    if (refContainer.current) {
      refContainer.current.focus();
    }
    console.log("triggered");
  };
  return (
    <Wrapper>
      <div className="border h-full w-full border-black  gap-2 p-5 flex flex-col rounded-lg">
        <p>
          In react we cannot manipulate the dom nodes of child components using
          ref so in order to do it we can use forwardRef and also we can
          constrict the what methods and stipulations should be done from parent
          to that child by using useImperative handle.
        </p>
        <Input ref={refContainer} />
        <button
          className="bg-black text-white rounded-lg p-1"
          onClick={handleClick}
        >
          Focus
        </button>
      </div>
    </Wrapper>
  );
}
export default RestrictedInput;

type HandleType = {
  focus: () => void;
};
type PropsType = {};
const Input = forwardRef<HandleType, PropsType>((props, ref) => {
  const refContainer = useRef<HTMLInputElement | null>(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      refContainer.current?.focus();
    },
  }));
  return (
    <input
      className="border border-black p-1 bg-white rounded-lg"
      type="text"
      ref={refContainer}
    />
  );
});
