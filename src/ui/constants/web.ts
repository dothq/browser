export const WEBUI_PREFIX = process.env.ENV == "development" ? "http://localhost:9015/" : "dot://"
export const WEBUI_SUFFIX = process.env.ENV == "development" ? ".html" : ""

export const NEWTAB_URL = `${WEBUI_PREFIX}newtab${WEBUI_SUFFIX}`

export const SETTINGS_URL = `${WEBUI_PREFIX}settings${WEBUI_SUFFIX}`
export const BOOKMARKS_URL = `${WEBUI_PREFIX}bookmarks${WEBUI_SUFFIX}`
export const HISTORY_URL = `${WEBUI_PREFIX}history${WEBUI_SUFFIX}`
export const DOWNLOADS_URL = `${WEBUI_PREFIX}downloads${WEBUI_SUFFIX}`

export const REPORT_ISSUES_URL = `https://github.com/dothq/browser/issues/new?template=bug_report.md`
export const HELP_CENTRE_URL = `https://help.dothq.co`

export const SEARCH_ENGINE_URL = "https://duckduckgo.com/"
export const INJECT_DOT_APIS_WHITELIST = [WEBUI_PREFIX, 'dothq.co']