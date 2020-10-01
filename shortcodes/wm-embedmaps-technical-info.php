<?php

add_shortcode('wm-embedmaps-technical-info', 'wm_render_technical_info_shortcode');
function wm_render_technical_info_shortcode($atts)
{
    ob_start();

    // extract(shortcode_atts(array(
    // ), $atts));
    ?>
    <wm-embedmaps-technical-info></wm-embedmaps-technical-info>
    <?php
$html = ob_get_clean();
    return $html;
}
