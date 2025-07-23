import SingleViewCard from "@/components/singleview/SingleViewCard";
import portfolio from "@/backend/portfolio.json"

const SingleViewPage = async ({ params }) => {
  const { id } = params;

  const item = portfolio.find((p) => p.id.toString() === id);

  return (
    <section>
      <SingleViewCard item={item} />
    </section>
  );
};

export default SingleViewPage;
