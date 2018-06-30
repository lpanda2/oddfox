// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36728){
var map__36729 = p__36728;
var map__36729__$1 = ((((!((map__36729 == null)))?((((map__36729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36729):map__36729);
var m = map__36729__$1;
var n = cljs.core.get.call(null,map__36729__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36729__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36731_36753 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36732_36754 = null;
var count__36733_36755 = (0);
var i__36734_36756 = (0);
while(true){
if((i__36734_36756 < count__36733_36755)){
var f_36757 = cljs.core._nth.call(null,chunk__36732_36754,i__36734_36756);
cljs.core.println.call(null,"  ",f_36757);

var G__36758 = seq__36731_36753;
var G__36759 = chunk__36732_36754;
var G__36760 = count__36733_36755;
var G__36761 = (i__36734_36756 + (1));
seq__36731_36753 = G__36758;
chunk__36732_36754 = G__36759;
count__36733_36755 = G__36760;
i__36734_36756 = G__36761;
continue;
} else {
var temp__4657__auto___36762 = cljs.core.seq.call(null,seq__36731_36753);
if(temp__4657__auto___36762){
var seq__36731_36763__$1 = temp__4657__auto___36762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36731_36763__$1)){
var c__29162__auto___36764 = cljs.core.chunk_first.call(null,seq__36731_36763__$1);
var G__36765 = cljs.core.chunk_rest.call(null,seq__36731_36763__$1);
var G__36766 = c__29162__auto___36764;
var G__36767 = cljs.core.count.call(null,c__29162__auto___36764);
var G__36768 = (0);
seq__36731_36753 = G__36765;
chunk__36732_36754 = G__36766;
count__36733_36755 = G__36767;
i__36734_36756 = G__36768;
continue;
} else {
var f_36769 = cljs.core.first.call(null,seq__36731_36763__$1);
cljs.core.println.call(null,"  ",f_36769);

var G__36770 = cljs.core.next.call(null,seq__36731_36763__$1);
var G__36771 = null;
var G__36772 = (0);
var G__36773 = (0);
seq__36731_36753 = G__36770;
chunk__36732_36754 = G__36771;
count__36733_36755 = G__36772;
i__36734_36756 = G__36773;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36774 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28323__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36774);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36774)))?cljs.core.second.call(null,arglists_36774):arglists_36774));
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
var seq__36735_36775 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36736_36776 = null;
var count__36737_36777 = (0);
var i__36738_36778 = (0);
while(true){
if((i__36738_36778 < count__36737_36777)){
var vec__36739_36779 = cljs.core._nth.call(null,chunk__36736_36776,i__36738_36778);
var name_36780 = cljs.core.nth.call(null,vec__36739_36779,(0),null);
var map__36742_36781 = cljs.core.nth.call(null,vec__36739_36779,(1),null);
var map__36742_36782__$1 = ((((!((map__36742_36781 == null)))?((((map__36742_36781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36742_36781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36742_36781):map__36742_36781);
var doc_36783 = cljs.core.get.call(null,map__36742_36782__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36784 = cljs.core.get.call(null,map__36742_36782__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36780);

cljs.core.println.call(null," ",arglists_36784);

if(cljs.core.truth_(doc_36783)){
cljs.core.println.call(null," ",doc_36783);
} else {
}

var G__36785 = seq__36735_36775;
var G__36786 = chunk__36736_36776;
var G__36787 = count__36737_36777;
var G__36788 = (i__36738_36778 + (1));
seq__36735_36775 = G__36785;
chunk__36736_36776 = G__36786;
count__36737_36777 = G__36787;
i__36738_36778 = G__36788;
continue;
} else {
var temp__4657__auto___36789 = cljs.core.seq.call(null,seq__36735_36775);
if(temp__4657__auto___36789){
var seq__36735_36790__$1 = temp__4657__auto___36789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36735_36790__$1)){
var c__29162__auto___36791 = cljs.core.chunk_first.call(null,seq__36735_36790__$1);
var G__36792 = cljs.core.chunk_rest.call(null,seq__36735_36790__$1);
var G__36793 = c__29162__auto___36791;
var G__36794 = cljs.core.count.call(null,c__29162__auto___36791);
var G__36795 = (0);
seq__36735_36775 = G__36792;
chunk__36736_36776 = G__36793;
count__36737_36777 = G__36794;
i__36738_36778 = G__36795;
continue;
} else {
var vec__36744_36796 = cljs.core.first.call(null,seq__36735_36790__$1);
var name_36797 = cljs.core.nth.call(null,vec__36744_36796,(0),null);
var map__36747_36798 = cljs.core.nth.call(null,vec__36744_36796,(1),null);
var map__36747_36799__$1 = ((((!((map__36747_36798 == null)))?((((map__36747_36798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36747_36798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36747_36798):map__36747_36798);
var doc_36800 = cljs.core.get.call(null,map__36747_36799__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36801 = cljs.core.get.call(null,map__36747_36799__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36797);

cljs.core.println.call(null," ",arglists_36801);

if(cljs.core.truth_(doc_36800)){
cljs.core.println.call(null," ",doc_36800);
} else {
}

var G__36802 = cljs.core.next.call(null,seq__36735_36790__$1);
var G__36803 = null;
var G__36804 = (0);
var G__36805 = (0);
seq__36735_36775 = G__36802;
chunk__36736_36776 = G__36803;
count__36737_36777 = G__36804;
i__36738_36778 = G__36805;
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

var seq__36749 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36750 = null;
var count__36751 = (0);
var i__36752 = (0);
while(true){
if((i__36752 < count__36751)){
var role = cljs.core._nth.call(null,chunk__36750,i__36752);
var temp__4657__auto___36806__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36806__$1)){
var spec_36807 = temp__4657__auto___36806__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36807));
} else {
}

var G__36808 = seq__36749;
var G__36809 = chunk__36750;
var G__36810 = count__36751;
var G__36811 = (i__36752 + (1));
seq__36749 = G__36808;
chunk__36750 = G__36809;
count__36751 = G__36810;
i__36752 = G__36811;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36749);
if(temp__4657__auto____$1){
var seq__36749__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36749__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__36749__$1);
var G__36812 = cljs.core.chunk_rest.call(null,seq__36749__$1);
var G__36813 = c__29162__auto__;
var G__36814 = cljs.core.count.call(null,c__29162__auto__);
var G__36815 = (0);
seq__36749 = G__36812;
chunk__36750 = G__36813;
count__36751 = G__36814;
i__36752 = G__36815;
continue;
} else {
var role = cljs.core.first.call(null,seq__36749__$1);
var temp__4657__auto___36816__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36816__$2)){
var spec_36817 = temp__4657__auto___36816__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36817));
} else {
}

var G__36818 = cljs.core.next.call(null,seq__36749__$1);
var G__36819 = null;
var G__36820 = (0);
var G__36821 = (0);
seq__36749 = G__36818;
chunk__36750 = G__36819;
count__36751 = G__36820;
i__36752 = G__36821;
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

//# sourceMappingURL=repl.js.map?rel=1530383443569
