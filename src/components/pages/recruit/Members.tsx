import { MEMBERS_CONTENTS } from "@/lib/const";
import { SectionTitle } from "../../common/SectionTitle";
import Image from "next/image";

export const Members = () => {
  return (
    <div className="grid gap-y-20 p-20 sm:px-4 sm:py-16 bg-lightBlue">
      <SectionTitle
        title={<span className="font-bold">MEMBERS</span>}
        subTitle="メンバー紹介"
        iconSummitPosition="tr"
        subTitleCustomClassName="text-gray font-bold"
      />
      <ul className="flex flex-wrap sm:justify-between md:gap-y-10 sm:gap-y-12 md:gap-x-4 md:max-w-[1094px] md:mx-auto">
        {MEMBERS_CONTENTS.map((content) => (
          <li
            key={content.id}
            className="grid place-items-center gap-y-4 sm:gap-y-2 md:w-[calc((100%_-_64px)_/_5)] sm:w-[calc((100%_-_16px)_/_2)] border border-[#F3F4F6] p-4 rounded-2xl bg-white"
          >
            <Image
              className="sm:w-16"
              src={`/images/recruit/icon_members${content.id}.png`}
              width={112}
              height={112}
              alt={content.name}
            />
            <p className="text-paragraph leading-[24px] font-semibold">
              {content.name}
            </p>
            <p className="w-full py-[6px] px-1 bg-[#CCE5F2] text-small leading-[14px] text-center rounded-2xl">
              {content.role}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
