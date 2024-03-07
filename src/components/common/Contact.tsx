import { ContactButton } from "./ContactButton";

export const Contact = () => {
  return (
    <div className="py-16 sm:py-8 grid gap-y-6 sm:gap-y-2 place-items-center bg-contact-pc sm:bg-contact-sp bg-cover text-white font-bold text-center">
      <p className="text-sub leading-sub">
        より効果的で、
        <br className="md:hidden" />
        円滑なリハビリを。
      </p>
      <p className="text-[15px] leading-[22px]">
        資料請求・導入ご相談・その他、
        <br />
        ご不明な点はお気軽にお問い合わせください。
      </p>
      <ContactButton />
    </div>
  );
};
