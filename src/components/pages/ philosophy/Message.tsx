import { SectionTitle } from "../../common/SectionTitle";

export const Message = () => {
  return (
    <div className="py-20 md:px-32 sm:px-8">
      <div className="grid place-items-start md:max-w-[1024px] md:mx-auto gap-y-8 text-center">
        <SectionTitle
          title={<span className="block font-bold text-left">CEO MESSAGE</span>}
          subTitle="代表メッセージ"
          iconSummitPosition="tl"
          contentsAlign="start"
        />
        <p className="text-paragraph leading-paragraph text-left">
          私のキャリアは、IT業界でのスタートと共に、企業の業務効率化を目指すエンタープライズソフトウェアの事業販売に携わることから始まりました。この分野で長年培った経験を通じて、多様な業界の企業が直面する課題に一つのソリューションで応えることの力を目の当たりにしました。それは、クライアントの業務効率を劇的に向上させると同時に、限界費用がほぼゼロであるため、広範囲にわたる企業への普及によって高い収益性を実現するビジネスモデルの魅力に引かれるものでした。
          <br />
          <br />
          しかし、私たちが何のためにこれを行うのかという根本的なミッションについては、真剣に考えたことがありませんでした。その考えは、2018年に予期せぬ形でデジタルヘルス分野に足を踏み入れたことで一変しました。糖尿病患者を対象としたデジタルヘルス事業に携わり、持続血糖測定器（CGM）のデータを含むアプリを使用することで、食事の順序や運動のタイミングが血糖管理にいかに効果的かを実感しました。この経験は、ソフトウェアが企業のニーズだけでなく、個人の健康ニーズに応える可能性があることを教えてくれました。そして、2022年9月、運動療法とリハビリテーションを社会における新たな常識とすることを目指し、設立されたリハサクという革新的なプロジェクトに出会いました。
          <br />
          <br />
          リハサクは社会全体と個人の生活の質を高めることへの、私たちのコミットメントを新たにする機会を与えてくれる場所です。
          リハビリという価値が証明されたものをデジタルを介して、リハサクを介して、ひとりひとりにしっかり届けていきたいと思います。 
        </p>
        <p className="text-paragraph leading-paragraph text-left">
          株式会社リハサク　代表取締役
          <span className="block text-[30px] leading-paragraph font-bold">
            谷垣 主税
          </span>
        </p>
      </div>
    </div>
  );
};
