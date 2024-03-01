import Image from "next/image";
import { SectionTitle } from "../common/SectionTitle";

export const Mission = () => {
  return (
    <div className="py-20 grid place-items-center gap-y-8 sm:px-8 text-center">
      <SectionTitle
        title={
          <span className="font-bold">
            OUR <br className="md:hidden" />
            MISSION
          </span>
        }
        subTitle="リハサクのミッション"
      />
      <p className="text-h3 sm:text-paragraph leading-h1 sm:leading-paragraph font-bold">
        リハビリを日常化し、
        <br className="md:hidden" />
        世の中をより元気にしていく。
      </p>
      <Image
        src="/images/common/text-mission.svg"
        width={273}
        height={101}
        alt="再び・戻す 適した・ふさわしい"
      />
      <p className="md:text-center text-paragraph leading-paragraph font-bold sm:text-left">
        「リハビリテーション：Rehabilitation」は、
        <br className="sm:hidden" />
        re（再び・戻す）とhabilis（適した・ふさわしい）から成り立っています。
        <br className="sm:hidden" />
        単なる機能回復ではなく「
        <span className="text-blue">人間らしく生きる権利の回復</span>」や「
        <span className="text-blue">自分らしく生きること</span>」が重要で、
        <br className="sm:hidden" />
        そのために行われるすべての活動がリハビリテーションです。
        <br className="md:hidden" />
        <br className="md:hidden" />
        <br className="sm:hidden" />
        我々は、一人でも多くの方に「リハビリテーション」が当たり前になり、
        <br className="sm:hidden" />
        自分らしく生きていただけるような、世の中が元気になる世界をつくっていきます。
      </p>
    </div>
  );
};
