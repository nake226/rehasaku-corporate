import { VALUES_CONTENTS } from "@/lib/const";
import { SectionTitle } from "../../common/SectionTitle";
import Image from "next/image";

export const Values = () => {
  return (
    <div className="grid gap-y-20 p-20 sm:px-8 sm:py-16">
      <SectionTitle
        title={<span className="font-bold">VALUES</span>}
        subTitle="リハサクが大事にする6つの価値観"
        iconSummitPosition="tl"
        subTitleCustomClassName="text-gray font-bold"
      />
      <ul className="flex md:flex-wrap justify-center sm:flex-col md:max-w-[930px] md:mx-auto">
        {VALUES_CONTENTS.map((content) => (
          <li
            key={content.id}
            className="flex flex-col gap-y-4 md:w-1/3 md:px-8 md:border-r md:border-lightGray md:[&:nth-child(3n)]:border-none md:[&:nth-child(n+4)]:mt-16 sm:[&:nth-child(n+2)]:mt-8"
          >
            <Image
              src={`/images/recruit/icon-values0${content.id}.svg`}
              width={24}
              height={24}
              alt=""
            />
            <div className="font-bold">
              <p className="text-[15px] leading-[22px]">{content.en}</p>
              <p className="text-paragraph leading-paragraph">{content.jp}</p>
            </div>
            <p className="text-[15px] leading-[22px]">{content.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
