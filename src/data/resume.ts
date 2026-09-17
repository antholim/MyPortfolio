export const RESUME_EN = "/Anthony_Lim_Resume.pdf";

export const RESUME_FR = "/Anthony_Lim_Resume_FR.pdf";

export function resumeUrl(language: string): string {
  return language === "French" ? RESUME_FR : RESUME_EN;
}

export function openResume(language: string): void {
  window.open(resumeUrl(language), "_blank", "noopener,noreferrer");
}
