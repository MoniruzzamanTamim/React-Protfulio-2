import { DarkMode, LightMode } from "@mui/icons-material";

function Header({ isDark, setIsDark, navLinks }) {
  return (
    <header className="site-header fixed-top shadow-sm">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            TAMIM
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              {navLinks.map((link) => (
                <li key={link.href} className="nav-item">
                  <a className="nav-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <button
                  type="button"
                  className="btn btn-sm  mainbtn  d-flex align-items-center gap-1"
                  onClick={() => setIsDark((prev) => !prev)}
                >
                  {isDark ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
                  {isDark ? "Light" : "Dark"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
