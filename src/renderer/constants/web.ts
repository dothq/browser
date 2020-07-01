export const EXPO_PREFIX = process.env.ENV == "development" ? "http://localhost:9015/" : "dot://"
export const EXPO_SUFFIX = process.env.ENV == "development" ? ".html" : ""

export const NEWTAB_URL = `${EXPO_PREFIX}newtab${EXPO_SUFFIX}`

export const SETTINGS_URL = `${EXPO_PREFIX}settings${EXPO_SUFFIX}`
export const BOOKMARKS_URL = `${EXPO_PREFIX}bookmarks${EXPO_SUFFIX}`
export const HISTORY_URL = `${EXPO_PREFIX}history${EXPO_SUFFIX}`
export const DOWNLOADS_URL = `${EXPO_PREFIX}downloads${EXPO_SUFFIX}`

export const REPORT_ISSUES_URL = `https://github.com/dothq/browser/issues/new?template=bug_report.md`
export const HELP_CENTRE_URL = `https://help.dothq.co`

export const SEARCH_ENGINE_URL = "https://duckduckgo.com/"
export const INJECT_DOT_APIS_WHITELIST = [EXPO_PREFIX, 'dothq.co']