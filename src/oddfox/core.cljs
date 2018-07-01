(ns oddfox.core
  (:require [reagent.core :as r]
            [re-com.core :as re-com]
            [oddfox.views :as views]
            [oddfox.db :as db]
            [oddfox.events :as events]
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


;; (def sample-metric
;;   {:metricName nil
;;    :claimRelationship "same-claim"      ; "same-claim", "overlap", "same-claim-line"
;;    :metricCodes [{:codeType "procedureCode"
;;                   :codes ["XYZ"]}
;;                  {:codeType "providerCategory"
;;                   :codes ["PR" "OP", "IP"]}]
;;    :filters []
;;    :reducer []})



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

(defn funcs []
  [re-com/h-box
   :gap "1em"
   :justify :around
   :align :stretch
   :children [
              [views/timeframes]
              [views/filters]
              [views/reducers]
              [views/selecters]]])



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


(defn bold-title-header [text]
  [re-com/title
   :label text
   :level :level1
   :style {:font-weight "bold"
           :margin-left "10px"}
   :underline? true])

(defn section-header [text]
  [re-com/title
   :label text
   :level :level2
   :style {:font-weight "bold"
           :margin-left "10px"
           :margin-bottom "20px"}])


(defn front-page
  []
  [:div
   (bold-title-header "Metrics Engine")
   (section-header "All Operations to Create a Metric")
   [funcs]
   (section-header "Selection Summary")])


;; -- Entry Point -------------------------------------------------------------

(defn ^:export run
  []
  (rf/dispatch-sync [::events/initialize])     ;; puts a value into application state
  (r/render [front-page]              ;; mount the application's ui into '<div id="app" />'
                  (js/document.getElementById "app")))
