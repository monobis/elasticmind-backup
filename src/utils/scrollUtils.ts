export function handleScrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  const offset = 50;
  if (section) {
    const topPosition =
      section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: topPosition, behavior: "smooth" });
  }
}
