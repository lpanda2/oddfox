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
}catch (e41817){if((e41817 instanceof Error)){
var e = e41817;
return "Error: Unable to stringify";
} else {
throw e41817;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__41820 = arguments.length;
switch (G__41820) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__41818_SHARP_){
if(typeof p1__41818_SHARP_ === 'string'){
return p1__41818_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__41818_SHARP_);
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
var args__35423__auto__ = [];
var len__35416__auto___41823 = arguments.length;
var i__35417__auto___41824 = (0);
while(true){
if((i__35417__auto___41824 < len__35416__auto___41823)){
args__35423__auto__.push((arguments[i__35417__auto___41824]));

var G__41825 = (i__35417__auto___41824 + (1));
i__35417__auto___41824 = G__41825;
continue;
} else {
}
break;
}

var argseq__35424__auto__ = ((((0) < args__35423__auto__.length))?(new cljs.core.IndexedSeq(args__35423__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__35424__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41822){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41822));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__35423__auto__ = [];
var len__35416__auto___41827 = arguments.length;
var i__35417__auto___41828 = (0);
while(true){
if((i__35417__auto___41828 < len__35416__auto___41827)){
args__35423__auto__.push((arguments[i__35417__auto___41828]));

var G__41829 = (i__35417__auto___41828 + (1));
i__35417__auto___41828 = G__41829;
continue;
} else {
}
break;
}

var argseq__35424__auto__ = ((((0) < args__35423__auto__.length))?(new cljs.core.IndexedSeq(args__35423__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__35424__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41826){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41826));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41830){
var map__41831 = p__41830;
var map__41831__$1 = ((((!((map__41831 == null)))?((((map__41831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41831):map__41831);
var message = cljs.core.get.call(null,map__41831__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41831__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__34247__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__34247__auto__)){
return or__34247__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__34235__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__34235__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__34235__auto__;
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
var c__37476__auto___41910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___41910,ch){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___41910,ch){
return (function (state_41882){
var state_val_41883 = (state_41882[(1)]);
if((state_val_41883 === (7))){
var inst_41878 = (state_41882[(2)]);
var state_41882__$1 = state_41882;
var statearr_41884_41911 = state_41882__$1;
(statearr_41884_41911[(2)] = inst_41878);

(statearr_41884_41911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41883 === (1))){
var state_41882__$1 = state_41882;
var statearr_41885_41912 = state_41882__$1;
(statearr_41885_41912[(2)] = null);

(statearr_41885_41912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41883 === (4))){
var inst_41835 = (state_41882[(7)]);
var inst_41835__$1 = (state_41882[(2)]);
var state_41882__$1 = (function (){var statearr_41886 = state_41882;
(statearr_41886[(7)] = inst_41835__$1);

return statearr_41886;
})();
if(cljs.core.truth_(inst_41835__$1)){
var statearr_41887_41913 = state_41882__$1;
(statearr_41887_41913[(1)] = (5));

} else {
var statearr_41888_41914 = state_41882__$1;
(statearr_41888_41914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41883 === (15))){
var inst_41842 = (state_41882[(8)]);
var inst_41857 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41842);
var inst_41858 = cljs.core.first.call(null,inst_41857);
var inst_41859 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41858);
var inst_41860 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41859)].join('');
var inst_41861 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41860);
var state_41882__$1 = state_41882;
var statearr_41889_41915 = state_41882__$1;
(statearr_41889_41915[(2)] = inst_41861);

(statearr_41889_41915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41883 === (13))){
var inst_41866 = (state_41882[(2)]);
var state_41882__$1 = state_41882;
var statearr_41890_41916 = state_41882__$1;
(statearr_41890_41916[(2)] = inst_41866);

(statearr_41890_41916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41883 === (6))){
var state_41882__$1 = state_41882;
var statearr_41891_41917 = state_41882__$1;
(statearr_41891_41917[(2)] = null);

(statearr_41891_41917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41883 === (17))){
var inst_41864 = (state_41882[(2)]);
var state_41882__$1 = state_41882;
var statearr_41892_41918 = state_41882__$1;
(statearr_41892_41918[(2)] = inst_41864);

(statearr_41892_41918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41883 === (3))){
var inst_41880 = (state_41882[(2)]);
var state_41882__$1 = state_41882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41882__$1,inst_41880);
} else {
if((state_val_41883 === (12))){
var inst_41841 = (state_41882[(9)]);
var inst_41855 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41841,opts);
var state_41882__$1 = state_41882;
if(cljs.core.truth_(inst_41855)){
var statearr_41893_41919 = state_41882__$1;
(statearr_41893_41919[(1)] = (15));

} else {
var statearr_41894_41920 = state_41882__$1;
(statearr_41894_41920[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41883 === (2))){
var state_41882__$1 = state_41882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41882__$1,(4),ch);
} else {
if((state_val_41883 === (11))){
var inst_41842 = (state_41882[(8)]);
var inst_41847 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41848 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41842);
var inst_41849 = cljs.core.async.timeout.call(null,(1000));
var inst_41850 = [inst_41848,inst_41849];
var inst_41851 = (new cljs.core.PersistentVector(null,2,(5),inst_41847,inst_41850,null));
var state_41882__$1 = state_41882;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41882__$1,(14),inst_41851);
} else {
if((state_val_41883 === (9))){
var inst_41842 = (state_41882[(8)]);
var inst_41868 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41869 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41842);
var inst_41870 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41869);
var inst_41871 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41870)].join('');
var inst_41872 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41871);
var state_41882__$1 = (function (){var statearr_41895 = state_41882;
(statearr_41895[(10)] = inst_41868);

return statearr_41895;
})();
var statearr_41896_41921 = state_41882__$1;
(statearr_41896_41921[(2)] = inst_41872);

(statearr_41896_41921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41883 === (5))){
var inst_41835 = (state_41882[(7)]);
var inst_41837 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41838 = (new cljs.core.PersistentArrayMap(null,2,inst_41837,null));
var inst_41839 = (new cljs.core.PersistentHashSet(null,inst_41838,null));
var inst_41840 = figwheel.client.focus_msgs.call(null,inst_41839,inst_41835);
var inst_41841 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41840);
var inst_41842 = cljs.core.first.call(null,inst_41840);
var inst_41843 = figwheel.client.autoload_QMARK_.call(null);
var state_41882__$1 = (function (){var statearr_41897 = state_41882;
(statearr_41897[(9)] = inst_41841);

(statearr_41897[(8)] = inst_41842);

return statearr_41897;
})();
if(cljs.core.truth_(inst_41843)){
var statearr_41898_41922 = state_41882__$1;
(statearr_41898_41922[(1)] = (8));

} else {
var statearr_41899_41923 = state_41882__$1;
(statearr_41899_41923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41883 === (14))){
var inst_41853 = (state_41882[(2)]);
var state_41882__$1 = state_41882;
var statearr_41900_41924 = state_41882__$1;
(statearr_41900_41924[(2)] = inst_41853);

(statearr_41900_41924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41883 === (16))){
var state_41882__$1 = state_41882;
var statearr_41901_41925 = state_41882__$1;
(statearr_41901_41925[(2)] = null);

(statearr_41901_41925[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41883 === (10))){
var inst_41874 = (state_41882[(2)]);
var state_41882__$1 = (function (){var statearr_41902 = state_41882;
(statearr_41902[(11)] = inst_41874);

return statearr_41902;
})();
var statearr_41903_41926 = state_41882__$1;
(statearr_41903_41926[(2)] = null);

(statearr_41903_41926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41883 === (8))){
var inst_41841 = (state_41882[(9)]);
var inst_41845 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41841,opts);
var state_41882__$1 = state_41882;
if(cljs.core.truth_(inst_41845)){
var statearr_41904_41927 = state_41882__$1;
(statearr_41904_41927[(1)] = (11));

} else {
var statearr_41905_41928 = state_41882__$1;
(statearr_41905_41928[(1)] = (12));

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
});})(c__37476__auto___41910,ch))
;
return ((function (switch__37388__auto__,c__37476__auto___41910,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37389__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37389__auto____0 = (function (){
var statearr_41906 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41906[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37389__auto__);

(statearr_41906[(1)] = (1));

return statearr_41906;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37389__auto____1 = (function (state_41882){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_41882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e41907){if((e41907 instanceof Object)){
var ex__37392__auto__ = e41907;
var statearr_41908_41929 = state_41882;
(statearr_41908_41929[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41930 = state_41882;
state_41882 = G__41930;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37389__auto__ = function(state_41882){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37389__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37389__auto____1.call(this,state_41882);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37389__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37389__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___41910,ch))
})();
var state__37478__auto__ = (function (){var statearr_41909 = f__37477__auto__.call(null);
(statearr_41909[(6)] = c__37476__auto___41910);

return statearr_41909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___41910,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41931_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41931_SHARP_));
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
var base_path_41933 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41933){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e41932){if((e41932 instanceof Error)){
var e = e41932;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41933], null));
} else {
var e = e41932;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_41933))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41934){
var map__41935 = p__41934;
var map__41935__$1 = ((((!((map__41935 == null)))?((((map__41935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41935):map__41935);
var opts = map__41935__$1;
var build_id = cljs.core.get.call(null,map__41935__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41935,map__41935__$1,opts,build_id){
return (function (p__41937){
var vec__41938 = p__41937;
var seq__41939 = cljs.core.seq.call(null,vec__41938);
var first__41940 = cljs.core.first.call(null,seq__41939);
var seq__41939__$1 = cljs.core.next.call(null,seq__41939);
var map__41941 = first__41940;
var map__41941__$1 = ((((!((map__41941 == null)))?((((map__41941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41941):map__41941);
var msg = map__41941__$1;
var msg_name = cljs.core.get.call(null,map__41941__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41939__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41938,seq__41939,first__41940,seq__41939__$1,map__41941,map__41941__$1,msg,msg_name,_,map__41935,map__41935__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41938,seq__41939,first__41940,seq__41939__$1,map__41941,map__41941__$1,msg,msg_name,_,map__41935,map__41935__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41935,map__41935__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41943){
var vec__41944 = p__41943;
var seq__41945 = cljs.core.seq.call(null,vec__41944);
var first__41946 = cljs.core.first.call(null,seq__41945);
var seq__41945__$1 = cljs.core.next.call(null,seq__41945);
var map__41947 = first__41946;
var map__41947__$1 = ((((!((map__41947 == null)))?((((map__41947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41947):map__41947);
var msg = map__41947__$1;
var msg_name = cljs.core.get.call(null,map__41947__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41945__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41949){
var map__41950 = p__41949;
var map__41950__$1 = ((((!((map__41950 == null)))?((((map__41950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41950):map__41950);
var on_compile_warning = cljs.core.get.call(null,map__41950__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41950__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41950,map__41950__$1,on_compile_warning,on_compile_fail){
return (function (p__41952){
var vec__41953 = p__41952;
var seq__41954 = cljs.core.seq.call(null,vec__41953);
var first__41955 = cljs.core.first.call(null,seq__41954);
var seq__41954__$1 = cljs.core.next.call(null,seq__41954);
var map__41956 = first__41955;
var map__41956__$1 = ((((!((map__41956 == null)))?((((map__41956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41956):map__41956);
var msg = map__41956__$1;
var msg_name = cljs.core.get.call(null,map__41956__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41954__$1;
var pred__41958 = cljs.core._EQ_;
var expr__41959 = msg_name;
if(cljs.core.truth_(pred__41958.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41959))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41958.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41959))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41950,map__41950__$1,on_compile_warning,on_compile_fail))
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
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto__,msg_hist,msg_names,msg){
return (function (state_42048){
var state_val_42049 = (state_42048[(1)]);
if((state_val_42049 === (7))){
var inst_41968 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
if(cljs.core.truth_(inst_41968)){
var statearr_42050_42097 = state_42048__$1;
(statearr_42050_42097[(1)] = (8));

} else {
var statearr_42051_42098 = state_42048__$1;
(statearr_42051_42098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (20))){
var inst_42042 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
var statearr_42052_42099 = state_42048__$1;
(statearr_42052_42099[(2)] = inst_42042);

(statearr_42052_42099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (27))){
var inst_42038 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
var statearr_42053_42100 = state_42048__$1;
(statearr_42053_42100[(2)] = inst_42038);

(statearr_42053_42100[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (1))){
var inst_41961 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42048__$1 = state_42048;
if(cljs.core.truth_(inst_41961)){
var statearr_42054_42101 = state_42048__$1;
(statearr_42054_42101[(1)] = (2));

} else {
var statearr_42055_42102 = state_42048__$1;
(statearr_42055_42102[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (24))){
var inst_42040 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
var statearr_42056_42103 = state_42048__$1;
(statearr_42056_42103[(2)] = inst_42040);

(statearr_42056_42103[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (4))){
var inst_42046 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42048__$1,inst_42046);
} else {
if((state_val_42049 === (15))){
var inst_42044 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
var statearr_42057_42104 = state_42048__$1;
(statearr_42057_42104[(2)] = inst_42044);

(statearr_42057_42104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (21))){
var inst_41997 = (state_42048[(2)]);
var inst_41998 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41999 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41998);
var state_42048__$1 = (function (){var statearr_42058 = state_42048;
(statearr_42058[(7)] = inst_41997);

return statearr_42058;
})();
var statearr_42059_42105 = state_42048__$1;
(statearr_42059_42105[(2)] = inst_41999);

(statearr_42059_42105[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (31))){
var inst_42027 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42048__$1 = state_42048;
if(cljs.core.truth_(inst_42027)){
var statearr_42060_42106 = state_42048__$1;
(statearr_42060_42106[(1)] = (34));

} else {
var statearr_42061_42107 = state_42048__$1;
(statearr_42061_42107[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (32))){
var inst_42036 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
var statearr_42062_42108 = state_42048__$1;
(statearr_42062_42108[(2)] = inst_42036);

(statearr_42062_42108[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (33))){
var inst_42023 = (state_42048[(2)]);
var inst_42024 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42025 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42024);
var state_42048__$1 = (function (){var statearr_42063 = state_42048;
(statearr_42063[(8)] = inst_42023);

return statearr_42063;
})();
var statearr_42064_42109 = state_42048__$1;
(statearr_42064_42109[(2)] = inst_42025);

(statearr_42064_42109[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (13))){
var inst_41982 = figwheel.client.heads_up.clear.call(null);
var state_42048__$1 = state_42048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42048__$1,(16),inst_41982);
} else {
if((state_val_42049 === (22))){
var inst_42003 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42004 = figwheel.client.heads_up.append_warning_message.call(null,inst_42003);
var state_42048__$1 = state_42048;
var statearr_42065_42110 = state_42048__$1;
(statearr_42065_42110[(2)] = inst_42004);

(statearr_42065_42110[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (36))){
var inst_42034 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
var statearr_42066_42111 = state_42048__$1;
(statearr_42066_42111[(2)] = inst_42034);

(statearr_42066_42111[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (29))){
var inst_42014 = (state_42048[(2)]);
var inst_42015 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42016 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42015);
var state_42048__$1 = (function (){var statearr_42067 = state_42048;
(statearr_42067[(9)] = inst_42014);

return statearr_42067;
})();
var statearr_42068_42112 = state_42048__$1;
(statearr_42068_42112[(2)] = inst_42016);

(statearr_42068_42112[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (6))){
var inst_41963 = (state_42048[(10)]);
var state_42048__$1 = state_42048;
var statearr_42069_42113 = state_42048__$1;
(statearr_42069_42113[(2)] = inst_41963);

(statearr_42069_42113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (28))){
var inst_42010 = (state_42048[(2)]);
var inst_42011 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42012 = figwheel.client.heads_up.display_warning.call(null,inst_42011);
var state_42048__$1 = (function (){var statearr_42070 = state_42048;
(statearr_42070[(11)] = inst_42010);

return statearr_42070;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42048__$1,(29),inst_42012);
} else {
if((state_val_42049 === (25))){
var inst_42008 = figwheel.client.heads_up.clear.call(null);
var state_42048__$1 = state_42048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42048__$1,(28),inst_42008);
} else {
if((state_val_42049 === (34))){
var inst_42029 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42048__$1 = state_42048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42048__$1,(37),inst_42029);
} else {
if((state_val_42049 === (17))){
var inst_41988 = (state_42048[(2)]);
var inst_41989 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41990 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41989);
var state_42048__$1 = (function (){var statearr_42071 = state_42048;
(statearr_42071[(12)] = inst_41988);

return statearr_42071;
})();
var statearr_42072_42114 = state_42048__$1;
(statearr_42072_42114[(2)] = inst_41990);

(statearr_42072_42114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (3))){
var inst_41980 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42048__$1 = state_42048;
if(cljs.core.truth_(inst_41980)){
var statearr_42073_42115 = state_42048__$1;
(statearr_42073_42115[(1)] = (13));

} else {
var statearr_42074_42116 = state_42048__$1;
(statearr_42074_42116[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (12))){
var inst_41976 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
var statearr_42075_42117 = state_42048__$1;
(statearr_42075_42117[(2)] = inst_41976);

(statearr_42075_42117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (2))){
var inst_41963 = (state_42048[(10)]);
var inst_41963__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42048__$1 = (function (){var statearr_42076 = state_42048;
(statearr_42076[(10)] = inst_41963__$1);

return statearr_42076;
})();
if(cljs.core.truth_(inst_41963__$1)){
var statearr_42077_42118 = state_42048__$1;
(statearr_42077_42118[(1)] = (5));

} else {
var statearr_42078_42119 = state_42048__$1;
(statearr_42078_42119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (23))){
var inst_42006 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42048__$1 = state_42048;
if(cljs.core.truth_(inst_42006)){
var statearr_42079_42120 = state_42048__$1;
(statearr_42079_42120[(1)] = (25));

} else {
var statearr_42080_42121 = state_42048__$1;
(statearr_42080_42121[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (35))){
var state_42048__$1 = state_42048;
var statearr_42081_42122 = state_42048__$1;
(statearr_42081_42122[(2)] = null);

(statearr_42081_42122[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (19))){
var inst_42001 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42048__$1 = state_42048;
if(cljs.core.truth_(inst_42001)){
var statearr_42082_42123 = state_42048__$1;
(statearr_42082_42123[(1)] = (22));

} else {
var statearr_42083_42124 = state_42048__$1;
(statearr_42083_42124[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (11))){
var inst_41972 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
var statearr_42084_42125 = state_42048__$1;
(statearr_42084_42125[(2)] = inst_41972);

(statearr_42084_42125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (9))){
var inst_41974 = figwheel.client.heads_up.clear.call(null);
var state_42048__$1 = state_42048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42048__$1,(12),inst_41974);
} else {
if((state_val_42049 === (5))){
var inst_41965 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42048__$1 = state_42048;
var statearr_42085_42126 = state_42048__$1;
(statearr_42085_42126[(2)] = inst_41965);

(statearr_42085_42126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (14))){
var inst_41992 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42048__$1 = state_42048;
if(cljs.core.truth_(inst_41992)){
var statearr_42086_42127 = state_42048__$1;
(statearr_42086_42127[(1)] = (18));

} else {
var statearr_42087_42128 = state_42048__$1;
(statearr_42087_42128[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (26))){
var inst_42018 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42048__$1 = state_42048;
if(cljs.core.truth_(inst_42018)){
var statearr_42088_42129 = state_42048__$1;
(statearr_42088_42129[(1)] = (30));

} else {
var statearr_42089_42130 = state_42048__$1;
(statearr_42089_42130[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (16))){
var inst_41984 = (state_42048[(2)]);
var inst_41985 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41986 = figwheel.client.heads_up.display_exception.call(null,inst_41985);
var state_42048__$1 = (function (){var statearr_42090 = state_42048;
(statearr_42090[(13)] = inst_41984);

return statearr_42090;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42048__$1,(17),inst_41986);
} else {
if((state_val_42049 === (30))){
var inst_42020 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42021 = figwheel.client.heads_up.display_warning.call(null,inst_42020);
var state_42048__$1 = state_42048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42048__$1,(33),inst_42021);
} else {
if((state_val_42049 === (10))){
var inst_41978 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
var statearr_42091_42131 = state_42048__$1;
(statearr_42091_42131[(2)] = inst_41978);

(statearr_42091_42131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (18))){
var inst_41994 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41995 = figwheel.client.heads_up.display_exception.call(null,inst_41994);
var state_42048__$1 = state_42048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42048__$1,(21),inst_41995);
} else {
if((state_val_42049 === (37))){
var inst_42031 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
var statearr_42092_42132 = state_42048__$1;
(statearr_42092_42132[(2)] = inst_42031);

(statearr_42092_42132[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (8))){
var inst_41970 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42048__$1 = state_42048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42048__$1,(11),inst_41970);
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
});})(c__37476__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__37388__auto__,c__37476__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37389__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37389__auto____0 = (function (){
var statearr_42093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42093[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37389__auto__);

(statearr_42093[(1)] = (1));

return statearr_42093;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37389__auto____1 = (function (state_42048){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_42048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e42094){if((e42094 instanceof Object)){
var ex__37392__auto__ = e42094;
var statearr_42095_42133 = state_42048;
(statearr_42095_42133[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42134 = state_42048;
state_42048 = G__42134;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37389__auto__ = function(state_42048){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37389__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37389__auto____1.call(this,state_42048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37389__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37389__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto__,msg_hist,msg_names,msg))
})();
var state__37478__auto__ = (function (){var statearr_42096 = f__37477__auto__.call(null);
(statearr_42096[(6)] = c__37476__auto__);

return statearr_42096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__,msg_hist,msg_names,msg))
);

return c__37476__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37476__auto___42163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto___42163,ch){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto___42163,ch){
return (function (state_42149){
var state_val_42150 = (state_42149[(1)]);
if((state_val_42150 === (1))){
var state_42149__$1 = state_42149;
var statearr_42151_42164 = state_42149__$1;
(statearr_42151_42164[(2)] = null);

(statearr_42151_42164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42150 === (2))){
var state_42149__$1 = state_42149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42149__$1,(4),ch);
} else {
if((state_val_42150 === (3))){
var inst_42147 = (state_42149[(2)]);
var state_42149__$1 = state_42149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42149__$1,inst_42147);
} else {
if((state_val_42150 === (4))){
var inst_42137 = (state_42149[(7)]);
var inst_42137__$1 = (state_42149[(2)]);
var state_42149__$1 = (function (){var statearr_42152 = state_42149;
(statearr_42152[(7)] = inst_42137__$1);

return statearr_42152;
})();
if(cljs.core.truth_(inst_42137__$1)){
var statearr_42153_42165 = state_42149__$1;
(statearr_42153_42165[(1)] = (5));

} else {
var statearr_42154_42166 = state_42149__$1;
(statearr_42154_42166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42150 === (5))){
var inst_42137 = (state_42149[(7)]);
var inst_42139 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42137);
var state_42149__$1 = state_42149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42149__$1,(8),inst_42139);
} else {
if((state_val_42150 === (6))){
var state_42149__$1 = state_42149;
var statearr_42155_42167 = state_42149__$1;
(statearr_42155_42167[(2)] = null);

(statearr_42155_42167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42150 === (7))){
var inst_42145 = (state_42149[(2)]);
var state_42149__$1 = state_42149;
var statearr_42156_42168 = state_42149__$1;
(statearr_42156_42168[(2)] = inst_42145);

(statearr_42156_42168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42150 === (8))){
var inst_42141 = (state_42149[(2)]);
var state_42149__$1 = (function (){var statearr_42157 = state_42149;
(statearr_42157[(8)] = inst_42141);

return statearr_42157;
})();
var statearr_42158_42169 = state_42149__$1;
(statearr_42158_42169[(2)] = null);

(statearr_42158_42169[(1)] = (2));


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
});})(c__37476__auto___42163,ch))
;
return ((function (switch__37388__auto__,c__37476__auto___42163,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37389__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37389__auto____0 = (function (){
var statearr_42159 = [null,null,null,null,null,null,null,null,null];
(statearr_42159[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37389__auto__);

(statearr_42159[(1)] = (1));

return statearr_42159;
});
var figwheel$client$heads_up_plugin_$_state_machine__37389__auto____1 = (function (state_42149){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_42149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e42160){if((e42160 instanceof Object)){
var ex__37392__auto__ = e42160;
var statearr_42161_42170 = state_42149;
(statearr_42161_42170[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42171 = state_42149;
state_42149 = G__42171;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37389__auto__ = function(state_42149){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37389__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37389__auto____1.call(this,state_42149);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37389__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37389__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto___42163,ch))
})();
var state__37478__auto__ = (function (){var statearr_42162 = f__37477__auto__.call(null);
(statearr_42162[(6)] = c__37476__auto___42163);

return statearr_42162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto___42163,ch))
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
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto__){
return (function (state_42177){
var state_val_42178 = (state_42177[(1)]);
if((state_val_42178 === (1))){
var inst_42172 = cljs.core.async.timeout.call(null,(3000));
var state_42177__$1 = state_42177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42177__$1,(2),inst_42172);
} else {
if((state_val_42178 === (2))){
var inst_42174 = (state_42177[(2)]);
var inst_42175 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42177__$1 = (function (){var statearr_42179 = state_42177;
(statearr_42179[(7)] = inst_42174);

return statearr_42179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42177__$1,inst_42175);
} else {
return null;
}
}
});})(c__37476__auto__))
;
return ((function (switch__37388__auto__,c__37476__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__37389__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__37389__auto____0 = (function (){
var statearr_42180 = [null,null,null,null,null,null,null,null];
(statearr_42180[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37389__auto__);

(statearr_42180[(1)] = (1));

return statearr_42180;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37389__auto____1 = (function (state_42177){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_42177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e42181){if((e42181 instanceof Object)){
var ex__37392__auto__ = e42181;
var statearr_42182_42184 = state_42177;
(statearr_42182_42184[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42185 = state_42177;
state_42177 = G__42185;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37389__auto__ = function(state_42177){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37389__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37389__auto____1.call(this,state_42177);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37389__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37389__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto__))
})();
var state__37478__auto__ = (function (){var statearr_42183 = f__37477__auto__.call(null);
(statearr_42183[(6)] = c__37476__auto__);

return statearr_42183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__))
);

return c__37476__auto__;
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
var c__37476__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37476__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__37477__auto__ = (function (){var switch__37388__auto__ = ((function (c__37476__auto__,figwheel_version,temp__4657__auto__){
return (function (state_42192){
var state_val_42193 = (state_42192[(1)]);
if((state_val_42193 === (1))){
var inst_42186 = cljs.core.async.timeout.call(null,(2000));
var state_42192__$1 = state_42192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42192__$1,(2),inst_42186);
} else {
if((state_val_42193 === (2))){
var inst_42188 = (state_42192[(2)]);
var inst_42189 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_42190 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42189);
var state_42192__$1 = (function (){var statearr_42194 = state_42192;
(statearr_42194[(7)] = inst_42188);

return statearr_42194;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42192__$1,inst_42190);
} else {
return null;
}
}
});})(c__37476__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__37388__auto__,c__37476__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37389__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37389__auto____0 = (function (){
var statearr_42195 = [null,null,null,null,null,null,null,null];
(statearr_42195[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37389__auto__);

(statearr_42195[(1)] = (1));

return statearr_42195;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37389__auto____1 = (function (state_42192){
while(true){
var ret_value__37390__auto__ = (function (){try{while(true){
var result__37391__auto__ = switch__37388__auto__.call(null,state_42192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37391__auto__;
}
break;
}
}catch (e42196){if((e42196 instanceof Object)){
var ex__37392__auto__ = e42196;
var statearr_42197_42199 = state_42192;
(statearr_42197_42199[(5)] = ex__37392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42200 = state_42192;
state_42192 = G__42200;
continue;
} else {
return ret_value__37390__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37389__auto__ = function(state_42192){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37389__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37389__auto____1.call(this,state_42192);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37389__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37389__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37389__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37389__auto__;
})()
;})(switch__37388__auto__,c__37476__auto__,figwheel_version,temp__4657__auto__))
})();
var state__37478__auto__ = (function (){var statearr_42198 = f__37477__auto__.call(null);
(statearr_42198[(6)] = c__37476__auto__);

return statearr_42198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37478__auto__);
});})(c__37476__auto__,figwheel_version,temp__4657__auto__))
);

return c__37476__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42201){
var map__42202 = p__42201;
var map__42202__$1 = ((((!((map__42202 == null)))?((((map__42202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42202):map__42202);
var file = cljs.core.get.call(null,map__42202__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42202__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42202__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42204 = "";
var G__42204__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42204),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42204);
var G__42204__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42204__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42204__$1);
if(cljs.core.truth_((function (){var and__34235__auto__ = line;
if(cljs.core.truth_(and__34235__auto__)){
return column;
} else {
return and__34235__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42204__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42204__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42205){
var map__42206 = p__42205;
var map__42206__$1 = ((((!((map__42206 == null)))?((((map__42206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42206):map__42206);
var ed = map__42206__$1;
var formatted_exception = cljs.core.get.call(null,map__42206__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42206__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42206__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42208_42212 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42209_42213 = null;
var count__42210_42214 = (0);
var i__42211_42215 = (0);
while(true){
if((i__42211_42215 < count__42210_42214)){
var msg_42216 = cljs.core._nth.call(null,chunk__42209_42213,i__42211_42215);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42216);

var G__42217 = seq__42208_42212;
var G__42218 = chunk__42209_42213;
var G__42219 = count__42210_42214;
var G__42220 = (i__42211_42215 + (1));
seq__42208_42212 = G__42217;
chunk__42209_42213 = G__42218;
count__42210_42214 = G__42219;
i__42211_42215 = G__42220;
continue;
} else {
var temp__4657__auto___42221 = cljs.core.seq.call(null,seq__42208_42212);
if(temp__4657__auto___42221){
var seq__42208_42222__$1 = temp__4657__auto___42221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42208_42222__$1)){
var c__35086__auto___42223 = cljs.core.chunk_first.call(null,seq__42208_42222__$1);
var G__42224 = cljs.core.chunk_rest.call(null,seq__42208_42222__$1);
var G__42225 = c__35086__auto___42223;
var G__42226 = cljs.core.count.call(null,c__35086__auto___42223);
var G__42227 = (0);
seq__42208_42212 = G__42224;
chunk__42209_42213 = G__42225;
count__42210_42214 = G__42226;
i__42211_42215 = G__42227;
continue;
} else {
var msg_42228 = cljs.core.first.call(null,seq__42208_42222__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42228);

var G__42229 = cljs.core.next.call(null,seq__42208_42222__$1);
var G__42230 = null;
var G__42231 = (0);
var G__42232 = (0);
seq__42208_42212 = G__42229;
chunk__42209_42213 = G__42230;
count__42210_42214 = G__42231;
i__42211_42215 = G__42232;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42233){
var map__42234 = p__42233;
var map__42234__$1 = ((((!((map__42234 == null)))?((((map__42234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42234):map__42234);
var w = map__42234__$1;
var message = cljs.core.get.call(null,map__42234__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__34235__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__34235__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__34235__auto__;
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
var seq__42236 = cljs.core.seq.call(null,plugins);
var chunk__42237 = null;
var count__42238 = (0);
var i__42239 = (0);
while(true){
if((i__42239 < count__42238)){
var vec__42240 = cljs.core._nth.call(null,chunk__42237,i__42239);
var k = cljs.core.nth.call(null,vec__42240,(0),null);
var plugin = cljs.core.nth.call(null,vec__42240,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42246 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42236,chunk__42237,count__42238,i__42239,pl_42246,vec__42240,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42246.call(null,msg_hist);
});})(seq__42236,chunk__42237,count__42238,i__42239,pl_42246,vec__42240,k,plugin))
);
} else {
}

var G__42247 = seq__42236;
var G__42248 = chunk__42237;
var G__42249 = count__42238;
var G__42250 = (i__42239 + (1));
seq__42236 = G__42247;
chunk__42237 = G__42248;
count__42238 = G__42249;
i__42239 = G__42250;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42236);
if(temp__4657__auto__){
var seq__42236__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42236__$1)){
var c__35086__auto__ = cljs.core.chunk_first.call(null,seq__42236__$1);
var G__42251 = cljs.core.chunk_rest.call(null,seq__42236__$1);
var G__42252 = c__35086__auto__;
var G__42253 = cljs.core.count.call(null,c__35086__auto__);
var G__42254 = (0);
seq__42236 = G__42251;
chunk__42237 = G__42252;
count__42238 = G__42253;
i__42239 = G__42254;
continue;
} else {
var vec__42243 = cljs.core.first.call(null,seq__42236__$1);
var k = cljs.core.nth.call(null,vec__42243,(0),null);
var plugin = cljs.core.nth.call(null,vec__42243,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42255 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42236,chunk__42237,count__42238,i__42239,pl_42255,vec__42243,k,plugin,seq__42236__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42255.call(null,msg_hist);
});})(seq__42236,chunk__42237,count__42238,i__42239,pl_42255,vec__42243,k,plugin,seq__42236__$1,temp__4657__auto__))
);
} else {
}

var G__42256 = cljs.core.next.call(null,seq__42236__$1);
var G__42257 = null;
var G__42258 = (0);
var G__42259 = (0);
seq__42236 = G__42256;
chunk__42237 = G__42257;
count__42238 = G__42258;
i__42239 = G__42259;
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
var G__42261 = arguments.length;
switch (G__42261) {
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

var seq__42262_42267 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42263_42268 = null;
var count__42264_42269 = (0);
var i__42265_42270 = (0);
while(true){
if((i__42265_42270 < count__42264_42269)){
var msg_42271 = cljs.core._nth.call(null,chunk__42263_42268,i__42265_42270);
figwheel.client.socket.handle_incoming_message.call(null,msg_42271);

var G__42272 = seq__42262_42267;
var G__42273 = chunk__42263_42268;
var G__42274 = count__42264_42269;
var G__42275 = (i__42265_42270 + (1));
seq__42262_42267 = G__42272;
chunk__42263_42268 = G__42273;
count__42264_42269 = G__42274;
i__42265_42270 = G__42275;
continue;
} else {
var temp__4657__auto___42276 = cljs.core.seq.call(null,seq__42262_42267);
if(temp__4657__auto___42276){
var seq__42262_42277__$1 = temp__4657__auto___42276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42262_42277__$1)){
var c__35086__auto___42278 = cljs.core.chunk_first.call(null,seq__42262_42277__$1);
var G__42279 = cljs.core.chunk_rest.call(null,seq__42262_42277__$1);
var G__42280 = c__35086__auto___42278;
var G__42281 = cljs.core.count.call(null,c__35086__auto___42278);
var G__42282 = (0);
seq__42262_42267 = G__42279;
chunk__42263_42268 = G__42280;
count__42264_42269 = G__42281;
i__42265_42270 = G__42282;
continue;
} else {
var msg_42283 = cljs.core.first.call(null,seq__42262_42277__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42283);

var G__42284 = cljs.core.next.call(null,seq__42262_42277__$1);
var G__42285 = null;
var G__42286 = (0);
var G__42287 = (0);
seq__42262_42267 = G__42284;
chunk__42263_42268 = G__42285;
count__42264_42269 = G__42286;
i__42265_42270 = G__42287;
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
var args__35423__auto__ = [];
var len__35416__auto___42292 = arguments.length;
var i__35417__auto___42293 = (0);
while(true){
if((i__35417__auto___42293 < len__35416__auto___42292)){
args__35423__auto__.push((arguments[i__35417__auto___42293]));

var G__42294 = (i__35417__auto___42293 + (1));
i__35417__auto___42293 = G__42294;
continue;
} else {
}
break;
}

var argseq__35424__auto__ = ((((0) < args__35423__auto__.length))?(new cljs.core.IndexedSeq(args__35423__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__35424__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42289){
var map__42290 = p__42289;
var map__42290__$1 = ((((!((map__42290 == null)))?((((map__42290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42290):map__42290);
var opts = map__42290__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42288){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42288));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42295){if((e42295 instanceof Error)){
var e = e42295;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e42295;

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
return (function (p__42296){
var map__42297 = p__42296;
var map__42297__$1 = ((((!((map__42297 == null)))?((((map__42297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42297):map__42297);
var msg_name = cljs.core.get.call(null,map__42297__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1530402588095
