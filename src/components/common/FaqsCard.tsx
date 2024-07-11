import { useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface Faq {
  q: string;
  a: string;
}

interface FaqsCardProps {
  faqsList: Faq;
  idx: number;
}

export const FaqsCard: React.FC<FaqsCardProps> = (props) => {
  const answerElRef = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    if (answerElRef.current) {
      const answerElH = (answerElRef.current.children[0] as HTMLElement)
        .clientHeight;
      setState(!state);
      setAnswerH(`${answerElH + 20}px`);
    }
  };

  return (
    <div
      className="space-y-3 overflow-hidden border border-[#28558126] bg-white rounded-[12px] pt-4 px-4"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 pt-3 flex items-center justify-between text-lg text-[#285581] font-bold">
        {faqsList.q}
        {state ? (
          <FaMinus className="size-5 text-[#285581] ml-2" />
        ) : (
          <FaPlus className="size-5 text-[#285581] ml-2" />
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-[#197FE5]">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};
