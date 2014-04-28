// settings 
String.prototype.find = function(s) {
return (this.indexOf(s) != -1);
};
var GM_config = {
 storage: 'GM_config2', // This needs to be changed to something unique for localStorage
 init: function() {
        // loop through GM_config.init() arguements
	for(var i=0,l=arguments.length,arg; i<l; ++i) {
		arg=arguments[i];
		switch(typeof arg) {
            case 'object': for(var j in arg) { // could be a callback functions or settings object
							switch(j) {
							case "open": GM_config.onOpen=arg[j]; delete arg[j]; break; // called when frame is gone
							case "close": GM_config.onClose=arg[j]; delete arg[j]; break; // called when settings have been saved
							case "save": GM_config.onSave=arg[j]; delete arg[j]; break; // store the settings objects
							default: var settings = arg;
							}
			} break;
            case 'function': GM_config.onOpen = arg; break; // passing a bare function is set to open
                        // could be custom CSS or the title string
			case 'string': if(arg.indexOf('{')!=-1&&arg.indexOf('}')!=-1) var css = arg;
				else GM_config.title = arg;
				break;
		}
	}
	if(!GM_config.title) GM_config.title = 'Settings - Anonymous Script'; // if title wasn't passed through init()
	var stored = GM_config.read(); // read the stored settings
	GM_config.passed_values = {};
	for (var i in settings) {
	GM_config.doSettingValue(settings, stored, i, null, false);
	if(settings[i].kids) for(var kid in settings[i].kids) GM_config.doSettingValue(settings, stored, kid, i, true);
	}
	GM_config.values = GM_config.passed_values;
	GM_config.settings = settings;
	if (css) GM_config.css.stylish = css;
 },
 open: function() {
 if(document.evaluate("//iframe[@id='GM_config']",document,null,9,null).singleNodeValue) return;
	// Create frame
	document.body.appendChild((GM_config.frame=GM_config.create('iframe',{id:'GM_config', style:'position:fixed; top:0 !important; left:0 !important; opacity:0; display:none; z-index:999; width:309px; height:700px; border:1px solid #000000; overflow:auto;'})));
        GM_config.frame.src = 'about:blank'; // In WebKit src cant be set until it is added to the page
	GM_config.frame.addEventListener('load', function(){
		var obj = GM_config, frameBody = this.contentDocument.getElementsByTagName('body')[0], create=obj.create, settings=obj.settings;
		obj.frame.contentDocument.getElementsByTagName('head')[0].appendChild(create('style',{type:'text/css',textContent:obj.css.basic+obj.css.stylish}));
		// Add header and title
		frameBody.appendChild(create('div', {id:'header',className:'config_header block center', innerHTML:obj.title}));
		// Append elements
		var anch = frameBody, secNo = 0; // anchor to append elements
		for (var i in settings) {
			var type, field = settings[i], value = obj.values[i];
			if (field.section) {
				anch = frameBody.appendChild(create('div', {className:'section_header_holder', id:'section_'+secNo, kids:new Array(
				  create('a', {className:'section_header center', href:"javascript:void(0);", id:'c_section_kids_'+secNo, textContent:field.section[0], textContent:"Main Options", onclick:function(){GM_config.toggle(this.id.substring(2));}}),
				  create('div', {id:'section_kids_'+secNo, className:'section_kids', style:obj.getValue('section_kids_'+secNo, "")=="none"?"display: none;":""})
				  )}));
				if(field.section[1]) anch.appendChild(create('p', {className:'section_desc center',innerHTML:field.section[1]}));
				secNo++;
			} else if(secNo == 0) {
				anch = frameBody.appendChild(create('div', {className:'section_header_holder', id:'section_'+secNo, kids:new Array(
				  create('a', {className:'section_header center', href:"javascript:void(0);", id:'c_section_kids_'+secNo,  onclick:function(){GM_config.toggle(this.id.substring(2));}}),
				  create('div', {id:'section_kids_'+secNo, className:'section_kids', style:obj.getValue('section_kids_'+secNo, "")=="none"?"display: none;":""})
				  )}));
				secNo++;
			}
			anch.childNodes[1].appendChild(GM_config.addToFrame(field, i, false));
		}
		// Add save and close buttons
		frameBody.appendChild(obj.create('div', {id:'buttons_holder', kids:new Array(
			obj.create('button',{id:'saveBtn',textContent:'Save',title:'Save options and close window',className:'saveclose_buttons',onclick:function(){GM_config.close(true)}}),
			obj.create('button',{id:'cancelBtn', textContent:'Cancel',title:'Close window',className:'saveclose_buttons',onclick:function(){GM_config.close(false)}}),
			obj.create('div', {className:'reset_holder block', kids:new Array(
				obj.create('a',{id:'resetLink',textContent:'Restore to default',href:'#',title:'Restore settings to default configuration',className:'reset',onclick:obj.reset})
		)}))}));
		obj.center(); // Show and center it
		window.addEventListener('resize', obj.center, false); // Center it on resize
		if (obj.onOpen) obj.onOpen(); // Call the open() callback function
		
		// Close frame on window close
		window.addEventListener('beforeunload', function(){GM_config.remove(this);}, false);
	}, false);
 },
 close: function(save) {
	if(save) {
		var type, fields = GM_config.settings, typewhite=/radio|text|hidden|checkbox/;
		for(f in fields) {
			var field = GM_config.frame.contentDocument.getElementById('field_'+f), kids=fields[f].kids;
			if(!field.className.find("separator")) {
				if(typewhite.test(field.type)) type=field.type;
					else type=field.tagName.toLowerCase();
				GM_config.doSave(f, field, type);
				if(kids) for(var kid in kids) {
					var field = GM_config.frame.contentDocument.getElementById('field_'+kid);
					if(typewhite.test(field.type)) type=field.type;
						else type=field.tagName.toLowerCase();
					GM_config.doSave(kid, field, type, f);
				}
			}
		}
                if(GM_config.onSave) GM_config.onSave(); // Call the save() callback function
                GM_config.save();
	}
	if(GM_config.frame) GM_config.remove(GM_config.frame);
	delete GM_config.frame;
        if(GM_config.onClose) GM_config.onClose(); //  Call the close() callback function
 },
 set: function(name,val) {
	GM_config.values[name] = val;
 },
 get: function(name) {
	return GM_config.values[name];
 },
 isGM: typeof GM_getValue != 'undefined' && typeof GM_getValue('a', 'b') != 'undefined',
 log: (this.isGM) ? GM_log : ((window.opera) ? opera.postError : console.log),
 getValue : function(name, def) { return (this.isGM?GM_getValue:(function(name,def){return localStorage.getItem(name)||def}))(name, def||""); },
 setValue : function(name, value) { return (this.isGM?GM_setValue:(function(name,value){return localStorage.setItem(name,value)}))(name, value||""); },
 save: function(store, obj) {
    try {
      var val = JSON.stringify(obj||GM_config.values);
      GM_config.setValue((store||GM_config.storage),val);
    } catch(e) {
      GM_config.log("GM_config failed to save settings!");
    }
 },
 read: function(store) {
    try {
      var val = GM_config.getValue((store||GM_config.storage), '{}'), rval = JSON.parse(val);
    } catch(e) {
      GM_config.log("GM_config failed to read saved settings!");
      rval = {};
    }
    return rval;
 },
 reset: function(e) {
	e.preventDefault();
	var type, obj = GM_config, fields = obj.settings;
	for(f in fields) {
		var field = obj.frame.contentDocument.getElementById('field_'+f), kids=fields[f].kids;
		if(field.type=='radio'||field.type=='text'||field.type=='checkbox') type=field.type;
		else type=field.tagName.toLowerCase();
		GM_config.doReset(field, type, null, f, null, false);
		if(kids) for(var kid in kids) {
			var field = GM_config.frame.contentDocument.getElementById('field_'+kid);
			if(field.type=='radio'||field.type=='text'||field.type=='checkbox') type=field.type;
		else type=field.tagName.toLowerCase();
			GM_config.doReset(field, type, f, kid, true);
			}
	}
 },
 addToFrame : function(field, i, k) {
	var elem, obj = GM_config, anch = GM_config.frame, value = obj.values[i], Options = field.options, label = field.label, create=GM_config.create, isKid = k!=null && k===true;
		switch(field.type) {
				case 'separator': elem = create("span", {textContent:label, id:'field_'+i, className:'field_label separator'});
					break;
				case 'textarea':
					elem = create(isKid ? "span" : "div", {title:field.title||'', kids:new Array(
						create('span', {textContent:label, className:'field_label'}),
						create('textarea', {id:'field_'+i,innerHTML:value, cols:(field.cols?field.cols:20), rows:(field.rows?field.rows:2)})
					), className: 'config_var'});
					break;
				case 'radio':
					var boxes = new Array();
					for (var j = 0,len = Options.length; j<len; j++) {
						boxes.push(create('span', {textContent:Options[j]}));
						boxes.push(create('input', {value:Options[j], type:'radio', name:i, checked:Options[j]==value?true:false}));
					}
					elem = create(isKid ? "span" : "div", {title:field.title||'', kids:new Array(
						create('span', {textContent:label, className:'field_label'}),
						create('span', {id:'field_'+i, kids:boxes})
					), className: 'config_var'});
					break;
				case 'select':
					var options = new Array();
					if(!Options.inArray) for(var j in Options) options.push(create('option',{textContent:Options[j],value:j,selected:(j==value)}));
						else options.push(create("option", {textContent:"Error - options needs to be an object type, not an array.",value:"error",selected:"selected"}));
					elem = create(isKid ? "span" : "div", {title:field.title||'', kids:new Array(
						create('span', {textContent:label, className:'field_label'}),
						create('select',{id:'field_'+i, kids:options})
					), className: 'config_var'});
					break;
				case 'checkbox':
					elem = create(isKid ? "span" : "div", {title:field.title||'', kids:new Array(
						create('label', {textContent:label, className:'field_label', "for":'field_'+i}),
						create('input', {id:'field_'+i, type:'checkbox', value:value, checked:value})
					), className: 'config_var'});
					break;
				case 'button':
				var tmp;
					elem = create(isKid ? "span" : "div", {kids:new Array(
						(tmp=create('input', {id:'field_'+i, type:'button', value:label, size:(field.size?field.size:25), title:field.title||''}))
					), className: 'config_var'});
					if(field.script) obj.addEvent(tmp, 'click', field.script);
					break;
				case 'hidden':
				elem = create(isKid ? "span" : "div", {title:field.title||'', kids:new Array(
						create('input', {id:'field_'+i, type:'hidden', value:value})
					), className: 'config_var'});
					break;
				default:
					elem = create(isKid ? "span" : "div", {title:field.title||'', kids:new Array(
						create('span', {textContent:label, className:'field_label'}),
						create('input', {id:'field_'+i, type:'text', value:value, size:(field.size?field.size:25)})
					), className: 'config_var'});
			}
	if(field.kids) {
	var kids=field.kids;
	for(var kid in kids) elem.appendChild(GM_config.addToFrame(kids[kid], kid, true));
	}
return elem;
},
 doSave : function(f, field, type, oldf) {
 var isNum=/^[\d\.]+$/, set = oldf ? GM_config.settings[oldf]["kids"] : GM_config.settings;
 switch(type) {
				case 'text':
					GM_config.values[f] = ((set[f].type=='text') ? field.value : ((isNum.test(field.value) && ",int,float".indexOf(","+set[f].type)!=-1) ? parseFloat(field.value) : false));
					if(set[f]===false) {
						alert('Invalid type for field: '+f+'\nPlease use type: '+set[f].type);
						return;
					}
					break;
				case 'hidden':
					GM_config.values[f] = field.value.toString();
					break;
				case 'textarea':
					GM_config.values[f] = field.value;
					break;
				case 'checkbox':
					GM_config.values[f] = field.checked;
					break;
				case 'select':
					GM_config.values[f] = field.options[field.selectedIndex].value;
					break;
				case 'span':
					var radios = field.getElementsByTagName('input');
					if(radios.length>0) for(var i=radios.length-1; i>=0; i--) {
						if(radios[i].checked) GM_config.values[f] = radios[i].value;
					}
					break;
			}
 },
 doSettingValue : function(settings, stored, i, oldi, k) {
		var set = k!=null && k==true && oldi!=null ? settings[oldi]["kids"][i] : settings[i];
			if(",save,open,close".indexOf(","+i) == -1) {
            // The code below translates to:
            // if a setting was passed to init but wasn't stored then 
            //      if a default value wasn't passed through init() then use null
            //      else use the default value passed through init()
            // 		else use the stored value
            try {
            var value = (stored[i]==null || typeof stored[i]=="undefined") ? ((set["default"]==null || typeof set["default"]=="undefined") ? null : (set["default"])) : stored[i];
			} catch(e) {
			var value = stored[i]=="undefined" ? (set["default"]=="undefined" ? null : set["default"]) : stored[i];
			}
            
            // If the value isn't stored and no default was passed through init()
            // try to predict a default value based on the type
            if (value === null) {
                switch(set["type"]) {
                    case 'radio': case 'select':
                        value = set.options[0]; break;
                    case 'checkbox':
                        value = false; break;
                    case 'int': case 'float':
                        value = 0; break;
                    default:
					value = (typeof stored[i]=="function") ? stored[i] : "";
                }
			}
			
			}
	GM_config.passed_values[i] = value;
 },
 doReset : function(field, type, oldf, f, k) {
 var isKid = k!=null && k==true, obj=GM_config,
	 set = isKid ? obj.settings[oldf]["kids"][f] : obj.settings[f];
 switch(type) {
			case 'text':
				field.value = set['default'] || '';
				break;
			case 'hidden':
				field.value = set['default'] || '';
				break;
			case 'textarea':
				field.value = set['default'] || '';
				break;
			case 'checkbox':
				field.checked = set['default'] || false;
				break;
			case 'select':
				if(set['default']) {
					for(var i=field.options.length-1; i>=0; i--)
					if(field.options[i].value==set['default']) field.selectedIndex=i;
				}
				else field.selectedIndex=0;
				break;
			case 'span':
				var radios = field.getElementsByTagName('input');
				if(radios.length>0) for(var i=radios.length-1; i>=0; i--) {
					if(radios[i].value==set['default']) radios[i].checked=true;
				}
				break;
		}
 },
 values: {},
 settings: {},
 css: {
 basic: 'body {background:#FFFFFF;}\n' +
 '.indent40 {margin-left:40%;}\n' +
 '* {font-family: arial, tahoma, sans-serif, myriad pro;}\n' +
 '.field_label {font-weight:bold; font-size:12px; margin-right:6px;}\n' +
 '.block {display:block;}\n' +
 '.saveclose_buttons {\n' +
 'margin:16px 10px 10px 10px;\n' +
 'padding:2px 12px 2px 12px;\n' +
 '}\n' +
 '.reset, #buttons_holder, .reset a {text-align:right; color:#000000;}\n' +
 '.config_header {font-size:20pt; margin:0;}\n' +
 '.config_desc, .section_desc, .reset {font-size:9pt;}\n' +
 '.center {text-align:center;}\n' +
 '.section_header_holder {margin-top:8px;}\n' +
 '.config_var {margin:0 0 4px 0; display:block;}\n' +
 '.section_header {display:none}\n' +
 '.section_kids {margin-top:10px;}\n' +
 '.section_desc {font-size:9pt; background:#EFEFEF; color:#575757; border:1px solid #CCCCCC; margin:0 0 6px 0;}\n' +
 'input[type="radio"] {margin-right:8px;}',
 stylish: ''},
 create: function(a,b) {
	var ret=window.document.createElement(a);
	if(b) for(var prop in b) {
		if(prop.indexOf('on')==0) ret.addEventListener(prop.substring(2),b[prop],false);
		else if(prop=="kids" && (prop=b[prop])) for(var i=0; i<prop.length; i++) ret.appendChild(prop[i]);
		else if(",style,accesskey,id,name,src,href,for".indexOf(","+prop.toLowerCase())!=-1) ret.setAttribute(prop, b[prop]);
		else ret[prop]=b[prop];
	}
	return ret;
 },
 center: function() {
	var node = GM_config.frame, style = node.style, beforeOpacity = style.opacity;
	if(style.display=='none') style.opacity='0';
	style.display = '';
	style.opacity = '1';
 },
 run: function() {
    var script=GM_config.getAttribute('script');
    if(script && typeof script=='string' && script!='') {
      func = new Function(script);
      window.setTimeout(func, 0);
    }
 },
 addEvent: function(el,ev,scr) { el.addEventListener(ev, function() { typeof scr == 'function' ? window.setTimeout(scr, 0) : eval(scr) }, false); },
 remove: function(el) { if(el && el.parentNode) el.parentNode.removeChild(el); },
 toggle : function(e) {
	var node=GM_config.frame.contentDocument.getElementById(e);
	node.style.display=(node.style.display!='none')?'none':'';
	GM_config.setValue(e, node.style.display);
 },
};
GM_config.addTooltip = function(num,nam) {
  if ( cf=this.frame.contentWindow.document.getElementById('config_fields') ) {
    cf.childNodes[num].setAttribute('title',nam);
  }
}























GM_addStyle(".video-time { margin-bottom: 3px;} .yt-uix-simple-thumb-related > img {margin-bottom: -27px !important;} a.related-video { padding-bottom: 11px !important; margin-bottom: -11px !important; } .lsLines { opacity: 0; } .lsLines:hover { opacity: .6; } .channels-browse-content-grid .channels-content-item { height: 167px } .yt-thumb-default-288 + span + button + div > .lsLines { background-size: 288px 4px; } .yt-thumb-default-194 + span + button + div > .lsLines { background-size: 194px 4px; } .yt-thumb-default-185 + span + button + div > .lsLines, .yt-thumb-feed-185 + span + span + div .lsLines { background-size: 185px 4px; } .yt-thumb-default-160 + img + span + div > .lsLines { background-size: 160px 4px; } .yt-thumb-default-40 + span + span + span + span + div .lsLines { background-size: 157px 4px; } .yt-thumb-default-106 + span + button + div > .lsLines { background-size: 106px 4px; } .yt-thumb-default-138 + span + button + div > .lsLines { background-size: 138px 4px; } .yt-thumb-default-120 + span + button + div > .lsLines, .yt-thumb-default-224 + span + div > .lsLines { background-size: 120px 4px; } .yt-thumb-default-76 + span + span + span + div .lsLines { background-size: 76px 4px; } .yt-thumb-default-64 + div > .lsLines { background-size: 64px 4px; } .feed-item-thumb.watched .ux-thumb-wrap {opacity: 1 !important;} .ux-thumb {background-color: white !important;} .feed-item-thumb.watched .ux-thumb-wrap img {opacity: .4 !important;} .feed-item-thumb.watched .ux-thumb-wrap img:hover {opacity: 1 !important;} .feed-thumb-watched {opacity: .5 !important;} .video-response .video-extras-sparkbarks {width: 26% !important;} .video-extras-sparkbar-likes {border-right: 0px !important}");
var loaded = {};
var containerName="yt-thumb-default";
var rightnow = new Date().getTime();
loaded[""] = true;
window.addEventListener (
  'scroll',
  function (e) {
    iterateClips(document.getElementsByClassName('yt-thumb-default'));
    iterateClips(document.getElementsByClassName('video-time'));
  },
  false);
var wm = document.getElementById("watch-more-related");
if (wm) {
  // On "Load More Suggestions" button click
  wm.addEventListener (
    'DOMNodeInserted',
    function (e) {
      iterateClips(e.target.getElementsByClassName('yt-thumb-default'));
      iterateClips(e.target.getElementsByClassName('video-time'));
    },
    false);
}
// starts here 
iterateClips(document.getElementsByClassName('yt-thumb-default'));
iterateClips(document.getElementsByClassName('video-time'));
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
  // Added "yt:statistics" and "published" for the view count and date. It barely increases the download.
      url: "http://gdata.youtube.com/feeds/api/videos/" + id + "?v=2&alt=json&fields=yt:rating,yt:statistics,published",
      onload: function(response) 
      {
        if (response.status == 200) 
        {
          var rsp = eval( '(' + response.responseText + ')' );
          if (rsp && rsp.entry && rsp.entry.published && rsp.entry.yt$statistics && rsp.entry.yt$rating)
            attachBar(box, String(rsp.entry.published.$t),
                           parseInt(rsp.entry.yt$statistics.viewCount),
                           parseInt(rsp.entry.yt$rating.numLikes),
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
function attachBar(videoThumb, published, views, likes, dislikes) 
{
  var paused;
  var waitStyle = "";
  var likeStrength = 0;
  var total = likes + dislikes; 
  if (total > 0)
  {
// Check if YouTube's counter is paused at around 301 (it's a method they use to prevent spam)
    if (!(views < total) && (views >= 301) && (views <= 320))
    {  
      var daysAgo = (rightnow - new Date(published).getTime())/1000/60/60/24;
      if (daysAgo <= .5) 
      {
        var paused = true; 
        var likeStrengthMsg = ", View Counter Off";
      // Change the color of the stripes in the pause bar to indicate the ratio of likes and views
      // The stripes go from grey to blue as the number of likes increases
        if (likes>dislikes)
        {    
          if (likes<views/3) {var pauseLikes = (likes*3)/views;} else {var pauseLikes = 1;}
        }    
        else
        {
          var pauseLikes = 0;
        }
        var pauseR = ("00"+ Math.round(102-pauseLikes*102).toString(16)).substr(-2);
        var pauseG = ("00"+ Math.round(102-pauseLikes*34).toString(16)).substr(-2);
        var pauseB = ("00"+ Math.round(102+pauseLikes*119).toString(16)).substr(-2);    
        var waitStyle = "border-bottom: 4px dashed #"+pauseR+""+pauseG+""+pauseB+"; height: 0px;";
      }
    }
// Since sometimes the view < total when the counter isn't being paused, this gives a more vague message
    if (views < total)
    { 
      var likeStrengthMsg = ", View Count Incorrect"; 
      var waitStyle = "border-bottom: 4px dashed #0044dd; height: 0px;";
    }  
    if (waitStyle == "")
// Setting up the "Like Strength" bar
    {
      if (views < 2000)
      {
      // Videos with under 2000 views will have their view counts altered for the ratio
      // y = x + x * ((3000-x)/2000)  This is a curve where 200=500, 500=1000 and 2000=3000
        var viewLikeRatio2k = Math.round( (views + views * ((3000-views)/2000)) / (likes) );
      // Videos under 255 views get their ratio tweaked further, so 1 view 1 like isn't solid blue
        if (views < 255) 
        { var viewLikeRatio = Math.round( viewLikeRatio2k / (views/255) ); } 
          else
        { var viewLikeRatio = viewLikeRatio2k; }
      }
        else
      {      
      // Over 2000 views, the view count for the ratio is on a 1/3 line. (2000 is still 3000)
        var viewLikeRatio = Math.round( (views+7000) / 3 / (likes) );
      }
    // 255 'views' per like is the minimum Like Strength rating. Below 1 means there's an error
      if ((viewLikeRatio < 1) || (viewLikeRatio > 255))
      { 
        var likeStrengthMsg = "";
      }
        else 
      {
      // likeStrength is the percentage used for the blue bar and the title message
        var likeStrength = ((255-viewLikeRatio)/2.55);
      // likeStrengthLog uses a logarithmic scale for the blue bar width. 90 = 81%, 80 = 64%, 70 = 49%, etc
        var likeStrengthLog = ( likeStrength * likeStrength ) / 100;
      // likeStrengthMsg is added to the title of the div    
        var likeStrengthMsg = ", " + Math.round(likeStrength*10)/100 + " Like Strength";
      }
    }
  // Calculating the width of each section of the ratings bar
    if (likeStrengthLog > 0)
    {
      if (likeStrengthLog < (100*likes)/total)
      {
        var likeStrengthBar = likeStrengthLog;
        var purpleBar = 0;
        var likesBar = (100*likes)/total - likeStrengthLog;
        var dislikesBar = dislikes;
      }
      if (likeStrengthLog > (100*likes)/total)
      {
        var likeStrengthBar = 100 - (100*dislikes)/total;
        var purpleBar = likeStrengthLog - (100*likes)/total;
        var likesBar = 0;
        var dislikesBar = (100*dislikes)/total - purpleBar;
      }
    }
    else
    {
      var likeStrengthBar = 0;
      var purpleBar = 0;
      var likesBar = (100*likes)/total;
      var dislikesBar = dislikes;
    }
    var ratingDiv = document.createElement("div");
    ratingDiv.setAttribute("class", "video-extras-sparkbarks ratingContainer");
      ratingDiv.setAttribute("style", "position: relative; height: 4px" ); //top: 1px; padding-bottom: 11px; margin-bottom: -7px;" );
    ratingDiv.setAttribute("title",  likes + " Likes, " + dislikes + " Dislikes" + likeStrengthMsg);      
    var likeStrengthDiv = document.createElement("div");
    likeStrengthDiv.setAttribute("class", "video-extras-sparkbar-likes likeStrengthBar");
    likeStrengthDiv.setAttribute("id", "likeStrength");
    likeStrengthDiv.setAttribute("style", "height: 4px; width: " + likeStrengthBar + "%; background-color: #04d;"); 
    var purpleDiv = document.createElement("div");
    purpleDiv.setAttribute("class", "video-extras-sparkbar-likes purpleBar");
    purpleDiv.setAttribute("style", "height: 4px; width: " + purpleBar + "%; background-color: #84d;");
    var likesDiv = document.createElement("div");
    likesDiv.setAttribute("class", "video-extras-sparkbar-likes likesBar"); 
    if (waitStyle != "") {likesDiv.setAttribute("class", "video-extras-sparkbar-likes likesBar waitingBar");}
    likesDiv.setAttribute("style", "height: 4px; width: "+likesBar+"%; background: #0b2;" + waitStyle); 
    var dislikesDiv = document.createElement("div");
    dislikesDiv.setAttribute("class", "video-extras-sparkbar-dislikes dislikesBar"); 
    dislikesDiv.setAttribute("style", "height: 4px; width: 100%; background: #c00; margin-bottom: -4px;");
    var lsLinesDiv = document.createElement("div");
  // lsLines is a div showing the log scale used for the blue/purple bar, shown on mouse hover
    lsLinesDiv.setAttribute("class", "lsLines"); 
      lsLinesDiv.setAttribute("style", "background-size: 100%; width: "+ (likeStrengthBar + purpleBar) + "%; height: 4px; padding-bottom: 0px; position: absolute; background-repeat: none; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAECAYAAAB4FpoOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAATElEQVR42mL8f4Yhk4GBYSoDA4MZAwODKRL7DAMEZGIRYyBCjhQ15KilRA819GKaYfyfXDPggIlhFAwqMBohoxEyCvABAAAAAP//AwB+MBQF1ZMikwAAAABJRU5ErkJggg==);");
    if (dislikesBar > 0) {ratingDiv.appendChild(dislikesDiv);}
    if (likeStrengthBar > 0) {ratingDiv.appendChild(likeStrengthDiv);}
    if (purpleBar > 0) {ratingDiv.appendChild(purpleDiv);}
    if (likesBar > 0) {ratingDiv.appendChild(likesDiv);}
    if ((likeStrengthBar + purpleBar) > 0) {ratingDiv.appendChild(lsLinesDiv);}
    videoThumb.parentNode.appendChild(ratingDiv);
    //videoThumb.appendChild(ratingDiv);
    // fixing time element position to be inside of the thumb image
    var spans = videoThumb.parentNode.getElementsByTagName("span");
    for (var i=0; i<spans.length; ++i )
      if (spans[i].getAttribute("class")=="video-time")
      {
        spans[i].setAttribute("class", "video-time timeMoved");  
        spans[i].style.bottom = "4px";
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
