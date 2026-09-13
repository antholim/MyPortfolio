import { useEffect, useRef, useState } from "react";
import styles from "../styles/Header.module.css";
import { LanguageProps } from "../types/props";
import {
  navBarLinkEnglish,
  navBarLinkFrench,
  navBarLinkSpanish,
  NAV_HREF,
} from "../data/header";
import { Languages } from "../data/experience";
import { openResume } from "../data/resume";
import ThemeToggle from "./ThemeToggle";

function pickNav(language: string): string[] {
  if (language === "French") return navBarLinkFrench;
  if (language === "Spanish") return navBarLinkSpanish;
  return navBarLinkEnglish;
}

function Header({ language, setLanguage }: LanguageProps): JSX.Element {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("about");
  const lastY = useRef(0);

  const navItems = pickNav(language);
  const visibleHrefs = NAV_HREF.filter((h) => h !== "download");

  const handleSelectLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (setLanguage) setLanguage(event.target.value);
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    visibleHrefs.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerClass = `${styles.header} ${hidden && !open ? styles.headerHidden : ""}`;

  const languagePicker = (
    <span className={styles.langWrap}>
      <select
        className={styles.langSelect}
        aria-label="Language"
        value={language}
        onChange={handleSelectLanguage}
      >
        {Object.values(Languages).map((lang) =>
          lang === "Spanish" ? null : (
            <option key={lang} value={lang}>
              {lang === "English" ? "EN" : "FR"}
            </option>
          ),
        )}
      </select>
      <span className={styles.langCaret} aria-hidden="true">
        ▾
      </span>
    </span>
  );

  return (
    <>
      <header className={headerClass}>
        <div className={styles.inner}>
          <a href="#about" className={styles.logo} onClick={() => setOpen(false)}>
            <span className={styles.logoMark}>AL</span>
            <span className={styles.logoName}>Anthony Lim</span>
          </a>

          <nav className={styles.desktopNav} aria-label="Primary">
            <ul className={styles.navList}>
              {navItems.map((label, i) => {
                const href = NAV_HREF[i];
                if (href === "download") return null;
                const isActive = active === href;
                return (
                  <li key={href}>
                    <a
                      href={`#${href}`}
                      className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className={styles.controls}>
              <ThemeToggle className={styles.iconBtn} />
              {languagePicker}
              <button
                type="button"
                className={styles.cv}
                onClick={() => openResume(language)}
              >
                {navItems[NAV_HREF.indexOf("download")]}
              </button>
            </div>
          </nav>

          <button
            type="button"
            className={`${styles.menuBtn} ${open ? styles.menuOpen : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.menuBars}>
              <span />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`${styles.mobileSheet} ${open ? styles.mobileSheetOpen : ""}`}
        aria-hidden={!open}
      >
        {navItems.map((label, i) => {
          const href = NAV_HREF[i];
          if (href === "download") {
            return (
              <button
                key="dl"
                type="button"
                className={styles.mobileNavItem}
                onClick={() => {
                  openResume(language);
                  setOpen(false);
                }}
              >
                <span>{label}</span>
                <span className={styles.mobileNavIndex}>↗</span>
              </button>
            );
          }
          return (
            <a
              key={href}
              href={`#${href}`}
              className={styles.mobileNavItem}
              onClick={() => setOpen(false)}
            >
              <span>{label}</span>
              <span className={styles.mobileNavIndex}>{String(i).padStart(2, "0")}</span>
            </a>
          );
        })}
        <div className={styles.mobileFoot}>
          <ThemeToggle className={styles.iconBtn} />
          {languagePicker}
        </div>
      </div>
    </>
  );
}

export default Header;
