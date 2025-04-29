import ListDotAndLine from "./ListDotAndLine";
const Kurser = ({ kursus }) => {
  return (
    <section className="flex items-center gap-10 mt-20">
      <ListDotAndLine />
      <div>
        <div>
          <h3 className="pink-secondary capitalize">{kursus.kursus}</h3>
          <h4>{`Underviser: ${kursus.underviser}`}</h4>
          <p className="gray capitalize">{kursus.institution}</p>
        </div>
      </div>
    </section>
  );
};

export default Kurser;
