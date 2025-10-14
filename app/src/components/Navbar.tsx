import Logo from "./Logo";
import Avatar from "./Avatar";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-b-[#233648] px-10 py-3">
      <div className="flex items-center gap-4 text-black dark:text-white">
        <Logo />
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
          CoachOps
        </h2>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          {[
            "Home",
            "My Network",
            "Jobs",
            "Messaging",
            "Notifications",
            "Me",
          ].map((label) => (
            <a
              key={label}
              className="text-gray-800 dark:text-white text-sm font-medium leading-normal"
              href="#"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#233648] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </button>

        <ThemeToggle/>

        <Avatar
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4vl6rEmC9vjtNrU91VjUawDJd7qQKF_Tl61w9N_C31jdn9dmXPnx_OHn33QRR1S4KRkXM3hzMDMpRo2_YCK3tyNIvYhM8YDaXdo23eJKMoZ3pI8C5n7YHULRWxTtK7Lsn6w0YqCwXQ41Erd7YdDRCz6MTvZUtXYhdi90O-0NKfiMcjU7mzPPKZ_sFBw1YtCES0unnMbc60IOGxkKFQsRi0mbsLARbNDb2c3u2j1Y5zw_kTA9awShpneHGjSZC8S6hpXLbwqgh6TY"
          alt="User avatar"
          size={40}
        />
      </div>
    </header>
  );
}
