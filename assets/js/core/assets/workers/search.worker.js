self.onmessage = function (event) {
  if (!event.data || !event.data.type) {
    self.postMessage({
      type: "error",
      message: "Missing action type",
      data: event,
    });
    return;
  }

  switch (event.data.type) {
    case "initialize":
      if (event.data.features && event.data.taxonomies)
        self._initialize(
          event.data.taxonomies,
          event.data.features,
          event.data.lang ? event.data.lang : undefined,
          event.data.minZoom,
          event.data.maxZoom,
          event.data.tableTaxonomies || undefined
        );
      else
        self.postMessage({
          type: "error",
          message: "Missing features or taxonomies",
          data: event,
        });
      break;
    default:
      self.postMessage({
        type: "error",
        message: "Unknown action",
        data: event,
      });
      break;
  }
};

self._initialize = function (
  taxonomies,
  features,
  lang,
  minZoom,
  maxZoom,
  tableTaxonomies
) {
  if (!self.cordova && self.location.href.indexOf("localhost") !== -1)
    console.log("Initializing search...");
  var poiList = [],
    trackList = [],
    routeList = [];

  if (!tableTaxonomies) {
    tableTaxonomies = {
      poi: ["webmapp_category"],
      track: ["activity"],
      route: ["activity", "theme", "when", "where", "who"],
    };
  }

  if (Object.keys(features).length > 0) {
    for (var id in features) {
      var feature = features[id];
      if (typeof feature !== "undefined") {
        if (
          feature.geometry.type === "LineString" ||
          feature.geometry.type === "MultiLineString"
        ) {
          trackList.push(
            this._initializeEntry(
              taxonomies,
              feature,
              lang.current || lang.default || undefined,
              lang.default || undefined,
              tableTaxonomies
            )
          );

          if (
            feature.properties.minZoom &&
            feature.properties.minZoom >= minZoom &&
            feature.properties.minZoom <= maxZoom
          )
            trackList[trackList.length - 1].minZoom =
              feature.properties.minZoom;
        } else if (feature.properties.route) {
          routeList.push(
            this._initializeEntry(
              taxonomies,
              feature,
              lang.current || lang.default || undefined,
              lang.default || undefined,
              tableTaxonomies
            )
          );

          if (
            feature.properties.minZoom &&
            feature.properties.minZoom >= minZoom &&
            feature.properties.minZoom <= maxZoom
          )
            routeList[routeList.length - 1].minZoom =
              feature.properties.minZoom;
        } else {
          poiList.push(
            this._initializeEntry(
              taxonomies,
              feature,
              lang.current || lang.default || undefined,
              lang.default || undefined,
              tableTaxonomies
            )
          );

          if (
            feature.properties.minZoom &&
            feature.properties.minZoom >= minZoom &&
            feature.properties.minZoom <= maxZoom
          )
            poiList[poiList.length - 1].minZoom = feature.properties.minZoom;
        }
      }
    }
  }

  self.postMessage({
    type: "searchList",
    data: {
      poi: poiList,
      track: trackList,
      route: routeList,
    },
  });

  if (!self.cordova && self.location.href.indexOf("localhost") !== -1) {
    console.log(
      "Search initialized:\n - " +
        poiList.length +
        " pois\n - " +
        trackList.length +
        " tracks\n - " +
        routeList.length +
        " routes"
    );
  }
};

self._getFeatureName = function (feature, currentLang, defaultLang) {
  if (
    feature.properties.translations &&
    feature.properties.translations[currentLang] &&
    feature.properties.translations[currentLang].name
  )
    return feature.properties.translations[currentLang].name;
  else if (
    feature.properties.translations &&
    feature.properties.translations[defaultLang] &&
    feature.properties.translations[defaultLang].name
  )
    return feature.properties.translations[defaultLang].name;
  else if (feature.properties.name) return feature.properties.name;
};

self._getTaxonomiesText = function (
  taxonomies,
  feature,
  currentLang,
  defaultLang,
  tableTaxonomies
) {
  var text = "",
    categories = [];

  if (feature.geometry.type === "Point") {
    if (!feature.properties.route) categories = tableTaxonomies.poi;
    else categories = tableTaxonomies.route;
  } else {
    categories = tableTaxonomies.track;
    if (
      categories.indexOf("theme") === -1 &&
      feature.properties.taxonomy &&
      feature.properties.taxonomy.theme &&
      feature.properties.taxonomy.theme.indexOf("my-routes") !== -1
    )
      categories.push("theme");
  }

  for (var i in feature.properties.taxonomy) {
    if (categories.indexOf(i) !== -1) {
      for (var j of feature.properties.taxonomy[i]) {
        var tmp = undefined;

        for (var k in taxonomies) {
          if (taxonomies[k] && taxonomies[k][j]) {
            tmp = taxonomies[k][j];
            break;
          }
        }

        if (tmp) {
          if (
            tmp.translations &&
            tmp.translations[currentLang] &&
            tmp.translations[currentLang].name
          ) {
            if (text !== "") text += ", ";

            text += tmp.translations[currentLang].name;
          } else if (
            tmp.translations &&
            tmp.translations[defaultLang] &&
            tmp.translations[defaultLang].name
          ) {
            if (text !== "") text += ", ";

            text += tmp.translations[defaultLang].name;
          } else if (tmp.name) {
            if (text !== "") text += ", ";

            text += tmp.name;
          }
        }
      }
    }
  }

  return text;
};

self._initializeEntry = function (
  taxonomies,
  feature,
  currentLang,
  defaultLang,
  tableTaxonomies
) {
  var entry = {
    id: feature.properties.id,
    image: feature.properties.image,
    name: this._getFeatureName(feature, currentLang, defaultLang),
    subtitle: this._getTaxonomiesText(
      taxonomies,
      feature,
      currentLang,
      defaultLang,
      tableTaxonomies
    ),
    type:
      feature.geometry.type === "Point" && !feature.properties.route
        ? "poi"
        : feature.geometry.type === "Point" && feature.properties.route
        ? "route"
        : "track",
    showInResults:
      !feature.properties.noDetails && !feature.properties.noInteraction,
    preventFilter: feature.properties.preventFilter ? true : false,
    startHidden: !!feature.properties.startHidden ? true : false
  };

  if (entry.type !== "poi") {
    entry.difficulty = feature.properties.difficulty;
    if (feature.properties.distance) {
      if (feature.properties.distance.toFixed)
        entry.distance =
          feature.properties.distance > 150
            ? (feature.properties.distance / 1000).toFixed(1) + " km"
            : feature.properties.distance.toFixed(1) + " km";
      else {
        if (
          "" + feature.properties.distance ===
          parseFloat(feature.properties.distance + "") + ""
        ) {
          var tmpDist = parseFloat(feature.properties.distance + "");
          entry.distance =
            tmpDist > 150
              ? (tmpDist / 1000).toFixed(1) + " km"
              : tmpDist.toFixed(1) + " km";
        } else entry.distance = feature.properties.distance + "";
      }
    }
    entry.durationForward = feature.properties["duration:forward"];
    if (typeof entry.durationForward === "string") {
      if (!Number.isNaN(parseInt(entry.durationForward.slice(-1))))
        entry.durationForward += " h";
    }
    entry.ascent = feature.properties.ascent;
    entry.descent = feature.properties.descent;
    entry.stages = feature.properties.stages;
    entry.code = feature.properties.code;
  }

  if (entry.type === "route") {
    entry.languages = "";
    var languages = [];

    if (feature.properties.locale) languages.push(feature.properties.locale);

    if (feature.properties.translations) {
      for (var i in feature.properties.translations) {
        if (languages.indexOf(i) === -1) languages.push(i);
      }
    }

    for (var lang of languages) {
      if (entry.languages !== "") entry.languages += "-";

      entry.languages += lang.toUpperCase();
    }
  }

  return entry;
};
