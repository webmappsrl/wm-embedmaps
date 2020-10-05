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

- `height`: set the content height (which by default is 100% of the container). Accept any CSS value included unit. E.g. '200px', '50vh', '80%'
- `config_url`: load the specified config.json to configure the plugin. To know more about this parameters please contact us
- `base_url`: use this url as a base url. To know more about this parameters please contact us
- `geojson_url`: load the specified geojson from url in the resulting map.
- `fit_layer_max_zoom`: set the max zoom when fitting layer bounds in the map. Useful to make the map accessible at high zoom levels but to force it to keep a medium zoom level during actions like center on a specific feature. Must be a number between 0 and 16
- `disable_click_in_map`: make the map not react at click event. This means no popups are opened neither features can be selected from the map
- `route`: load the specified route. It can be an id (it will need a base_url to load the route properly) or an url (for relative urls it will also need the base_url)
- `feature_color`: use this color as the default color for the features in the map. A feature can have a color property specified that will overwrite this option
- `color`: use this color as ptheme primary color. Default: '#3880ff'

#### 3.1.3 Examples

### 3.2 Technical Info Shortcode

The shortcode to instantiate the Technical Info Block is the

`wm-embedmaps-technical-info`

It must be used with at least the `wm-embedmaps`. This instantiate a block that will contains all the technical info related to the track or the poi selected in the map

#### 3.2.2 Parameters

This shortcode can be configured to match the user needs. The currently available parameters are:

- `related_poi` | boolean: true if the technical info should contains also the list of related poi

#### 3.2.3 Examples

### 3.3 Elevation Chart Shortcode

The shortcode to instantiate the Elevation Chart Block is the

`wm-embedmaps-elevation-chart`

It must be used with at least the `wm-embedmaps`. This instantiate a block that will contains the elevation chart related to the selected track in the map.

#### 3.3.2 Parameters

#### 3.3.3 Examples

### 3.4 Related Pois Shortcode

The shortcode to instantiate the Related Pois Block is the

`wm-embedmaps-related-pois`

It must be used with at least the `wm-embedmaps`. This instantiate a block that will contains all the related poi of a selected track. This by default is contained in the Technical Info block

#### 3.4.2 Parameters

#### 3.4.3 Examples

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
