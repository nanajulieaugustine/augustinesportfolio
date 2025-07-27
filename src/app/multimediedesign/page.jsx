import ClientMMD from "@/components/listviewmmd/ClientMMD";
import EllipseSvg from "@/components/global/svg/EllipseSvg";
import FadeInAnimation from "@/components/global/animationer/FadeInAnimation";
const MultimediedesignPage = () => {
  return (
    <div>
      <EllipseSvg/>
      <FadeInAnimation>
      <ClientMMD />
      </FadeInAnimation>
    </div>
  );
};

export default MultimediedesignPage;
