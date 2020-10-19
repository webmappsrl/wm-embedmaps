<?php

add_shortcode('wm-embedmaps-elevation-chart', 'wm_render_elevation_chart_shortcode');
function wm_render_elevation_chart_shortcode($atts)
{
    ob_start();

    // extract(shortcode_atts(array(
    // ), $atts));
    ?>
    <wm-embedmaps-elevation-chart></wm-embedmaps-elevation-chart>
    <?php
$html = ob_get_clean();
    return $html;
}
