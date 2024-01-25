const d = document;

export default function scrollSpy(){
  const $sections = d.querySelectorAll(".section");
  const $enlaces = d.querySelectorAll("#enlaces a")

  const observer = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(entrada => {
      const $id = entrada.target.getAttribute("id");

      if(entrada.isIntersecting){
        const id = "#" + entrada.target.id
        history.pushState({}, "", id)

        $enlaces.forEach(el => {
          const href = el.attributes.href.nodeValue;
          if(href === id) {
            el.classList.add("activo")
          } else {
            el.classList.remove("activo")
          }
        })
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: "0px",
  });

  $sections.forEach(el => observer.observe(el))
}

d.addEventListener("DOMContentLoaded", e => {
  scrollSpy();
})