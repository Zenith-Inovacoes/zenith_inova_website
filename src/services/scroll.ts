export function scrollScreenTo(section: any, setOpen?: Function) {
  window?.scroll({
    top: section?.offsetTop - 100,
    behavior: "smooth",
  });
  setOpen != undefined ? setOpen(!open) : null;
}

export function watchScroll(section: any, sectionNumber: number, setActiveLink: Function) {
  if (window?.scrollY >= section?.offsetTop - 550) {
    setActiveLink(sectionNumber);
  }
}
