import { SectionTitle } from "../../common/SectionTitle";

export const Vision = () => {
  return (
    <div className="py-20 grid place-items-center gap-y-8 sm:px-8 text-center">
      <SectionTitle
        title={<span className="font-bold">OUR VISION</span>}
        subTitle="リハサクのビジョン"
        iconSummitPosition="bl"
      />
      <p className="text-h3 sm:text-paragraph leading-h3 sm:leading-paragraph font-bold">
        患者さんが主体的になるような
        <br className="sm:hidden" />
        リハビリの世界を実現する
      </p>
      <p className="md:text-center text-paragraph leading-paragraph font-bold sm:text-left">
        我々は広義の意味でのリハビリにおいて、患者さんが主体的にリハビリに取り組むことができるような
        <br className="sm:hidden" />
        サービスを提供してまいります。医療従事者と同一円上に乗っているべき患者さんが、
        <br className="sm:hidden" />
        そこに主体性がないことが課題だと感じています。
        <br className="sm:hidden" />
        <br className="sm:hidden" />
        主体的という意味は患者中心、という意味とは違います。
        <br className="sm:hidden" />
        患者が自らの状況を医療従事者のサポートによりしっかり把握し、
        <br className="sm:hidden" />
        それに基づいて自ら積極的に働きかけ、また、わからないことがでてきたら医療従事者に相談する。
        <br className="sm:hidden" />
        そんな流れができると医療はもっとよくなると思います。
      </p>
    </div>
  );
};
