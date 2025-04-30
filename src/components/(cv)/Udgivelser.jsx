import Link from "next/link";
const Udgivelser = ({ udgivelse }) => {
  return (
    <Link href={`${udgivelse.link}`} target="_blank">
      <div className="hover:scale-103 transition-all duration-300">
        <h3>{udgivelse.titel}</h3>
        <p className="gray">{udgivelse.udgivelse}</p>
      </div>
    </Link>
  );
};

export default Udgivelser;
