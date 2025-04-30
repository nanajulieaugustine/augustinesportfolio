"use client";
import ListCard from "../listviewmmd/ListCard";

const ClientMMD = ({
  webudvikling,
  contentcreation,
  fotografering,
  design,
}) => {
  const renderCategory = (title, items) => (
    <div className="mb-8">
      <h2 className="ps-(--content-width)">{title}</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-20 ps-(--content-width) min-w-max">
          {items.map((item) => (
            <div key={item.id}>
              <ListCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {renderCategory("Webudvikling", webudvikling)}
      {renderCategory("Content Creation", contentcreation)}
      {renderCategory("Fotografering", fotografering)}
      {renderCategory("Design", design)}
    </div>
  );
};

export default ClientMMD;
