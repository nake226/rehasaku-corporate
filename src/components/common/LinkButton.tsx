import Image from "next/image";
import Link from "next/link";

type Props = {
  label: string;
  url: string;
  width?: string;
  showArrow?: boolean;
};

export const LinkButton = ({ label, url, width, showArrow = true }: Props) => {
  return (
    <Link
      className={`relative grid place-items-center rounded-full text-caption leading-caption text-white bg-blue ${
        width ? width : "w-64"
      } h-12`}
      href={url}
    >
      {label}
      {showArrow && (
        <Image
          className="absolute right-6 top-0 bottom-1 my-auto"
          src="/images/common/icon-arrow-right.svg"
          width={22}
          height={7}
          alt=""
        />
      )}
    </Link>
  );
};
