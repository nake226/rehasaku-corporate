import { SectionTitle } from "../common/SectionTitle";
import { LinkButton } from "../common/LinkButton";

export const About = () => {
  return (
    <div className="p-20 sm:px-8 sm:gap-y-8 bg-lightBlue ">
      <SectionTitle
        title={<span className="font-bold">ABOUT</span>}
        subTitle="リハサクについて"
      />
      <div className="relative flex sm:flex-col justify-center sm:gap-y-8 mt-20 sm:mt-8 mx-auto w-fit">
        <div className="md:absolute w-96 sm:w-auto md:left-0 md:-top-10">
          <p className="text-paragraph leading-paragraph">
            日常生活におけるリハビリの浸透はまだまだ不十分。だからこそ、超情報化社会の中、リハビリとテクノロジーの融合により、リハビリを身近な存在にすることで、人々の未来を紡いでいきたい。そんな思いから、事業創造したい、と思いました。リハビリをテクノロジーでつなぐ新しいサービスを提供し、医療機関を通じて人々の未来へサポートしたい。こうして生まれたのが「リハサク」です。
          </p>
          <div className="mt-8 sm:hidden">
            <LinkButton label="会社概要" url="" />
          </div>
        </div>
        <div className="bg-top-about-pc bg-no-repeat bg-contain h-[965px] w-[1120px] sm:hidden"></div>
        <div className="sm:-mx-8">
          <div className="bg-top-about-sp bg-no-repeat bg-contain bg-center h-[332px] w-full md:hidden"></div>
        </div>
      </div>
      <div className="mt-8 grid place-items-center md:hidden">
        <LinkButton label="会社概要" url="" />
      </div>
    </div>
  );
};
