import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [padding, setPadding] = useState('py-2');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
        setPadding('py-4');
      } else {
        setIsScrolled(false);
        setPadding('py-2');
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 flex items-center justify-between p-2 text-white w-full -mb-[72px] bg-white z-50 ${isScrolled ? "duration-500 ease-in-out transition " : ""} ${padding}`}
    >
      <div className="">
        <a href="/"><img src="/asset/qlogo.png" className="pl-4" alt="" /></a>
      </div>
    </nav>
  );
};

export default Header;
