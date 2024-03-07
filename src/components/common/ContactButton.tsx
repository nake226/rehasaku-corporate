import Link from "next/link";

export const ContactButton = () => {
  return (
    <Link
      className="flex items-center justify-center w-32 h-10 rounded-full bg-gradient-to-r from-redStart from-29.1% via-redStart via-94.26% to-redEnd text-white font-bold text-[15px]"
      href="/contact"
    >
      お問い合わせ
    </Link>
  );
};
