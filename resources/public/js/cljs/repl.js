// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38040){
var map__38041 = p__38040;
var map__38041__$1 = ((((!((map__38041 == null)))?((((map__38041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38041):map__38041);
var m = map__38041__$1;
var n = cljs.core.get.call(null,map__38041__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38041__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38043_38065 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38044_38066 = null;
var count__38045_38067 = (0);
var i__38046_38068 = (0);
while(true){
if((i__38046_38068 < count__38045_38067)){
var f_38069 = cljs.core._nth.call(null,chunk__38044_38066,i__38046_38068);
cljs.core.println.call(null,"  ",f_38069);

var G__38070 = seq__38043_38065;
var G__38071 = chunk__38044_38066;
var G__38072 = count__38045_38067;
var G__38073 = (i__38046_38068 + (1));
seq__38043_38065 = G__38070;
chunk__38044_38066 = G__38071;
count__38045_38067 = G__38072;
i__38046_38068 = G__38073;
continue;
} else {
var temp__4657__auto___38074 = cljs.core.seq.call(null,seq__38043_38065);
if(temp__4657__auto___38074){
var seq__38043_38075__$1 = temp__4657__auto___38074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38043_38075__$1)){
var c__29162__auto___38076 = cljs.core.chunk_first.call(null,seq__38043_38075__$1);
var G__38077 = cljs.core.chunk_rest.call(null,seq__38043_38075__$1);
var G__38078 = c__29162__auto___38076;
var G__38079 = cljs.core.count.call(null,c__29162__auto___38076);
var G__38080 = (0);
seq__38043_38065 = G__38077;
chunk__38044_38066 = G__38078;
count__38045_38067 = G__38079;
i__38046_38068 = G__38080;
continue;
} else {
var f_38081 = cljs.core.first.call(null,seq__38043_38075__$1);
cljs.core.println.call(null,"  ",f_38081);

var G__38082 = cljs.core.next.call(null,seq__38043_38075__$1);
var G__38083 = null;
var G__38084 = (0);
var G__38085 = (0);
seq__38043_38065 = G__38082;
chunk__38044_38066 = G__38083;
count__38045_38067 = G__38084;
i__38046_38068 = G__38085;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38086 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28323__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38086);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38086)))?cljs.core.second.call(null,arglists_38086):arglists_38086));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38047_38087 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38048_38088 = null;
var count__38049_38089 = (0);
var i__38050_38090 = (0);
while(true){
if((i__38050_38090 < count__38049_38089)){
var vec__38051_38091 = cljs.core._nth.call(null,chunk__38048_38088,i__38050_38090);
var name_38092 = cljs.core.nth.call(null,vec__38051_38091,(0),null);
var map__38054_38093 = cljs.core.nth.call(null,vec__38051_38091,(1),null);
var map__38054_38094__$1 = ((((!((map__38054_38093 == null)))?((((map__38054_38093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38054_38093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38054_38093):map__38054_38093);
var doc_38095 = cljs.core.get.call(null,map__38054_38094__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38096 = cljs.core.get.call(null,map__38054_38094__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38092);

cljs.core.println.call(null," ",arglists_38096);

if(cljs.core.truth_(doc_38095)){
cljs.core.println.call(null," ",doc_38095);
} else {
}

var G__38097 = seq__38047_38087;
var G__38098 = chunk__38048_38088;
var G__38099 = count__38049_38089;
var G__38100 = (i__38050_38090 + (1));
seq__38047_38087 = G__38097;
chunk__38048_38088 = G__38098;
count__38049_38089 = G__38099;
i__38050_38090 = G__38100;
continue;
} else {
var temp__4657__auto___38101 = cljs.core.seq.call(null,seq__38047_38087);
if(temp__4657__auto___38101){
var seq__38047_38102__$1 = temp__4657__auto___38101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38047_38102__$1)){
var c__29162__auto___38103 = cljs.core.chunk_first.call(null,seq__38047_38102__$1);
var G__38104 = cljs.core.chunk_rest.call(null,seq__38047_38102__$1);
var G__38105 = c__29162__auto___38103;
var G__38106 = cljs.core.count.call(null,c__29162__auto___38103);
var G__38107 = (0);
seq__38047_38087 = G__38104;
chunk__38048_38088 = G__38105;
count__38049_38089 = G__38106;
i__38050_38090 = G__38107;
continue;
} else {
var vec__38056_38108 = cljs.core.first.call(null,seq__38047_38102__$1);
var name_38109 = cljs.core.nth.call(null,vec__38056_38108,(0),null);
var map__38059_38110 = cljs.core.nth.call(null,vec__38056_38108,(1),null);
var map__38059_38111__$1 = ((((!((map__38059_38110 == null)))?((((map__38059_38110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38059_38110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38059_38110):map__38059_38110);
var doc_38112 = cljs.core.get.call(null,map__38059_38111__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38113 = cljs.core.get.call(null,map__38059_38111__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38109);

cljs.core.println.call(null," ",arglists_38113);

if(cljs.core.truth_(doc_38112)){
cljs.core.println.call(null," ",doc_38112);
} else {
}

var G__38114 = cljs.core.next.call(null,seq__38047_38102__$1);
var G__38115 = null;
var G__38116 = (0);
var G__38117 = (0);
seq__38047_38087 = G__38114;
chunk__38048_38088 = G__38115;
count__38049_38089 = G__38116;
i__38050_38090 = G__38117;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__38061 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38062 = null;
var count__38063 = (0);
var i__38064 = (0);
while(true){
if((i__38064 < count__38063)){
var role = cljs.core._nth.call(null,chunk__38062,i__38064);
var temp__4657__auto___38118__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38118__$1)){
var spec_38119 = temp__4657__auto___38118__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38119));
} else {
}

var G__38120 = seq__38061;
var G__38121 = chunk__38062;
var G__38122 = count__38063;
var G__38123 = (i__38064 + (1));
seq__38061 = G__38120;
chunk__38062 = G__38121;
count__38063 = G__38122;
i__38064 = G__38123;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38061);
if(temp__4657__auto____$1){
var seq__38061__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38061__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__38061__$1);
var G__38124 = cljs.core.chunk_rest.call(null,seq__38061__$1);
var G__38125 = c__29162__auto__;
var G__38126 = cljs.core.count.call(null,c__29162__auto__);
var G__38127 = (0);
seq__38061 = G__38124;
chunk__38062 = G__38125;
count__38063 = G__38126;
i__38064 = G__38127;
continue;
} else {
var role = cljs.core.first.call(null,seq__38061__$1);
var temp__4657__auto___38128__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38128__$2)){
var spec_38129 = temp__4657__auto___38128__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38129));
} else {
}

var G__38130 = cljs.core.next.call(null,seq__38061__$1);
var G__38131 = null;
var G__38132 = (0);
var G__38133 = (0);
seq__38061 = G__38130;
chunk__38062 = G__38131;
count__38063 = G__38132;
i__38064 = G__38133;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1530396898859
