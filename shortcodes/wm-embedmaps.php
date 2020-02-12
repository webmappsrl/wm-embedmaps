<?php

add_shortcode('wm-embedmaps', 'wm_render_maps_shortcode');
function wm_render_maps_shortcode($atts)
{
    ob_start();

    extract(shortcode_atts(array(
        "height" => "",
        "config_url" => "",
        "geojson_url" => "",
        "base_url" => "",
        "fit_layer_max_zoom" => "",
        "disable_click_in_map" => "",
    ), $atts));

    if ($config_url != '') {
        ?>
    <wm-map-container <?php echo " configJsonUrl=\"$config_url\"";
        if ($height != '') {
            echo " style=\"height: $height\"";
        }
        ?>
        ></wm-map-container>
    <script type="text/javascript" src="/wp-content/plugins/wm-embedmaps/assets/js/index.js"></script>
    <?php
} elseif ($base_url != '') {
        ?>
    <wm-map-container <?php echo " baseUrl=\"$base_url\"";
        if ($height != '') {
            echo " style=\"height: $height\"";
        }
        if ($fit_layer_max_zoom != '') {
            echo " fitLayerMaxZoom=\"$fit_layer_max_zoom\"";
        }
        if ($disable_click_in_map != '') {
            echo " disableClickInMap=\"$disable_click_in_map\"";
        }
        ?>
        ></wm-map-container>
    <script type="text/javascript" src="/wp-content/plugins/wm-embedmaps/assets/js/index.js"></script>
    <?php
} else {
        $layers = array();
        if ($geojson_url) {
            $split = explode(',', $geojson_url);
            foreach ($split as $u) {
                array_push($layers, json_decode(file_get_contents($u), true));
            }
        } else {
            $post_id = get_the_ID();
            $post_type = get_post_type($post_id);

            $term_color = '';
            $term_icon = '';

            $layer = array(
                'type' => 'FeatureCollection',
                'features' => array(
                    array(
                        'type' => 'Feature',
                        'geometry' => array(),
                        'properties' => array(
                            'id' => $post_id,
                            'web' => get_the_permalink(),
                            'image' => get_the_post_thumbnail_url(),
                            'name' => get_the_title(),
                        ),
                    ),
                ),
            );

            if ($post_type == 'poi') {
                $terms = get_the_terms($post_id, 'webmapp_category');
                foreach ($terms as $term) {
                    $term_icon = get_field('wm_taxonomy_icon', $term);
                    $term_color = get_field('wm_taxonomy_color', $term);
                }
                $layer['features'][0]['properties']['color'] = $term_color;
                $layer['features'][0]['properties']['icon'] = $term_icon;
                $poi_coord = get_field('n7webmap_coord', $post_id);
                $lat = $poi_coord['lat'];
                $lng = $poi_coord['lng'];
                $geometry = array(
                    'type' => 'Point',
                    'coordinates' => array(
                        floatval($lng),
                        floatval($lat),
                    ),
                );
                $layer['features'][0]['geometry'] = $geometry;
            } elseif ($post_type == 'track') {
                $track_geojson = get_field('n7webmap_geojson');
            } elseif ($post_type == 'route') {
                $geometry = array(
                    'type' => 'Point',
                    'coordinates' => array(
                        floatval(get_field('vn_longitude', $post_id)),
                        floatval(get_field('vn_latitude', $post_id)),
                    ),
                );
                $layer['features'][0]['geometry'] = $geometry;
            }

            array_push($layers, $layer);
        }
        ?>
    <wm-map-container class='<?php echo $post_type ?>' <?php if ($height != '') {
            echo "style=\"height: $height\"";
        }
        if ($fit_layer_max_zoom != '') {
            echo " fitLayerMaxZoom=\"$fit_layer_max_zoom\"";
        }
        if ($disable_click_in_map != '') {
            echo " disableClickInMap=\"$disable_click_in_map\"";
        }
        ?>></wm-map-container>
    <script type="text/javascript" src="/wp-content/plugins/wm-embedmaps/assets/js/index.js"></script>
    <!-- Embededmaps script -->
    <script type="text/javascript">
        var layers = [<?php
$definitions = array();
        $id = 0;
        foreach ($layers as $l) {
            echo json_encode($l) . ',';

            if (array_key_exists('properties', $l) && array_key_exists('name', $l['properties'])) {
                array_push($definitions, array(
                    'id' => array_key_exists('id', $l['properties']) ? $l['properties']['id'] : 'wm-def-id-' . $id,
                    'label' => $l['properties']['name'],
                    'color' => array_key_exists('color', $l['properties']) ? $l['properties']['color'] : null,
                    'icon' => array_key_exists('icon', $l['properties']) ? $l['properties']['icon'] : 'wm-icon-generic',
                    'createTaxonomy' => 'webmapp_category',
                ));
            } else {
                array_push($definitions, array(
                    'id' => 'wm-def-id-' . $id,
                    'color' => null,
                    'icon' => 'wm-icon-generic',
                ));
            }

            $id++;
        }
        ?>];
        var definitions = [<?php
foreach ($definitions as $d) {
            echo json_encode($d) . ',';
        }
        ?>];
        window.localStorage.setItem('wm_geojson_layers', JSON.stringify(layers));
        window.localStorage.setItem('wm_overlays_definition', JSON.stringify(definitions));
        document.dispatchEvent(new Event('wm_overlays_updated'));
    </script>
    <!-- END Embededmaps script -->
    <?php
}

    $html = ob_get_clean();
    return $html;
}
