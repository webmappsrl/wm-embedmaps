<?php

add_shortcode('wm-embedmaps-related-poi', 'wm_render_related_poi_shortcode');
function wm_render_related_poi_shortcode($atts)
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
    <wm-embedmaps-related-poi <?php echo $htmlAttributes; ?>></wm-embedmaps-related-poi>
    <?php
$html = ob_get_clean();
    return $html;
}
