# wm-embedmaps

Allow to embed Webmapp Maps in a wordpress enviromnent

## Usage

This plugin create the shortcode `wm-embedmaps` with the following parameters:

- `height`: set the map height. Accept any CSS value included unit. E.g. '200px', '50vh'
- `config_url`: make the map load the specified config.json from this url.
- `geojson_url`: make the map load the specified geojson from this url.
- `base_url`: make the map use this url as a base url. It will look for all the taxonomies and for the features in this url
- `fit_layer_max_zoom`: set the max zoom when using the fitlayer in a map. Useful to make the mapaccessible to high zoom but to force the map to keep a medium zoom level
- `disable_click_in_map`: make the map not react at click event. This means no popup are opened neither feature can be selected from the map
- `route`: make the map load the specified route. It can be an id (it will need a base_url to load the route properly) or an url (for relative urls it will also need the base_url)
- `featureColor`: make the map represent the feature with this standard color. A feature can have a color property specified that will overwrite temporarily this option
- `color`: make the app use this color as ptheme primary color. Default: '#3880ff'
