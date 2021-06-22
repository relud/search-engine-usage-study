/**
 * This file contains js objects that detail which content scripts should be loaded for which pages, along with whether they are enabled or not

 */

/**
 * The following objects contain:
 *  -- enabled: whether this content script should be loaded
 *  -- matches/exclude matches: which URL fragments to match
 *  -- js: content script to load
 */
export const serpScripts = [
  {
    enabled: true,
    args: {
      matches: ["*://*.google.com/search?*"],
      js: [{ file: "dist/content-scripts/serp-scripts/google.js" }]
    }
  },
  {
    enabled: true,
    args: {
      matches: ["*://*.duckduckgo.com/*"],
      js: [{ file: "dist/content-scripts/serp-scripts/duckduckgo.js" }]
    }
  },
  {
    enabled: true,
    args: {
      matches: ["*://*.bing.com/search?*"],
      js: [{ file: "dist/content-scripts/serp-scripts/bing.js" }]
    }
  },
  {
    enabled: true,
    args: {
      matches: ["*://*.search.yahoo.com/search*"],
      js: [{ file: "dist/content-scripts/serp-scripts/yahoo.js" }]
    }
  },
  {
    enabled: true,
    args: {
      matches: ["*://*.ecosia.org/search*"],
      js: [{ file: "dist/content-scripts/serp-scripts/ecosia.js" }]
    }
  },
  {
    enabled: true,
    args: {
      matches: ["*://*.yandex.com/search*", "*://*.yandex.ru/search*"],
      js: [{ file: "dist/content-scripts/serp-scripts/yandex.js" }]
    }
  },
  {
    enabled: true,
    args: {
      matches: ["*://*.ask.com/web?*"],
      js: [{ file: "dist/content-scripts/serp-scripts/ask.js" }]
    }
  },
  {
    enabled: true,
    args: {
      matches: ["*://*.baidu.com/*"],
      js: [{ file: "dist/content-scripts/serp-scripts/baidu.js" }]
    }
  },
  {
    enabled: true,
    args: {
      matches: ["*://*.google.com/afs/ads*"],
      js: [{ file: "dist/content-scripts/serp-scripts/askgoogleads.js" }],
      "allFrames": true,
    }
  },
]