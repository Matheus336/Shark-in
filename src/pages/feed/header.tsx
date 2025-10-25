import { Input } from "@/components/ui/input";
import { DropdownProfile } from "./dropdownProfile";
import logo from "../../assets/shark-in.png";
import { Link } from "@tanstack/react-router";

export const HeaderProfile = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#580848] text-white shadow-md">
        <Link to="/feed">
          <img src={logo} alt="Logo do Shark-in" className="w-10 h-10" />
        </Link>
        <Input
          type="text"
          placeholder="Buscar..."
          className="border border-white rounded-3xl p-2 w-1/2 text-lg bg-white text-black"
        />
        <DropdownProfile />
      </nav>
    </div>
  );
};
