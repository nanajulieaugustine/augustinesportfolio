import Select from 'react-select'
import portfolio from "@/backend/portfolio.json"

const KategoriProces = ({ activeGenre, setActiveGenre }) => {
    const kategorierProces = portfolio
  .flatMap(p => p.proces_items || [])
  .filter(p => p.kategori)
  .map(p => p.kategori.toLowerCase());



const unikkeKategorier = Array.from(new Set(kategorierProces));

const options = unikkeKategorier.map((kategori) => ({
  value: kategori,
  label: kategori.charAt(0).toUpperCase() + kategori.slice(1)
}));

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minWidth: "200px",
      background: "var(--pink-primary)",
      borderColor: state.isFocused ? "var(--pink-primary)" : "var(--pink-primary)",
      boxShadow: "2xl",
      "&:hover": {
        borderColor: "var(--black)",
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "var(--black)",
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: "var(--black)",
    }),

    option: (provided, state) => ({
      ...provided,
      background: state.isFocused
        ? "var(--pink-secondary)"
        : "var(--pink-primary)",
      color: "var(--black)",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "var(--black)",
      fontStyle: "italic",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--black)",
      fontStyle: "italic",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "var(--pink-primary)",
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
    }),
  };

  return (
    <div>
      <label 
        id="genre-label" 
        htmlFor="genre-select" 
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0
        }}
      >
        Vælg kategori:
      </label>
      <Select
        inputId="genre-select"
        aria-labelledby="genre-label"
        options={options}
        placeholder="// Vælg fokusområde"
        value={options.find(opt => opt.value === activeGenre)}
        onChange={selected => setActiveGenre(selected ? selected.value : "")}
        isClearable
        styles={customStyles}
      />
    </div>
  );
}

export default KategoriProces;
