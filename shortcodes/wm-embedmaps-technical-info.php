<?php

add_shortcode('wm-embedmaps-technical-info', 'wm_render_technical_info_shortcode');
function wm_render_technical_info_shortcode($atts)
{
    ob_start();

    extract(shortcode_atts(array(
        "related_poi" => "",
    ), $atts));

    $htmlAttributes = '';

    if ($related_poi != '') {
        $htmlAttributes .= " wm-related-poi=\"$related_poi\"";
    }
    ?>
    <wm-embedmaps-technical-info <?php echo $htmlAttributes; ?>></wm-embedmaps-technical-info>
    <?php
$html = ob_get_clean();
    return $html;
}
