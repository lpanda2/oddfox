(ns oddfox.views
  (:require [reagent.core :as r]
            [re-com.core :as re-com]
            [re-frame.core :as rf]
            [oddfox.events :as events]
            [oddfox.subs :as subs]
            [clojure.string :as str]))


(def claim-relationships
  ["same-claim"
   "same-claim-line"
   "overlap"])

(def time-frame-funcs
  ["on-trigger-thru"
   "in-look-forward"
   "within-x-days-of-trigger"
   "in-trigger-window"
   "within-x-days"
   "on-trigger-from"
   "in-look-back"])

(def filter-funcs
  ["not-inpatient"
   "is-discharge-site"
   "is-trigger"
   "is-outpatient"
   "not-trigger-provider"
   "not-snf"
   "is-inpatient-acute"
   "not-discharge-site"
   "is-trigger-provider"
   "not-outpatient"
   "is-professional"
   "is-inpatient"
   "not-professional"
   "is-snf"
   "not-trigger"])

(def reducer-funcs
  ["sum-cost"
   "epi-id"
   "claim-line-ct"
   "claim-ct-unique"
   "min-number"
   "claim-ct-flag"
   "min-date"
   "max-date"
   "value-counts"
   "mem-ct-unique"
   "max-number"
   "average"])

(def selector-funcs
  ["select-nth-row"
   "select-first-row"
   "select-last-row"
   "select-nth-claim"
   "select-rand-row"
   "select-second-row"
   "select-head-rows"])


(defn lister [items]
  [:ul
   (for [item items]
     ^{:key item} [:li item])])


(defn timeframes []
  [re-com/v-box
   :gap "1em"
   :align :stretch
   :children [
              [:div
               [re-com/label
                :label "Time Frame Functions"
                :style {:text-decoration "underline"}]]
              [re-com/selection-list
               :choices (mapv #(hash-map :id % :label %) time-frame-funcs)
               :model (set time-frame-funcs)
               :on-change #(+ 1 1)
               :width "175px"
               :hide-border? true
               :multi-select? true]]])


(defn filters []
  [re-com/v-box
   :gap "1em"
   :align :stretch
   :children [
              [:div
               [re-com/label
                :label "Filtering Functions"
                :style {:text-decoration "underline"}]]
              [re-com/selection-list
               :choices (mapv #(hash-map :id % :label %) filter-funcs)
               :model #{}
               :on-change #(+ 1 1)
               :width "175px"
               :hide-border? true
               :multi-select? true]]])


;; (defn filters []
;;   (let [current-state @(rf/subscribe [::subs/filters])
;;         choices (mapv #(hash-map :id % :label %) filter-funcs)]
;;     [re-com/v-box
;;      :gap "1em"
;;      :align :stretch
;;      :children [
;;                 [:div
;;                  [re-com/label
;;                   :label "Filtering Functions"]]
;;                 [re-com/selection-list
;;                  :choices choices
;;                  :model (set filter-funcs)
;;                  :on-change #(+ 1 1)
;;                  :width "175px"
;;                  :hide-border? true
;;                  :multi-select? true]]]))



(defn reducers []
  [re-com/v-box
   :gap "1em"
   :align :stretch
   :children [
              [:div
               [re-com/label
                :label "Reduce data"
                :style {:text-decoration "underline"}]]
              [re-com/selection-list
               :choices (mapv #(hash-map :id % :label %) reducer-funcs)
               :model (set reducer-funcs)
               :on-change #(+ 1 1)
               :width "175px"
               :hide-border? true
               :multi-select? true]]])


(defn selecters []
  [re-com/v-box
   :gap "1em"
   :align :stretch
   :children [
              [:div
               [re-com/label
                :label "Select Data"
                :style {:text-decoration "underline"}]]
              [re-com/selection-list
               :choices (mapv #(hash-map :id % :label %) selector-funcs)
               :model (set selector-funcs)
               :on-change #(+ 1 1)
               :width "175px"
               :hide-border? true
               :multi-select? true]]])
