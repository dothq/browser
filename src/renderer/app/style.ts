import { css } from 'styled-components';

import { body2 } from '~/shared/mixins';

export const Style = css`
  body {
    user-select: none;
    cursor: default;
    margin: 0;
    background-color: white;
    padding: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    user-drag: none;
    app-region: no-drag;
    ${body2()}
  }

  * {
    box-sizing: border-box;
  }

  .theme-dark {
    --inactive-toolbar-color: #404040;
    --active-toolbar-color: #000000e8;

    --overlay-default: #000000e8;
    --overlay-text-color: rgba(255, 255, 255, 0.8);
    --overlay-logo-filter: invert(0%);

    --toolbar-text-color: rgba(255, 255, 255, 0.8);
    --toolbar-separator-color: rgba(255,255,255,0.12);
    --toolbar-browser-action-filter: invert(100%);
    --toolbar-logo-filter: invert(0%);
    --toolbar-navigation-filter: invert(100%);
    --toolbar-addtab-filter: invert(100%);

    --general-element: invert(100%);
    --general-title: white;
    --general-subtitle: rgb(218, 218, 218);

    --omnibox-text-color: white;
    --omnibox-placeholder-color: rgba(255, 255, 255, 0.54);
    --omnibox-icon: invert(0%);
    --omnibox-search-icons: invert(100%);

    --context-menu-color: #303030;
    --context-menu-selected: rgba(255,255,255,0.15);
    --context-menu-hover: rgba(255,255,255,0.15);
    --context-menu-item-color: white;
    --context-menu-icon-filter: invert(100%);

    --tab-group-filter: invert(100%);

    --bubble-background: #21212121;
    --bubble-should-invert: invert(100%);
    --bubble-hover: rgba(255,255,255,0.08);
    --bubble-icon-background: #e2e2e2c2;
    --bubble-icon-background-if-favicon: #202020;

    --navigation-bar-background: rgba(255, 255, 255, 0.08);
    --navigation-bar-search-text-color: rgba(255, 255, 255, 0.54);
    --navigation-bar-before-color: white;
    --navigation-bar-item-hover: #0000003d;

    --windows-controls-color: invert(100%);

    --button-border: white;
    --button-text-color: white;
    --button-hover: rgba(255, 255, 255, 0.12);

    --degrees-button-color: #585858c7;

    --email-text-color: white;

    --select-list-background: rgba(255,255,255,0.1);
    --select-list-icon-filter: invert(100%);
    --select-list-items-color: #3e3e3e;
    --select-list-items-text-color: white;
    --select-list-item-hover: rgba(213,213,213,0.06);

    --send-feedback-placeholder-color: white;

    --ext-link-hover: rgba(255,255,255,0.12);

    --a-filter: invert(0%);
    --a-hover: rgba(255,255,255,0.12);

    --snackbar-background: rgba(24,24,24,0.97);
    --snackbar-color: rgb(198,198,198);

    --line-color: #242424;

    --star-invert: invert(100%);
  }

  .theme-light {
    --inactive-toolbar-color: #bababa;
    --active-toolbar-color: #ffffff;

    --overlay-default: #ffffff;
    --overlay-text-color: rgba(0,0,0,0.8);
    --overlay-logo-filter: invert(100%);

    --toolbar-text-color: rgba(0,0,0,0.8);
    --toolbar-separator-color: rgba(0, 0, 0, 0.12);
    --toolbar-browser-action-filter: invert(0%);
    --toolbar-logo-filter: invert(100%);
    --toolbar-navigation-filter: invert(0%);
    --toolbar-addtab-filter: invert(0%);

    --general-element: invert(0%);
    --general-title: black;
    --general-subtitle: gray;

    --omnibox-text-color: dark;
    --omnibox-placeholder-color: rgba(0, 0, 0, 0.54);
    --omnibox-icon: invert(100%);
    --omnibox-search-icons: invert(0%);

    --context-menu-color: #ececec;
    --context-menu-selected: rgba(219, 219, 219, 0.8);
    --context-menu-hover: rgba(33, 33, 33, 0.15);
    --context-menu-item-color: black;
    --context-menu-icon-filter: invert(0%);

    --tab-group-filter: invert(0%);

    --bubble-background: #cecece;
    --bubble-should-invert: invert(0%);
    --bubble-hover: rgba(0, 0, 0, 0.08);
    --bubble-icon-background: #fefefe;
    --bubble-icon-background-if-favicon: #fefefe;

    --navigation-bar-background: rgba(0, 0, 0, 0.07);
    --navigation-bar-search-text-color: rgba(74, 74, 74, 1);
    --navigation-bar-before-color: black;
    --navigation-bar-item-hover: #ffffff3d

    --windows-controls-color: invert(0%);

    --button-border: black;
    --button-text-color: black;
    --button-hover: rgba(0, 0, 0, 0.12) !important;

    --degrees-button-color: #c4c4c4;

    --email-text-color: black;

    --select-list-background: rgba(0, 0, 0, 0.08);
    --select-list-icon-filter: invert(0%);
    --select-list-items-color: #d0d0d0;
    --select-list-items-text-color: black;
    --select-list-item-hover: rgba(0, 0, 0, 0.06);

    --send-feedback-placeholder-color: black;

    --ext-link-hover: rgba(0, 0, 0, 0.12);

    --a-filter: invert(100%);
    --a-hover: rgba(255, 255, 255, 0.15);

    --snackbar-background: rgba(247, 247, 247, 0.97);
    --snackbar-color: rgb(20, 20, 20);

    --line-color: #e5e5e5;

    --star-invert: invert(0%);
  }
`;
