const sections = document.querySelectorAll("main > .section")

const handleScroll = () => {
  const scrollY = window.scrollY

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - (48 + window.innerHeight * 0.1)
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    const link = document.querySelector("header > a[href*= " + sectionId + "]")
    if (sectionTop <= scrollY && scrollY <= sectionTop + sectionHeight) {
      link.classList.add("active-link")
    } else {
      link.classList.remove("active-link")
    }
  })
}

window.addEventListener("scroll", handleScroll)
window.addEventListener("resize", handleScroll)
