(defproject oddfox "0.10.5"
  :dependencies [[org.clojure/clojure        "1.8.0"]
                 [org.clojure/clojurescript  "1.9.908"]
                 [reagent  "0.7.0"]
                 [re-com "2.2.0-SNAPSHOT" :exclusions [org.clojure/core.async]]
                 [reagent-forms "0.5.42"]
                 [re-frame "0.10.5"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel  "0.5.14"]
            [lein-npm "0.6.2"]
            [lein-doo "0.1.8"]
            [lein-pdo "0.1.1"]]

  :hooks [leiningen.cljsbuild]

  :profiles {:dev
             {:dependencies [
                             [com.cemerick/piggieback "0.2.2"]
                             [re-frisk "0.5.3"]
                             [binaryage/devtools "0.9.4"]
                             [figwheel-sidecar "0.5.14"]]

              :cljsbuild
              {:builds {:client {:figwheel     {:on-jsload "oddfox.core/run"}
                                 :compiler     {:main "oddfox.core"
                                                :asset-path "js"
                                                :optimizations :none
                                                :source-map true
                                                :source-map-timestamp true}}}}}



             :prod {:cljsbuild
                    {:builds {:client {:compiler    {:optimizations :advanced
                                                     :elide-asserts true
                                                     :pretty-print false}}}}}}

  :figwheel {:repl true}

  :clean-targets ^{:protect false} ["resources/public/js"]

  :cljsbuild {:builds {:client {:source-paths ["src"]
                                :compiler     {:output-dir "resources/public/js"
                                               :output-to  "resources/public/js/client.js"}}}})
