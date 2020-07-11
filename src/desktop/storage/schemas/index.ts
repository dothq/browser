import { settingsSchema } from "./settings";
import { historySchema } from "./history";
import { faviconSchema } from "./favicon";

export const schemas = {
    settings: settingsSchema,
    history: historySchema,
    favicons: faviconSchema
}