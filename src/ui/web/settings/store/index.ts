

import { observable } from 'mobx';

class Dot {
    @observable
    public selectedSection: 
        | 'ID' 
        | 'SECURITY_AND_PRIVACY' 
        | 'APPEARANCE' 
        | 'SEARCH_ENGINES' 
        | 'KEYCHAIN' 
        | 'DOWNLOADS' 
        | 'LANGUAGE_AND_REGION' 
        | 'PRINTING' 
        | 'EASE_OF_ACCESS' 
        | 'SYSTEM_PROPERTIES' 
        | 'RESET' 
        | 'ABOUT_DOT_BROWSER'
    = 'ID'

    @observable
    public sections = {
        ID: { tabName: 'My Dot ID', icon: 'user' },
        SECURITY_AND_PRIVACY: { tabName: 'Security and privacy', icon: 'shield' },
        APPEARANCE: { tabName: 'Appearance', icon: 'droplet' },
        SEARCH_ENGINES: { tabName: 'Search engines', icon: 'search' },
        KEYCHAIN: { tabName: 'Keychain', icon: 'lock' },
        ADVANCED_DIVIDER: { tabName: 'View More', icon: 'chevron-down', flipped: false },
        DOWNLOADS: { tabName: 'Downloads', icon: 'download', isHiddenByDefault: true, visible: false },
        LANGUAGE_AND_REGION: { tabName: 'Language and region', icon: 'globe', isHiddenByDefault: true, visible: false },
        PRINTING: { tabName: 'Printing', icon: 'printer', isHiddenByDefault: true, visible: false },
        EASE_OF_ACCESS: { tabName: 'Ease of access', icon: 'smile', isHiddenByDefault: true, visible: false },
        SYSTEM_PROPERTIES: { tabName: 'System', icon: 'monitor', isHiddenByDefault: true, visible: false },
        RESET: { tabName: 'Reset', icon: 'trash', isDangerous: true, isHiddenByDefault: true, visible: false }
    }

    public toggleHiddenItems() {
        
    }

    constructor() {
        window.addEventListener('DOMContentLoaded', () => {
            document.title = "Settings"
        })
    }
}

export default new Dot();