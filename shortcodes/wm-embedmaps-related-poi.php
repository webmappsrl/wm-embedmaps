<?php

add_shortcode('wm-embedmaps-related-poi', 'wm_render_related_poi_shortcode');
function wm_render_related_poi_shortcode($atts)
{
    ob_start();

    // extract(shortcode_atts(array(
    // ), $atts));
    ?>
    <wm-embedmaps-related-poi></wm-embedmaps-related-poi>
    <?php
$html = ob_get_clean();
    return $html;
}
