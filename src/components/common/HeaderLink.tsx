import Link from "next/link";

type Props = {
  label: string;
  url: string;
  isOuterLink?: boolean;
  onClick?: () => void;
};

export const HeaderLink = ({
  label,
  url,
  isOuterLink = false,
  onClick,
}: Props) => {
  const linkProps = isOuterLink
    ? { href: url, target: "_blank", rel: "noopener noreferrer" }
    : { href: url };
  return (
    <Link
      className="text-[15px] leading-[22px] font-bold"
      {...linkProps}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};
