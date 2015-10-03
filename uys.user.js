// ==UserScript==
// @name          Unique Youtube Skin
// @description   Perfect watch page. Dinamicly adjust player size acc your window size to get biggest video.
// @author        haluk ilhan
// @homepage      https://github.com/halukilhan/uys
// @updateURL     https://raw.github.com/halukilhan/uys/master/uys.user.js
// @downloadURL   https://raw.github.com/halukilhan/uys/master/uys.user.js
// @require		  http://code.jquery.com/jquery-2.1.1.min.js
// @require       https://raw.github.com/halukilhan/uys/master/b.js
// @icon          http://i.imgur.com/VSfpO.jpg
// @version       0.5.23
// @include       http://*youtube.com*
// @include       https://*youtube.com*
// @grant         GM_info 
// @grant         GM_getValue 
// @grant         GM_log 
// @grant         GM_openInTab
// @grant         GM_registerMenuCommand 
// @grant         GM_setValue 
// @grant         GM_xmlhttpRequest 
// @grant         GM_addStyle 
// @grant         GM_getResourceText 
// @grant         GM_getResourceURL 
// ==/UserScript==

//Red Bar Disabler
(function () {
    function disableRedBar() {
        var uw;
        
        // unwraps the element so we can use its methods freely
        function unwrap(elem) {
            if (elem) {
                if ( typeof XPCNativeWrapper === 'function' && typeof XPCNativeWrapper.unwrap === 'function' ) {
                    return XPCNativeWrapper.unwrap(elem);
                } else if (elem.wrappedJSObject) {
                    return elem.wrappedJSObject;
                }
                    }
            
            return elem;
        }
        
        // get the raw window object of the YouTube page
        uw = typeof unsafeWindow !== 'undefined' ? unsafeWindow : unwrap(window);
        
        // disable Red Bar aka SPF
        if (uw._spf_state && uw._spf_state.config) {
            uw._spf_state.config['navigate-limit'] = 0;
            uw._spf_state.config['navigate-part-received-callback'] = function (targetUrl) {
                location.href = targetUrl;
            };
        }
    }
    
    // run it, then set it to run every second
    disableRedBar();
    window.setInterval(disableRedBar, 502);
}());


//Watch Page
if(window.location.href.indexOf("youtube.com/watch") >= 0) {       
    
    
    //Cool Black Theme    
    (function() {
        var css2 = "";
        //if (false || (document.domain == "youtube.com" || document.domain.substring(document.domain.indexOf(".youtube.com") + 1) == "youtube.com"))
        css2 += "html body{\nbackground-color: rgb(10,10,10)!important;\nbackground-image: url(http://i44.tinypic.com/9fsn50.jpg)!important;\ncolor: #aaa!important;\n}\n\n#yt-masthead #logo {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -131px -219px !important;\n}\n\n#yt-masthead-container {\nbackground: #1b1b1b !important;\nborder-bottom: 1px solid #292929 !important;\n}\n\n#masthead-search-terms {\nbackground-color: #333 !important;\ncolor:#aaa !important;\n}\n\n.masthead-search-terms-border {\nborder: 1px solid #303030 !important;\n-moz-box-shadow: inset 0 0px 0px #eee !important;\n-ms-box-shadow: inset 0 0px 0px #eee !important;\n-webkit-box-shadow: inset 0 0px 0px #000 !important;\nbox-shadow: inset 0 0px 0px #000 !important;\n}\n\n#yt-masthead-user {\ncursor: pointer !important;\n}\n\n#yt-masthead-user #sb-button-notify {\nbackground-color: #1b1b1b !important;\n}\n\n#yt-masthead-user .yt-uix-button-icon-bell {\nbackground: no-repeat url(http://i.imgur.com/veEzSqG.png) 0 -34px !important;\n}\n\nbody #masthead-expanded-container {\nbackground: #222 !important;\nborder-bottom-color: #303030 !important;\n}\n\n.yt-masthead-account-picker.yt-uix-clickcard-card-content {\ncolor: #aaa !important;\n}\n\n#masthead-expanded .masthead-expanded-menu-header {\ncolor: #aaa !important;\n}\n\n.yt-uix-clickcard-card-border, .yt-uix-hovercard-card-border {\nbackground: #222 !important;\nborder-color: #303030 !important;\n}\n  \n.yt-masthead-account-picker-option {\nbackground: #2b2b2b !important;\n}\n    \n.yt-masthead-picker-footer {\nbackground: #222 !important;\n}\n    \n.yt-masthead-account-picker-option .yt-masthead-picker-name {\ncolor: #aaa !important;\n}\n  \n.yt-uix-button-icon-icon-account-settings {\nbackground: no-repeat url(http://i.imgur.com/7fc8SwR.png) -49px -507px !important;\n}\n  \n.yt-uix-clickcard-card-reverse .yt-uix-card-body-arrow-vertical, .yt-uix-hovercard-card-reverse .yt-uix-card-body-arrow-vertical {\nborder-bottom-color: #222 !important;\n}\n      \n.yt-uix-clickcard-card-reverse .yt-uix-card-border-arrow-vertical, .yt-uix-hovercard-card-reverse .yt-uix-card-border-arrow-vertical {\nborder-bottom-color: #303030 !important;\n}\n\n#channel-search .show-search img, #channel-search .yt-uix-button-icon-search {\nbackground: no-repeat url(http://i.imgur.com/VirN1wE.png) -170px -201px !important;\n}\n\n.hitchhiker-enabled #masthead-search .search-btn-component .yt-uix-button-content {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -173px -62px !important;\n}\n\n.feed-author-bubble {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -149px -357px !important;\n}\n  \n.feed-author-bubble.rec {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -34px -62px !important;\n}\n\n.feed-header {\nborder-bottom-color: #303030 !important;\n}\n\n.feed-item-container .feed-item-main {\nborder-bottom-color: #303030 !important;\n}\n\n.feed-item-container .feed-item-main, .yt-lockup {\ncolor: #aaa !important;\n}\n\n.feed-item-channel-rec-text a {\ncolor: #bbb !important;\n}\n\n.feed-item-content-wrapper.playlist-promo, .feed-item-content-wrapper.channel-lockup {\nborder-color: #303030 !important;\n-moz-box-shadow: 0 0px 0px #ddd !important;\n-ms-box-shadow: 0 0px 0px #ddd !important;\n-webkit-box-shadow: 0 0px 0px #ddd !important;\nbox-shadow: 0 0px 0px #ddd !important;\n}\n\n.feed-item-grouplet-muted .channels-content-item .content-item-detail a.content-item-title, .feed-item-grouplet-muted .channels-content-item .content-item-detail a.content-item-title:visited, .feed-item-grouplet-muted .channels-content-item .content-item-detail a.content-item-title:hover {\ncolor: #2793e6 !important;\n}\n    \n.yt-lockup-playlist-item {\nborder-bottom-color: #303030 !important;\n}\n  \n.yt-uix-button-default, .yt-uix-button-default[disabled], .yt-uix-button-default[disabled]:hover, .yt-uix-button-default[disabled]:active, .yt-uix-button-default[disabled]:focus {\nborder-color: #303030!important;\nbackground: #242323!important;\ncolor: #aaa!important;\n}\n\n.yt-uix-button-text, .yt-uix-button-text[disabled] {\ncolor: #aaa !important;\n}\n\n.qualified-channel-title.ellipsized .qualified-channel-title-text {\ncolor: #aaa !important;\n}\n\n.branded-page-related-channels, .branded-page-related-channels h2, .branded-page-related-channels h2 a, .branded-page-related-channels h3 a, .branded-page-related-channels h3 {\ncolor: #777 !important;\n}\n\n.branded-page-v2-top-row {\nborder-color: #303030 !important;\nbackground: #1b1b1b !important;\n}\n\n.branded-page-v2-primary-col {\nborder-right-color: #303030 !important;\nborder-bottom-color: #303030 !important;\nborder-left-color: #303030 !important;\nbackground-color: #1b1b1b !important;\n}\n\n.branded-page-v2-primary-col .branded-page-box {\nborder-bottom-color: #303030 !important;\n}\n\n.branded-page-v2-has-solid-bg .branded-page-v2-col-container {\nborder-right-color: #303030 !important;\nborder-bottom-color: #303030 !important;\nborder-left-color: #303030 !important;\nbackground-color: #1b1b1b !important;\n}\n\n\n.branded-page-v2-secondary-col .branded-page-related-channels-see-more a {\ncolor: #777 !important;\n}\n\n.branded-page-v2-secondary-col .branded-page-related-channels-see-more a:hover, #watch-header .yt-user-info a {\ncolor: #2793e6 !important;\n}\n\n.branded-page-v2-has-solid-bg .branded-page-v2-secondary-col {\nborder-left-color: #303030 !important;\n}\n\n.branded-page-v2-masthead-ad-header.masthead-ad-expanded .branded-page-v2-primary-col {\nborder-top-width: 0px !important;\n}\n\n.branded-page-v2-subnav-container {\nborder-bottom-color: #303030 !important;\n}\n\n#c4-header-bg-container {\nborder-bottom-color: #303030 !important;\n}\n    \n#channel-subheader {\nborder-bottom-color: #303030 !important;\n}\n\n.welcome.c4-spotlight-module-component {\nborder-bottom-color: #303030 !important;\n}\n\n.c4-welcome-primary-col {\nborder-right-color: #303030 !important;\n}\n\n.c4-welcome-secondary-col {\nborder-left-color: #303030 !important;\n}\n  \n.c4-box {\nborder-bottom-color: #303030 !important;\n}\n\n.c4-live-promo {\nborder-bottom-color: #303030 !important;\n}\n\n#c4-shelves-container {\nbackground-color: transparent !important;\n}\n  \n#c4-about-tab, #c4-about-tab .about-stats .about-stat, .video-player-view-component {\ncolor: #aaa !important;\n}\n\n.about-network-stat, .about-subscriptions, .other-channels-module, .package-module {\nborder-top-color: #303030 !important;\n}\n\n.yt-uix-button-icon-report-user {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -81px -62px !important;\n}\n\n.compact-shelf .yt-uix-button-shelf-slider-pager {\nbackground: #1b1b1b !important;\n}\n\n.compact-shelf-view-all-card {\nborder-color: #303030 !important;\nborder-width: 0px !important;\n}\n\n.compact-shelf-view-all-card-link {\nborder: 1px solid #303030;\npadding: 38px 46px;\nwidth: 99px;\n}\n\n.branded-page-module-title, .branded-page-module-title a:visited, .branded-page-module-title a {\ncolor: #aaa !important;\n}\n\n.yt-lockup .yt-lockup-meta a, .yt-lockup .yt-lockup-description a {\ncolor: #999 !important;\n}\n\n#channel-search .show-search img, #channel-search .yt-uix-button-icon-search {\nbackground: no-repeat url(http://i.imgur.com/VirN1wE.png) -170px -201px !important;\n}\n\n#player {\nbackground: transparent !important;\n}\n\n.player-unavailable {\nfloat: inherit !important;\n}\n\n.ytp-button:focus {\noutline: 0px !important;\n}\n\n.watch-branded-banner .player-branded-banner {\nheight: 0px !important;\n}\n\n/*#watch7-content {\nbackground: #1b1b1b !important;\nmargin-top: 5px !important;\n}*/\n\n#watch7-headline, #watch7-notification-area, #watch7-user-header {\nborder-width: 0px !important;\nbackground: transparent !important;\n}\n\n#watch7-headline h1 a {\ncolor: #aaa !important;\n}\n\n#watch7-action-buttons {\nborder-left-width: 0px !important;\nborder-right-width: 0px !important;\nborder-bottom: 1px solid #292929 !important;\n}\n\n#watch7-secondary-actions .yt-uix-button {\ncolor: #aaa !important;\n}\n\n#watch7-action-panels {\nborder-left-width: 0px !important;\nborder-right-width: 0px !important;\n}\n\n.not-watch8 .action-panel-content {\npadding-bottom: 10px !important;\n}\n\n#watch-description-toggle .yt-uix-button-text {\nmargin-top: 7px !important;\nmargin-bottom: 10px !important;\ncolor: #aaa !important;\nbackground: #2b2b2b !important;\n}\n\n#watch-description.yt-uix-expander-collapsed.not-watch8-metadata #watch-description-content {\nmargin-bottom: 3px;\n}\n\n.yt-uix-button {\n-moz-border-radius: 2px !important;\n-webkit-border-radius: 2px !important;\nborder-radius: 2px !important;\n-moz-box-shadow: 0 0px 0 rgba(0,0,0,0.05) !important;\n-ms-box-shadow: 0 0px 0 rgba(0,0,0,0.05) !important;\n-webkit-box-shadow: 0 0px 0 rgba(0,0,0,0.05) !important;\nbox-shadow: 0 0px 0 rgba(0,0,0,0.05) !important;\n}\n\n.yt-uix-button-default:hover, .yt-uix-button-text:hover {\nborder-color: #444343 !important;\nbackground: #1f1f1f !important;\n}\n\n#watch7-secondary-actions .yt-uix-button:hover {\nborder-bottom-color: #777 !important;\nbackground: transparent !important;\nborder-top-color: transparent !important;\n}\n\n#watch7-secondary-actions .yt-uix-button:active, #watch7-secondary-actions .yt-uix-button.yt-uix-button-active, #watch7-secondary-actions .yt-uix-button.yt-uix-button-toggled {\nborder-bottom-color: #930 !important;\nbackground: transparent !important;\nborder-top-color: transparent !important;\n}\n\n.yt-uix-button-default:active, .yt-uix-button-default.yt-uix-button-toggled, .yt-uix-button-default.yt-uix-button-active, .yt-uix-button-default.yt-uix-button-active:focus, .yt-uix-button-text:active {\n-moz-box-shadow: inset 0 0px 0 #ddd !important;\n-ms-box-shadow: inset 0 0px 0 #ddd !important;\n-webkit-box-shadow: inset 0 0px 0 #ddd !important;\nbox-shadow: inset 0 0px 0 #ddd !important;\n}\n\n#watch7-action-panels #watch7-action-panel-footer {\nbackground: #151515!important;\n}\n\n#watch7-action-panel-footer .yt-horizontal-rule {\nheight: 3px !important;\nborder-top-width: 0px !important;\n}\n\n.watch-playlists-drawer ul {\nborder-color: #303030 !important;\nbackground: #222222 !important;\n-moz-box-shadow: 0 0px 0 !important;\n-ms-box-shadow: 0 0px 0 !important;\n-webkit-box-shadow: 0 0px 0 !important;\nbox-shadow: 0 0px 0 !important;\n}\n    \n#action-panel-addto .playlist-item.selected a, #action-panel-addto a {\ncolor: #aaa !important;\n}\n\n.metadata-inline {\nbackground: #313131 !important;\n}\n\n.branded-page-v2-body #channel-feed-post-form {\nborder-bottom-color: #303030 !important;\n}\n\n#watch-discussion {\npadding: 10px 14px !important;\nborder-width: 0px !important;\n}\n\n#watch-description.yt-uix-expander-collapsed #watch-description-content, #watch-description-clip {\ncolor: #aaa !important;\n}\n\nbutton.yt-uix-button.yt-uix-button-size-default.yt-uix-button-text.toggle-button {\nbackground: #222 !important;\nborder-color: #303030 !important;\ncolor: #aaa !important;\n}\n\nbutton.yt-uix-button.yt-uix-button-size-default.yt-uix-button-text.toggle-button:hover {\nborder-color: #444343 !important;\nbackground: #1f1f1f !important;\n}\n  \n#watch-response {\nbackground: #1b1b1b !important;\n}\n\n#watch-response-content {\nborder-top-color: #303030 !important;\n}\n\n#watch-response-content-sort {\nborder-bottom-color: #303030;\n}\n\n#watch-response-header-content p a, .watch-response-item-content p a {\ncolor: inherit !important;\n}\n\n#watch-discussion {\ncolor: #777 !important; \n}\n\n.context clearfix em {\ncolor: #830 !important;\n}\n\nli.comment.removed .content.clearfix, li.comment.flagged .content.clearfix {\nmargin-left: 0px !important;\n}\n\n#watch-description-extras .title {\ncolor: #555 !important;\n}\n#yt-comments-sb-standin .box {\nbackground-color: #000!important;\ncolor:#ccc!important;\nborder-color:#333!important;\n}\n.live-comments-setting {\nborder-color: #303030 !important;\n}\n\n.subscribe-label {\ncolor: #fff !important;\n}\n\n.yt-subscription-button-subscriber-count-branded-horizontal, .yt-subscription-button-subscriber-count-branded-vertical, .yt-subscription-button-subscriber-count-unbranded-horizontal, .yt-subscription-button-subscriber-count-unbranded-vertical {\ncolor: #aaa !important;\nborder-color: #303030 !important;\n}\n\n.yt-subscription-button-subscriber-count-branded-horizontal, .yt-subscription-button-subscriber-count-unbranded-horizontal {\nbackground-color: #2b2b2b !important;\n}\n\n.yt-subscription-button-subscriber-count-branded-horizontal:after, .yt-subscription-button-subscriber-count-unbranded-horizontal:after {\nborder-color: transparent #2b2b2b !important;\n}\n\n.yt-subscription-button-subscriber-count-branded-horizontal:before, .yt-subscription-button-subscriber-count-unbranded-horizontal:before {\nborder-color: transparent #303030 !important;\n}\n\n.yt-subscription-button-subscriber-count-unbranded-vertical.yt-uix-tooltip, .yt-subscription-button-subscriber-count-branded-vertical, .yt-subscription-button-subscriber-count-unbranded-vertical {\nbackground: #1b1b1b !important;\nborder-color: #303030 !important;\n}\n\n.yt-uix-button-subscribed-branded, .yt-uix-button-subscribed-branded[disabled], .yt-uix-button-subscribed-branded[disabled]:hover, .yt-uix-button-subscribed-branded[disabled]:active, .yt-uix-button-subscribed-branded[disabled]:focus, .yt-uix-button-subscribed-unbranded, .yt-uix-button-subscribed-unbranded[disabled], .yt-uix-button-subscribed-unbranded[disabled]:hover, .yt-uix-button-subscribed-unbranded[disabled]:active, .yt-uix-button-subscribed-unbranded[disabled]:focus {\nbackground: transparent !important;\nborder-width: 0px !important;\n}\n\n.yt-uix-button-subscribe-unbranded, .yt-uix-button-subscribe-unbranded[disabled], .yt-uix-button-subscribe-unbranded[disabled]:hover, .yt-uix-button-subscribe-unbranded[disabled]:active, .yt-uix-button-subscribe-unbranded[disabled]:focus {\nborder-color: #303030 !important;\nbackground: #222 !important;\n}\n\n.yt-uix-form-input-textarea.comments-textarea.link-gplus-lightbox {\nbackground: #2b2b2b !important;\nborder-width: 0px !important;\ncolor: #aaa !important;\n}\n\n.caption-line {\nborder-color: #303030 !important;\n-moz-border-radius: 0px !important;\n-webkit-border-radius: 0px !important;\nborder-radius: 0px !important;\n}\n\n#watch-transcript-track-selector {\nbackground: #1b1b1b !important;\ncolor: #aaa !important;\n}\n\n#watch7-action-panels #watch7-action-panel-footer {\nheight: 5px!important;\n}\n\n#comments-view hr {\nborder-top: 5px solid #151515 !important;\nmargin: 0 -14px !important;\n}\n\n/* New Center-Aligned Layout */\n\n.site-center-aligned #player.watch-medium {\nwidth: 1040px !important;\n}\n\n.exp-appbar-onebar #masthead-positioner:hover #appbar-guide-button {\nborder-color: #303030 !important;\nbackground: #1f1f1f !important;\n}\n\n#masthead-appbar-container, #masthead-appbar {\nborder-bottom-color: #303030 !important;\nbackground: #1b1b1b !important;\n}\n\n.site-center-aligned #masthead-positioner:hover #appbar-guide-button {\nborder-color: #303030 !important;\nbackground: #222 !important;\n}\n\n.yt-uix-button-appbar {\nborder-color: #303030 !important;\nbackground: #2a2a2a !important;\ncolor: #ccc !important;\n}\n\n.guide-pinning-enabled.guide-pinned #appbar-guide-menu, .guide-pinning-enabled.show-guide.guide-pinned #appbar-guide-menu, .guide-pinned .guide-pinning-enabled #appbar-guide-menu {\nborder-right-color: #303030 !important;\n}\n\n#appbar-guide-menu {\nbackground: #1b1b1b !important;\n}\n\n.site-center-aligned #player {\nmargin-bottom: 5px !important;\n}\n\n.site-center-aligned #player.watch-large, .site-center-aligned #player.watch-medium {\nmargin-bottom: 5px !important;\n}\n\n.site-center-aligned .yt-card {\nbackground: #1b1b1b !important;\n}\n\n.site-center-aligned .branded-page-v2-primary-col {\nbackground: transparent !important;\n}\n\n.site-center-aligned .watch #content.yt-card {\n/*width: 1040px !important;*/\nbackground: transparent !important;\n}\n\n.guide-flyout {\nborder-color: #303030 !important;\nbackground: #222 !important;\n}\n\n.site-center-aligned #watch7-content {\nmargin-top: 0px !important;\n}\n\n.site-center-aligned #watch7-sidebar {\nmargin-top: -395px;\n}\n\n.site-center-aligned .watch-wide #watch7-sidebar {\n}\n\n.site-center-aligned #watch7-sidebar-contents {\nmargin: 0 !important;\n}\n\n.site-center-aligned .watch-card-rhs {\nbackground-color: #1b1b1b !important;\n}\n\n#watch-appbar-playlist {\nmargin-bottom: 5px !important;\n}\n\n.site-center-aligned .browse-list-item-container:hover .compact-shelf .yt-uix-button-shelf-slider-pager, .site-center-aligned .compact-shelf:hover .yt-uix-button-shelf-slider-pager {\nborder-color: #303030 !important;\nbackground: #111 !important;\n}\n\n.site-center-aligned #creator-sidebar .creator-sidebar-section, .site-center-aligned #creator-sidebar .creator-sidebar-section.selected {\nborder-bottom-color: #303030 !important;\n}\n\n.yt-ui-ellipsis, .exp-css-ellipsis .yt-ui-ellipsis, .yt-uix-expander-ellipsis {\nbackground-color: transparent !important;\n}\n\n/*#action-panel-details.yt-card, #watch-discussion {\nmargin: 5px 0 !important;\n}\n\n.watch8 #watch-header {\nmargin-bottom: 0px !important;\n}*/\n\n#watch8-action-buttons {\nborder-top: none !important;\n}\n\n.yt-card .yt-uix-button-expander {\nborder-top-color: #303030 !important;\n}\n    \n.watch8 .watch-extras-section .content {\ncolor: #aaa !important;\n}\n\n.yt-card .yt-uix-tabs {\nborder-bottom-color: #303030 !important;\n}\n\n.yt-uix-button-icon-action-panel-addto, .yt-uix-button-icon-action-panel-none-addto {\nbackground: no-repeat url(http://i.imgur.com/ionzN0P.png) -24px -1012px;\n}\n\n.yt-uix-button-icon-action-panel-share {\nbackground: no-repeat url(http://i.imgur.com/ionzN0P.png) -31px -2210px;\n}\n\n.watch8 .yt-uix-button-icon-action-panel-overflow {\nbackground: no-repeat url(http://i.imgur.com/ionzN0P.png) -24px -1301px;\n}\n\n/* Guide */\n\n.guide-section-separator {\nborder-bottom-color: #555 !important;\n}\n\n.guide-context-item a:hover, .guide-context-item.context-playing a {\nbackground-color: #333 !important;\n}\n\n#guide-container .guide-item.guide-item-selected {\ncolor: #fff !important;\n}\n\n.guide-context-item .title {\ncolor: #999 !important;\n}\n\n.guide-item {\ncolor: #bbb !important;\n}\n\n	/* Main Guide */\n\n	/* Watch Page */\n\n.site-left-aligned #page.watch #guide-container {\npadding: 5px 0 5px 5px !important;\n/*left: 10px !important; */\n}\n\n.guide-module {\nmargin-bottom: 0px !important;\n}\n\n#watch-context-container {\nmargin-top: 8px !important;\n}\n\n#guide-main .guide-module-toggle-label h3 {\nline-height: 28px !important;\n}\n\n#guide-main .guide-module-toggle-icon {\nmargin-top: 0px !important;\n}\n\n#guide-main .guide-module-toggle:hover .guide-module-toggle-icon img {\nbackground: no-repeat url(http://i.imgur.com/ApSlYCn.png) -15px -674px !important;\n}\n#guide-main .guide-module-toggle-icon img {\nbackground: no-repeat url(http://i.imgur.com/ApSlYCn.png) -32px -90px !important;\n}\n\n		/* Context Dropdown */\n\n.yt-scrollbar ::-webkit-scrollbar-thumb {\nborder-left-width: 0px !important;\nbackground: #ccc !important;\n-webkit-box-shadow: inset 0 0 0px transparent ;\n}\n\n.yt-scrollbar ::-webkit-scrollbar-track {\nborder-left-width: 0px !important;\n-webkit-box-shadow: inset 0 0 0px transparent;\n}\n\n.guide-module-content.yt-scrollbar {\nheight: auto !important;\n}\n\n#watch-context-container ul {\nmax-height: 506px !important;\n}\n\n	/* New comments section */\n\n\n\n  \n/* Newspaper Shelf */\n\n.lohp-large-shelf-container {\nborder-right-color: #303030 !important;\n}\n\n.lohp-large-shelf-container .lohp-blog-headline {\nborder-top-color: #777 !important;\n}\n  \n.lohp-newspaper-shelf {\nborder-bottom-color: #303030 !important;\n}\n\n.lohp-shelf-cell-container:hover {\nbackground-color: #222 !important;\n}\n.lohp-shelf-cell-container {\nborder-color: #303030 !important;\n}\n\n.lohp-blog-headline {\ncolor: #777 !important;\n}\n\n/* Browse Channels */\n\n.guide-builder-page-header {\nborder-bottom-color: #303030 !important;\n}\n\n.channels-search .search-button .yt-uix-button-content {\nbackground: no-repeat url(http://i.imgur.com/VirN1wE.png) -170px -201px !important;\n}\n        \n.category-header .category-title {\ncolor: #999 !important;\n}\n            \n.yt-gb-shelf-hero-content .title {\ncolor: #777 !important;\n}\n            \n.yt-gb-shelf-main-content {\nborder-color: #303030 !important;\n-moz-box-shadow: 0 1px 2px #303030 !important;\n-ms-box-shadow: 0 1px 2px #303030 !important;\n-webkit-box-shadow: 0 1px 2px #303030 !important;\nbox-shadow: 0 1px 2px #303030 !important;\n}\n              \n.yt-gb-shelf-paddle {\nbackground-color: #222 !important;\nborder-color: #303030 !important;\n}\n                \n.yt-gb-shelf .yt-gb-shelf-paddle:hover {\n-moz-box-shadow: 0 0 10px 1px rgba(50,50,50,.7) !important;\n-ms-box-shadow: 0 0 10px 1px rgba(50,50,50,.7) !important;\n-webkit-box-shadow: 0 0 10px 1px rgba(50,50,50,.7) !important;\nbox-shadow: 0 0 10px 1px rgba(50,50,50,.7) !important;\n}\n\n/* Subscription Manager */\n\n.collection-promo .yt {\ncolor: #aaa !important;\n}\n\n.collection-promo {\nborder-bottom-color: #303030 !important;\n}\n\n.create-collection-button.yt-uix-button.yt-uix-button-primary.yt-uix-button-size-default .yt-uix-button-content {\ncolor: #fff !important;\n}\n\n.subscriptions-filter .filter-button .yt-uix-button-content {\nbackground: no-repeat url(http://i.imgur.com/VirN1wE.png) -170px -201px !important;\n}\n\n.subscriptions-filter .filter-button {\n-moz-border-radius-topleft: 0 !important;\n-webkit-border-top-left-radius: 0 !important;\nborder-top-left-radius: 0 !important;\n-moz-border-radius-bottomleft: 0 !important;\n-webkit-border-bottom-left-radius: 0 !important;\nborder-bottom-left-radius: 0 !important;\n}\n\n#subscription-manager-container .subscription-manager-header {\nborder-bottom-color: #303030 !important;\n}\n\n.subscriptions-filter .filter-field-container {\nborder-color: #303030 !important;\nbackground: #000 !important;\n}\n\n#subscription-manager-container .even td {\nbackground: #222 !important;\nborder-color: #303030 !important;\n}\n\n#subscription-manager-container .subscription-title, #subscription-manager-container .collection-title {\ncolor: #aaa !important;\n}\n\n.subscription-item:first-child {\nborder-top: 1px solid #303030 !important;\n}\n\n.subscription-picker-header {\nborder-bottom-color: #303030 !important;\n}\n\n/* Channel Editing */\n\n.channel-header .branded-page-header-title .branded-page-header-title-link {\ncolor: #aaa !important;\n}\n\n.channel-header .secondary-header-contents {\nbackground-color: #333 !important;\nborder-bottom-color: #303030 !important;\n}\n\n.secondary-header-contents .nav-text {\ncolor: #fff !important;\n}\n    \n#channel-header-view-as-link img {\nbackground: no-repeat url(http://i.imgur.com/TLZeIKB.png) 0 -93px !important;\n}\n\n#channel-header-vm-link img {\nbackground: no-repeat url(http://i.imgur.com/v8MBqQk.png) -64px -23px !important;\n}\n\n#channel-header-analytics-link img {\nbackground: no-repeat url(http://i.imgur.com/v8MBqQk.png) 0 -339px !important;\n}\n    \n.c4-module-is-editable .c4-module-editor-actions {\nbackground-color: #222 !important;\n}\n    \n.yt-uix-button-c4-view-action {\nborder-bottom-color: #303030 !important;\nborder-left-color: #303030 !important;\nbackground-color: #222 !important;\n-moz-border-radius: 0 !important;\n-webkit-border-radius: 0 !important;\nborder-radius: 0 !important;\ncolor: #aaa !important;\n}\n\n.yt-uix-button-icon-c4-editor-move-up {\nbackground: no-repeat url(http://i.imgur.com/TLZeIKB.png) -6px -160px !important;\n}\n      \n.yt-uix-button-icon-c4-editor-move-down {\nbackground: no-repeat url(http://i.imgur.com/TLZeIKB.pngp) -6px -149px !important;\n}\n\n.c4-module-editor-form {\nbackground-color: #222 !important;\n}\n      \n.c4-shelf-preview {\nborder-color: #303030 !important;\nbackground: #222 !important;\n}\n\n.c4-shelf-preview-container-content {\npadding-left: 11px !important;\npadding-right: 11px !important;\n}\n  \n.c4-shelf-preview+.preview-click-guard {\nbackground: #000 !important;\n}\n\n#c4-about-tab .c4-module-is-editable:hover {\nbackground-color: #222 !important;\n}\n\n#c4-about-tab .about-metadata .yt-uix-button-c4-view-action {\nborder-top-color: #303030 !important;\n}\n  \n.yt-uix-form-legend, .yt-uix-form-label {\ncolor: #999 !important;\n}\n\n.watch-pencil-icon .yt-uix-button-icon-pencil {\nbackground: no-repeat url(http://i.imgur.com/P8b3ZSs.png) 0 -140px !important;\n}\n    \n    /* Trailer Popup */\n\n.yt-dialog-fg-content, .yt-uix-overlay-fg-content {\ncolor: #aaa !important;\n}\n\n.yt-video-picker-scroll-container {\nborder-color: #303030 !important;\n}\n      \n.yt-video-picker-grid .video-picker-item:hover {\nbackground-color: #222 !important;\n}\n      \n.yt-uix-overlay-actions {\nborder-top-color: #303030 !important;\nbackground: transparent !important;\n}\n\n.watch-editable:hover {\nbackground-color: #222 !important;\n}\n\n#welcome-edit-overlay {\ncolor: #ccc !important;\n}\n\n/* Creator Sidebar */\n\n#creator-sidebar .creator-sidebar-channel-link {\nmargin-left: 4px !important;\n}\n\n#creator-sidebar .creator-sidebar-channel-link a, #creator-sidebar .creator-sidebar-channel-link a:hover {\ncolor: #aaa !important;\nfont-size: 12px !important;\n}\n\n#creator-sidebar .creator-sidebar-section a {\ncolor: #aaa !important;\n}\n\n#creator-sidebar .creator-sidebar-section.selected>a.selected, #creator-sidebar .creator-sidebar-item.selected>a {\ncolor: #fff !important;\n}\n\n#creator-sidebar .creator-sidebar-section.selected {\nborder-top-color: #303030 !important;\nborder-bottom-color: #303030 !important;\n}\n\n/* Creator Video Bar */\n\n#watch7-creator-bar {\nborder-color: #303030 !important;\nbackground: #222 !important;\n}\n\n.yt-uix-button-panel:hover .creator-bar-item .yt-uix-button-text-dark, .yt-uix-button-panel .creator-bar-item .yt-uix-button-text-dark:hover {\nborder-color: #303030 !important;\nbackground: #2a2a2a !important;\n}\n\n\n/* Inbox */\n\n.hh #creator-page-content {\nbackground: transparent !important;\nborder-right-color: transparent !important;\nborder-left-color: transparent !important;\n}\n\n#folder_title {\nbackground: #1b1b1b !important;\nborder-bottom-color: #303030 !important;\ncolor: #ddd !important;\n}\n\n\n#masthead-subnav.yt-nav.yt-nav-dark.legacy-masthead {\nwidth: 958px !important;\nbackground: #242424 !important;\nborder-bottom: 1px solid #303030 !important;\nborder-left: 1px solid #303030 !important;\nborder-right: 1px solid #303030 !important;\nleft: -5px !important;\n}\n\n.hh #yt-admin-content {\nbackground: #1b1b1b !important;\nborder-right-color: #303030 !important;\nborder-left-color: #303030 !important;\nborder-bottom: 1px solid #303030 !important;\n}\n\n.buttonbar {\ncolor: #aaa !important;\nborder-top-color: #303030 !important;\nbackground: #1b1b1b !important;\n}\n\n.sorterbar th {\nborder-bottom-color: #303030 !important;\nborder-top-color: #303030 !important;\ncolor: #bbb !important;\nbackground: #1b1b1b !important;\n}\n\n.m_nohighlight {\nbackground-color: #1b1b1b !important;\n}\n\n.m_highlight {\nbackground-color: #1f1f1f !important;\n}\n\n.message.closed td {\nvertical-align: middle !important;\n}\n\n.message-display a {\ncolor: #aaa !important;\n}\n\n.message h3, .message .yt-admin-h3 {\ncolor: #aaa !important;\n}\n\n.msg-date.pointer {\ncolor: #aaa !important;\n}\n\n.message.open td {\ncolor: #aaa !important;\nbackground-color: #2a2a2a !important;\nborder: 1px solid #303030 !important;\nborder-left: none !important;\nborder-right: none !important;\n}\n\n/* Dashboard */\n\n.hh #dashboard-header {\nbackground-color: #1b1b1b !important;\nborder-bottom-color: #303030 !important;\n}\n\n.hh #dashboard-header h1 {\ncolor: #aaa !important;\n}\n\n#dashboard-header h1 {\ntext-shadow: 0 0px 0 #000 !important;\nfont-size:24px !important;\n}\n\n.hh #dashboard-header .dashboard-stat-value {\ncolor: #aaa !important;\n}\n\n#dashboard-header h2 {\ntext-shadow: 0 0px 0 #000 !important;\n}\n\n#dashboard-header .dashboard-stat-value, #dashboard-header .dashboard-stat-name {\ntext-shadow: 0 0px 0 #000 !important;\n}\n  \n.hh #dashboard-header-stats li {\nborder-left-color: #303030 !important;\n}\n\n.dashboard-widget.notification, .dashboard-widget .dashboard-widget-content, .dashboard-widget .dashboard-widget-config {\nbackground-color: #1b1b1b !important;\ncolor: #aaa !important;\nborder-color: #303030 !important;\n}\n\n.dashboard-widget-header:hover, .dashboard-widget .dashboard-widget-config .dashboard-widget-header, .dashboard-widget.yt-uix-dragdrop-dragged-item .dashboard-widget-header, .dashboard-widget.yt-uix-dragdrop-cursor-follower .dashboard-widget-header {\nbackground-color: #1b1b1b !important;\nborder-bottom-color: #303030 !important;\n}\n\n.dashboard-widget:hover .dashboard-widget-display-title, .dashboard-widget.yt-uix-dragdrop-dragged-item .dashboard-widget-display-title, .dashboard-widget.yt-uix-dragdrop-cursor-follower .dashboard-widget-display-title {\nborder-right-width: 0px !important;\n}\n\n.dashboard-widget-header:hover .dashboard-widget-header-controls, .dashboard-widget.yt-uix-dragdrop-dragged-item .dashboard-widget-header .dashboard-widget-header-controls, .dashboard-widget.yt-uix-dragdrop-cursor-follower .dashboard-widget-header .dashboard-widget-header-controls {\nborder-color: #303030 !important;\n}\n\n	/* Notifications */\n\n.yt-creator-notifications .yt-creator-tip-list .inactive {\nbackground: #1b1b1b !important;\ncolor: #aaa !important;\n}\n\n.yt-creator-notifications .yt-creator-tip-list tr {\ncolor: #aaa !important;\n}\n\n.creator-confirmation-overlay .creator-confirmation-overlay-header {\nborder-bottom-color: #303030 !important;\nbackground: #222 !important;\n}\n\n.creator-confirmation-overlay .creator-confirmation-overlay-body {\ncolor: #bbb !important;\n}\n\n	/* Widgets */\n\n.dashboard-widget-todos .todo-item {\nborder-color: #303030 !important;\n}\n\n.dashboard-widget-todos .todo-item:hover {\nbackground-color: #222 !important;\n}\n\n.dashboard-widget-todos .todo-description {\nborder-bottom-width: 0px !important;\n}\n\n.dashboard-widget-todos .todo-item:first-child {\nborder-bottom-width: 0px !important;\n}\n    \n.dashboard-widget-todos .todo-item:last-child {\nborder-bottom: 1px solid #303030 !important;\n}\n\n.dashboard-widget-analytics .section+.section {\nborder-top-color: #303030 !important;\n}\n\n.dashboard-widget-analytics .section-sparkline {\nbackground: #fff !important;\npadding-top: 3px !important;\npadding-bottom: 3px !important;\nborder: 2px solid #666 !important;\n}\n\n.dashboard-widget-videos .video-list-item .video-title a {\ncolor: #2793e6 !important;\n}\n\n/* Video Manager */\n\n#vm-page-subheader h3 {\ncolor: #aaa !important;\n}\n\n#vm-video-actions-bar, #vm-video-actions-inner {\nbackground: #1b1b1b !important;\n}\n\n#vm-video-actions-inner {\nborder-bottom-color: #303030 !important;\n}\n\n.vm-search-btn .yt-uix-button-content {\nbackground: no-repeat url(http://i.imgur.com/VirN1wE.png) -170px -201px !important;\n}\n\n.yt-uix-button-icon-vm-beauty-view {\nbackground: no-repeat url(http://i.imgur.com/zBZBCS5.png) -315px -197px !important;\n}\n\n.yt-uix-button-icon-vm-list-view {\nbackground: no-repeat url(http://i.imgur.com/zBZBCS5.png) -16px -244px !important;\n}\n\n#vm-view-btn {\ncolor: #aaa !important;\n}\n\n.vm-confirmation-overlay .vm-confirmation-overlay-header {\nborder-bottom-color: #303030 !important;\nbackground-image: -moz-linear-gradient(top,#333 0,#222 100%) !important;\nbackground-image: -ms-linear-gradient(top,#333 0,#222 100%) !important;\nbackground-image: -o-linear-gradient(top,#333 0,#222 100%) !important;\nbackground-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,#333),color-stop(100%,#222)) !important;\nbackground-image: -webkit-linear-gradient(top,#333 0,#222 100%) !important;\nbackground-image: linear-gradient(to bottom,#333 0,#222 100%) !important;\n}\n\n.vm-confirmation-overlay .vm-confirmation-overlay-main-area {\ncolor: #aaa !important;\n}\n\n.vm-confirmation-overlay .vm-video-actions-delete-warning strong {\ncolor: #C33 !important;\n}\n\n#vm-bulk-actions-editing-header {\nbackground-color: #1b1b1b !important;\nborder-top-color: #303030 !important;\ncolor: #888 !important;\n}\n\n#vm-bulk-actions-editing-header, #vm-bulk-actions-editing-buttons {\nborder-bottom-color: #303030 !important;\n}\n\n#vm-bulk-actions-selection-link {\ncolor: #ccc !important;\n}\n\n.ad-options-overlay-form .ad-formats-heading {\ncolor: #aaa !important;\n}\n\n.ad-formats-overlay .form-area, .preview-area .ad-format-preview {\ncolor: #888 !important;\n}\n\n	/* List View */\n\n#non-appbar-vm-video-actions-bar, .vm-video-actions-bar {\nbackground-color: transparent !important;\n}\n\n#non-appbar-vm-video-actions-bar .vm-video-actions-inner {\nborder-bottom-color: #303030 !important;\n}\n\n.vm-list-view .vm-video-list li {\nbackground: #1b1b1b !important;\n}\n\n.vm-list-view .vm-video-item-content {\nborder-bottom-color: #303030 !important;\n}\n\n.vm-list-view .vm-video-metrics {\nbackground: #1b1b1b !important;\nborder-left-color: #303030 !important;\n}\n\n.vm-list-view .vm-video-title .vm-video-title-content {\ncolor: #aaa !important;\n}\n\n.vm-list-view .vm-video-metrics a:hover {\nbackground: #222 !important;\n}\n\n#vm-bulk-actions-selection {\nbackground-color: #222 !important;\n}\n\n#vm-bulk-actions-progress-bar, #vm-bulk-actions-selection {\nborder-bottom-color: #303030 !important;\n}\n\n	/* Beauty View */\n\n.vm-beauty-view .vm-video-item-content {\nbackground: #2b2b2b !important;\n-moz-box-shadow: 0 0px 0px #e0e0e0 !important;\n-ms-box-shadow: 0 0px 0px #e0e0e0 !important;\n-webkit-box-shadow: 0 0px 0px #e0e0e0 !important;\nbox-shadow: 0 0px 0px #e0e0e0 !important;\n}\n\n.vm-beauty-view .vm-video-item:hover .vm-video-item-content {\n-moz-box-shadow: 0 0px 0px #aaa !important;\n-ms-box-shadow: 0 0px 0px #aaa !important;\n-webkit-box-shadow: 0 0px 0px #aaa !important;\nbox-shadow: 0 0px 0px #aaa !important;\nborder-bottom: 3px solid #cc181e !important;\n}\n  \n.vm-beauty-view .vm-video-title-content {\ncolor: #aaa !important;\n}\n        \n.yt-thumb {\nbackground: transparent !important;\n}\n          \n#vm-pagination {\nbackground: #1b1b1b !important;\n}\n\n/* Video Editor */\n\n#creator-editor-container, .hh.editor-content {\nbackground: #1b1b1b !important;\nborder-color: #303030 !important;\n}\n\n.metadata-editor-container .video-settings-form {\nbackground: #1b1b1b !important;\n}\n\n.creator-editor-nav {\nborder-bottom-color: #303030 !important;\n}\n  \n.creator-editor-header, .creator-editor-content #inline-editor-header {\nborder-bottom-color: #303030 !important;\n}\n    \n.metadata-editor-container .subnav {\nborder-bottom-color: #303030 !important;\n}\n\n.creator-editor-nav-tabs li span, .creator-editor-nav-tabs li a {\ncolor: #aaa !important;\n}\n    \n.creator-editor-icon-edit, .creator-bar-item .yt-uix-button-icon-info {\nbackground: no-repeat url(http://i.imgur.com/TugICAm.png) 0 -110px !important;\n}    \n\n.creator-editor-icon-enhance, .creator-bar-item .yt-uix-button-icon-enhance {\nbackground: no-repeat url(http://i.imgur.com/TugICAm.png) 0 -22px !important;\n}\n    \n.creator-editor-icon-audio, .creator-bar-item .yt-uix-button-icon-audio {\nbackground: no-repeat url(http://i.imgur.com/TugICAm.png) 0 -44px !important;\n}  \n  \n.creator-editor-icon-annotate, .creator-bar-item .yt-uix-button-icon-annotations {\nbackground: no-repeat url(http://i.imgur.com/TugICAm.png) 0 -66px !important;\n}\n  \n.creator-editor-icon-captions, .creator-bar-item .yt-uix-button-icon-captions {\nbackground: no-repeat url(http://i.imgur.com/TugICAm.png) 0 0 !important;\n}\n\n.creator-editor-title a {\ncolor: #bbb !important;\n}\n\n#player-and-info-pane #video-info dt {\ncolor: #aaa !important;\n}\n\n#player-and-info-pane #video-info dd {\ncolor: #999 !important;\n}\n\n.tabs .tab-header.selected a, .tabs .tab-header a:hover, .tabs .tab-header a:focus {\ncolor: #bbb !important;\n}\n\n.video-likes-count img {\nbackground: no-repeat url(http://i.imgur.com/zBZBCS5.png) -381px -256px !important;\n}\n\n.video-dislikes-count img {\nbackground: no-repeat url(http://i.imgur.com/zBZBCS5.png) -315px -221px !important;\n}\n\n.video-settings-add-tag {\nbackground: #222 !important;\ncolor: #aaa !important;\nborder: 1px solid #303030 !important;\ndisplay: block !important;\nwidth: 528px !important;\n}\n\n.video-settings-add-tag:focus {\nborder: 1px solid #404040 !important;\n}\n\n.yt-chip, .tag {\nbackground: #111 !important;\ncolor: #777 !important;\nborder-color: #303030 !important;\n-moz-box-shadow: 0 0px 0 white !important;\n-ms-box-shadow: 0 0px 0 white !important;\n-webkit-box-shadow: 0 0px 0 white !important;\nbox-shadow: 0 0px 0 white !important;\n}\n    \n.yt-uix-form-input-select {\ntext-shadow: 0 1px 0 rgba(100,100,100,.5) !important;\nbackground-color: #2b2b2b !important;\nbackground-image: -moz-linear-gradient(top,#222 0,#2c2c2c 100%) !important;\nbackground-image: -ms-linear-gradient(top,#222 0,#2c2c2c 100%) !important;\nbackground-image: -o-linear-gradient(top,#222 0,#2c2c2c 100%) !important;\nbackground-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,#222),color-stop(100%,#2c2c2c)) !important;\nbackground-image: -webkit-linear-gradient(top,#222 0,#2c2c2c 100%) !important;\nbackground-image: linear-gradient(to bottom,#222 0,#2c2c2c 100%) !important;\n}\n\n.yt-uix-form-input-select {\nborder: 1px solid #444 !important;\ncolor: #bbb !important;\n}\n\n.enable-monetization-field {\ncolor: #aaa !important;\n}\n\n.monetization-disclaimer {\nborder-color: #303030 !important;\nbackground: #222 !important;\n}\n\n	/* Tabs */\n\n#inline-editor-main {\nbackground-color: #1b1b1b !important;\n}\n\n		/* Audio Tab */\n\n#audio-ui-pagefold { \ndisplay: none !important;\n}\n\n.audio-ui-featured-table-header { \ncolor: #bbb !important;\n}\n\n#audio-ui-featured-table-container thead td {\nbackground-image: -moz-linear-gradient(top,#333 0,#2c2c2c 100%) !important;\nbackground-image: -ms-linear-gradient(top,#333 0,#2c2c2c 100%) !important;\nbackground-image: -o-linear-gradient(top,#333 0,#2c2c2c 100%) !important;\nbackground-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,#333),color-stop(100%,#2c2c2c)) !important;\nbackground-image: -webkit-linear-gradient(top,#333 0,#2c2c2c 100%) !important;\nbackground-image: linear-gradient(to bottom,#333 0,#2c2c2c 100%) !important;\n}\n\n#audio-ui-featured-table {\nborder-color: #303030 !important;\n}\n  \n.audio-ui-featured-row {\nborder-color: #303030 !important;\ncolor: #aaa !important;\n}\n\n.audio-ui-featured-row:hover {\nbackground-color: #222 !important;\n}\n\n.yt-search-field .yt-uix-form-input-fluid {\npadding-right: 48px !important;\n}\n\n.yt-search-field {\nborder-color: #303030 !important;\nheight: 33px !important;\nmargin: 0 !important;\nbackground-color: #222 !important;\n-moz-box-shadow: inset 0 0px 0px #eee !important;\n-ms-box-shadow: inset 0 0px 0px #eee !important;\n-webkit-box-shadow: inset 0 0px 0px #eee !important;\nbox-shadow: inset 0 0px 0px #eee !important;\n}\n\n.yt-search-field-search-button .yt-uix-button-content {\nbackground: no-repeat url(http://i.imgur.com/VirN1wE.png) -170px -201px !important;\n}\n\n		/* Annotations Tab */\n\n#annotator-add-div {\nborder-bottom-color: #303030 !important;\n}\n\n#annotator-div {\nbackground: #1b1b1b !important;\nborder-width: 0px !important;\n}\n\n#annotator-select-div {\nborder-bottom-color: #303030 !important;\n}\n    \n		/* Captions Tab */\n\n.timedtext-content {\nbackground-color: transparent !important;\n}\n    \n#bottom-notes-section {\nborder-top-color: #303030;\nbackground-color: transparent !important;\n}\n      \n	/* Tags */\n      \n.vm-label-item, .vm-member-item {\nborder-bottom-color: #303030 !important;\nbackground: #1b1b1b !important;\n}\n\n.yt-alert-naked .yt-alert-content {\ncolor: #ccc;\n}\n\n/* Playlist View */\n\n.playlist-video-item {\nborder-top-color: #303030 !important;\nbackground-color: transparent !important;\ncolor: #aaa !important;\n}\n\n.yt-uix-button-icon-c4-editor-edit {\nbackground: no-repeat url(http://i.imgur.com/FwVdCu1.png) 0 -58px !important;\n}\n\n.yt-uix-button-icon-play-all {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -29px -181px !important;\n}\n\n.yt-uix-button-icon-playlist-like {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -168px -253px !important;\n}\n\n.yt-uix-button:hover .yt-uix-button-icon-playlist-like {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) 0 0 !important;\n}\n\n.yt-uix-button-icon-playlist-dislike {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -15px -339px !important;\n}\n\n.yt-uix-button:hover .yt-uix-button-icon-playlist-dislike {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -209px -399px !important;\n}\n\n.playlist-share.yt-uix-button-playlist-action.yt-uix-button.yt-uix-button-text.yt-uix-button-size-default.yt-uix-tooltip {\ncolor: #aaa !important;\n}\n\n.header-stats {\ncolor: #aaa !important;\n}\n\n.playlist-pager, .playlist-video-item {\nborder-top-color: #303030 !important;\n}\n\n.pl-header .pl-header-title {\ncolor: #aaa !important;\n}\n\n.pl-video-title-link {\ncolor: #999 !important;\n}\n\n.pl-video {\nborder-bottom-color: #303030 !important;\n}\n  \n/* Playlist Editor */\n\n#playlist-editor-title {\ncolor: #aaa !important;\n}\n\n.yt-uix-button-icon-c4-editor-trash {\nbackground: no-repeat url(http://i.imgur.com/FwVdCu1.png) 0 -111px !important;\n}\n\n#playlist-editor-navigation-menu {\nborder-bottom-color: #303030 !important;\n}\n\n#playlist-info, #playlist-info .yt-uix-form-legend {\ncolor: #999 !important;\n}\n\n.playlist-video-item .playlist-video-item-handle {\nborder-left-color: #303030 !important;\nborder-right-color: #303030 !important;\nbackground: #222 !important;\n}\n    \n.playlist-video-item .yt-user-name {\ncolor: #888 !important;\n}\n    \n.playlist-video-items {\nborder-bottom-color: #303030 !important;\n}\n      \n      /* Account Switcher Popup */	\n\n#identity-prompt-lb .identity-prompt-account-public-name {\ncolor: #aaa !important;\n}\n\n#identity-prompt-lb #button-container {\nbackground-color: transparent !important;\n}\n\n#identity-prompt-lb #identity-prompt-account-list li {\nborder-bottom-width: 0px !important;\n}\n\n      /* Intro Popup */\n\n.yt-dialog-fg-content, .yt-uix-overlay-fg-content {\nborder-color: #444 !important;\n}\n      \n.yt-dialog-bg, .yt-uix-overlay-bg {\nbackground-color: #111 !important;\n}     \n \n.yt-dialog-fg, .yt-uix-overlay-fg {\nbackground: #1b1b1b !important;\nborder-color: #303030 !important;\n}\n      \n.yt-dialog-base .yt-dialog-header h2, .yt-uix-overlay-base .yt-uix-overlay-header h2 {\ncolor: #aaa !important;\n}\n\n.yt-dialog-base .yt-dialog-header, .yt-uix-overlay-base .yt-uix-overlay-header {\nborder-bottom-color: #303030 !important;\n}\n\n#interstitial-editor h3 {\ncolor: #aaa !important;\n}\n          \n/* Watch Sidebar */\n\n#watch7-sidebar {\nbackground: transparent !important;\npadding-left: 5px !important;\n}\n\n#watch7-sidebar .watch-sidebar-section {\nbackground: # 0 !important; \n}\n\n.site-left-aligned .watch-wide #watch7-sidebar, .site-left-aligned .watch-playlist #watch7-sidebar {\npadding-top: 5px !important;\n}\n\n.watch-branded #watch7-sidebar {\nbackground: transparent !important;\n}\n\n.watch-branded-banner #watch7-sidebar {\nmargin-top: -400px !important;\n}\n\n#watch7-sidebar .watch-sidebar-head, #watch7-sidebar .watch-sidebar-foot {\ncolor: #999 !important;\n}\n\n.yt-sidebar-title, .yt-sidebar-title a {\ncolor: #aaa !important;\n}\n\n.yt-sidebar-link {\ncolor: #999 !important;\n}\n\n.yt-sidebar-title.yt-sidebar-selected a, .yt-sidebar-link.yt-sidebar-selected {\ncolor: #fff !important;\n}\n\n.gssb_m {\ncolor: #aaa !important;\nbackground: #181818 !important;\n}\n\n.gssb_e {\nborder: 1px solid #303030 !important;\n}\n\n.gssb_i td {\nbackground: #222 !important;\n}\n\n.yt-uix-button-icon-addto {\nbackground: no-repeat url(http://i.imgur.com/VirN1wE.pngp) -172px -221px !important;\n}\n\n#watch7-sidebar .video-list .video-list-item .title {\ncolor: #999 !important;\n}\n\n#watch7-sidebar .video-list .video-list-item .title:hover {\ncolor: #2793e6 !important;\n}\n\n#watch7-sidebar .video-list-item a:visited .title {\ncolor: #555 !important;\n}\n\n#watch7-sidebar .video-list-item a:hover:visited .title {\ncolor: #0059B3 !important;\n}\n\n	/* Watch Later page */\n\n#watch-later-promo {\nbackground: #1b1b1b !important;\n}\n\n.feed-promo {\nborder-bottom-color: #303030 !important;\n}\n\n#watch-later-promo .watch-later-tv, #watch-later-promo .watch-later-nyan {\ndisplay: none !important;\n}\n\n#watch-later-promo p {\ncolor: #999 !important;\n}\n\n	/* Social Page */\n\n#social-promo {\nbackground-color: #1b1b1b !important;\n}\n\n#social-promo h4, #social-promo .google-upgrade-promo {\ncolor: #777 !important;\n}\n\n/* In-feed promo */\n\n#channel-subscription-promo-in-feed {\nbackground: #222 !important;\n}\n\n#channel-subscription-promo-in-feed .message .channel-content h4 a {\ncolor: #ccc !important;\n}\n\n/* Upload Page */\n\n#main-content .starting-box {\nborder-color: #303030 !important;\nbackground: #1b1b1b !important;\n}\n\n#upload-prompt-box {\nborder-width: 0px !important;\n}\n\n#upload-button-text {\ncolor: #aaa !important;\n}\n\n#upload-other-options-list .upload-option-text {\ncolor: #aaa !important;\n}\n\n#upload-sidebar .upload-sidebar-header, #upload-help-links-non-hh strong {\ncolor: #aaa !important;\n}\n\n.upload-help-link-list .help-item {\ncolor: #999 !important;\n}\n\n.yt-uix-button-icon-upload-add {\nbackground: transparent url(http://i.imgur.com/4zVtksY.png) no-repeat !important;\n}\n\n.yt-uix-button-icon-upload-cancel {\nbackground: transparent url(http://i.imgur.com/bk23XgU.png) no-repeat !important;\n}\n  \n.upload-header {\nbackground: #1b1b1b !important;\nborder-color: #303030 !important;\nborder-top-width: 0px !important;\n}\n  \n.upload-item {\nborder-color: #303030 !important;\nborder-top-width: 0px !important;\nbackground-color: #1b1b1b !important;\nmargin-bottom: 0px !important;\n}\n\n.upload-item:last-child {\nmargin-bottom: 12px !important;\n    }\n\n.upload-thumb {\nheight: 68px !important;\nborder-color: #999 !important;\n}\n\n.item-title {\ncolor: #bbb !important;\n}\n  \n.sharing-networks-label {\ncolor: #777 !important;\n}\n\n.monetize-options-box {\nborder-color: #303030 !important;\nborder-radius: 0px !important;\n-moz-box-shadow: 0 0px 0px #000 !important;\n-ms-box-shadow: 0 0px 0px #000 !important;\n-webkit-box-shadow: 0 0px 0px #000 !important;\nbox-shadow: 0 0px 0px #000 !important;\n}\n  \nhr.metadata-separator-line {\nbackground: #303030 !important;\nborder-bottom-color: #303030 !important;\n}\n\n/* Footer */\n\nbody #footer-container {\nbackground-color: #1b1b1b !important;\nborder-top: 1px solid #292929 !important;\n}\n\n#footer-main {\nborder-bottom-width: 0px !important;\n}\n\n#footer-logo img {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -131px -219px !important;\n}\n\n#footer-links-primary a {\ncolor: #999 !important;\n}\n\n.yt-uix-button-default:active, .yt-uix-button-default.yt-uix-button-toggled, .yt-uix-button-default.yt-uix-button-active, .yt-uix-button-default.yt-uix-button-active:focus, .yt-uix-button-text:active {\nbackground: #1f1f1f !important;\n}\n\n.yt-uix-button-panel:hover #watch-like-dislike-buttons .yt-uix-button-text.yt-uix-button-toggled {\nborder-color: #303030 !important;\nbackground-color: #222 !important;\nbackground-image: -moz-linear-gradient(top,#222 0,#2e2e2e 100%) !important;\nbackground-image: -ms-linear-gradient(top,#222 0,#2e2e2e 100%) !important;\nbackground-image: -o-linear-gradient(top,#222 0,#2e2e2e 100%) !important;\nbackground-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,#222),color-stop(100%,#2e2e2e)) !important;\nbackground-image: -webkit-linear-gradient(top,#222 0,#2e2e2e 100%) !important;\nbackground-image: linear-gradient(to bottom,#222 0,#2e2e2e 100%) !important;\n}\n\n.video-extras-sparkbar-likes {\nbackground: #590 !important;\n}\n\n.video-extras-sparkbar-dislikes {\nbackground: #F00 !important;\n}\n\n#share-panel-buttons .yt-uix-button:hover, #share-panel-buttons .yt-uix-button:active, #share-panel-buttons .yt-uix-button.yt-uix-button-active, #share-panel-buttons .yt-uix-button.yt-uix-button-toggled {\nborder-bottom-color: #ccc !important;\n}\n\n#share-panel-buttons .yt-uix-button {\ncolor: #aaa !important;\n}\n\n\n\n.action-panel-content .report-video-title {\nborder-color:#ccc !important;\n}\n\n.yt-uix-form-input-text, .yt-uix-form-input-textarea {\nbackground: #111 !important;\nborder-color: #2b2b2b !important;\ncolor: #aaa !important;\n}\n\n.yt-uix-button .yt-uix-button-icon-action-panel-transcript {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -172px -159px !important;\n}\n\n.yt-uix-button-icon-action-panel-report {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -81px -62px !important;\n}\n\n.yt-uix-button-icon-action-panel-stats {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -61px -225px !important;\n}\n\n.yt-uix-button-icon-watch-like {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -168px -253px !important;\npadding-bottom: 2px !important;\n}\n\n.yt-uix-button:hover .yt-uix-button-icon-watch-like {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) 0 0 !important;\n}\n\n.actionable .yt-uix-button:active .yt-uix-button-icon-watch-like, .actionable .yt-uix-button.yt-uix-button-toggled .yt-uix-button-icon-watch-like {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -195px -253px !important;\n}\n\n.yt-uix-button-icon-watch-dislike {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -16px -339px !important;\npadding-bottom: 5px !important;\n}\n\n.yt-uix-button:hover .yt-uix-button-icon-watch-dislike {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -210px -399px !important;\n}\n\n\n.yt-uix-button:active .yt-uix-button-icon-watch-dislike, .yt-uix-button.yt-uix-button-toggled .yt-uix-button-icon-watch-dislike {\nbackground: no-repeat url(http://i.imgur.com/DDNZc3U.png) -16px -316px !important;\n}\n\n#yt-masthead-user-displayname {\ncolor: #aaa !important;\n}\n\n#masthead-search-term {\ncolor: #aaa !important;\n}\n\n.search-header {\nborder-bottom-color: #303030 !important;\n}\n\n\n#watch7-user-header .yt-user-name {\ncolor: #2793e6 !important;\n}\n\n#eow-title {\ncolor: #888!important;\n}\n\n.yt-default h1, .yt-default h2, .yt-default h3, .yt-default h4, .yt-default h5, .yt-default h6, h1.yt, h2.yt, h3.yt, h4.yt, h5.yt, h6.yt {\ncolor: #888 !important;\n}\n\n#comments-view .comment-text a {\ncolor: #2793e6 !important;\n}\n\n.g-hovercard.yt-uix-sessionlink.yt-user-name {\nword-wrap: break-word;\n}\n\n.yt-uix-button img, .yt-uix-button-icon-wrapper+.yt-uix-button-content {\ncolor: #888 !important;\n}\n\n.comment-text, .comment .author {\ncolor: #aaa !important;\n}\n\n#watch7-headline h1 .long-title {\ncolor: #999 !important;\n}\n\n.yt-uix-button-subscribed-branded .yt-uix-button-content span, .yt-uix-button-subscribe-branded .yt-uix-button-content, .share-email label, #comments-view h4, #comments-view h4 a, #watch7-views-info {\ncolor: #aaa!important;\n}\n\n.yt-uix-button-subscribed-branded:hover .yt-uix-button-content span, .yt-uix-button-subscribe-branded:hover .yt-uix-button-content, .yt-uix-expander-head {\ncolor: #ccc!important;\n}\n\n.watch-view-count {\ncolor: #ddd!important;\n}\n\n#watch7-user-header .yt-user-videos, #watch-description-extra-info .metadata-info-title, #action-panel-addto .watch-playlists-drawer h3, .watch-playlists-drawer .playlist-addto-title-options label {\ncolor: #999!important;\n}\n\n.comments-section-description {\ncolor: #777!important;\n}\n.all-comments, .all-comments a {\nbackground-color: transparent!important;\n}\n.epic-nav-dropdown-group:hover, body a.yt-uix-button-epic-nav-item:hover, body a.yt-uix-button-epic-nav-item.selected, body a.yt-uix-button-epic-nav-item.yt-uix-button-toggled, button.yt-uix-button-epic-nav-item:hover, button.yt-uix-button-epic-nav-item.selected, button.yt-uix-button-epic-nav-item.yt-uix-button-toggled, .epic-nav-item:hover, .epic-nav-item.selected, .epic-nav-item.yt-uix-button-toggled, .epic-nav-item-heading {\ncolor: #aaa !important;\n}\n\n.account-container {\nbackground: #1b1b1b !important;\nborder-color: #303030 !important;\n}\n\n.account-header h2 {\ncolor: #bbb !important;\n}\n  \nh3.account-section-header {\ncolor: #999 !important;\n}\n  \n.account-content {\ncolor: #888 !important;\n}\n\n.account-section-setting {\ncolor: #999 !important;\n}\n\n.account-features-list tr {\nborder-bottom-color: #303030 !important;\n}\n\n.social-connector {\nborder-color: #303030 !important;\nbackground: #2b2b2b !important;\ncolor: #ccc !important;\n}\n\n.yt-horizontal-rule {\nborder-top-color: #303030 !important;\n}\n\n.yt-uix-form-input-checkbox, .yt-uix-form-input-checkbox-element {\nbackground: #2a2a2a !important;\nborder-color: #555 !important;\n}\n\n.yt-uix-form-input-checkbox-container input:checked+.yt-uix-form-input-checkbox-element {\nbackground: no-repeat #2a2a2a url(http://i.imgur.com/DDNZc3U.png) -155px -62px !important;\nborder: 1px solid #36649c !important;\n}\n\n.yt-badge {\nborder-color: #303030 !important;\ncolor: #aaa !important;\n}\n\n.no-adsense-text .yt-uix-button {\ncolor: #fff !important;\n}\n\n#google-cookie-alert {\nborder-top-color: #303030 !important;\n}\n\n.search-header {\nborder-bottom-color: #303030 !important;\n}\n\n.search-header .num-results, .search-header .num-results strong, .search-header .yt-uix-button-content, .filter-col-title, .filter {\ncolor: #aaa !important;\n}\n\n.watch-card {\ncolor: #aaa !important;\n}\n\n.watch-card .watch-card-title a, .watch-card .yt-uix-tabs-tab:hover, .watch-card .watch-card-more-tab:hover, .watch-card .watch-card-more-row:hover td {\ncolor: #ccc !important;\n}\n\n.watch-card .yt-uix-tabs-selected {\ncolor: #aaa !important;\n}\n    \n.watch-card-list td {\nborder: 1px solid #303030 !important;\n}\n      \n.watch-card-list .watch-card-data-col {\npadding-left: 5px !important;\npadding-right: 5px !important;\ntext-align: center !important;\n}\n    \n#filter-dropdown {\nbackground-color: #222 !important;\n}\n\n/* Button Menu (dropdown) */\n\n.yt-uix-button-menu {\nborder-color: #444 !important;\nbackground: #222 !important;\n}\n  \n.yt-uix-button-menu .yt-uix-button-menu-item {\ncolor: #ccc !important;\n}\n\n.menu-item-top-divider {\nborder-top-color: #444 !important;\n}\n\n.vm-action-menu-content .yt-uix-button-menu-item.menu-subheading {\nbackground: #292929 !important;\n}\n\n.yt-uix-button-menu .yt-uix-button-menu-item.menu-subheading {\nborder-top-color: #444 !important;\ncolor: #ccc !important;\n}\n\n#shared-addto-menu .playlists {\nborder-bottom-color: #444 !important;\n}\n\n/* Youtube Broken Page */\n\n#error-page-content p {\ncolor: #aaa !important;\ntext-shadow: 0px 0 0 #000 !important;\n}\n\n#masthead-search .search-btn-component .yt-uix-button-content {\nbackground: no-repeat url(http://i.imgur.com/VirN1wE.png) -170px -201px !important;\n}\n\n/* Youtube Stop Download Script */\n\n#stop-download {\nmargin-left: 5px !important;\n}\n\n#stpdownload {\ncolor: #fff !important;\n}\n\n/* OPTIONALS */";
        if (typeof GM_addStyle != "undefined") {
            GM_addStyle(css2);
        } else if (typeof PRO_addStyle != "undefined") {
            PRO_addStyle(css2);
        } else if (typeof addStyle != "undefined") {
            addStyle(css2);
        } else {
            var node = document.createElement("style");
            node.type = "text/css";
            node.appendChild(document.createTextNode(css2));
            var heads = document.getElementsByTagName("head");
            if (heads.length > 0) {
                heads[0].appendChild(node); 
            } else {
                // no head yet, stick it whereever
                document.documentElement.appendChild(node);
            }
        }
    })();
    
    
    //Unique Layout        
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
#masthead-positioner {display:none; zoom:0.9 !important; -moz-transform: scale(0.9) !important; -moz-transform-origin: 22pc !important; width: 350px !important; position: absolute !important; left:0px !important; right:auto !important;}\
#masthead-positioner-height-offset, #footer-container, #yt-masthead-user, #action-panel-overflow-button, .mt-gl-fl-l {display:none !important;}\
#yt-masthead #search-btn .yt-uix-button-content {margin: 0 8px !important;}\
#yt-masthead .yt-masthead-logo-container {width: auto !important;}\
#yt-masthead-container {min-width: 0px !important; padding-left: 8px !important; padding-right: 8px !important; padding-top:3px !important; padding-bottom:3px !important;}\
.gssb_c {zoom:0.9 !important; -moz-transform: scale(0.9) !important; -moz-transform-origin: 0 0 !important;}\
#appbar-guide-menu {left:0 !important; left:auto !important; width:315px !important;}\
\
#player #player-api {position:fixed !important; right:0 !important;}\
.player-width, .watch-medium .player-width, .watch-medium-540 .player-width, .watch-medium .player-width, .watch-large .player-width, .watch-non-stage-mode .player-width, .watch-stage-mode .player-width {width: 100% !important;}\
.player-height {height: 100% !important;}\
#player {margin-top: 0px !important; min-width:0px !important; max-width:none !important;  width: auto !important;}\
.html5-main-video, .html5-video-content {width: 100% !important; left:0 !important; height: 100% !important;}\
.html5-video-container {width: 100% !important; height: 100% !important;}\
.ytp-chrome-bottom {width: 100% !important;}\
.watch-stage-mode #theater-background {background-color: transparent !important;}\
\
#content {display:none; width: 315px !important; margin: 0 !important; overflow: overlay-y !important; overflow-x: hidden !important; position: absolute !important; top: 37px !important; left:0 !important;}\
#watch7-main {zoom:0.9 !important; -moz-transform: scale(0.9) !important; -moz-transform-origin: 0 0 !important; margin-bottom:0px !important; min-width:0px !important; width:350px !important;}\
#watch7-content {width: 350px !important;}\
.watch #content.content-alignment {min-width: 0 !important; max-width: none !important;}\
#watch7-headline {zoom: 0.85 !important;}\
#watch-discussion {height: 350px !important; overflow-y: scroll !important; overflow-x:hidden !important; width:auto !important; margin-right: -17px !important;}\
#watch-discussion iframe {width:340px !important; -webkit-transform: scale(0.9) !important; -webkit-transform-origin: 0 0 !important;}\
\
#watch7-sidebar {width: 350px !important; margin-left:0 !important; margin-bottom: 0px !important; clear:left !important; margin-top:0 !important; top:0 !important; padding-left:0px !important;}\
#watch7-sidebar-contents {padding-left: 0px !important;}\
\
.yt-card.yt-card-has-padding {padding: 8px !important;}\
.yt-card {margin: 8px 0 !important;}\
#body-container {border-left: 1px solid black;}\
::-webkit-scrollbar { display: none !important;}\
.rg_embed a[data-id]:hover, .rg_embed a[data-id].rg_annotation_expanded, .rg_embed a[data-id].rg_annotation_hover {background-color: #ffc31c !important; color: black !important;}\
.rg_embed_body, #action-panel-details a {color: ghostwhite;}\
\ ");


//Mouse Actions
$(window).bind('mousewheel', function () { $("#content, #masthead-positioner").css( "display","block" ); $(".player-width, .watch-medium .player-width, .watch-medium-540 .player-width, .watch-medium .player-width, .watch-large .player-width, .watch-non-stage-mode .player-width, .watch-stage-mode .player-width").attr('style', 'width: calc(100% - 316px) !important'); } );
$(window).bind('DOMMouseScroll', function ()  { $("#content, #masthead-positioner").css( "display","block" ); $(".player-width, .watch-medium .player-width, .watch-medium-540 .player-width, .watch-medium .player-width, .watch-large .player-width, .watch-non-stage-mode .player-width, .watch-stage-mode .player-width").attr('style', 'width: calc(100% - 316px) !important'); } );

$(window).mousemove(function(e) {
    var now = e.pageX;
    var past = 10;
    if(now < past) { $("#content, #masthead-positioner").css( "display","none" ); $(".player-width, .watch-medium .player-width, .watch-medium-540 .player-width, .watch-medium .player-width, .watch-large .player-width, .watch-non-stage-mode .player-width, .watch-stage-mode .player-width").attr('style', 'width: 100% !important'); }
});
    
}


//Ratings Bar
GM_addStyle(".video-time { margin-bottom: 4px;} .yt-uix-simple-thumb-related > img {margin-bottom: -27px !important;} a.related-video { padding-bottom: 11px !important; margin-bottom: -11px !important; } .lsLines { opacity: 0; } .lsLines:hover { opacity: .6; } .channels-browse-content-grid .channels-content-item { height: 167px } .yt-thumb-default-288 + span + button + div > .lsLines { background-size: 288px 4px; } .yt-thumb-default-194 + span + button + div > .lsLines { background-size: 194px 4px; } .yt-thumb-default-185 + span + button + div > .lsLines, .yt-thumb-feed-185 + span + span + div .lsLines { background-size: 185px 4px; } .yt-thumb-default-160 + img + span + div > .lsLines { background-size: 160px 4px; } .yt-thumb-default-40 + span + span + span + span + div .lsLines { background-size: 157px 4px; } .yt-thumb-default-106 + span + button + div > .lsLines { background-size: 106px 4px; } .yt-thumb-default-138 + span + button + div > .lsLines { background-size: 138px 4px; } .yt-thumb-default-120 + span + button + div > .lsLines, .yt-thumb-default-224 + span + div > .lsLines { background-size: 120px 4px; } .yt-thumb-default-76 + span + span + span + div .lsLines { background-size: 76px 4px; } .yt-thumb-default-64 + div > .lsLines { background-size: 64px 4px; } .feed-item-thumb.watched .ux-thumb-wrap {opacity: 1 !important;} .ux-thumb {background-color: white !important;} .feed-item-thumb.watched .ux-thumb-wrap img {opacity: .4 !important;} .feed-item-thumb.watched .ux-thumb-wrap img:hover {opacity: 1 !important;} .feed-thumb-watched {opacity: .5 !important;} .video-response .video-extras-sparkbarks {width: 26% !important;} .video-extras-sparkbar-likes {border-right: 0px !important}");

if (document.getElementById("watch7-views-info")) {
    document.getElementsByClassName("video-extras-sparkbar-likes")[0].style.background = "#0b2";
    document.getElementsByClassName("video-extras-sparkbar-dislikes")[0].style.background = "#C00";
}
var loaded = {};
var containerName="yt-thumb-default";
var containerName2="video-time";
loaded[""] = true;
window.addEventListener (
    'scroll',
    function (e) {
        iterateClips(document.getElementsByClassName(containerName));
        iterateClips(document.getElementsByClassName(containerName2));
    },
    false);
var wm = document.getElementById("watch-more-related");
if (wm) {
    // On "Load More Suggestions" button click
    wm.addEventListener (
        'DOMNodeInserted',
        function (e) {
            iterateClips(e.target.getElementsByClassName(containerName));
            iterateClips(e.target.getElementsByClassName(containerName2));
        },
        false);
}

// starts here 
iterateClips(document.getElementsByClassName(containerName));
iterateClips(document.getElementsByClassName(containerName2));

function iterateClips(clips)
{
    if (clips)
    {
        for (var i=0; i<clips.length; ++i) 
            if (isVisible(clips[i])) 
                requestRating(clips[i]);
            } 
}

function requestRating(box)
{ 
    var id = getVideoId(box);
    
    if (loaded[id])
        return;
    
    loaded[id] = true;
    setTimeout( function() {
        GM_xmlhttpRequest({
            method: 'GET',
            url: "http://gdata.youtube.com/feeds/api/videos/" + id + "?v=2&alt=json&fields=yt:rating",
            onload: function(response) 
            {
                if (response.status == 200) 
                {
                    var rsp = eval( '(' + response.responseText + ')' );
                    if (rsp && rsp.entry && rsp.entry.yt$rating)
                        attachBar(box, parseInt(rsp.entry.yt$rating.numLikes),
                                  parseInt(rsp.entry.yt$rating.numDislikes));
                } 
                else
                    delete loaded[id]; // give it a chance to reload while scrolling 
            }
        });
    }, 0);
}

function getVideoId(box)
{
    var anchor=box.parentNode.parentNode;
    var isAnchorFound = 2;
    while (anchor && anchor.tagName != undefined) 
    {
        if (anchor.tagName.toLowerCase()=="a")
            break;
        anchor = anchor.parentNode; 
        --isAnchorFound;
        if (0==isAnchorFound)
            break;
    }
    if ( isAnchorFound>0 )
    {
        var href = anchor.getAttribute("href");
        if (href)
        {
            var id = href.replace(/.*v=([^&]*).*/, "$1");
            if (id.length<href.length) 
                return id;
        }
    }
    return "";
}
function attachBar(videoThumb, likes, dislikes) 
{
    var total = likes + dislikes;
    
    if (total > 0)
    {
        var ratingDiv = document.createElement("div");
        ratingDiv.setAttribute("class", "video-extras-sparkbarks");
        ratingDiv.setAttribute("style", "position: relative; top: -1px;" );
        ratingDiv.setAttribute("title",  likes + " likes, " + dislikes + " dislikes");
        
        var likesDiv = document.createElement("div");
        likesDiv.setAttribute("class", "video-extras-sparkbar-likes"); 
        likesDiv.setAttribute("style", "height: 4px; width: "+(100*likes)/total+"%; background: #0b2;"); 
        
        var dislikesDiv = document.createElement("div");
        dislikesDiv.setAttribute("class", "video-extras-sparkbar-dislikes"); 
        dislikesDiv.setAttribute("style", "height: 4px; width: "+(100*dislikes)/total+"%;"+"background: #C00;"); 
        
        ratingDiv.appendChild(likesDiv);
        ratingDiv.appendChild(dislikesDiv);
        videoThumb.parentNode.parentNode.appendChild(ratingDiv);
        videoThumb.parentNode.appendChild(ratingDiv);
        //videoThumb.appendChild(ratingDiv);
        
        // fixing time element position to be inside of the thumb image
        var spans = videoThumb.parentNode.parentNode.getElementsByTagName("span");
        for (var i=0; i<spans.length; ++i )
            if (spans[i].getAttribute("class")=="video-time")
            {
                spans[i].style.bottom = "6px";
                break;
            }
            }
}

function isVisible ( el )
{
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    
    while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
}


//Animated Thumbs
const LOOP_INTERVAL = 1000; 
var loopHandler, img, imgs;

document.addEventListener('mouseover', mo, false);

function mo(evt)
{
    if( evt.target.nodeName=='IMG' && evt.target.getAttribute('src') && evt.target.getAttribute('src').search(/default\.jpg$/)>-1 )
    {
        start(evt);
        evt.target.addEventListener('mouseout', end, false);		
    }
}

function start(evt)
{
    img = evt.target;
    imgZIndex(evt);
    img.setAttribute('src', img.getAttribute('src').replace(/\/[^\/]+\.jpg$/, '/1.jpg'));
    loopHandler = setInterval(loop, LOOP_INTERVAL);
}

function loop()
{
    if(!img){
        clearInterval(loopHandler)
        return;
    }
    var num = parseInt( img.getAttribute('src').match(/(\d)\.jpg$/)[1] );
    if(num==3) 
        num = 1;
    else 
        num++;
    img.setAttribute('src', img.getAttribute('src').replace(/\d\.jpg$/, +num+'.jpg')); 
}

function end(evt) 
{
    var node;
    clearInterval(loopHandler);
    evt.target.setAttribute('src', img.getAttribute('src').replace(/\/[^\/]+\.jpg$/, '/default.jpg'));
    img.style.zIndex = null;
    img = null;
}

function imgZIndex(evt) {
    if(GM_getValue('noButtons') || evt.ctrlKey){
        img.style.zIndex = '999999999';
    }else{
        img.style.zIndex = null;
    }	
}
