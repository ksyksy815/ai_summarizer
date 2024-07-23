const Nav = () => {
  return (
    <nav className="flex items-center justify-between w-full pt-3 mb-10 max-w-[914.2px]">
      <p className={`text-3xl font-semibold italic`}>Sumz</p>

      <button
        type="button"
        onClick={() => window.open(`https://github.com/ksyksy815`)}
        className="hover:underline"
      >
        GitHub
      </button>
    </nav>
  );
};

export default Nav;
