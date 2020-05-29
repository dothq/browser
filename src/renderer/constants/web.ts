export const NEWTAB_URL = "https://web.tabliss.io/"
export const EXPO_PREFIX = process.env.ENV == "development" ? "http://localhost:9015/" : "dot://"
export const EXPO_SUFFIX = process.env.ENV == "development" ? ".html" : ""
export const SEARCH_ENGINE_URL = "https://google.com/search?q="
export const INJECT_DOT_APIS_WHITELIST = [EXPO_PREFIX, 'dothq.co']