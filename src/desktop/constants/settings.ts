export const defaultSettings = {
    privacy: {
        trackingProtection: 'strict',
        clearBrowsingOnExit: false,
        doNotTrack: true,
        anonymiseFingerprint: true
    },
    appearance: {
        theme: 'light',
        customTheme: 'unset',
        pageZoom: 100,
        showHomeButton: false,
        showBookmarksBar: true,
        fontSize: "m"
    },
    search: {
        suggestionsFromKeywords: true,
        engine: 'duckduckgo',
        customEngine: 'unset'
    },
    keychain: {
        masterPasswordHint: ''
    },
    downloads: {
        location: 'defaultDownloadsFolder',
        askWhereToSave: false
    },
    languages: {
        language: 'en-US',
        spellCheck: true
    },
    eoa: {
        highContrastMode: false
    },
    system: {
        hardwareAcceleration: true
    }
}