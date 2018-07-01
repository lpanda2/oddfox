(ns oddfox.core
  (:require [reagent.core :as r]
            [re-com.core :as re-com]
            [oddfox.data :as dt]
            [re-frame.core :as rf]
            [clojure.string :as str]))

;; -- Domino 1 - Event Dispatch -----------------------------------------------

(defn dispatch-timer-event
  []
  (let [now (js/Date.)]
    (rf/dispatch [:timer now])))  ;; <-- dispatch used

;; Call the dispatching function every second.
;; `defonce` is like `def` but it ensures only one instance is ever
;; created in the face of figwheel hot-reloading of this file.
(defonce do-timer (js/setInterval dispatch-timer-event 1000))


;; -- Domino 2 - Event Handlers -----------------------------------------------

(rf/reg-event-db              ;; sets up initial application state
  :initialize                 ;; usage:  (dispatch [:initialize])
  (fn [_ _]                   ;; the two parameters are not important here, so use _
    {:time (js/Date.)         ;; What it returns becomes the new application state
     :time-color "#f88"}))    ;; so the application state will initially be a map with two keys


(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:metricName "weird test code"
    :claimRelationship "same-claim"
    :metricCodes [{:codeType "procedureCode"
                   :codes ["XYZ"]}
                  {:codeType "providerCategory"
                   :codes ["PR" "OP", "IP"]}]
    :filters []
    :time (js/Date.)
    :time-color "#f88"
    :time-history ["#f88"]}))


(rf/reg-event-db                ;; usage:  (dispatch [:time-color-change 34562])
 :time-color-change            ;; dispatched when the user enters new colour into UI text field
 (fn [db [_ new-color-value]]  ;; -db evnt handlr with 2 params: current app state & event (a vector)
    (assoc db :time-color new-color-value)))   ;; compute and return the new application state


(rf/reg-event-db
 :time-color-add
 (fn [db [_ new-color-value]]
   (doall
    (assoc db :time-color new-color-value)
    (assoc db :time-history (conj (:time-history db) new-color-value)))))


(rf/reg-event-db                 ;; usage:  (dispatch [:timer a-js-Date])
  :timer                         ;; every second an event of this kind will be dispatched
  (fn [db [_ new-time]]          ;; note how the 2nd parameter is destructured to get the data value
    (assoc db :time new-time)))  ;; compute and return the new application state


;; -- Domino 4 - Query  -------------------------------------------------------

(rf/reg-sub
  :time
  (fn [db _]     ;; db is current app state. 2nd unused param is query vector
    (:time db))) ;; return a query computation over the application state

(rf/reg-sub
 :metricName
 (fn [db _]
   (:metricName db)))

(rf/reg-sub
  :time-color
  (fn [db _]
    (:time-color db)))

(rf/reg-sub
 :time-history
 (fn [db _]
   (:time-history db)))



;; -- Domino 5 - View Functions ----------------------------------------------

(defn lister [items]
  [:ul
   (for [item items]
     ^{:key item} [:li item])])


;; (defn funcs []
;;   [re-com/h-box
;;    :gap "1em"
;;    :justify :around
;;    :align :stretch
;;    :children [
;;               [:div
;;                "Timeframe Functions: "
;;                [lister dt/time-frame-funcs]]
;;               [:div
;;                "Filter Functions: "
;;                [lister dt/filter-funcs]]
;;               [:div
;;                "Reducer Functions: "
;;                [lister dt/reducer-funcs]]
;;               [:div
;;                "Selectors: "
;;                [lister dt/selector-funcs]]]])


(defn funcs []
  [re-com/h-box
   :gap "1em"
   :justify :around
   :align :stretch
   :children [[re-com/selection-list
               :choices (mapv #(hash-map :id % :label %) dt/time-frame-funcs)
               :model (set dt/time-frame-funcs)
               :on-change #(+ 1 1)
               :width "175px"
               :hide-border? true
               :multi-select? true]

              [re-com/selection-list
               :choices (mapv #(hash-map :id % :label %) dt/filter-funcs)
               :model (set dt/filter-funcs)
               :on-change #(+ 1 1)
               :width "175px"
               :hide-border? true
               :multi-select? true]

              [re-com/selection-list
               :choices (mapv #(hash-map :id % :label %) dt/reducer-funcs)
               :model (set dt/reducer-funcs)
               :on-change #(+ 1 1)
               :width "175px"
               :hide-border? true
               :multi-select? true]

              [re-com/selection-list
               :choices (mapv #(hash-map :id % :label %) dt/selector-funcs)
               :model (set dt/selector-funcs)
               :on-change #(+ 1 1)
               :width "175px"
               :hide-border? true
               :multi-select? true]

              ]])



(defn clock
  []
  [:div.example-clock
   {:style {:color @(rf/subscribe [:time-color])}}
   (-> @(rf/subscribe [:time])
       .toTimeString
       (str/split " ")
       first)])


(defn metric-meta
  []
  [:div.metric-meta
   (-> @(rf/subscribe [:time-history])
       (str))])


(defn color-input
  []
  [:div.color-input
   "Time color: "
   [:input {:type "text"
            :value @(rf/subscribe [:time-color])
            :on-change #(rf/dispatch [:time-color-change (-> % .-target .-value)])}]])  ;; <---

(defn box
  []
  [:div
   [:p "selected"]]
  [:div.checkbox
   [:p "test this"]]
)

(defn header []
  [:div
   [:h1 "Create your own metric"]])

(defn metric-ui
  []
  [:div
   [header]
   [:div
    [:h2 "All Operations to Create a Metric"]]
   [:div.padding]
   [funcs]
   [:div
    [:h2 "Selection Summary"]]
   [box]])


;; -- Entry Point -------------------------------------------------------------

(defn ^:export run
  []
  (rf/dispatch-sync [:initialize])     ;; puts a value into application state
  (r/render [metric-ui]              ;; mount the application's ui into '<div id="app" />'
                  (js/document.getElementById "app")))
