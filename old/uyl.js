 function GM_addStyle(css) {
        var parent = document.getElementsByTagName("head")[0];
        if (!parent) {
            parent = document.documentElement;
        }
        var style = document.createElement("style");
        style.type = "text/css";
        var textNode = document.createTextNode(css);
        style.appendChild(textNode);
        parent.appendChild(style);
    }
    GM_addStyle(" \
.html5-main-video, .html5-video-content, .html5-video-player .video-stream {position: absolute; width: 100% !important; height: 100% !important;}\
.html5-video-player .video-stream, .html5-video-content {left:0 !important; top:0 !important; z-index:99999 !important;}\
.player-height {height: 100%;}\
.player-width {width: 100%;}\
#page.watch, #content, #page-container {padding-bottom:0px !important;}\
.watch7-playlist-bar {height:0px !important;}\
#guide, #footer-container, .yt-uix-range-tooltip-tip-content, .yt-uix-tooltip-tip-content, .yt-uix-overlay, #comments-view .video-list, #yt-masthead-content #masthead-upload-button-group, #yt-masthead-signin, appbar-onebar-upload-group, #yt-masthead-user #sb-button-notify, #appbar-guide-button-container, #yt-masthead-user .yt-masthead-user-icon, #comments-view .comment .yt-user-photo, #watch-owner-container, .watch7-card-promo, .distiller-first-time-promo, .distiller-first-time-promo.slim {display:none !important;}\
.site-left-aligned.guide-enabled #player, #player, #player-legacy, .site-left-aligned.guide-enabled #player-legacy, .site-left-aligned.guide-enabled #player, .site-left-aligned.guide-enabled #player-legacy, .site-left-aligned.guide-enabled #player-legacy { padding-left: 311px; padding-right: 1px; z-index:inherit; position: fixed;  width: 100%; height: 100%; background-color:transparent !important; -webkit-transition: 0 !important;transition:  0 !important}\
#watch7-main-container {padding-left: 0 !important; position: absolute; left: 0; top: 0; float: left; width: 311px; margin-top: 38px; display:none;}\
.sidebar-expanded #player, #player-legacy, .site-left-aligned.guide-enabled #player-legacy { width: auto; height:100%;}\
#watch7-container {padding-top: 0px; padding-left: 0px;}\
#watch7-content {width: 311px; margin-top:0px !important; overflow-x:hidden;}\
#watch7-main.clearfix { width: auto!important; left: 0px!important; min-width:0px!important;}\
#page.watch {margin-left: 0px!important;}\
#watch7-views-info { position: absolute!important; top: 62px; right: 22px; min-width: 160px!important; max-width: 160px!important; zoom: 0.9!important; -moz-transform: scale(0.96); -moz-transform-origin: 800px 0 0; -o-transform: scale(0.96);}\
#watch7-secondary-actions .yt-uix-button { float:left; height: 3em!important; margin-left: 6px!important;}\
#watch7-user-header {zoom: 0.96; -moz-transform: scale(0.96); -moz-transform-origin: 0 0; -o-transform: scale(0.9); padding: 0px!important; margin-left: 3px;}\
#watch7-user-header .yt-uix-button-subscription-container, #watch7-user-header .ypc-container {margin-left: 10px!important; zoom: 0.9!important; -moz-transform: scale(0.9); -moz-transform-origin: 0 0; -o-transform: scale(0.9);}\
#watch7-sentiment-actions { float: left!important; margin-top: 8px!important; zoom:0.8;  -moz-transform: scale(0.8);  -moz-transform-origin: 0 0; -o-transform: scale(0.8);}\
#watch7-headline, #watch7-notification-area, #watch7-user-header { padding: 5px 0!important; border:0px;}\
.action-panel-content {padding: 5px 0!important; width: 310px!important;}\
#watch7-sidebar {clear: left!important; float: left!important; width: 310px!important; padding: 0!important; padding-top:10px !important; margin-top: 2px!important; padding-right: 5px!important; margin-left: -5px!important;}\
.watch-wide #watch7-sidebar, .watch-playlist #watch7-sidebar, .watch-branded #watch7-sidebar {margin-top: 0px !important;}\
#watch-discussion {border: 0px; margin-left: 0px; overflow-x: hidden;}\
#watch-discussion {padding: 15px 2px !important;}\
#comments-test-iframe, #widget_bounds, #comments-test-iframe iframe {width: 311px !important;}\
.yt-uix-pager, #comments-view .comments-pagination {zoom: 0.8;  -moz-transform: scale(0.8); -moz-transform-origin: 0 0; -o-transform: scale(0.8);}\
.comments-pagination, #action-panel-share .share-panel {zoom: 0.8;  -moz-transform: scale(0.8);  -moz-transform-origin: 0 0; -o-transform: scale(0.8);}\
#watch-discussion .comments-iframe-container {max-width: 311px !important;}\
.site-left-aligned #yt-masthead-content {max-width: 244px!important; zoom: 0.9!important;  -moz-transform: scale(0.9); -moz-transform-origin: 0 0; -o-transform: scale(0.9);}\
.site-left-aligned.sidebar-expanded #yt-masthead {margin:0 !important;}\
#yt-masthead #logo-container {margin-left: 0px!important;margin-right: 0px!important;}\
#watch7-action-buttons {padding: 0; border:0px; border-bottom:1px solid #E6E6E6;}\
#watch-description.yt-uix-expander-collapsed #watch-description-content {margin-bottom: 8px;}\
#watch-description-expand, #watch-description-collapse {zoom:0.8;  -moz-transform: scale(0.8); -moz-transform-origin: 0 0; -o-transform: scale(0.8);}\
#watch7-headline.yt-uix-expander-collapsed h1 {white-space: normal;}\
#watch7-headline h1 {font-size: 15px;}\
#watch-description-clip {width: 300px;}\
#watch7-secondary-actions {float: left; margin-top: 22px; zoom: 0.9;  -moz-transform: scale(0.9); -moz-transform-origin: 0 0;  -o-transform: scale(0.9);}\
#watch7-action-panels {border: 0px;  border-bottom: 1px solid #292929;}\
.yt-uix-button-panel {margin-left: 2px;}\
#yt-masthead-dropdown {position: relative; display: inline-block; border: 7px solid transparent; border-top-color: #999; top: 9px; right:3px;}\
#yt-masthead #search-btn .yt-uix-button-content {margin: 0 8px;}\
body { overflow-x: hidden; }\
#player-api, .watch-medium #player-api, .watch-large #player-api, #player-legacy, .site-left-aligned.guide-enabled #player-legacy {height:100%; width:100%; overflow-y:hidden; background: transparent; z-index:3333}\
#watch-description.yt-uix-expander-collapsed {cursor: default;}\
#page.watch {padding-top: 0px;}\
.watch7-playlist-bar-left {position: fixed;bottom: 0;left: 0;z-index: 999;width: 344px; zoom: 0.9;  -moz-transform: scale(0.9); -moz-transform-origin: 0 100%; -o-transform: scale(0.9);}\
.watch7-playlist-bar-right {z-index: 980; left: 0; bottom: 0; width: 348px; position: fixed; margin-left: -4px; height:27.5%; zoom: 0.9;  -moz-transform: scale(0.9); -moz-transform-origin: 0 100%; -o-transform: scale(0.9);}\
#watch7-playlist-tray-container {z-index: 990; left: 0; bottom: 0; width: 348px; position: fixed; margin-left: -4px; height:25%; zoom: 0.9;  -moz-transform: scale(0.9); -moz-transform-origin: 0 100%; -o-transform: scale(0.9);}\
#watch7-playlist-tray .video-list-item a {padding: 4px 0;}\
#watch-headline-title .YouTubeLyricsByRobWPageActionIcon, .LyricsHereByRobWPageActionIcon {position: absolute; top: 66px !important; right: 22px !important; zoom: 0.6;}\
#player, #player-legacy, .site-left-aligned.guide-enabled #player-legacy, #watch7-main, #playlist {min-width: 0px !important;}\
.watch-sidebar {margin-right: 0px;}\
.yt-default h1, .yt-default h2, .yt-default h3, .yt-default h4, .yt-default h5, .yt-default h6, h1.yt, h2.yt, h3.yt, h4.yt, h5.yt, h6.yt {margin-bottom: 6px;}\
#comments-view .comment:hover p.metadata {opacity:0.4;}\
#watch-discussion .yt-uix-button {height: 15px;}\
#watch7-sidebar .watch-sidebar-section {margin:0;}\
.video-list-item {margin-bottom: 10px;}\
#watch-description.yt-uix-expander-collapsed #watch-description-content {margin-bottom: 0px;}\
.site-center-aligned.flex-width-enabled #alerts, .site-center-aligned.flex-width-enabled #content, .site-center-aligned .yt-base-gutter {min-width: 0;}\
.cardified-page #masthead-appbar-container {background-color: transparent !important; border-bottem:0px; -webkit-box-shadow: none; box-shadow: none; }\
#appbar-primary-container {width: 36px; overflow: hidden; zoom: 0.9;}\
.site-center-aligned .yt-base-gutter {padding-left: 0px;padding-right: 0px;}\
#watch7-action-panels #watch7-action-panel-footer {display: none !important;}\
#watch7-sidebar .watch-sidebar-section {width: 311px !important;}\
.site-left-aligned #page.watch {padding-top: 0px !important;}\
.watch7-playlist-bar-secondary-controls {padding: 0 0px;}\
.site-center-aligned .watch #content.content-alignment, .site-center-aligned #player.watch-small {max-width: none;}\
#appbar-onebar-upload-group, #appbar-guide-button, #video-wall-container, #watch7-sidebar-ads {display: none;}\
.site-center-aligned #yt-masthead .yt-masthead-logo-container {width: auto;}\
.site-center-aligned #masthead-search {min-width: 0px;}\
#yt-masthead-content {width: 218px;}\
.exp-appbar-onebar.site-center-aligned.appbar-hidden #masthead-positioner-height-offset {height: auto;}\
.site-center-aligned #player {margin-top: 0px;}\
.site-center-aligned.appbar-hidden #masthead-positioner-height-offset {height: 0px !important;}\
.site-center-aligned #yt-masthead-container {min-width: 0px;}\
.site-center-aligned #player.watch-small {width: none;}\
.ad-container-single-media-element {width:100% !important; height:100% !important; z-index:999999;}\
#yt-masthead-container.yt-grid-box {border:0px; padding: 0px; width: 311px; float: left; position: relative; z-index: 7; padding-bottom:0px; display:none;}\
.site-left-aligned.exp-new-site-width #yt-masthead, #yt-masthead, .site-left-aligned #yt-masthead-container {min-width: 311px!important; max-width: 311px!important;}\
#masthead-positioner {right:auto; width:100%; position:relative;}\
#yt-masthead-user-displayname {font-size:0px;width: 0px;height: 0px;border-style: solid;border-width: 8px 6px 0 6px;border-color: #aaa transparent transparent transparent;margin-left: 0px;}\
#yt-masthead-user {margin-left: 2px; margin-top: 8px;}\
.content-region {position: absolute !important; font-size: 8px !important; left: 0px !important; bottom: 0px; top:auto !important;}\
\ ");
