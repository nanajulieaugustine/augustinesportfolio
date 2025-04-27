import FirstArtcle from "@/components/om/FirstArticle";
import SecondArticle from "@/components/om/SecondArticle";

const Om = () => {
  return (
    <div>
      <FirstArtcle></FirstArtcle>
      <div className="relative bg-[url('/glyptoteket.webp')] bg-fixed bg-no-repeat bg-center bg-cover h-100 w-full mt-10"></div>
      <SecondArticle></SecondArticle>
    </div>
  );
};

export default Om;
