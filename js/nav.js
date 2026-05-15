(function () {
  var nav = document.querySelector("nav");
  if (!nav) return;

  var btn = nav.querySelector(".nav-toggle");
  var menu = document.getElementById("primary-nav");
  if (!btn || !menu) return;

  var mq = window.matchMedia("(max-width: 960px)");

  function setOpen(open) {
    if (open) {
      nav.classList.add("is-open");
      document.body.classList.add("nav-open");
      btn.setAttribute("aria-expanded", "true");
      btn.setAttribute("aria-label", "Close menu");
    } else {
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Open menu");
    }
  }

  function close() {
    setOpen(false);
  }

  function toggle() {
    setOpen(!nav.classList.contains("is-open"));
  }

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggle();
  });

  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", close);
  });

  var cta = nav.querySelector(".nav-cta");
  if (cta) {
    cta.addEventListener("click", close);
  }

  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target)) close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });

  function onMq() {
    if (!mq.matches) close();
  }

  if (mq.addEventListener) {
    mq.addEventListener("change", onMq);
  } else if (mq.addListener) {
    mq.addListener(onMq);
  }
})();
