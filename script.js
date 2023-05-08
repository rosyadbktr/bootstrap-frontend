let sosmedLink = document.getElementsByClassName("medsos-link");
// console.log(sosmedLink[0]);
let sosmedLinkChanges = (x) => x.classList.replace("text-secondary", "text-primary");
sosmedLink[0].addEventListener("mouseover", sosmedLinkChanges);