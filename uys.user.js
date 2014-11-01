// ==UserScript==
// @name           Unique Youtube Skin
// @description    Perfect watch page. Dinamicly adjust player size acc your window size to get biggest video.
// @author         haluk ilhan
// @homepage       https://github.com/halukilhan/uys
// @updateURL      https://raw.github.com/halukilhan/uys/master/uys.user.js
// @downloadURL    https://raw.github.com/halukilhan/uys/master/uys.user.js
// @icon           http://i.imgur.com/VSfpO.jpg
// @version        0.5.20
// @include        http://*youtube.com*
// @include        https://*youtube.com*
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

if(window.location.href.indexOf("youtube.com/watch") >= 0)         {   
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
#watch-discussion {height: 350px !important; overflow: scroll;}\
#watch7-main {zoom:0.9; -moz-transform: scale(0.9); -moz-transform-origin: 0 0; margin-bottom:0px; min-width:0px; width:350px;}\
#watch7-content {width: 350px !important;}\
.watch #content.content-alignment {min-width: 0 !important; max-width: none !important;}\
#masthead-positioner {zoom:0.9; -moz-transform: scale(0.9); -moz-transform-origin: 0 0; width: 350px; position: absolute; right:0px !important; left:auto !important;}\
#masthead-positioner-height-offset, #footer-container, #yt-masthead-user, #action-panel-overflow-button {display:none;}\
#yt-masthead #search-btn .yt-uix-button-content {margin: 0 8px;}\
#watch7-headline {zoom: 0.85;}\
#watch7-sidebar {width: 350px !important; margin-left:0 !important; margin-bottom: 0px; clear:left !important; margin-top:0 !important; top:0 !important;}\
#player {margin-top: 0px !important; min-width:0px !important; max-width:none !important;  width: auto !important; margin-right: 315px !important;}\
#content {width: 315px !important; margin: 0 !important; overflow: overlay; position: absolute; top: 44px; right:0 !important;}\
.yt-card.yt-card-has-padding {padding: 8px;}\
.yt-card {margin: 8px 0;}\
#watch7-sidebar-contents {padding-left: 0px;}\
.player-width {width: calc(100% - 315px) !important;}\
.player-height {height: 100% !important;}\
#player .player-api {position:fixed !important;}\
.html5-main-video, .html5-video-content {width: 100% !important; left:0 !important; height: 100% !important;}\
#yt-masthead .yt-masthead-logo-container {width: auto !important;}\
.yt-base-gutter {min-width: 0px; padding-left: 8px; padding-right: 8px; padding-top:3px; padding-bottom:3px;}\
iframe {width:360px !important; transform: scale(0.9); transform-origin: 0 0; ;}\
::-webkit-scrollbar { display: none !important; }\
\ ");
}





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
