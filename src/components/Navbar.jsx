function NavBar({ activePage, onNavigate }) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#C5CAE9] bg-[#E8EAF6] shadow-sm">
      {/* Desktop / Main Navbar */}
      <div className="mx-auto flex max-w-[1750px] items-center justify-between px-6 py-4 lg:px-12">
        
        {/* Logo */}
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5C6BC0] text-xl font-bold text-white shadow-sm transition hover:bg-[#7986CB]">
            R
          </div>

          <span className="text-xl font-bold text-[#28314F] sm:text-2xl">
            React Activity Portal
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Home */}
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className={`rounded-xl px-6 py-3 text-base font-semibold transition ${
              activePage === "home"
                ? "bg-[#5C6BC0] text-white shadow-md"
                : "text-[#4B5578] hover:bg-[#C5CAE9] hover:text-[#28314F]"
            }`}
          >
            Home
          </button>

          {/* Activity 1 */}
          <button
            type="button"
            onClick={() => onNavigate("activity1")}
            className={`rounded-xl px-5 py-3 text-base font-medium transition ${
              activePage === "activity1"
                ? "bg-[#5C6BC0] text-white shadow-md"
                : "text-[#4B5578] hover:bg-[#C5CAE9] hover:text-[#28314F]"
            }`}
          >
            Activity 1
          </button>

          {/* Activity 2 */}
          <button
            type="button"
            onClick={() => onNavigate("activity2")}
            className={`rounded-xl px-5 py-3 text-base font-medium transition ${
              activePage === "activity2"
                ? "bg-[#5C6BC0] text-white shadow-md"
                : "text-[#4B5578] hover:bg-[#C5CAE9] hover:text-[#28314F]"
            }`}
          >
            Activity 2
          </button>

          {/* Activity 3 */}
          <button
            type="button"
            onClick={() => onNavigate("activity3")}
            className={`rounded-xl px-5 py-3 text-base font-medium transition ${
              activePage === "activity3"
                ? "bg-[#5C6BC0] text-white shadow-md"
                : "text-[#4B5578] hover:bg-[#C5CAE9] hover:text-[#28314F]"
            }`}
          >
            Activity 3
          </button>

          {/* Activity 4 */}
          <button
            type="button"
            onClick={() => onNavigate("activity4")}
            className={`rounded-xl px-5 py-3 text-base font-medium transition ${
              activePage === "activity4"
                ? "bg-[#5C6BC0] text-white shadow-md"
                : "text-[#4B5578] hover:bg-[#C5CAE9] hover:text-[#28314F]"
            }`}
          >
            Activity 4
          </button>

          {/* Activity 5 */}
          <button
            type="button"
            onClick={() => onNavigate("activity5")}
            className={`rounded-xl px-5 py-3 text-base font-medium transition ${
              activePage === "activity5"
                ? "bg-[#5C6BC0] text-white shadow-md"
                : "text-[#4B5578] hover:bg-[#C5CAE9] hover:text-[#28314F]"
            }`}
          >
            Activity 5
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex gap-2 overflow-x-auto border-t border-[#C5CAE9] bg-[#E8EAF6] px-4 py-3 md:hidden">
        {/* Home */}
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition ${
            activePage === "home"
              ? "bg-[#5C6BC0] text-white"
              : "text-[#4B5578] hover:bg-[#C5CAE9]"
          }`}
        >
          Home
        </button>

        {/* Activity 1 */}
        <button
          type="button"
          onClick={() => onNavigate("activity1")}
          className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition ${
            activePage === "activity1"
              ? "bg-[#5C6BC0] text-white"
              : "text-[#4B5578] hover:bg-[#C5CAE9]"
          }`}
        >
          Activity 1
        </button>

        {/* Activity 2 */}
        <button
          type="button"
          onClick={() => onNavigate("activity2")}
          className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition ${
            activePage === "activity2"
              ? "bg-[#5C6BC0] text-white"
              : "text-[#4B5578] hover:bg-[#C5CAE9]"
          }`}
        >
          Activity 2
        </button>

        {/* Activity 3 */}
        <button
          type="button"
          onClick={() => onNavigate("activity3")}
          className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition ${
            activePage === "activity3"
              ? "bg-[#5C6BC0] text-white"
              : "text-[#4B5578] hover:bg-[#C5CAE9]"
          }`}
        >
          Activity 3
        </button>

        {/* Activity 4 */}
        <button
          type="button"
          onClick={() => onNavigate("activity4")}
          className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition ${
            activePage === "activity4"
              ? "bg-[#5C6BC0] text-white"
              : "text-[#4B5578] hover:bg-[#C5CAE9]"
          }`}
        >
          Activity 4
        </button>

        {/* Activity 5 */}
        <button
          type="button"
          onClick={() => onNavigate("activity5")}
          className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition ${
            activePage === "activity5"
              ? "bg-[#5C6BC0] text-white"
              : "text-[#4B5578] hover:bg-[#C5CAE9]"
          }`}
        >
          Activity 5
        </button>
      </div>
    </nav>
  );
}

export default NavBar;