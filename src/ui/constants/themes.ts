export const defaultPalette = {
    palette: {
        gray: [
            '#000000',
            '#303030',
            '#696969',
            '#a9a9a9',
            '#dbdbdb',
            '#ffffff'
        ],
        red: [
            '#ff5d5d'
        ],
        orange: [
            '#ffa352'
        ],
        yellow: [
            '#ffd75c'
        ],
        green: [
            '#00d45b',
            '#1bf878',
            '#7affb1'
        ],
        blue: [
            '#1499ff',
            '#56c2ff',
            '#79deff'
        ],
        purple: [
            '#aa50ff',
            '#e08eff'
        ]
    }
}

export const lightTheme = {
    metadata: {
        name: "Light",
        description: "The default light-look for Dot Browser.",
        author: "Dot HQ"
    },
    ...defaultPalette,
    global: {
        selection: {
            backgroundColor: '#0078d4',
            color: '#ffffff'
        },
        font: 'default'
    },
    tab: {
        backgroundColor: '#ffffff',
        defaultBackgroundColor: '#ffffff00',
        textColor: '#000000',
        borderRadius: [6, 6, 0, 0],
        defaultOpacity: 0.7,
        selectedOpacity: 1,
        textSize: '12px',
        font: 'inherit',
        hover: {
            selected: '#ffffff',
            default: '#e0e0e0',
            opacity: 1
        },
        cornerPieces: {
            left: true,
            right: true,
            backgroundColor: '#ffffff'
        },
        throbber: {
            backgroundColor: '#1499ff'
        }
    },
    navigationButton: {
        color: '#000000',
        borderRadius: '100%',
        opacity: 0.9,
        hover: {
            backgroundColor: 'rgba(0,0,0,0.05)'
        },
        active: {
            backgroundColor: 'rgba(0,0,0,0.10)'
        }

    },
    tabsBar: {
        backgroundColor: '#eaeaea',
        addTabBackgroundColor: '#000000'
    },
    navigationBar: {
        backgroundColor: '#ffffff'
    },
    omnibox: {
        backgroundColor: '#f1f3f4',
        textColor: '#303030',
        textSize: '14px',
        font: 'inherit',
        hover: {
            backgroundColor: '#e9ebec'
        },
        focus: {
            backgroundColor: '#ffffff',
            border: {
                width: 1.5,
                color: '#b9d5f8'
            }
        },
        placeholder: {
            opacity: 0.75
        },
        icons: {
            hover: {
                backgroundColor: 'rgba(0,0,0,0.15)'
            },
            active: {
                backgroundColor: 'rgba(0,0,0,0.20)'
            }
        },
        padlockBackgroundColor: '#5F6368',
        bookmarkIconColor: '#1499ff'
    },
    line: {
        backgroundColor: '#eaeaea'
    },
    windowsButtons: {
        invert: false
    }
}

export const darkTheme = {
    metadata: {
        name: "Dark",
        description: "The default night-time-look for Dot Browser.",
        author: "Dot HQ"
    },
    ...defaultPalette,
    global: {
        selection: {
            backgroundColor: '#0078d4',
            color: '#ffffff'
        },
        font: 'default'
    },
    tab: {
        backgroundColor: '#35363a',
        defaultBackgroundColor: '#202124',
        textColor: '#ffffff',
        borderRadius: [6, 6, 0, 0],
        defaultOpacity: 0.7,
        selectedOpacity: 1,
        textSize: '12px',
        font: 'inherit',
        hover: {
            selected: '#35363a',
            default: '#2a2b2f',
            opacity: 1
        },
        cornerPieces: {
            left: true,
            right: true,
            backgroundColor: '#35363a'
        },
        throbber: {
            backgroundColor: '#ffffff'
        }
    },
    navigationButton: {
        color: '#ffffff',
        borderRadius: '100%',
        opacity: 0.9,
        hover: {
            backgroundColor: 'rgba(255,255,255,0.05)'
        },
        active: {
            backgroundColor: 'rgba(255,255,255,0.10)'
        }

    },
    tabsBar: {
        backgroundColor: '#202124',
        addTabBackgroundColor: '#ffffff'
    },
    navigationBar: {
        backgroundColor: '#35363a'
    },
    omnibox: {
        backgroundColor: '#202124',
        textColor: '#ffffff',
        textSize: '14px',
        font: 'inherit',
        hover: {
            backgroundColor: '#292a2d'
        },
        focus: {
            backgroundColor: '#202124',
            border: {
                width: 1.5,
                color: '#62ace4b3'
            }
        },
        placeholder: {
            opacity: 0.75
        },
        icons: {
            hover: {
                backgroundColor: 'rgba(255,255,255,0.15)'
            },
            active: {
                backgroundColor: 'rgba(255,255,255,0.20)'
            }
        },
        padlockBackgroundColor: '#eaeaea',
        bookmarkIconColor: '#56c2ff'
    },
    line: {
        backgroundColor: '#282828'
    },
    windowsButtons: {
        invert: true
    }
}

export const highContrastTheme = {
    metadata: {
        name: "High Contrast",
        description: "The default high contrast theme for assisting people with vision impairment.",
        author: "Dot HQ"
    },
    ...defaultPalette,
    global: {
        selection: {
            backgroundColor: '#1aebff',
            color: 'black'
        },
        font: 'default'
    },
    tab: {
        backgroundColor: 'black',
        defaultBackgroundColor: '#c3b2d3',
        textColor: '#ffffff',
        borderRadius: [6, 6, 0, 0],
        defaultOpacity: 0.7,
        selectedOpacity: 1,
        textSize: '12px',
        font: 'inherit',
        hover: {
            selected: 'black',
            default: 'darkgray',
            opacity: 1
        },
        cornerPieces: {
            left: true,
            right: true,
            backgroundColor: 'black'
        },
        throbber: {
            backgroundColor: 'white'
        }
    },
    navigationButton: {
        color: '#ffffff',
        borderRadius: '0%',
        opacity: 0.9,
        hover: {
            backgroundColor: '#ffff0025'
        },
        active: {
            backgroundColor: '#3ff23f25'
        }

    },
    tabsBar: {
        backgroundColor: '#37006e',
        addTabBackgroundColor: 'white'
    },
    navigationBar: {
        backgroundColor: '#000000'
    },
    omnibox: {
        backgroundColor: 'black',
        textColor: '#ffffff',
        textSize: '14px',
        font: 'inherit',
        border: {
            width: 0.5,
            color: 'white'
        },
        hover: {
            backgroundColor: '#292a2d'
        },
        focus: {
            backgroundColor: 'black',
            border: {
                width: 1.5,
                color: 'white'
            }
        },
        placeholder: {
            opacity: 0.75
        },
        icons: {
            hover: {
                backgroundColor: 'rgba(255,255,255,0.15)'
            },
            active: {
                backgroundColor: 'rgba(255,255,255,0.20)'
            }
        },
        padlockBackgroundColor: '#eaeaea',
        bookmarkIconColor: '#56c2ff'
    },
    line: {
        backgroundColor: 'white'
    },
    windowsButtons: {
        invert: true
    }
}