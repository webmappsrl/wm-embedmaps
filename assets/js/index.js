var baseUrl = '/wp-content/plugins/wm-embedmaps/assets/js/core/',
  host = document.getElementsByTagName('wm-map-container')[0],
  validPositions = ['absolute', 'relative', 'static', 'sticky'],
  validDisplays = ['block', 'flex', 'flex-root', 'grid', 'inline-block', 'inline-flex', 'inline-grid', 'list-item', 'table', 'table-cell'],
  appRoot = document.createElement('app-root'),
  runtime = document.createElement("script"),
  polyfills = document.createElement("script"),
  styles = document.createElement("script"),
  main = document.createElement("script"),
  vendor = document.createElement("script");

if (validPositions.indexOf(host.style.position) === -1)
  host.style.position = 'relative';
if (validDisplays.indexOf(host.style.display) === -1)
  host.style.display = 'inline-block';

host.style.height = '100%';
host.style.width = '100%';
appRoot.style.height = '100%';
appRoot.style.width = '100%';
host.appendChild(appRoot);
runtime.src = baseUrl + 'runtime.js';
polyfills.src = baseUrl + 'polyfills.js';
styles.src = baseUrl + 'styles.js';
main.src = baseUrl + 'main.js';
vendor.src = baseUrl + 'vendor.js';
document.head.appendChild(runtime);
document.head.appendChild(polyfills);
document.head.appendChild(styles);
document.head.appendChild(main);
document.head.appendChild(vendor);
