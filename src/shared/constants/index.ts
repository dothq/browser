import { app } from "electron";

export const USER_AGENT =
  `Dot/${app.getVersion()}`;

export const FALLBACK_USER_AGENT =
  `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.0 Safari/537.36`;
