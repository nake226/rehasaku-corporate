import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  subTitle: string;
  iconSummitPosition?: "tr" | "bl" | "tl";
  contentsAlign?: "center" | "start";
};

export const SectionTitle = ({
  title,
  subTitle,
  iconSummitPosition = "tr",
  contentsAlign = "center",
}: Props) => {
  const getIconPosition = (iconSummitPosition: Props["iconSummitPosition"]) => {
    switch (iconSummitPosition) {
      case "bl":
        return "rotate-180";
      case "tl":
        return "-rotate-90";
      default:
        break;
    }
  };

  const getContentsAlign = (contentsAlign: Props["contentsAlign"]) => {
    return contentsAlign === "start"
      ? "place-items-start"
      : "place-items-center";
  };

  return (
    <div className={`grid ${getContentsAlign(contentsAlign)} gap-y-2`}>
      <Image
        className={`${getIconPosition(iconSummitPosition)}`}
        priority={true}
        src="/images/common/icon-triangle.svg"
        width={34}
        height={41}
        alt=""
      />
      <p className="text-h1 leading-h1">{title}</p>
      <p className="text-sub leading-sub">{subTitle}</p>
    </div>
  );
};
