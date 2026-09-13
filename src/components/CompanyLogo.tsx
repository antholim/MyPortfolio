import { useState } from "react";
import styles from "../styles/companyLogo.module.css";

interface Props {
  src?: string;
  company: string;
}

/** "X2O Media" -> "X2". Only shown when a company has no logo asset. */
function monogram(company: string): string {
  const firstWord = company.trim().split(/\s+/)[0] ?? "";
  return firstWord.slice(0, 2).toUpperCase();
}

/**
 * Decorative: the company name always sits next to it, so the tile is hidden
 * from assistive tech rather than repeating the name.
 */
export default function CompanyLogo({ src, company }: Props): JSX.Element {
  const [failed, setFailed] = useState(false);

  return (
    <span className={styles.tile} aria-hidden="true">
      {src && !failed ? (
        <img src={src} alt="" loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <span className={styles.monogram}>{monogram(company)}</span>
      )}
    </span>
  );
}
