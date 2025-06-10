import { CiBellOn, CiLight } from "react-icons/ci";
import ProfPic from "../../../../../public/logo3.jpeg";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-8 pt-0 pb-4 bg-white shadow-md rounded-b-md">
      
      <div className="flex items-center gap-4">
        <img
          src={ProfPic}
          alt="Admin Profile"
          className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37]"
        />
        <div className="text-right">
          <h1 className="font-[Shabnam] text-lg text-[#1A1A1A]">عسل رحیمی</h1>
          <h3 className="font-[Estedad] text-sm text-[#999999]">برنامه‌نویس فرانت‌اند</h3>
        </div>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center border border-[#e0e0e0] rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="جست‌وجو کنید..."
            className="px-4 py-2 outline-none text-sm text-[#2e2e2e] font-[Vazirmatn]"
          />
          <button className="bg-[#D4AF37] text-white px-4 py-2 text-sm hover:bg-[#c89f2a] transition-all font-[Vazirmatn]">
            جست‌وجو
          </button>
        </div>

        <button className="text-[#1A1A1A] text-xl hover:text-[#D4AF37] transition-all">
          <CiBellOn />
        </button>

        <button className="text-[#1A1A1A] text-xl hover:text-[#D4AF37] transition-all">
          <CiLight />
        </button>
      </div>
    </header>
  );
};

export default Header;
