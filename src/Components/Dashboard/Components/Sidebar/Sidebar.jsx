import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-[#EFEFEF] text-[#2e2e2e] w-64 min-h-screen pt-0 p-6 font-[Vazirmatn] fixed top-0 right-0 z-10 shadow-lg">
      <div className="mb-8 mt-0">
        <h2 className="text-xl font-[Shabnam] text-[#1A1A1A] mb-1">
          سلام عسل 🌼
        </h2>
        <p className="text-sm font-[Estedad] text-[#999999]">خوش برگشتی</p>
      </div>

      <nav className="flex flex-col gap-4 text-base font-[Estedad]">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `py-2 px-4 rounded-md ${
              isActive ? "bg-[#D4AF37] text-white font-bold" : "text-[#2e2e2e]"
            }`
          }
        >
          صفحه اصلی
        </NavLink>

        <NavLink
          to="/dashboard/amountproducts"
          className={({ isActive }) =>
            `py-2 px-4 rounded-md ${
              isActive ? "bg-[#D4AF37] text-white font-bold" : "text-[#2e2e2e]"
            }`
          }
        >
          مقدار محصولات
        </NavLink>

        <NavLink
          to="/dashboard/comments"
          className={({ isActive }) =>
            `py-2 px-4 rounded-md ${
              isActive ? "bg-[#D4AF37] text-white font-bold" : "text-[#2e2e2e]"
            }`
          }
        >
          کامنت‌ها
        </NavLink>

        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            `py-2 px-4 rounded-md ${
              isActive ? "bg-[#D4AF37] text-white font-bold" : "text-[#2e2e2e]"
            }`
          }
        >
          کاربران
        </NavLink>

        <NavLink
          to="/dashboard/orders"
          className={({ isActive }) =>
            `py-2 px-4 rounded-md ${
              isActive ? "bg-[#D4AF37] text-white font-bold" : "text-[#2e2e2e]"
            }`
          }
        >
          سفارشات
        </NavLink>

        <NavLink
          to="/dashboard/theme"
          className={({ isActive }) =>
            `py-2 px-4 rounded-md ${
              isActive ? "bg-[#D4AF37] text-white font-bold" : "text-[#2e2e2e]"
            }`
          }
        >
          تنظیم رنگ‌ها
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
