import React from "react";
import { CiBellOn, CiLight } from "react-icons/ci";
import ProfPic from "../../../../../public/logo3.jpeg";

const Header = () => {
  return (
    <header
      className="ml-0 md:ml-8 flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-8 py-4 shadow-md"
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "var(--font-primary)",
      }}
    >
      <div className="flex items-center gap-4">
        <img
          src={ProfPic}
          alt="AdminProfPic"
          className="w-14 h-14 rounded-full object-cover"
          style={{
            border: "1px solid var(--color-border)",
          }}
        />
        <div className="text-center md:text-right">
          <h1
            className="text-base md:text-lg font-bold"
            style={{
              fontFamily: "var(--font-title)",
              color: "var(--color-primary)",
            }}
          >
            عسل رحیمی
          </h1>
          <h3
            className="text-xs md:text-sm"
            style={{
              color: "var(--color-muted)",
              fontFamily: "var(--font-secondary)",
            }}
          >
            برنامه‌نویس فرانت‌اند
          </h3>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full md:w-auto">
        <div
          className="flex items-center w-full sm:w-auto rounded-lg overflow-hidden"
          style={{
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
          }}
        >
          <input
            type="text"
            placeholder="جست‌وجو کنید..."
            className="flex-1 px-3 py-2 text-sm outline-none"
            style={{
              fontFamily: "var(--font-secondary)",
              color: "var(--color-text)",
            }}
          />
          <button
            className="px-4 text-sm"
            style={{
              backgroundColor: "var(--color-button-bg)",
              color: "var(--color-button-text)",
              fontFamily: "var(--font-secondary)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-button-hover)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-button-bg)")
            }
          >
            جست‌وجو
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="text-2xl"
            style={{ color: "var(--color-primary)" }}
          >
            <CiBellOn />
          </button>

          <button
            className="text-2xl"
            style={{ color: "var(--color-primary)" }}
          >
            <CiLight />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
