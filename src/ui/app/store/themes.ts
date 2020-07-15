import { ipcRenderer } from "electron";
import { existsSync, readFileSync } from "fs";
import { resolve } from 'path';
import { lightTheme, darkTheme, highContrastTheme } from "../../constants/themes";

export class ThemesStore {
    public store;

    public getThemeData() {
        const ud = this.store.userDataLocation;
        const isCustom = this.store.theme.startsWith("custom_theme:")

        if(isCustom) {
            const themeId = this.store.theme.split("custom_theme:")[1]
            const themePath = resolve(ud, "themes", `theme_${themeId}.json`);
            const themeExists = existsSync(themePath)

            if(themeExists) {
                const data = readFileSync(themePath, 'utf-8')

                if(!this.validateJSON(data)) return;
                let json = JSON.parse(data);

                const lt = lightTheme

                delete lt.metadata;

                json = this.merge({}, lt, json)

                if(
                    !json.metadata || 
                    !json.metadata.name ||
                    !json.metadata.description ||
                    !json.metadata.author ||
                    typeof(json.metadata.name) !== "string" ||
                    typeof(json.metadata.description) !== "string" ||
                    typeof(json.metadata.description) !== "string" ||
                    Array.isArray(json.metadata.name) ||
                    Array.isArray(json.metadata.description) ||
                    Array.isArray(json.metadata.author) 
                ) {
                    ipcRenderer.send('view-destroy', this.store.tabs.selectedTab.id)

                    alert("Your custom theme is missing the required metadata to load.\n\nTo get support, join our Discord server at https://dothq.co/join")

                    return ipcRenderer.send('app-close')
                }

                return json
            } else {
                ipcRenderer.send('view-destroy', this.store.tabs.selectedTab.id)

                alert(`Could not find theme with the name "${themeId}"`)

                return ipcRenderer.send('app-close')
            }
        } else { 
            if(this.store.getSetting("highContrastMode") == true) return highContrastTheme;
            else if(this.store.theme == "light") return lightTheme
            else if(this.store.theme == "dark") return darkTheme
            else return lightTheme
        }
    }

    private validateJSON(json: string) {
        try {
            var o = JSON.parse(json);
            
            if (o && typeof o === "object") {
                return o;
            }
        }
        catch (e) { }
    
        return false;
    }

    private merge(target: any, a?: any, b?: any) {
        for(var i=1; i<arguments.length; ++i) {
            var from = arguments[i];
            if(typeof from !== 'object') continue;
            for(var j in from) {
              if(from.hasOwnProperty(j)) {
                target[j] = typeof from[j]==='object' && !Array.isArray(from[j])
                  ? this.merge({}, target[j], from[j])
                  : from[j];
              }
            }
          }
          return target;
    }

    constructor(store) {
        this.store = store;
    }
}