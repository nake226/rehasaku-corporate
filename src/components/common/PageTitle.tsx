import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  subTitle: string;
  triangleIconSummitPosition: "tr" | "br" | "bl" | "tl";
};

export const PageTitle = ({
  title,
  subTitle,
  triangleIconSummitPosition,
}: Props) => {
  const getIconPosition = (position: Props["triangleIconSummitPosition"]) => {
    switch (position) {
      case "tr":
        return "";
      case "br":
        return "rotate-90";
      case "bl":
        return "rotate-180";
      case "tl":
        return "-rotate-90";
      default:
        break;
    }
  };

  return (
    <div className="grid place-items-center py-10 bg-page-title-pc sm:bg-page-title-sp font-bold">
      <Image
        className={`${getIconPosition(triangleIconSummitPosition)}`}
        priority={true}
        src="/images/common/icon-triangle.svg"
        width={24}
        height={20}
        alt=""
      />
      <p className="text-h3 leading-h3">{title}</p>
      <p className="text-sub leading-sub text-gray">{subTitle}</p>
    </div>
  );
};
