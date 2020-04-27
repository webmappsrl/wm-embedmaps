var baseUrl = "/wp-content/plugins/wm-embedmaps/assets/js/core/",
  host = document.getElementsByTagName("wm-map-container")[0],
  validPositions = ["absolute", "relative", "sticky"],
  validDisplays = [
    "block",
    "flex",
    "flex-root",
    "grid",
    "inline-block",
    "inline-flex",
    "inline-grid",
    "list-item",
    "table",
    "table-cell",
  ],
  appRoot = document.createElement("wm-embedmaps-root"),
  runtime = document.createElement("script"),
  polyfills = document.createElement("script"),
  styles = document.createElement("link"),
  main = document.createElement("script"),
  // vendor = document.createElement("script"),
  hostStyle = getComputedStyle(host);

if (validPositions.indexOf(hostStyle.position) === -1)
  host.style.position = "relative";
if (validDisplays.indexOf(hostStyle.display) === -1)
  host.style.display = "inline-block";

if (!hostStyle.height || (hostStyle.height === "0px" && !host.style.height))
  host.style.height = "100%";
if (!hostStyle.minHeight) host.style.minHeight = "400px";
if (!hostStyle.width || hostStyle.width === "auto" || hostStyle.width[0] == "0")
  host.style.width = "100%";
if (!hostStyle.minWidth) host.style.minWidth = "600px";
appRoot.style.height = "100%";
appRoot.style.width = "100%";
host.appendChild(appRoot);
runtime.src = baseUrl + "runtime.js";
polyfills.src = baseUrl + "polyfills.js";
styles.rel = "stylesheet";
styles.type = "text/css";
style.scoped = true;
styles.href = baseUrl + "styles.css";
main.src = baseUrl + "main.js";
// vendor.src = baseUrl + 'vendor.js';
document.head.appendChild(runtime);
document.head.appendChild(polyfills);
// document.head.appendChild(styles);
document.head.appendChild(main);
host.appendChild(styles);
// document.head.appendChild(vendor);
