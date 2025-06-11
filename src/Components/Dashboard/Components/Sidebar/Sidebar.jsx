import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside
      className="w-48 min-h-screen p-6 fixed top-2 right-0 z-10 shadow-lg"
      style={{
        backgroundColor: "var(--color-neutral)",
        color: "var(--color-text)",
        fontFamily: "var(--font-primary)",
      }}
    >

      <div className="leading-tight">
        <h2
          className="text-xl mb-0"
          style={{
            fontFamily: "var(--font-title)",
            color: "var(--color-primary)",
            marginBottom: "0.5rem", 
            marginTop: "0",
          }}
        >
          سلام عسل 🌼
        </h2>
        <h2
          className="text-sm"
          style={{
            fontFamily: "var(--font-secondary)",
            color: "var(--color-muted)",
            marginBottom: "1rem",
            marginTop: "0",
          }}
        >
          خوش برگشتی
        </h2>
      </div>

      <nav
        className="flex flex-col gap-3 text-base mt-4"
        style={{ fontFamily: "var(--font-secondary)" }}
      >
        {[
          { to: "/dashboard", label: "صفحه اصلی" },
          { to: "/dashboard/amountproducts", label: "مقدار محصولات" },
          { to: "/dashboard/comments", label: "کامنت‌ها" },
          { to: "/dashboard/users", label: "کاربران" },
          { to: "/dashboard/orders", label: "سفارشات" },
          { to: "/dashboard/theme", label: "تنظیم رنگ‌ها" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `py-2 px-4 rounded-md transition-colors duration-300 ${
                isActive ? "font-bold" : ""
              }`
            }
            style={({ isActive }) => ({
              backgroundColor: isActive ? "var(--color-honey)" : "transparent",
              color: isActive
                ? "var(--color-button-text)"
                : "var(--color-text)",
              marginRight: "0.75rem",
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
