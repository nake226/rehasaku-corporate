import Image from "next/image";
import Link from "next/link";

type Props = {
  width: string;
  height: string;
  pcBgImg: string;
  spBgImg: string;
  url: string;
  labelText: string;
  serviceName: string;
  serviceContents: Array<string>;
};

export const ServiceCard = ({
  width,
  height,
  pcBgImg,
  spBgImg,
  url = "",
  labelText,
  serviceName,
  serviceContents,
}: Props) => {
  return (
    <div
      className={`${height} ${width} sm:w-full border border-lightGray rounded-2xl ${pcBgImg} ${spBgImg} bg-cover`}
    >
      <Link href={url}>
        <div className={`flex justify-between p-6 sm:pb-3 sm:pr-3 h-full`}>
          <div className="grid gap-y-2 sm:gap-y-1 self-start">
            <p className="w-32 h-9 grid place-items-center bg-blue text-paragraph leading-[30px] text-white rounded font-semibold">
              {labelText}
            </p>
            <p className="text-sub leading-sub sm:text-[18px] sm:leading-[27px] font-bold">
              {serviceName}
            </p>
            <ul className="grid md:gap-y-1">
              {serviceContents.map((serviceContent) => {
                return (
                  <li
                    className="relative pl-3 sm:pl-2 before:absolute before:w-2 before:h-2 before:sm:w-1 before:sm:h-1 before:rounded-full before:bg-blue before:top-0 before:bottom-0 before:left-0 before:m-auto"
                    key={serviceContent}
                  >
                    <span className="sm:text-small sm:leading-small">
                      {serviceContent}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="self-end flex items-center gap-x-3 sm:gap-x-[6px]">
            <span className="text-white font-medium">詳細へ</span>
            <Image
              className="w-[33px] h-[22px] sm:w-[23px] sm:h-[15px]"
              src="/images/common/icon-arrow-white.svg"
              width={33}
              height={22}
              alt=""
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
