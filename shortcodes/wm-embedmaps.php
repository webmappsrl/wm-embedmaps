<?php

add_shortcode('wm-embedmaps', 'wm_render_maps_shortcode');
function wm_render_maps_shortcode($atts)
{
    ob_start();
    if (array_key_exists('config_url', $atts)) {
        $url = $atts['config_url'];
        ?>
    <wm-map-container configJsonUrl="<?php echo $url ?>"></wm-map-container>
    <script type="text/javascript" src="/wp-content/plugins/wm-embedmaps/assets/js/index.js"></script>
    <?php
} else {
        $post_id = get_the_ID();
        $post_type = get_post_type($post_id);

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
        ?>
    <wm-map-container class='<?php echo $post_type ?>'></wm-map-container>
    <script type="text/javascript" src="/wp-content/plugins/wm-embedmaps/assets/js/index.js"></script>
    <!-- Embededmaps script -->
    <script type="text/javascript">
        var layers = [<?php echo json_encode($layer); ?>];
        var definitions = [{
            id: 'vn-routes',
            icon: 'wm-icon-flag',
            color: '#f00'
        }];
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
