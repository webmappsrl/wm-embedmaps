# wm-embedmaps

Allow to embed the Webmapp Map in a wordpress enviromnent
This software is developed and mantained by WEBMAPP TEAM (see [Authors](#6-authors)). Please fill free to contact us (info@webmapp.it) for any question.

- [1 Develop](#1-develop)
- [2 Installation](#2-installation)
- [3 Usage](#3-usage)
  - [3.1 Main Shortcode](#31-main-shortcode)
    - [3.1.1 Shortcode](#311-shortcode)
    - [3.1.2 Parameters](#312-parameters)
    - [3.1.3 Style](#313-style)
    - [3.1.4 FAQ](#314-faq)
    - [3.1.5 Examples](#315-examples)
  - [3.2 Technical Info Shortcode](#32-technical-info-shortcode)
    - [3.2.2 Parameters](#322-parameters)
    - [3.2.3 Style](#323-style)
    - [3.2.4 Examples](#324-examples)
  - [3.3 Elevation Chart Shortcode](#33-elevation-chart-shortcode)
    - [3.3.2 Parameters](#332-parameters)
    - [3.3.3 Style](#333-style)
    - [3.3.4 Examples](#334-examples)
  - [3.4 Related Pois Shortcode](#34-related-pois-shortcode)
    - [3.4.2 Parameters](#342-parameters)
    - [3.4.3 Style](#343-style)
    - [3.4.4 Examples](#344-examples)
- [4 Built With](#4-built-with)
- [5 Contributing](#5-contributing)
- [6 Authors](#6-authors)
- [8 License](#8-license)

## 1 Develop

Firstly you need to clone the repo

`git clone git@github.com:webmappsrl/wm-embedmaps.git`

This code only allows to develop the shortcodes and some other php/Wordpress related features. To start developing the proper plugin code you should contact us at info@webmapp.it

## 2 Installation

To install the plugin you can simply you can simply clone the plugin as demonstrated in the [1 Develop](#1) section

## 3 Usage

This plugin creates some shortcodes that you can then use inside your Wordpress based website.

### 3.1 Main Shortcode

The main shortcode must be present in the page to instantiate a map instance. You must use this shortcode once per page or it could behave in an unexpected manner.

#### 3.1.1 Shortcode

The shortcode to instantiate the map is the

`wm-embedmaps`

It can be used alone or with any other shortcode created by this plugin. Every feature that is requested by another shortcode (like the technical info) will not display inside this block.

#### 3.1.2 Parameters

This shortcode can be configured to match the user needs. The currently available parameters are:

| Parameter                          | Type      | Default     | Description                                                                                                                                                                                                                                  | FAQ                                                          |
| ---------------------------------- | --------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `height`                           | `string`  | `100%`      | Set the content height (which by default is 100% of the container). Accept any CSS value included unit. E.g. '200px', '50vh', '80%'                                                                                                          |                                                              |
| `config_url`                       | `string`  | `undefined` | Load the specified config.json to configure the plugin                                                                                                                                                                                       | To know more about this parameters please contact us         |
| `base_url`                         | `string`  | `undefined` | Use this url as a base url                                                                                                                                                                                                                   | To know more about this parameters please contact us         |
| `geojson_url`                      | `string`  | `undefined` | Load the specified geojson from url in the resulting map                                                                                                                                                                                     |                                                              |
| `fit_layer_max_zoom`               | `number`  | `16`        | Set the max zoom when fitting layer bounds in the map. Useful to make the map accessible at high zoom levels but to force it to keep a medium zoom level during actions like center on a specific feature. Must be a number between 0 and 16 |                                                              |
| `disable_click_in_map`             | `boolean` | `false`     | Make the map not react at click event. This means no popups are opened neither features can be selected from the map                                                                                                                         |                                                              |
| `route`                            | `string`  | `undefined` | Load the specified route. It can be an id (it will need a base_url to load the route properly) or an url (for relative urls it will also need the base_url)                                                                                  |                                                              |
| `feature_color`                    | `string`  | `undefined` | Use this color as the default color for the features in the map. A feature can have a color property specified that will overwrite this option                                                                                               |                                                              |
| `color`                            | `string`  | `#3880ff`   | Use this color as theme primary color                                                                                                                                                                                                        |                                                              |
| `use_only_geojson_url`             | `boolean` | `false`     | Set to true if you want to show only the geojson url data and not the data from the config_url you specified                                                                                                                                 |                                                              |
| `details_feature_id`               | `string`  | `undefined` | Use this field to specify a feature id to show in the map directly with the details opened                                                                                                                                                   |                                                              |
| `force_zoom_to_details_feature_id` | `boolean` | `false`     | Use this field to make the feature specified in the `details_feature_id` center in the map                                                                                                                                                   |                                                              |
| `force_zoom_to_feature_in_details` | `boolean` | `false`     | Use this field to make all the features center in the map                                                                                                                                                                                    |                                                              |
| `hide_lateral_panel`               | `boolean` | `false`     | Use this field to make the map never show the lateral panel for details, search and stuff                                                                                                                                                    |                                                              |
| `related_poi_click_behaviour`      | `string`  | `open`      | Define the behaviour on the click event on a related poi. Can be "select" (select the poi in map), "open" (open the poi details), "web" (open the web url)                                                                                   |                                                              |
| `features_ids`                     | `string`  | `undefined` | Allow to specify a series of ids to load (for multiple ids just separate them with commas `,`). If the features have related poi it automatically load them when activated from configuration                                                | If `undefined` all the features are downloaded               |
| `taxonomy_types`                   | `string`  | `undefined` | Define the taxonomy types to download. Must be a string composed by taxonomy types (`webmapp_category`, `activity`, `theme`, `when`, `where`, `who`) separated by commas `,`                                                                 | If `undefined` all taxonomy types are downloaded             |
| `taxonomy_terms`                   | `string`  | `undefined` | Define the taxonomy terms to download. Must be a string composed by the taxonomy ids separated by commas `,`                                                                                                                                 | If `undefined` all taxonomy terms are downloaded             |
| `post_types`                       | `string`  | `undefined` | Define the post types to download. Must be a string composed by post types (`poi`, `track`, `route`, `event`) separated by commas `,`                                                                                                        | If `undefined` all post types are downloaded                 |
| `hide_taxonomy_filters`            | `boolean` | `false`     | Set to true to hide the taxonomy filters in map                                                                                                                                                                                              |                                                              |
| `hide_fullscreen_taxonomy_filters` | `boolean` | `false`     | Set to true to hide the taxonomy filters in map when fullscreen mode is active                                                                                                                                                               |                                                              |
| `show_related_pois`                | `boolean` | `false`     | Set to true show the related pois in the map. This will also download the related pois even if the filters are not specifically including them.                                                                                              |                                                              |
| `fullscreen_on_text`               | `string`  | `undefined` | Set the html to show when the fullscreen is on and can be toggled off                                                                                                                                                                        | Values starting with `wm-icon` will resolve as Webmapp Icons |
| `fullscreen_off_text`              | `string`  | `undefined` | Set the html to show when the fullscreen is off and can be toggled on                                                                                                                                                                        | Values starting with `wm-icon` will resolve as Webmapp Icons |
| `show_more_url_text`               | `string`  | `undefined` | Set the html to show when the show more button is shown in the details panel. By default it shows 'Scopri'                                                                                                                                   |                                                              |
| `poi_click_action`                 | `string`  | `undefined` | Set the action to perform when selecting a poi in the map. Possible values: `details`, `popup`. Default: `details`                                                                                                                           |                                                              |
| `track_click_action`               | `string`  | `undefined` | Set the action to perform when selecting a track in the map. Possible values: `details`, `popup`. Default: `details`                                                                                                                         |                                                              |
| `route_click_action`               | `string`  | `undefined` | Set the action to perform when selecting a route in the map. Possible values: `details`, `popup`. Default: `details`                                                                                                                         |                                                              |

#### 3.1.3 Style

This shortcode can be personalized to look like the user's needs. It is possible to set the following CSS variables that will be used as CSS parameters inside the various components:

| Parameter                                    | Default   | Description                                                                                            | FAQ |
| -------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------ | --- |
| `--wm-actions-color`                         | `#000000` | Define the text color of the top right action buttons (fullscreen, options and filters)                |     |
| `--wm-actions-background`                    | `#ffffff` | Define the background color of the top right action buttons (fullscreen, options and filters)          |     |
| `--wm-actions-hover-color`                   | `#000000` | Define the text color of the top right action buttons (fullscreen, options and filters) on hover       |     |
| `--wm-actions-hover-background`              | `#cccccc` | Define the background color of the top right action buttons (fullscreen, options and filters) on hover |     |
| `--wm-actions-fullscreen-horizontal-padding` | `5px`     | Define the horizontal padding of the fullscreen button                                                 |     |

#### 3.1.4 FAQ

#### 3.1.5 Examples

### 3.2 Technical Info Shortcode

The shortcode to instantiate the Technical Info Block is the

`wm-embedmaps-technical-info`

It must be used with at least the `wm-embedmaps`. This instantiate a block that will contains all the technical info related to the track or the poi selected in the map

#### 3.2.2 Parameters

This shortcode can be configured to match the user needs. The currently available parameters are:

| Parameter     | Type      | Default     | Description                                                                                                                                                                                                                                                                                           | FAQ                                                                   |
| ------------- | --------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `related_poi` | `boolean` | `false`     | Set to `true` if the technical info should contains also the list of related poi                                                                                                                                                                                                                      |                                                                       |
| `config`      | `string`  | `undefined` | A string with all the info to show separated by commas `,`. Available infos: `ele_from`, `ele_to`, `ele_max`, `ele_min`, `distance`, `duration_forward`, `duration_backward`, `ascent`, `descent`, `from`, `to`, `operator`, `scale`, `cai_scale`, `mtb_scale`, `ref`, `difficulty`, `stages`, `code` | If `undefined` all the info will be visible based on the feature type |
| `feature_id`  | `string`  | `undefined` | Set the content of the shortcode using the given id. The component will always be visible with only this feature content                                                                                                                                                                              |                                                                       |

#### 3.2.3 Style

This shortcode can be personalized to look like the user's needs. It is possible to set the following CSS variables that will be used as CSS parameters inside the various components:

| Parameter                    | Default              | Description                                           | FAQ                                                         |
| ---------------------------- | -------------------- | ----------------------------------------------------- | ----------------------------------------------------------- |
| `--wm-grid-template-columns` | `1fr 1fr`            | Define the template of the technical info             |                                                             |
| `--wm-value-font-size`       | `17px`               | Define the font-size of the technical info value      | This default value could vary due to the `config_url` param |
| `--wm-value-font-weight`     | `normal`             | Define the font-weight of the technical info value    |                                                             |
| `--wm-value-text-align`      | `left`               | Define the text alignment of the technical info value |                                                             |
| `--wm-value-color`           | `black`              | Define the color of the technical info value          | This default value could vary due to the `config_url` param |
| `--wm-label-font-size`       | `17px`               | Define the font-size of the technical info label      | This default value could vary due to the `config_url` param |
| `--wm-label-font-weight`     | `normal`             | Define the font-weight of the technical info label    |                                                             |
| `--wm-label-text-align`      | `left`               | Define the text alignment of the technical info label |                                                             |
| `--wm-label-color`           | `rgba(0, 0, 0, 0.7)` | Define the color of the technical info label          | This default value could vary due to the `config_url` param |

Every technical info has also a specific class named `wm_embedmaps-[technical_info_key]` where the technical info key can be found in the parameter `wm-config` in the list.

#### 3.2.4 Examples

### 3.3 Elevation Chart Shortcode

The shortcode to instantiate the Elevation Chart Block is the

`wm-embedmaps-elevation-chart`

It must be used with at least the `wm-embedmaps`. This instantiate a block that will contains the elevation chart related to the selected track in the map.

#### 3.3.2 Parameters

| Parameter     | Type      | Default     | Description                                                                                                              | FAQ |
| ------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ | --- |
| `feature_id`  | `string`  | `undefined` | Set the content of the shortcode using the given id. The component will always be visible with only this feature content |     |

#### 3.3.3 Style

This shortcode can be personalized to look like the user's needs. It is possible to set the following CSS variables that will be used as CSS parameters inside the various components:

| Parameter                       | Default    | Description                                                                          | FAQ                                                                                                          |
| ------------------------------- | ---------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `--wm-line-color`               | `$primary` | Set the color of the line                                                            | The primary color can be configured using the `config_url` param                                             |
| `--wm-line-width`               | `1`        | Set the width of the chart line                                                      |                                                                                                              |
| `--wm-fill-color`               | `$primary` | Set the fill color of the chart                                                      | Use `rgba(0,0,0,0)` to make it transparent. The primary color can be configured using the `config_url` param |
| `--wm-point-border-color`       | `$primary` | Set the color of the border of the points                                            | The primary color can be configured using the `config_url`                                                   |
| `--wm-point-fill-color`         | `$primary` | Set the color of the points                                                          | The primary color can be configured using the `config_url`                                                   |
| `--wm-point-radius`             | `1`        | Set the radius of the point 1                                                        |
| `--wm-point-hover-border-color` | `$primary` | Set the color of the border of the points when hovering them                         | The primary color can be configured using the `config_url`                                                   |
| `--wm-point-hover-fill-color`   | `$primary` | Set the color of the points while hovering them                                      | The primary color can be configured using the `config_url`                                                   |
| `--wm-point-hover-radius`       | `5`        | Set the radius of the point when hovering it                                         |
| `--wm-tooltip-background-color` | `#000000`  | Set the background color of the tooltip                                              |
| `--wm-tooltip-border-color`     | `#000000`  | Set the border color of the tooltip                                                  |
| `--wm-tooltip-border-width`     | `1`        | Set the border width of the tooltip                                                  |
| `--wm-tooltip-color`            | `#ffffff`  | Set the text color of the tooltip text                                               |
| `--wm-tooltip-title-font-size`  | `17`       | Set the size in px of the title of the tooltip (elevation)                           |
| `--wm-tooltip-label-font-size`  | `15`       | Set the size in px of the label of the tooltip (distance)                            |
| `--wm-hide-grid`                | `0`        | Set to a positive number to hide the grid in the chart                               |
| `--wm-max-x-values`             | `8`        | Set the maximum number of x values in the x axis                                     | The real number depends on factors like number of points, width and more                                     |
| `--wm-max-y-values`             | `8`        | Set the maximum number of y values in the y axis                                     | The real number depends on factors like total elevation difference and more                                  |
| `--wm-points-number`            | `50`       | Set the number of point to draw. Low values means softer but less precise chart line | The value must be within 5 and 800                                                                           |

#### 3.3.4 Examples

### 3.4 Related Pois Shortcode

The shortcode to instantiate the Related Pois Block is the

`wm-embedmaps-related-pois`

It must be used with at least the `wm-embedmaps`. This instantiate a block that will contains all the related poi of a selected track. This by default is contained in the Technical Info block

#### 3.4.2 Parameters

| Parameter     | Type      | Default     | Description                                                                                                              | FAQ |
| ------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ | --- |
| `feature_id`  | `string`  | `undefined` | Set the content of the shortcode using the given id. The component will always be visible with only this feature content |     |

#### 3.4.3 Style

This shortcode can be personalized to look like the user's needs. It is possible to set the following CSS variables that will be used as CSS parameters inside the various components:

| Parameter                   | Default   | Description                                                                        | FAQ                                                         |
| --------------------------- | --------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `--wm-show-numbers`         | `0`       | A positive number cause the related poi numeration to show                         |                                                             |
| `--wm-title-font-size`      | `20px`    | The font size of the title of the related poi                                      |                                                             |
| `--wm-subtitle-font-size`   | `17px`    | The font size of the subtitle of the related poi                                   |                                                             |
| `--wm-number-font-size`     | `20px`    | The font size of the numeration of the related poi                                 |                                                             |
| `--wm-title-color`          | `#ffffff` | The title color of the related poi                                                 | If the image is not present the default switch to `#000000` |
| `--wm-subtitle-color`       | `#ffffff` | The subtitle color of the related poi                                              | If the image is not present the default switch to `#000000` |
| `--wm-number-color`         | `#ffffff` | The number color of the related poi                                                | If the image is not present the default switch to `#000000` |
| `--wm-title-font-weight`    | `normal`  | The weight of the title of the related poi                                         |                                                             |
| `--wm-subtitle-font-weight` | `normal`  | The weight of the subtitle of the related poi                                      |                                                             |
| `--wm-number-font-weight`   | `normal`  | The weight of the numeration of the related poi                                    |                                                             |
| `--wm-title-line-clamp`     | `2`       | The maximum number of lines for the title of the related poi                       |                                                             |
| `--wm-subtitle-line-clamp`  | `1`       | The maximum number of lines for the subtitle of the related poi                    |                                                             |
| `--wm-bottom-border-width`  | `1px`     | The width of the line separation between two related poi                           |                                                             |
| `--wm-bottom-border-color`  | `#989aa2` | The color of the line separation between two related poi                           |                                                             |
| `--wm-hide-header`          | `0`       | Hide the header (icon and text) usually visible on the top of the related poi list |                                                             |
| `--wm-hide-subtitle`        | `0`       | Hide the subtitle of the related pois                                              |                                                             |
| `--wm-hide-images`          | `0`       | Hide the image of the related pois                                                 |                                                             |

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
