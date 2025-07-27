import Nav from "./Nav";
import Logo from "./Logo";
const Header = () => {
  return (
    <nav className="flex justify-between items-center pt-8 relative z-50">
      <Logo></Logo>
      <Nav></Nav>
    </nav>
  );
};

export default Header;
