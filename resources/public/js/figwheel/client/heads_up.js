// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__35423__auto__ = [];
var len__35416__auto___41250 = arguments.length;
var i__35417__auto___41251 = (0);
while(true){
if((i__35417__auto___41251 < len__35416__auto___41250)){
args__35423__auto__.push((arguments[i__35417__auto___41251]));

var G__41252 = (i__35417__auto___41251 + (1));
i__35417__auto___41251 = G__41252;
continue;
} else {
}
break;
}

var argseq__35424__auto__ = ((((2) < args__35423__auto__.length))?(new cljs.core.IndexedSeq(args__35423__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35424__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__41242_41253 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__41243_41254 = null;
var count__41244_41255 = (0);
var i__41245_41256 = (0);
while(true){
if((i__41245_41256 < count__41244_41255)){
var k_41257 = cljs.core._nth.call(null,chunk__41243_41254,i__41245_41256);
e.setAttribute(cljs.core.name.call(null,k_41257),cljs.core.get.call(null,attrs,k_41257));

var G__41258 = seq__41242_41253;
var G__41259 = chunk__41243_41254;
var G__41260 = count__41244_41255;
var G__41261 = (i__41245_41256 + (1));
seq__41242_41253 = G__41258;
chunk__41243_41254 = G__41259;
count__41244_41255 = G__41260;
i__41245_41256 = G__41261;
continue;
} else {
var temp__4657__auto___41262 = cljs.core.seq.call(null,seq__41242_41253);
if(temp__4657__auto___41262){
var seq__41242_41263__$1 = temp__4657__auto___41262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41242_41263__$1)){
var c__35086__auto___41264 = cljs.core.chunk_first.call(null,seq__41242_41263__$1);
var G__41265 = cljs.core.chunk_rest.call(null,seq__41242_41263__$1);
var G__41266 = c__35086__auto___41264;
var G__41267 = cljs.core.count.call(null,c__35086__auto___41264);
var G__41268 = (0);
seq__41242_41253 = G__41265;
chunk__41243_41254 = G__41266;
count__41244_41255 = G__41267;
i__41245_41256 = G__41268;
continue;
} else {
var k_41269 = cljs.core.first.call(null,seq__41242_41263__$1);
e.setAttribute(cljs.core.name.call(null,k_41269),cljs.core.get.call(null,attrs,k_41269));

var G__41270 = cljs.core.next.call(null,seq__41242_41263__$1);
var G__41271 = null;
var G__41272 = (0);
var G__41273 = (0);
seq__41242_41253 = G__41270;
chunk__41243_41254 = G__41271;
count__41244_41255 = G__41272;
i__41245_41256 = G__41273;
continue;
}
} else {
}
}
break;
}

var seq__41246_41274 = cljs.core.seq.call(null,children);
var chunk__41247_41275 = null;
var count__41248_41276 = (0);
var i__41249_41277 = (0);
while(true){
if((i__41249_41277 < count__41248_41276)){
var ch_41278 = cljs.core._nth.call(null,chunk__41247_41275,i__41249_41277);
e.appendChild(ch_41278);

var G__41279 = seq__41246_41274;
var G__41280 = chunk__41247_41275;
var G__41281 = count__41248_41276;
var G__41282 = (i__41249_41277 + (1));
seq__41246_41274 = G__41279;
chunk__41247_41275 = G__41280;
count__41248_41276 = G__41281;
i__41249_41277 = G__41282;
continue;
} else {
var temp__4657__auto___41283 = cljs.core.seq.call(null,seq__41246_41274);
if(temp__4657__auto___41283){
var seq__41246_41284__$1 = temp__4657__auto___41283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41246_41284__$1)){
var c__35086__auto___41285 = cljs.core.chunk_first.call(null,seq__41246_41284__$1);
var G__41286 = cljs.core.chunk_rest.call(null,seq__41246_41284__$1);
var G__41287 = c__35086__auto___41285;
var G__41288 = cljs.core.count.call(null,c__35086__auto___41285);
var G__41289 = (0);
seq__41246_41274 = G__41286;
chunk__41247_41275 = G__41287;
count__41248_41276 = G__41288;
i__41249_41277 = G__41289;
continue;
} else {
var ch_41290 = cljs.core.first.call(null,seq__41246_41284__$1);
e.appendChild(ch_41290);

var G__41291 = cljs.core.next.call(null,seq__41246_41284__$1);
var G__41292 = null;
var G__41293 = (0);
var G__41294 = (0);
seq__41246_41274 = G__41291;
chunk__41247_41275 = G__41292;
count__41248_41276 = G__41293;
i__41249_41277 = G__41294;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq41239){
var G__41240 = cljs.core.first.call(null,seq41239);
var seq41239__$1 = cljs.core.next.call(null,seq41239);
var G__41241 = cljs.core.first.call(null,seq41239__$1);
var seq41239__$2 = cljs.core.next.call(null,seq41239__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__41240,G__41241,seq41239__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__35202__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35203__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35204__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35205__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35206__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__35202__auto__,prefer_table__35203__auto__,method_cache__35204__auto__,cached_hierarchy__35205__auto__,hierarchy__35206__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__35202__auto__,prefer_table__35203__auto__,method_cache__35204__auto__,cached_hierarchy__35205__auto__,hierarchy__35206__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35206__auto__,method_table__35202__auto__,prefer_table__35203__auto__,method_cache__35204__auto__,cached_hierarchy__35205__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_41295 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_41295.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_41295.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_41295.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_41295);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__41296,st_map){
var map__41297 = p__41296;
var map__41297__$1 = ((((!((map__41297 == null)))?((((map__41297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41297):map__41297);
var container_el = cljs.core.get.call(null,map__41297__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__41297,map__41297__$1,container_el){
return (function (p__41299){
var vec__41300 = p__41299;
var k = cljs.core.nth.call(null,vec__41300,(0),null);
var v = cljs.core.nth.call(null,vec__41300,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__41297,map__41297__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__41303,dom_str){
var map__41304 = p__41303;
var map__41304__$1 = ((((!((map__41304 == null)))?((((map__41304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41304):map__41304);
var c = map__41304__$1;
var content_area_el = cljs.core.get.call(null,map__41304__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__41306){
var map__41307 = p__41306;
var map__41307__$1 = ((((!((map__41307 == null)))?((((map__41307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41307):map__41307);
var content_area_el = cljs.core.get.call(null,map__41307__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto__){
return (function (state_41324){
var state_val_41325 = (state_41324[(1)]);
if((state_val_41325 === (1))){
var inst_41309 = (state_41324[(7)]);
var inst_41309__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_41310 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_41311 = ["10px","10px","100%","68px","1.0"];
var inst_41312 = cljs.core.PersistentHashMap.fromArrays(inst_41310,inst_41311);
var inst_41313 = cljs.core.merge.call(null,inst_41312,style);
var inst_41314 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41309__$1,inst_41313);
var inst_41315 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_41309__$1,msg);
var inst_41316 = cljs.core.async.timeout.call(null,(300));
var state_41324__$1 = (function (){var statearr_41326 = state_41324;
(statearr_41326[(8)] = inst_41315);

(statearr_41326[(9)] = inst_41314);

(statearr_41326[(7)] = inst_41309__$1);

return statearr_41326;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41324__$1,(2),inst_41316);
} else {
if((state_val_41325 === (2))){
var inst_41309 = (state_41324[(7)]);
var inst_41318 = (state_41324[(2)]);
var inst_41319 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_41320 = ["auto"];
var inst_41321 = cljs.core.PersistentHashMap.fromArrays(inst_41319,inst_41320);
var inst_41322 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41309,inst_41321);
var state_41324__$1 = (function (){var statearr_41327 = state_41324;
(statearr_41327[(10)] = inst_41318);

return statearr_41327;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41324__$1,inst_41322);
} else {
return null;
}
}
});})(c__37476__auto__))
;
return ((function (switch__37388__auto__,c__37476__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__37389__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__37389__auto____0 = (function (){
var statearr_41328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41328[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__37389__auto__);

(statearr_41328[(1)] = (1));

return statearr_41328;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__37389__auto____1 = (function (state_41324){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_41324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e41329){if((e41329 instanceof Object)){
var ex__37392__auto__ = e41329;
var statearr_41330_41332 = state_41324;
(statearr_41330_41332[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41333 = state_41324;
state_41324 = G__41333;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__37389__auto__ = function(state_41324){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__37389__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__37389__auto____1.call(this,state_41324);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__37389__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__37389__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_41331 = f__37477__auto__.call(null);
(statearr_41331[(6)] = c__37476__auto__);

return statearr_41331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__41335 = arguments.length;
switch (G__41335) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__41337){
var map__41338 = p__41337;
var map__41338__$1 = ((((!((map__41338 == null)))?((((map__41338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41338):map__41338);
var file = cljs.core.get.call(null,map__41338__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41338__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41338__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__34247__auto__ = file;
if(cljs.core.truth_(or__34247__auto__)){
return or__34247__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__41340){
var vec__41341 = p__41340;
var typ = cljs.core.nth.call(null,vec__41341,(0),null);
var line_number = cljs.core.nth.call(null,vec__41341,(1),null);
var line = cljs.core.nth.call(null,vec__41341,(2),null);
var pred__41344 = cljs.core._EQ_;
var expr__41345 = typ;
if(cljs.core.truth_(pred__41344.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__41345))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__41344.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__41345))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__41344.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__41345))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__41347_SHARP_){
return cljs.core.update_in.call(null,p1__41347_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__41348_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__41348_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__41351){
var map__41352 = p__41351;
var map__41352__$1 = ((((!((map__41352 == null)))?((((map__41352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41352):map__41352);
var exception = map__41352__$1;
var message = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__34235__auto__ = file;
if(cljs.core.truth_(and__34235__auto__)){
return line;
} else {
return and__34235__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__41352,map__41352__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__41349_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41349_SHARP_),"</div>"].join('');
});})(last_message,map__41352,map__41352__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__41352,map__41352__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__41350_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__41350_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__41350_SHARP_)))].join('');
});})(last_message,map__41352,map__41352__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__41354){
var map__41355 = p__41354;
var map__41355__$1 = ((((!((map__41355 == null)))?((((map__41355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41355):map__41355);
var file = cljs.core.get.call(null,map__41355__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41355__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41355__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__41358 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__41358__$1 = ((((!((map__41358 == null)))?((((map__41358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41358):map__41358);
var head = cljs.core.get.call(null,map__41358__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__41358__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__41358__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__41358__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__41358__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41358__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41358__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__41361){
var map__41362 = p__41361;
var map__41362__$1 = ((((!((map__41362 == null)))?((((map__41362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41362):map__41362);
var warning_data = map__41362__$1;
var file = cljs.core.get.call(null,map__41362__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41362__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41362__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__41362__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__41362__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__34235__auto__ = file;
if(cljs.core.truth_(and__34235__auto__)){
return line;
} else {
return and__34235__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__41362,map__41362__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__41360_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41360_SHARP_),"</div>"].join('');
});})(last_message,map__41362,map__41362__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__41364 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__41364__$1 = ((((!((map__41364 == null)))?((((map__41364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41364):map__41364);
var head = cljs.core.get.call(null,map__41364__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__41364__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__41364__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__41364__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__41364__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41364__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41364__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__41366){
var map__41367 = p__41366;
var map__41367__$1 = ((((!((map__41367 == null)))?((((map__41367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41367.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41367):map__41367);
var warning_data = map__41367__$1;
var message = cljs.core.get.call(null,map__41367__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__41367__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41367__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41367__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__41369 = message;
var G__41369__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41369)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__41369);
var G__41369__$2 = (cljs.core.truth_((function (){var and__34235__auto__ = line;
if(cljs.core.truth_(and__34235__auto__)){
return column;
} else {
return and__34235__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41369__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__41369__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41369__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__41369__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__41370){
var map__41371 = p__41370;
var map__41371__$1 = ((((!((map__41371 == null)))?((((map__41371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41371):map__41371);
var warning_data = map__41371__$1;
var message = cljs.core.get.call(null,map__41371__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__41371__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41371__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41371__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__41373 = figwheel.client.heads_up.ensure_container.call(null);
var map__41373__$1 = ((((!((map__41373 == null)))?((((map__41373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41373):map__41373);
var content_area_el = cljs.core.get.call(null,map__41373__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto__){
return (function (state_41392){
var state_val_41393 = (state_41392[(1)]);
if((state_val_41393 === (1))){
var inst_41375 = (state_41392[(7)]);
var inst_41375__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_41376 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_41377 = ["0.0"];
var inst_41378 = cljs.core.PersistentHashMap.fromArrays(inst_41376,inst_41377);
var inst_41379 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41375__$1,inst_41378);
var inst_41380 = cljs.core.async.timeout.call(null,(300));
var state_41392__$1 = (function (){var statearr_41394 = state_41392;
(statearr_41394[(8)] = inst_41379);

(statearr_41394[(7)] = inst_41375__$1);

return statearr_41394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41392__$1,(2),inst_41380);
} else {
if((state_val_41393 === (2))){
var inst_41375 = (state_41392[(7)]);
var inst_41382 = (state_41392[(2)]);
var inst_41383 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_41384 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_41385 = cljs.core.PersistentHashMap.fromArrays(inst_41383,inst_41384);
var inst_41386 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41375,inst_41385);
var inst_41387 = cljs.core.async.timeout.call(null,(200));
var state_41392__$1 = (function (){var statearr_41395 = state_41392;
(statearr_41395[(9)] = inst_41382);

(statearr_41395[(10)] = inst_41386);

return statearr_41395;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41392__$1,(3),inst_41387);
} else {
if((state_val_41393 === (3))){
var inst_41375 = (state_41392[(7)]);
var inst_41389 = (state_41392[(2)]);
var inst_41390 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_41375,"");
var state_41392__$1 = (function (){var statearr_41396 = state_41392;
(statearr_41396[(11)] = inst_41389);

return statearr_41396;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41392__$1,inst_41390);
} else {
return null;
}
}
}
});})(c__37476__auto__))
;
return ((function (switch__37388__auto__,c__37476__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__37389__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__37389__auto____0 = (function (){
var statearr_41397 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41397[(0)] = figwheel$client$heads_up$clear_$_state_machine__37389__auto__);

(statearr_41397[(1)] = (1));

return statearr_41397;
});
var figwheel$client$heads_up$clear_$_state_machine__37389__auto____1 = (function (state_41392){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_41392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e41398){if((e41398 instanceof Object)){
var ex__37392__auto__ = e41398;
var statearr_41399_41401 = state_41392;
(statearr_41399_41401[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41402 = state_41392;
state_41392 = G__41402;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__37389__auto__ = function(state_41392){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__37389__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__37389__auto____1.call(this,state_41392);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__37389__auto____0;
figwheel$client$heads_up$clear_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__37389__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_41400 = f__37477__auto__.call(null);
(statearr_41400[(6)] = c__37476__auto__);

return statearr_41400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto__){
return (function (state_41413){
var state_val_41414 = (state_41413[(1)]);
if((state_val_41414 === (1))){
var inst_41403 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_41413__$1 = state_41413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41413__$1,(2),inst_41403);
} else {
if((state_val_41414 === (2))){
var inst_41405 = (state_41413[(2)]);
var inst_41406 = cljs.core.async.timeout.call(null,(400));
var state_41413__$1 = (function (){var statearr_41415 = state_41413;
(statearr_41415[(7)] = inst_41405);

return statearr_41415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41413__$1,(3),inst_41406);
} else {
if((state_val_41414 === (3))){
var inst_41408 = (state_41413[(2)]);
var inst_41409 = figwheel.client.heads_up.clear.call(null);
var state_41413__$1 = (function (){var statearr_41416 = state_41413;
(statearr_41416[(8)] = inst_41408);

return statearr_41416;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41413__$1,(4),inst_41409);
} else {
if((state_val_41414 === (4))){
var inst_41411 = (state_41413[(2)]);
var state_41413__$1 = state_41413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41413__$1,inst_41411);
} else {
return null;
}
}
}
}
});})(c__37476__auto__))
;
return ((function (switch__37388__auto__,c__37476__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__37389__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__37389__auto____0 = (function (){
var statearr_41417 = [null,null,null,null,null,null,null,null,null];
(statearr_41417[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__37389__auto__);

(statearr_41417[(1)] = (1));

return statearr_41417;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__37389__auto____1 = (function (state_41413){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_41413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e41418){if((e41418 instanceof Object)){
var ex__37392__auto__ = e41418;
var statearr_41419_41421 = state_41413;
(statearr_41419_41421[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41422 = state_41413;
state_41413 = G__41422;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__37389__auto__ = function(state_41413){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__37389__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__37389__auto____1.call(this,state_41413);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__37389__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__37389__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_41420 = f__37477__auto__.call(null);
(statearr_41420[(6)] = c__37476__auto__);

return statearr_41420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1530402587224
