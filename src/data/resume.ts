export const RESUME_EN = "/Anthony_Lim_Resume.pdf";

// Drop a translated PDF in /public and set this to enable the French download.
export const RESUME_FR: string | null = null;

export function resumeUrl(language: string): string {
  return language === "French" && RESUME_FR ? RESUME_FR : RESUME_EN;
}

export function openResume(language: string): void {
  window.open(resumeUrl(language), "_blank", "noopener,noreferrer");
}
