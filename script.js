const burger = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;
const links = Array.from(menu.children);
const linkActive = document.querySelectorAll(".menu__link");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  linkActive.forEach(function (item) {
    item.addEventListener("click", function () {
      let currentLink = item;

      linkActive.forEach(function (item) {
        item.classList.remove("link__active");
      });
      currentLink.classList.add("link__active");
    });
  });
} else {
  window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;

    const link1 = document.querySelector("#link_1");
    const link2 = document.querySelector("#link_2");
    const link3 = document.querySelector("#link_3");
    const link4 = document.querySelector("#link_4");
    const link5 = document.querySelector("#link_5");

    if (scrollPos < 933) {
      link1.classList.add("link__active");
    } else {
      link1.classList.remove("link__active");
    }

    if (scrollPos >= 933 && scrollPos < 1583) {
      link2.classList.add("link__active");
    } else {
      link2.classList.remove("link__active");
    }

    if (scrollPos >= 1583 && scrollPos < 2293) {
      link3.classList.add("link__active");
    } else {
      link3.classList.remove("link__active");
    }

    if (scrollPos >= 2293 && scrollPos < 2792) {
      link4.classList.add("link__active");
    } else {
      link4.classList.remove("link__active");
    }
    if (scrollPos >= 2792) {
      link5.classList.add("link__active");
    } else {
      link5.classList.remove("link__active");
    }
  });
}

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
