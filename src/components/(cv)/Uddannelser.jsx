import ListDotAndLine from "./ListDotAndLine";
const Uddannelser = ({ uddannelse }) => {
  return (
    <section>
      <div className="hidden bg-(--pink-accent) rounded-4xl p-5 w-100">
        <h2 className="white">{uddannelse.uddannelse}</h2>
        <p className="white">{uddannelse.beskrivelse}</p>
      </div>
      <div className="group flex justify-end items-center gap-10">
        <div>
          <div className="text-right">
            <h3 className="pink-secondary capitalize">
              {uddannelse.uddannelse}
            </h3>
            <h4>{uddannelse.grad}</h4>
            <p className="gray capitalize">{uddannelse.institution}</p>
          </div>
        </div>
        <ListDotAndLine />
      </div>
    </section>
  );
};

export default Uddannelser;
