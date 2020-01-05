export interface DEFAULT_PREFERENCES {
    appearance: {
        theme: "light" | "dark"
    },
    search: {
        provider: "duckduckgo" | "google" | "bing" | "yahoo" | "ecosia"
    }
}

export const DEFAULT_PREFERENCES_OBJECT: DEFAULT_PREFERENCES = {
    appearance: {
        theme: "light"
    },
    search: {
        provider: "duckduckgo"
    }
}