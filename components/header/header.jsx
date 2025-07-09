import { Link } from "react-router-dom";
import { useTheme } from "../../providers/ThemeContext.jsx";
import { useSearch } from "../../providers/searchContext.jsx";


function Header() {
    const { darkMode, toggleTheme } = useTheme();
    const { setSearch, search } = useSearch();

    const isSearchPage = window.location.pathname === "/search";

    return (
        <header className="w-full h-[11vh] sticky top-0 z-[2] bg-[#F7F3E3] flex justify-center items-start">
            <div className="w-[80%] h-[60px] fixed top-0 z-[2] bg-[#F7F3E3] border-b border-[#6F1A07] flex items-start justify-around pt-[12px] pb-[10px]">
                <Link to="/">
                    <img src="/logo.ico" alt="logo" loading="lazy" className="w-[25px] h-[25px]" />
                </Link>

                <span className="text-[#6F1A07] font-[Anchora] text-[20px]">VINTAGE</span>

                <div className="flex gap-[20px] items-start">
                    {isSearchPage ? (
                        <div className="w-[500px] min-w-[200px]">
                            <div className="relative">
                                <input
                                    className="peer w-full h-[44px] bg-[#F7F3E3] text-[#6F1A07] border border-[#6F1A07] rounded-[4px] px-[12px] pt-[18px] pb-[8px] placeholder-transparent text-sm transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                    onChange={(e) => setSearch(e.target.value)}
                                    value={search}
                                    placeholder="Search..."
                                />
                                <label
                                    className="absolute left-[12px] top-[12px] px-[4px] text-sm text-[#6F1A07] bg-[#F7F3E3] pointer-events-none transition-all duration-200 ease-in-out transform origin-left
                                    peer-placeholder-shown:top-[14px]
                                    peer-placeholder-shown:text-sm
                                    peer-focus:top-[4px]
                                    peer-focus:text-[12px]
                                    peer-focus:scale-[0.95]">
                                    Search...
                                </label>
                            </div>
                        </div>
                    ) : (
                        <Link to="/search">
                            <i className="bi bi-search text-[#6F1A07] text-[20px] hover:cursor-pointer hover:opacity-50" />
                        </Link>
                    )}

                    <i className="bi bi-list text-[#6F1A07] text-[20px] hover:cursor-pointer hover:opacity-50" />

                    <button onClick={toggleTheme}>
                        {darkMode === 'dark' ? (
                            <i className="bi bi-moon-stars-fill text-[20px] text-[#6F1A07]" />
                        ) : (
                            <i className="bi bi-brightness-high-fill text-[20px] text-[#6F1A07]" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
