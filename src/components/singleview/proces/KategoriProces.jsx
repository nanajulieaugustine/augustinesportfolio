import Select from 'react-select'
import portfolio from "@/backend/portfolio.json"
import AnimatedMenu from '@/components/global/animationer/AnimatedMenu';
import AnimatedDropdownIndicator from '@/components/global/animationer/AnimatedDropDownIndicator';

const KategoriProces = ({ activeGenre, setActiveGenre, portfolioId }) => {
  const selectedPortfolio = portfolio.find(p => p.id === portfolioId);
  const kategorierProces = (selectedPortfolio?.proces_items || [])
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
      background: "transparent",
      borderColor: state.isFocused ? "var(--pink-primary)" : "var(--pink-primary)",
      boxShadow: "none",
      "&:hover": {
        borderColor: "none",
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "white",
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: "white",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isFocused ? "var(--pink-accent)" : "var(--black)",
      color: "white",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white",
      fontStyle: "italic",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
      fontStyle: "italic",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "var(--black)",
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
        components={{ Menu: AnimatedMenu, DropdownIndicator: AnimatedDropdownIndicator }}
      />
    </div>
  );
};

export default KategoriProces;