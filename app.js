// Stamp the page with build metadata injected at deploy time (see pages.yml).
// Falls back gracefully when opened locally.
(function () {
  var stamp = document.getElementById("build-stamp");
  if (window.__BUILD__ && window.__BUILD__.sha) {
    stamp.textContent =
      "deployed " + window.__BUILD__.time + " · " + window.__BUILD__.sha.slice(0, 7);
  } else {
    stamp.textContent = "local preview";
  }
})();