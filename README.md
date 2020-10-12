# wm-embedmaps

Allow to embed the Webmapp Map in a wordpress enviromnent
This software is developed and mantained by WEBMAPP TEAM (see authors). Please fill free to contact us (info@webmapp.it) for any question.

## 1 Develop

Firstly you need to clone the repo

`git clone git@github.com:webmappsrl/wm-embedmaps.git`

This code only allows to develop the shortcode and some othe php/Wordpress related parts. To start developing the proper plugin code you should contact us at info@webmapp.it

## 2 Installation

To install the plugin you can simply you can simply clone the plugin as demonstrated in the [1 Develop](#1) section

## 3 Usage

This plugin create some shortcodes that you can then use inside your Wordpress based website.

### 3.1 Main Shortcode

The main shortcode must be present in the page to instantiate a map instance. You must use this shortcode once per page or it could behave in an unexpected manner.

#### 3.1.1 Shortcode

The shortcode to instantiate the map is the

`wm-embedmaps`

It can be used alone or with any other shortcode created by this plugin. Every feature that is requested by another shortcode (like the technical info) will not display inside this block.

#### 3.1.2 Parameters

This shortcode can be configured to match the user needs. The currently available parameters are:

| Parameter                     | Type      | Default     | Description                                                                                                                                                                                                                                  | FAQ                                                  |
| ----------------------------- | --------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `height`                      | `string`  | `100%`      | set the content height (which by default is 100% of the container). Accept any CSS value included unit. E.g. '200px', '50vh', '80%'                                                                                                          |                                                      |
| `config_url`                  | `string`  | `undefined` | load the specified config.json to configure the plugin                                                                                                                                                                                       | To know more about this parameters please contact us |
| `base_url`                    | `string`  | `undefined` | use this url as a base url                                                                                                                                                                                                                   | To know more about this parameters please contact us |
| `geojson_url`                 | `string`  | `undefined` | load the specified geojson from url in the resulting map                                                                                                                                                                                     |                                                      |
| `fit_layer_max_zoom`          | `number`  | `16`        | set the max zoom when fitting layer bounds in the map. Useful to make the map accessible at high zoom levels but to force it to keep a medium zoom level during actions like center on a specific feature. Must be a number between 0 and 16 |                                                      |
| `disable_click_in_map`        | `boolean` | `false`     | make the map not react at click event. This means no popups are opened neither features can be selected from the map                                                                                                                         |                                                      |
| `route`                       | `string`  | `undefined` | load the specified route. It can be an id (it will need a base_url to load the route properly) or an url (for relative urls it will also need the base_url)                                                                                  |                                                      |
| `feature_color`               | `string`  | `undefined` | use this color as the default color for the features in the map. A feature can have a color property specified that will overwrite this option                                                                                               |                                                      |
| `color`                       | `string`  | `#3880ff`   | use this color as theme primary color                                                                                                                                                                                                        |                                                      |
| `use_only_geojson_url`        | `boolean` | `false`     | set to true if you want to show only the geojson url data and not the data from the config_url you specified                                                                                                                                 |                                                      |
| `details_feature_id`          | `string`  | `undefined` | use this field to specify a feature id to show in the map directly with the details opened                                                                                                                                                   |                                                      |
| `hide_lateral_panel`          | `boolean` | `false`     | use this field to make the map never show the lateral panel for details, search and stuff                                                                                                                                                    |                                                      |
| `related_poi_click_behaviour` | `string`  | `open`      | define the behaviour on the click event on a related poi. Can be "select" (select the poi in map), "open" (open the poi details), "web" (open the web url)                                                                                   |                                                      |
| `taxonomy_types`              | `string`  | `undefined` | define the taxonomy types to download. Must be a string composed by taxonomy types (`webmapp_category`, `activity`, `theme`, `when`, `where`, `who`) separated by commas `,`                                                                 | If `undefined` all taxonomy types are downloaded     |
| `taxonomy_terms`              | `string`  | `undefined` | define the taxonomy terms to download. Must be a string composed by the taxonomy ids separated by commas `,`                                                                                                                                 | If `undefined` all taxonomy terms are downloaded     |
| `post_types`                  | `string`  | `undefined` | define the post types to download. Must be a string composed by post types (`poi`, `track`, `route`) separated by commas `,`                                                                                                                 | If `undefined` all post types are downloaded         |

#### 3.1.3 Style

This shortcode can be personalized to look like the user's needs. It is possible to set the following CSS variables that will be used as CSS parameters inside the various components:

#### 3.1.4 FAQ

The parameters `taxonomy_types`, `taxonomy_terms` and `post_types` could cause problems when used with the `details_feature_id` (both alone or all together). At the current build status please try to not use them together

#### 3.1.5 Examples

### 3.2 Technical Info Shortcode

The shortcode to instantiate the Technical Info Block is the

`wm-embedmaps-technical-info`

It must be used with at least the `wm-embedmaps`. This instantiate a block that will contains all the technical info related to the track or the poi selected in the map

#### 3.2.2 Parameters

This shortcode can be configured to match the user needs. The currently available parameters are:

| Parameter        | Type      | Default     | Description                                                                                                                                                                                                                                                                                           | FAQ                                                                   |
| ---------------- | --------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `wm-related-poi` | `boolean` | `false`     | Set to `true` if the technical info should contains also the list of related poi                                                                                                                                                                                                                      |                                                                       |
| `wm-config`      | `string`  | `undefined` | A string with all the info to show separated by commas `,`. Available infos: `ele_from`, `ele_to`, `ele_max`, `ele_min`, `distance`, `duration_forward`, `duration_backward`, `ascent`, `descent`, `from`, `to`, `operator`, `scale`, `cai_scale`, `mtb_scale`, `ref`, `difficulty`, `stages`, `code` | If `undefined` all the info will be visible based on the feature type |

#### 3.2.3 Style

This shortcode can be personalized to look like the user's needs. It is possible to set the following CSS variables that will be used as CSS parameters inside the various components:

--wm-grid-template-columns: 1fr 1fr;
--wm-value-font-size: 1em;
--wm-value-font-weight: 500;
--wm-value-text-align: left;
--wm-value-color: #ff0000;
--wm-label-font-size: 1em;
--wm-label-font-weight: 500;
--wm-label-text-align: left;
--wm-label-color: #ff00ff;

Every technical info has also a specific class named `wm_embedmaps-[technical_info_key]` where the technical info key can be found in the parameter `wm-config` in the list

#### 3.2.4 Examples

### 3.3 Elevation Chart Shortcode

The shortcode to instantiate the Elevation Chart Block is the

`wm-embedmaps-elevation-chart`

It must be used with at least the `wm-embedmaps`. This instantiate a block that will contains the elevation chart related to the selected track in the map.

#### 3.3.2 Parameters

#### 3.3.3 Style

This shortcode can be personalized to look like the user's needs. It is possible to set the following CSS variables that will be used as CSS parameters inside the various components:

- **--wm-line-color**: _#00ffff_; | set the color of the line - default primary color
- **--wm-line-width**: _3_; | set the width of the line - default 1
- **--wm-fill-color**: _#00ff00_; | set the fill color of the graph. Use rgba(0,0,0,0); to make it transparent - default primary color
- **--wm-point-border-color**: _#ff0000_; | set the color of the point border - default primary color
- **--wm-point-fill-color**: _#ff00ff_; | set the color of the point - default primary color
- **--wm-point-radius**: _1_; | set the radius of the point - default 1
- **--wm-point-hover-border-color**: _#ffff00_; | set the color of the point border when hovering it - default primary color
- **--wm-point-hover-fill-color**: _#0000ff_; | set the color of the point when hovering it - default primary color
- **--wm-point-hover-radius**: _5_; | set the radius of the point when hovering it - default 5
- **--wm-tooltip-background-color**: _#64758a_; | set the background color of the tooltip - default black
- **--wm-tooltip-border-color**: _#64758a_; | set the border color of the tooltip - default black
- **--wm-tooltip-border-width**: _1_; | set the border width of the tooltip - default 1
- **--wm-tooltip-color**: _#ffffff_; | set the text color of the tooltip content - default white
- **--wm-tooltip-title-font-size**: _20_; | set the size in px of the title of the tooltip (elevation) - default depends on font size
- **--wm-tooltip-label-font-size**: _15_; | set the size in px of the label of the tooltip (distance) - default depends on font size
- **--wm-hide-grid**: _1_; | set to a positive number to hide the grid in the chart - default 0
- **--wm-max-x-values**: _4_; | set the maximum number of x values in the x axis (the real number depends on factors like number of points, width and more) - default 8
- **--wm-max-y-values**: _3_; | set the maximum number of y values in the y axis (the real number depends on factors like total elevation difference and more) - default auto defined by chart script
- **--wm-points-number**: _50_; | set the number of point to draw. Low values means softer but less precise chart line - default 50, between [5, 800]

#### 3.3.4 Examples

### 3.4 Related Pois Shortcode

The shortcode to instantiate the Related Pois Block is the

`wm-embedmaps-related-pois`

It must be used with at least the `wm-embedmaps`. This instantiate a block that will contains all the related poi of a selected track. This by default is contained in the Technical Info block

#### 3.4.2 Parameters

#### 3.4.3 Style

This shortcode can be personalized to look like the user's needs. It is possible to set the following CSS variables that will be used as CSS parameters inside the various components:

#### 3.4.4 Examples

## 4 Built With

- MacOS Mojave 10.14.x | MacOS Catalina 10.15.x
- [Ionic](https://ionicframework.com/docs) - The cross-platform framework to build hybrid mobile app
- [Angular](https://angular.io/docs) - The framework used to develop the app
- [OpenLayers](https://openlayers.org/en/latest/doc/) - The map library
- [Gulp](https://gulpjs.com/) - Used to build apps and automate stuff

## 5 Contributing

To contribute to this project please contact one of the Authors listed at 8

## 6 Authors

- **Alessio Piccioli** - _CTO_ - [Webmapp](https://github.com/piccioli)
- **Davide Pizzato** - _App Developer_ - [Webmapp](https://github.com/dvdpzzt-webmapp)
- **Marco Barbieri** - _Map Maker and UX_ - [Webmapp](https://github.com/marchile)
- **Pedram Katanchi** - _Web developer_ - [Webmapp](https://github.com/padramkat)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## 8 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
