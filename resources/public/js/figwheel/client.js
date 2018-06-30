// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e37016){if((e37016 instanceof Error)){
var e = e37016;
return "Error: Unable to stringify";
} else {
throw e37016;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37019 = arguments.length;
switch (G__37019) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37017_SHARP_){
if(typeof p1__37017_SHARP_ === 'string'){
return p1__37017_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37017_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29499__auto__ = [];
var len__29492__auto___37022 = arguments.length;
var i__29493__auto___37023 = (0);
while(true){
if((i__29493__auto___37023 < len__29492__auto___37022)){
args__29499__auto__.push((arguments[i__29493__auto___37023]));

var G__37024 = (i__29493__auto___37023 + (1));
i__29493__auto___37023 = G__37024;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37021){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37021));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29499__auto__ = [];
var len__29492__auto___37026 = arguments.length;
var i__29493__auto___37027 = (0);
while(true){
if((i__29493__auto___37027 < len__29492__auto___37026)){
args__29499__auto__.push((arguments[i__29493__auto___37027]));

var G__37028 = (i__29493__auto___37027 + (1));
i__29493__auto___37027 = G__37028;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37025){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37025));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37029){
var map__37030 = p__37029;
var map__37030__$1 = ((((!((map__37030 == null)))?((((map__37030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37030):map__37030);
var message = cljs.core.get.call(null,map__37030__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37030__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28323__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28311__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28311__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28311__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32091__auto___37109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___37109,ch){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___37109,ch){
return (function (state_37081){
var state_val_37082 = (state_37081[(1)]);
if((state_val_37082 === (7))){
var inst_37077 = (state_37081[(2)]);
var state_37081__$1 = state_37081;
var statearr_37083_37110 = state_37081__$1;
(statearr_37083_37110[(2)] = inst_37077);

(statearr_37083_37110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (1))){
var state_37081__$1 = state_37081;
var statearr_37084_37111 = state_37081__$1;
(statearr_37084_37111[(2)] = null);

(statearr_37084_37111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (4))){
var inst_37034 = (state_37081[(7)]);
var inst_37034__$1 = (state_37081[(2)]);
var state_37081__$1 = (function (){var statearr_37085 = state_37081;
(statearr_37085[(7)] = inst_37034__$1);

return statearr_37085;
})();
if(cljs.core.truth_(inst_37034__$1)){
var statearr_37086_37112 = state_37081__$1;
(statearr_37086_37112[(1)] = (5));

} else {
var statearr_37087_37113 = state_37081__$1;
(statearr_37087_37113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (15))){
var inst_37041 = (state_37081[(8)]);
var inst_37056 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37041);
var inst_37057 = cljs.core.first.call(null,inst_37056);
var inst_37058 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37057);
var inst_37059 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37058)].join('');
var inst_37060 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37059);
var state_37081__$1 = state_37081;
var statearr_37088_37114 = state_37081__$1;
(statearr_37088_37114[(2)] = inst_37060);

(statearr_37088_37114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (13))){
var inst_37065 = (state_37081[(2)]);
var state_37081__$1 = state_37081;
var statearr_37089_37115 = state_37081__$1;
(statearr_37089_37115[(2)] = inst_37065);

(statearr_37089_37115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (6))){
var state_37081__$1 = state_37081;
var statearr_37090_37116 = state_37081__$1;
(statearr_37090_37116[(2)] = null);

(statearr_37090_37116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (17))){
var inst_37063 = (state_37081[(2)]);
var state_37081__$1 = state_37081;
var statearr_37091_37117 = state_37081__$1;
(statearr_37091_37117[(2)] = inst_37063);

(statearr_37091_37117[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (3))){
var inst_37079 = (state_37081[(2)]);
var state_37081__$1 = state_37081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37081__$1,inst_37079);
} else {
if((state_val_37082 === (12))){
var inst_37040 = (state_37081[(9)]);
var inst_37054 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37040,opts);
var state_37081__$1 = state_37081;
if(cljs.core.truth_(inst_37054)){
var statearr_37092_37118 = state_37081__$1;
(statearr_37092_37118[(1)] = (15));

} else {
var statearr_37093_37119 = state_37081__$1;
(statearr_37093_37119[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (2))){
var state_37081__$1 = state_37081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37081__$1,(4),ch);
} else {
if((state_val_37082 === (11))){
var inst_37041 = (state_37081[(8)]);
var inst_37046 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37047 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37041);
var inst_37048 = cljs.core.async.timeout.call(null,(1000));
var inst_37049 = [inst_37047,inst_37048];
var inst_37050 = (new cljs.core.PersistentVector(null,2,(5),inst_37046,inst_37049,null));
var state_37081__$1 = state_37081;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37081__$1,(14),inst_37050);
} else {
if((state_val_37082 === (9))){
var inst_37041 = (state_37081[(8)]);
var inst_37067 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37068 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37041);
var inst_37069 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37068);
var inst_37070 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37069)].join('');
var inst_37071 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37070);
var state_37081__$1 = (function (){var statearr_37094 = state_37081;
(statearr_37094[(10)] = inst_37067);

return statearr_37094;
})();
var statearr_37095_37120 = state_37081__$1;
(statearr_37095_37120[(2)] = inst_37071);

(statearr_37095_37120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (5))){
var inst_37034 = (state_37081[(7)]);
var inst_37036 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37037 = (new cljs.core.PersistentArrayMap(null,2,inst_37036,null));
var inst_37038 = (new cljs.core.PersistentHashSet(null,inst_37037,null));
var inst_37039 = figwheel.client.focus_msgs.call(null,inst_37038,inst_37034);
var inst_37040 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37039);
var inst_37041 = cljs.core.first.call(null,inst_37039);
var inst_37042 = figwheel.client.autoload_QMARK_.call(null);
var state_37081__$1 = (function (){var statearr_37096 = state_37081;
(statearr_37096[(8)] = inst_37041);

(statearr_37096[(9)] = inst_37040);

return statearr_37096;
})();
if(cljs.core.truth_(inst_37042)){
var statearr_37097_37121 = state_37081__$1;
(statearr_37097_37121[(1)] = (8));

} else {
var statearr_37098_37122 = state_37081__$1;
(statearr_37098_37122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (14))){
var inst_37052 = (state_37081[(2)]);
var state_37081__$1 = state_37081;
var statearr_37099_37123 = state_37081__$1;
(statearr_37099_37123[(2)] = inst_37052);

(statearr_37099_37123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (16))){
var state_37081__$1 = state_37081;
var statearr_37100_37124 = state_37081__$1;
(statearr_37100_37124[(2)] = null);

(statearr_37100_37124[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (10))){
var inst_37073 = (state_37081[(2)]);
var state_37081__$1 = (function (){var statearr_37101 = state_37081;
(statearr_37101[(11)] = inst_37073);

return statearr_37101;
})();
var statearr_37102_37125 = state_37081__$1;
(statearr_37102_37125[(2)] = null);

(statearr_37102_37125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37082 === (8))){
var inst_37040 = (state_37081[(9)]);
var inst_37044 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37040,opts);
var state_37081__$1 = state_37081;
if(cljs.core.truth_(inst_37044)){
var statearr_37103_37126 = state_37081__$1;
(statearr_37103_37126[(1)] = (11));

} else {
var statearr_37104_37127 = state_37081__$1;
(statearr_37104_37127[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32091__auto___37109,ch))
;
return ((function (switch__32003__auto__,c__32091__auto___37109,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32004__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32004__auto____0 = (function (){
var statearr_37105 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37105[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32004__auto__);

(statearr_37105[(1)] = (1));

return statearr_37105;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32004__auto____1 = (function (state_37081){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_37081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e37106){if((e37106 instanceof Object)){
var ex__32007__auto__ = e37106;
var statearr_37107_37128 = state_37081;
(statearr_37107_37128[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37129 = state_37081;
state_37081 = G__37129;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32004__auto__ = function(state_37081){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32004__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32004__auto____1.call(this,state_37081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32004__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32004__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___37109,ch))
})();
var state__32093__auto__ = (function (){var statearr_37108 = f__32092__auto__.call(null);
(statearr_37108[(6)] = c__32091__auto___37109);

return statearr_37108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___37109,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37130_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37130_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37132 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37132){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37131){if((e37131 instanceof Error)){
var e = e37131;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37132], null));
} else {
var e = e37131;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37132))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37133){
var map__37134 = p__37133;
var map__37134__$1 = ((((!((map__37134 == null)))?((((map__37134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37134):map__37134);
var opts = map__37134__$1;
var build_id = cljs.core.get.call(null,map__37134__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37134,map__37134__$1,opts,build_id){
return (function (p__37136){
var vec__37137 = p__37136;
var seq__37138 = cljs.core.seq.call(null,vec__37137);
var first__37139 = cljs.core.first.call(null,seq__37138);
var seq__37138__$1 = cljs.core.next.call(null,seq__37138);
var map__37140 = first__37139;
var map__37140__$1 = ((((!((map__37140 == null)))?((((map__37140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37140):map__37140);
var msg = map__37140__$1;
var msg_name = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37138__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37137,seq__37138,first__37139,seq__37138__$1,map__37140,map__37140__$1,msg,msg_name,_,map__37134,map__37134__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37137,seq__37138,first__37139,seq__37138__$1,map__37140,map__37140__$1,msg,msg_name,_,map__37134,map__37134__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37134,map__37134__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37142){
var vec__37143 = p__37142;
var seq__37144 = cljs.core.seq.call(null,vec__37143);
var first__37145 = cljs.core.first.call(null,seq__37144);
var seq__37144__$1 = cljs.core.next.call(null,seq__37144);
var map__37146 = first__37145;
var map__37146__$1 = ((((!((map__37146 == null)))?((((map__37146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37146):map__37146);
var msg = map__37146__$1;
var msg_name = cljs.core.get.call(null,map__37146__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37144__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37148){
var map__37149 = p__37148;
var map__37149__$1 = ((((!((map__37149 == null)))?((((map__37149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37149):map__37149);
var on_compile_warning = cljs.core.get.call(null,map__37149__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37149__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37149,map__37149__$1,on_compile_warning,on_compile_fail){
return (function (p__37151){
var vec__37152 = p__37151;
var seq__37153 = cljs.core.seq.call(null,vec__37152);
var first__37154 = cljs.core.first.call(null,seq__37153);
var seq__37153__$1 = cljs.core.next.call(null,seq__37153);
var map__37155 = first__37154;
var map__37155__$1 = ((((!((map__37155 == null)))?((((map__37155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37155):map__37155);
var msg = map__37155__$1;
var msg_name = cljs.core.get.call(null,map__37155__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37153__$1;
var pred__37157 = cljs.core._EQ_;
var expr__37158 = msg_name;
if(cljs.core.truth_(pred__37157.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37158))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37157.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37158))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37149,map__37149__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto__,msg_hist,msg_names,msg){
return (function (state_37247){
var state_val_37248 = (state_37247[(1)]);
if((state_val_37248 === (7))){
var inst_37167 = (state_37247[(2)]);
var state_37247__$1 = state_37247;
if(cljs.core.truth_(inst_37167)){
var statearr_37249_37296 = state_37247__$1;
(statearr_37249_37296[(1)] = (8));

} else {
var statearr_37250_37297 = state_37247__$1;
(statearr_37250_37297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (20))){
var inst_37241 = (state_37247[(2)]);
var state_37247__$1 = state_37247;
var statearr_37251_37298 = state_37247__$1;
(statearr_37251_37298[(2)] = inst_37241);

(statearr_37251_37298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (27))){
var inst_37237 = (state_37247[(2)]);
var state_37247__$1 = state_37247;
var statearr_37252_37299 = state_37247__$1;
(statearr_37252_37299[(2)] = inst_37237);

(statearr_37252_37299[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (1))){
var inst_37160 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37247__$1 = state_37247;
if(cljs.core.truth_(inst_37160)){
var statearr_37253_37300 = state_37247__$1;
(statearr_37253_37300[(1)] = (2));

} else {
var statearr_37254_37301 = state_37247__$1;
(statearr_37254_37301[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (24))){
var inst_37239 = (state_37247[(2)]);
var state_37247__$1 = state_37247;
var statearr_37255_37302 = state_37247__$1;
(statearr_37255_37302[(2)] = inst_37239);

(statearr_37255_37302[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (4))){
var inst_37245 = (state_37247[(2)]);
var state_37247__$1 = state_37247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37247__$1,inst_37245);
} else {
if((state_val_37248 === (15))){
var inst_37243 = (state_37247[(2)]);
var state_37247__$1 = state_37247;
var statearr_37256_37303 = state_37247__$1;
(statearr_37256_37303[(2)] = inst_37243);

(statearr_37256_37303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (21))){
var inst_37196 = (state_37247[(2)]);
var inst_37197 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37198 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37197);
var state_37247__$1 = (function (){var statearr_37257 = state_37247;
(statearr_37257[(7)] = inst_37196);

return statearr_37257;
})();
var statearr_37258_37304 = state_37247__$1;
(statearr_37258_37304[(2)] = inst_37198);

(statearr_37258_37304[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (31))){
var inst_37226 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37247__$1 = state_37247;
if(cljs.core.truth_(inst_37226)){
var statearr_37259_37305 = state_37247__$1;
(statearr_37259_37305[(1)] = (34));

} else {
var statearr_37260_37306 = state_37247__$1;
(statearr_37260_37306[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (32))){
var inst_37235 = (state_37247[(2)]);
var state_37247__$1 = state_37247;
var statearr_37261_37307 = state_37247__$1;
(statearr_37261_37307[(2)] = inst_37235);

(statearr_37261_37307[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (33))){
var inst_37222 = (state_37247[(2)]);
var inst_37223 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37224 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37223);
var state_37247__$1 = (function (){var statearr_37262 = state_37247;
(statearr_37262[(8)] = inst_37222);

return statearr_37262;
})();
var statearr_37263_37308 = state_37247__$1;
(statearr_37263_37308[(2)] = inst_37224);

(statearr_37263_37308[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (13))){
var inst_37181 = figwheel.client.heads_up.clear.call(null);
var state_37247__$1 = state_37247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37247__$1,(16),inst_37181);
} else {
if((state_val_37248 === (22))){
var inst_37202 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37203 = figwheel.client.heads_up.append_warning_message.call(null,inst_37202);
var state_37247__$1 = state_37247;
var statearr_37264_37309 = state_37247__$1;
(statearr_37264_37309[(2)] = inst_37203);

(statearr_37264_37309[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (36))){
var inst_37233 = (state_37247[(2)]);
var state_37247__$1 = state_37247;
var statearr_37265_37310 = state_37247__$1;
(statearr_37265_37310[(2)] = inst_37233);

(statearr_37265_37310[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (29))){
var inst_37213 = (state_37247[(2)]);
var inst_37214 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37215 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37214);
var state_37247__$1 = (function (){var statearr_37266 = state_37247;
(statearr_37266[(9)] = inst_37213);

return statearr_37266;
})();
var statearr_37267_37311 = state_37247__$1;
(statearr_37267_37311[(2)] = inst_37215);

(statearr_37267_37311[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (6))){
var inst_37162 = (state_37247[(10)]);
var state_37247__$1 = state_37247;
var statearr_37268_37312 = state_37247__$1;
(statearr_37268_37312[(2)] = inst_37162);

(statearr_37268_37312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (28))){
var inst_37209 = (state_37247[(2)]);
var inst_37210 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37211 = figwheel.client.heads_up.display_warning.call(null,inst_37210);
var state_37247__$1 = (function (){var statearr_37269 = state_37247;
(statearr_37269[(11)] = inst_37209);

return statearr_37269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37247__$1,(29),inst_37211);
} else {
if((state_val_37248 === (25))){
var inst_37207 = figwheel.client.heads_up.clear.call(null);
var state_37247__$1 = state_37247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37247__$1,(28),inst_37207);
} else {
if((state_val_37248 === (34))){
var inst_37228 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37247__$1 = state_37247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37247__$1,(37),inst_37228);
} else {
if((state_val_37248 === (17))){
var inst_37187 = (state_37247[(2)]);
var inst_37188 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37189 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37188);
var state_37247__$1 = (function (){var statearr_37270 = state_37247;
(statearr_37270[(12)] = inst_37187);

return statearr_37270;
})();
var statearr_37271_37313 = state_37247__$1;
(statearr_37271_37313[(2)] = inst_37189);

(statearr_37271_37313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (3))){
var inst_37179 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37247__$1 = state_37247;
if(cljs.core.truth_(inst_37179)){
var statearr_37272_37314 = state_37247__$1;
(statearr_37272_37314[(1)] = (13));

} else {
var statearr_37273_37315 = state_37247__$1;
(statearr_37273_37315[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (12))){
var inst_37175 = (state_37247[(2)]);
var state_37247__$1 = state_37247;
var statearr_37274_37316 = state_37247__$1;
(statearr_37274_37316[(2)] = inst_37175);

(statearr_37274_37316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (2))){
var inst_37162 = (state_37247[(10)]);
var inst_37162__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37247__$1 = (function (){var statearr_37275 = state_37247;
(statearr_37275[(10)] = inst_37162__$1);

return statearr_37275;
})();
if(cljs.core.truth_(inst_37162__$1)){
var statearr_37276_37317 = state_37247__$1;
(statearr_37276_37317[(1)] = (5));

} else {
var statearr_37277_37318 = state_37247__$1;
(statearr_37277_37318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (23))){
var inst_37205 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37247__$1 = state_37247;
if(cljs.core.truth_(inst_37205)){
var statearr_37278_37319 = state_37247__$1;
(statearr_37278_37319[(1)] = (25));

} else {
var statearr_37279_37320 = state_37247__$1;
(statearr_37279_37320[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (35))){
var state_37247__$1 = state_37247;
var statearr_37280_37321 = state_37247__$1;
(statearr_37280_37321[(2)] = null);

(statearr_37280_37321[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (19))){
var inst_37200 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37247__$1 = state_37247;
if(cljs.core.truth_(inst_37200)){
var statearr_37281_37322 = state_37247__$1;
(statearr_37281_37322[(1)] = (22));

} else {
var statearr_37282_37323 = state_37247__$1;
(statearr_37282_37323[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (11))){
var inst_37171 = (state_37247[(2)]);
var state_37247__$1 = state_37247;
var statearr_37283_37324 = state_37247__$1;
(statearr_37283_37324[(2)] = inst_37171);

(statearr_37283_37324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (9))){
var inst_37173 = figwheel.client.heads_up.clear.call(null);
var state_37247__$1 = state_37247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37247__$1,(12),inst_37173);
} else {
if((state_val_37248 === (5))){
var inst_37164 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37247__$1 = state_37247;
var statearr_37284_37325 = state_37247__$1;
(statearr_37284_37325[(2)] = inst_37164);

(statearr_37284_37325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (14))){
var inst_37191 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37247__$1 = state_37247;
if(cljs.core.truth_(inst_37191)){
var statearr_37285_37326 = state_37247__$1;
(statearr_37285_37326[(1)] = (18));

} else {
var statearr_37286_37327 = state_37247__$1;
(statearr_37286_37327[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (26))){
var inst_37217 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37247__$1 = state_37247;
if(cljs.core.truth_(inst_37217)){
var statearr_37287_37328 = state_37247__$1;
(statearr_37287_37328[(1)] = (30));

} else {
var statearr_37288_37329 = state_37247__$1;
(statearr_37288_37329[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (16))){
var inst_37183 = (state_37247[(2)]);
var inst_37184 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37185 = figwheel.client.heads_up.display_exception.call(null,inst_37184);
var state_37247__$1 = (function (){var statearr_37289 = state_37247;
(statearr_37289[(13)] = inst_37183);

return statearr_37289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37247__$1,(17),inst_37185);
} else {
if((state_val_37248 === (30))){
var inst_37219 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37220 = figwheel.client.heads_up.display_warning.call(null,inst_37219);
var state_37247__$1 = state_37247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37247__$1,(33),inst_37220);
} else {
if((state_val_37248 === (10))){
var inst_37177 = (state_37247[(2)]);
var state_37247__$1 = state_37247;
var statearr_37290_37330 = state_37247__$1;
(statearr_37290_37330[(2)] = inst_37177);

(statearr_37290_37330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (18))){
var inst_37193 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37194 = figwheel.client.heads_up.display_exception.call(null,inst_37193);
var state_37247__$1 = state_37247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37247__$1,(21),inst_37194);
} else {
if((state_val_37248 === (37))){
var inst_37230 = (state_37247[(2)]);
var state_37247__$1 = state_37247;
var statearr_37291_37331 = state_37247__$1;
(statearr_37291_37331[(2)] = inst_37230);

(statearr_37291_37331[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37248 === (8))){
var inst_37169 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37247__$1 = state_37247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37247__$1,(11),inst_37169);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32091__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32003__auto__,c__32091__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32004__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32004__auto____0 = (function (){
var statearr_37292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37292[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32004__auto__);

(statearr_37292[(1)] = (1));

return statearr_37292;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32004__auto____1 = (function (state_37247){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_37247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e37293){if((e37293 instanceof Object)){
var ex__32007__auto__ = e37293;
var statearr_37294_37332 = state_37247;
(statearr_37294_37332[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37333 = state_37247;
state_37247 = G__37333;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32004__auto__ = function(state_37247){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32004__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32004__auto____1.call(this,state_37247);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32004__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32004__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto__,msg_hist,msg_names,msg))
})();
var state__32093__auto__ = (function (){var statearr_37295 = f__32092__auto__.call(null);
(statearr_37295[(6)] = c__32091__auto__);

return statearr_37295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto__,msg_hist,msg_names,msg))
);

return c__32091__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32091__auto___37362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto___37362,ch){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto___37362,ch){
return (function (state_37348){
var state_val_37349 = (state_37348[(1)]);
if((state_val_37349 === (1))){
var state_37348__$1 = state_37348;
var statearr_37350_37363 = state_37348__$1;
(statearr_37350_37363[(2)] = null);

(statearr_37350_37363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (2))){
var state_37348__$1 = state_37348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37348__$1,(4),ch);
} else {
if((state_val_37349 === (3))){
var inst_37346 = (state_37348[(2)]);
var state_37348__$1 = state_37348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37348__$1,inst_37346);
} else {
if((state_val_37349 === (4))){
var inst_37336 = (state_37348[(7)]);
var inst_37336__$1 = (state_37348[(2)]);
var state_37348__$1 = (function (){var statearr_37351 = state_37348;
(statearr_37351[(7)] = inst_37336__$1);

return statearr_37351;
})();
if(cljs.core.truth_(inst_37336__$1)){
var statearr_37352_37364 = state_37348__$1;
(statearr_37352_37364[(1)] = (5));

} else {
var statearr_37353_37365 = state_37348__$1;
(statearr_37353_37365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (5))){
var inst_37336 = (state_37348[(7)]);
var inst_37338 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37336);
var state_37348__$1 = state_37348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37348__$1,(8),inst_37338);
} else {
if((state_val_37349 === (6))){
var state_37348__$1 = state_37348;
var statearr_37354_37366 = state_37348__$1;
(statearr_37354_37366[(2)] = null);

(statearr_37354_37366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (7))){
var inst_37344 = (state_37348[(2)]);
var state_37348__$1 = state_37348;
var statearr_37355_37367 = state_37348__$1;
(statearr_37355_37367[(2)] = inst_37344);

(statearr_37355_37367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (8))){
var inst_37340 = (state_37348[(2)]);
var state_37348__$1 = (function (){var statearr_37356 = state_37348;
(statearr_37356[(8)] = inst_37340);

return statearr_37356;
})();
var statearr_37357_37368 = state_37348__$1;
(statearr_37357_37368[(2)] = null);

(statearr_37357_37368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__32091__auto___37362,ch))
;
return ((function (switch__32003__auto__,c__32091__auto___37362,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32004__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32004__auto____0 = (function (){
var statearr_37358 = [null,null,null,null,null,null,null,null,null];
(statearr_37358[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32004__auto__);

(statearr_37358[(1)] = (1));

return statearr_37358;
});
var figwheel$client$heads_up_plugin_$_state_machine__32004__auto____1 = (function (state_37348){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_37348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e37359){if((e37359 instanceof Object)){
var ex__32007__auto__ = e37359;
var statearr_37360_37369 = state_37348;
(statearr_37360_37369[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37370 = state_37348;
state_37348 = G__37370;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32004__auto__ = function(state_37348){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32004__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32004__auto____1.call(this,state_37348);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32004__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32004__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto___37362,ch))
})();
var state__32093__auto__ = (function (){var statearr_37361 = f__32092__auto__.call(null);
(statearr_37361[(6)] = c__32091__auto___37362);

return statearr_37361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto___37362,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto__){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto__){
return (function (state_37376){
var state_val_37377 = (state_37376[(1)]);
if((state_val_37377 === (1))){
var inst_37371 = cljs.core.async.timeout.call(null,(3000));
var state_37376__$1 = state_37376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37376__$1,(2),inst_37371);
} else {
if((state_val_37377 === (2))){
var inst_37373 = (state_37376[(2)]);
var inst_37374 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37376__$1 = (function (){var statearr_37378 = state_37376;
(statearr_37378[(7)] = inst_37373);

return statearr_37378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37376__$1,inst_37374);
} else {
return null;
}
}
});})(c__32091__auto__))
;
return ((function (switch__32003__auto__,c__32091__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32004__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32004__auto____0 = (function (){
var statearr_37379 = [null,null,null,null,null,null,null,null];
(statearr_37379[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32004__auto__);

(statearr_37379[(1)] = (1));

return statearr_37379;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32004__auto____1 = (function (state_37376){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_37376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e37380){if((e37380 instanceof Object)){
var ex__32007__auto__ = e37380;
var statearr_37381_37383 = state_37376;
(statearr_37381_37383[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37384 = state_37376;
state_37376 = G__37384;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32004__auto__ = function(state_37376){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32004__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32004__auto____1.call(this,state_37376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32004__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32004__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto__))
})();
var state__32093__auto__ = (function (){var statearr_37382 = f__32092__auto__.call(null);
(statearr_37382[(6)] = c__32091__auto__);

return statearr_37382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto__))
);

return c__32091__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32091__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__32092__auto__ = (function (){var switch__32003__auto__ = ((function (c__32091__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37391){
var state_val_37392 = (state_37391[(1)]);
if((state_val_37392 === (1))){
var inst_37385 = cljs.core.async.timeout.call(null,(2000));
var state_37391__$1 = state_37391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37391__$1,(2),inst_37385);
} else {
if((state_val_37392 === (2))){
var inst_37387 = (state_37391[(2)]);
var inst_37388 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37389 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37388);
var state_37391__$1 = (function (){var statearr_37393 = state_37391;
(statearr_37393[(7)] = inst_37387);

return statearr_37393;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37391__$1,inst_37389);
} else {
return null;
}
}
});})(c__32091__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__32003__auto__,c__32091__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32004__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32004__auto____0 = (function (){
var statearr_37394 = [null,null,null,null,null,null,null,null];
(statearr_37394[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32004__auto__);

(statearr_37394[(1)] = (1));

return statearr_37394;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32004__auto____1 = (function (state_37391){
while(true){
var ret_value__32005__auto__ = (function (){try{while(true){
var result__32006__auto__ = switch__32003__auto__.call(null,state_37391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32006__auto__;
}
break;
}
}catch (e37395){if((e37395 instanceof Object)){
var ex__32007__auto__ = e37395;
var statearr_37396_37398 = state_37391;
(statearr_37396_37398[(5)] = ex__32007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37399 = state_37391;
state_37391 = G__37399;
continue;
} else {
return ret_value__32005__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32004__auto__ = function(state_37391){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32004__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32004__auto____1.call(this,state_37391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32004__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32004__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32004__auto__;
})()
;})(switch__32003__auto__,c__32091__auto__,figwheel_version,temp__4657__auto__))
})();
var state__32093__auto__ = (function (){var statearr_37397 = f__32092__auto__.call(null);
(statearr_37397[(6)] = c__32091__auto__);

return statearr_37397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32093__auto__);
});})(c__32091__auto__,figwheel_version,temp__4657__auto__))
);

return c__32091__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37400){
var map__37401 = p__37400;
var map__37401__$1 = ((((!((map__37401 == null)))?((((map__37401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37401):map__37401);
var file = cljs.core.get.call(null,map__37401__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37401__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37401__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37403 = "";
var G__37403__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37403),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37403);
var G__37403__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37403__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37403__$1);
if(cljs.core.truth_((function (){var and__28311__auto__ = line;
if(cljs.core.truth_(and__28311__auto__)){
return column;
} else {
return and__28311__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37403__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37403__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37404){
var map__37405 = p__37404;
var map__37405__$1 = ((((!((map__37405 == null)))?((((map__37405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37405):map__37405);
var ed = map__37405__$1;
var formatted_exception = cljs.core.get.call(null,map__37405__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37405__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37405__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37407_37411 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37408_37412 = null;
var count__37409_37413 = (0);
var i__37410_37414 = (0);
while(true){
if((i__37410_37414 < count__37409_37413)){
var msg_37415 = cljs.core._nth.call(null,chunk__37408_37412,i__37410_37414);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37415);

var G__37416 = seq__37407_37411;
var G__37417 = chunk__37408_37412;
var G__37418 = count__37409_37413;
var G__37419 = (i__37410_37414 + (1));
seq__37407_37411 = G__37416;
chunk__37408_37412 = G__37417;
count__37409_37413 = G__37418;
i__37410_37414 = G__37419;
continue;
} else {
var temp__4657__auto___37420 = cljs.core.seq.call(null,seq__37407_37411);
if(temp__4657__auto___37420){
var seq__37407_37421__$1 = temp__4657__auto___37420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37407_37421__$1)){
var c__29162__auto___37422 = cljs.core.chunk_first.call(null,seq__37407_37421__$1);
var G__37423 = cljs.core.chunk_rest.call(null,seq__37407_37421__$1);
var G__37424 = c__29162__auto___37422;
var G__37425 = cljs.core.count.call(null,c__29162__auto___37422);
var G__37426 = (0);
seq__37407_37411 = G__37423;
chunk__37408_37412 = G__37424;
count__37409_37413 = G__37425;
i__37410_37414 = G__37426;
continue;
} else {
var msg_37427 = cljs.core.first.call(null,seq__37407_37421__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37427);

var G__37428 = cljs.core.next.call(null,seq__37407_37421__$1);
var G__37429 = null;
var G__37430 = (0);
var G__37431 = (0);
seq__37407_37411 = G__37428;
chunk__37408_37412 = G__37429;
count__37409_37413 = G__37430;
i__37410_37414 = G__37431;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37432){
var map__37433 = p__37432;
var map__37433__$1 = ((((!((map__37433 == null)))?((((map__37433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37433):map__37433);
var w = map__37433__$1;
var message = cljs.core.get.call(null,map__37433__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28311__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28311__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28311__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37435 = cljs.core.seq.call(null,plugins);
var chunk__37436 = null;
var count__37437 = (0);
var i__37438 = (0);
while(true){
if((i__37438 < count__37437)){
var vec__37439 = cljs.core._nth.call(null,chunk__37436,i__37438);
var k = cljs.core.nth.call(null,vec__37439,(0),null);
var plugin = cljs.core.nth.call(null,vec__37439,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37445 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37435,chunk__37436,count__37437,i__37438,pl_37445,vec__37439,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37445.call(null,msg_hist);
});})(seq__37435,chunk__37436,count__37437,i__37438,pl_37445,vec__37439,k,plugin))
);
} else {
}

var G__37446 = seq__37435;
var G__37447 = chunk__37436;
var G__37448 = count__37437;
var G__37449 = (i__37438 + (1));
seq__37435 = G__37446;
chunk__37436 = G__37447;
count__37437 = G__37448;
i__37438 = G__37449;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37435);
if(temp__4657__auto__){
var seq__37435__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37435__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__37435__$1);
var G__37450 = cljs.core.chunk_rest.call(null,seq__37435__$1);
var G__37451 = c__29162__auto__;
var G__37452 = cljs.core.count.call(null,c__29162__auto__);
var G__37453 = (0);
seq__37435 = G__37450;
chunk__37436 = G__37451;
count__37437 = G__37452;
i__37438 = G__37453;
continue;
} else {
var vec__37442 = cljs.core.first.call(null,seq__37435__$1);
var k = cljs.core.nth.call(null,vec__37442,(0),null);
var plugin = cljs.core.nth.call(null,vec__37442,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37454 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37435,chunk__37436,count__37437,i__37438,pl_37454,vec__37442,k,plugin,seq__37435__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37454.call(null,msg_hist);
});})(seq__37435,chunk__37436,count__37437,i__37438,pl_37454,vec__37442,k,plugin,seq__37435__$1,temp__4657__auto__))
);
} else {
}

var G__37455 = cljs.core.next.call(null,seq__37435__$1);
var G__37456 = null;
var G__37457 = (0);
var G__37458 = (0);
seq__37435 = G__37455;
chunk__37436 = G__37456;
count__37437 = G__37457;
i__37438 = G__37458;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37460 = arguments.length;
switch (G__37460) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37461_37466 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37462_37467 = null;
var count__37463_37468 = (0);
var i__37464_37469 = (0);
while(true){
if((i__37464_37469 < count__37463_37468)){
var msg_37470 = cljs.core._nth.call(null,chunk__37462_37467,i__37464_37469);
figwheel.client.socket.handle_incoming_message.call(null,msg_37470);

var G__37471 = seq__37461_37466;
var G__37472 = chunk__37462_37467;
var G__37473 = count__37463_37468;
var G__37474 = (i__37464_37469 + (1));
seq__37461_37466 = G__37471;
chunk__37462_37467 = G__37472;
count__37463_37468 = G__37473;
i__37464_37469 = G__37474;
continue;
} else {
var temp__4657__auto___37475 = cljs.core.seq.call(null,seq__37461_37466);
if(temp__4657__auto___37475){
var seq__37461_37476__$1 = temp__4657__auto___37475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37461_37476__$1)){
var c__29162__auto___37477 = cljs.core.chunk_first.call(null,seq__37461_37476__$1);
var G__37478 = cljs.core.chunk_rest.call(null,seq__37461_37476__$1);
var G__37479 = c__29162__auto___37477;
var G__37480 = cljs.core.count.call(null,c__29162__auto___37477);
var G__37481 = (0);
seq__37461_37466 = G__37478;
chunk__37462_37467 = G__37479;
count__37463_37468 = G__37480;
i__37464_37469 = G__37481;
continue;
} else {
var msg_37482 = cljs.core.first.call(null,seq__37461_37476__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37482);

var G__37483 = cljs.core.next.call(null,seq__37461_37476__$1);
var G__37484 = null;
var G__37485 = (0);
var G__37486 = (0);
seq__37461_37466 = G__37483;
chunk__37462_37467 = G__37484;
count__37463_37468 = G__37485;
i__37464_37469 = G__37486;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29499__auto__ = [];
var len__29492__auto___37491 = arguments.length;
var i__29493__auto___37492 = (0);
while(true){
if((i__29493__auto___37492 < len__29492__auto___37491)){
args__29499__auto__.push((arguments[i__29493__auto___37492]));

var G__37493 = (i__29493__auto___37492 + (1));
i__29493__auto___37492 = G__37493;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((0) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29500__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37488){
var map__37489 = p__37488;
var map__37489__$1 = ((((!((map__37489 == null)))?((((map__37489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37489):map__37489);
var opts = map__37489__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37487){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37487));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37494){if((e37494 instanceof Error)){
var e = e37494;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37494;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37495){
var map__37496 = p__37495;
var map__37496__$1 = ((((!((map__37496 == null)))?((((map__37496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37496):map__37496);
var msg_name = cljs.core.get.call(null,map__37496__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1530383444505
