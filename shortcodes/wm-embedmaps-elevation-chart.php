<?php

add_shortcode('wm-embedmaps-elevation-chart', 'wm_render_elevation_chart_shortcode');
function wm_render_elevation_chart_shortcode($atts)
{
    ob_start();

    extract(shortcode_atts(array(
        "feature_id" => ""
    ), $atts));

    $htmlAttributes = '';

    if ($feature_id != '') {
        $htmlAttributes .= " featureId=\"$feature_id\"";
    }
    ?>
    <wm-embedmaps-elevation-chart <?php echo $htmlAttributes; ?>></wm-embedmaps-elevation-chart>
    <?php
$html = ob_get_clean();
    return $html;
}
