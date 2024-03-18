import Link from "next/link";

type Props = {
  label: string;
  url: string;
  isOuterLink?: boolean;
};

export const HeaderLink = ({ label, url, isOuterLink = false }: Props) => {
  const linkProps = isOuterLink
    ? { href: url, target: "_blank", rel: "noopener noreferrer" }
    : { href: url };
  return (
    <Link className="text-[15px] leading-[22px] font-bold" {...linkProps}>
      {label}
    </Link>
  );
};
