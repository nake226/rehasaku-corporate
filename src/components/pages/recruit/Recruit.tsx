import { LinkButton } from "@/components/common/LinkButton";

export const Recruit = () => {
  return (
    <div className="py-28 sm:py-8 grid gap-y-2 place-items-center bg-recruit-pc sm:bg-recruit-sp bg-cover text-center">
      <h3 className="text-h3 leading-h3 sm:text-paragraph sm:leading-paragraph font-bold">
        共に挑戦していく仲間を募集しています。
      </h3>
      <p className="text-paragraph sm:text-caption leading-[24px] sm:leading-[21px] font-medium">
        募集中の職種に関しては
        <br />
        以下の採用ページよりご確認くださいませ。
      </p>
      <div className="font-bold">
        <LinkButton
          label="採用ページを見る"
          url=""
          width="w-36"
          showArrow={false}
        />
      </div>
    </div>
  );
};
