import { motion } from "framer-motion";
import { components } from "react-select";
import { IoIosArrowDropdown } from "react-icons/io";

const AnimatedDropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      <motion.div
        animate={{ rotate: menuIsOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <IoIosArrowDropdown size={20} color="white" />
      </motion.div>
    </components.DropdownIndicator>
  );
};

export default AnimatedDropdownIndicator;
