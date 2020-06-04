import { NEWTAB_URL } from "../../constants/web"

const DEFAULT_ERROR_MESSAGE = "Something went wrong"
const DEFAULT_SOLUTION_MESSAGE = "Here’s what you can try to get connected again:"

export const ERRORS = {
    106: {
        code: "ERR_INTERNET_DISCONNECTED",
        emote: "rolling_eyes",
        heading: "You're not connected",
        summary: "It looks like you’re not connected to the internet.",
        solutionHeading: DEFAULT_SOLUTION_MESSAGE,
        solutions: ['Check the cables on your router and modem.', 'Reconnecting to your Wi-Fi network.']
    },
    105: {
        code: "ERR_NAME_NOT_RESOLVED",
        emote: "rolling_eyes",
        heading: "You're not connected",
        summary: "%url’s server IP address could not be found.",
        solutionHeading: DEFAULT_SOLUTION_MESSAGE,
        solutions: ['Check the cables on your router and modem.', 'Reconnecting to your Wi-Fi network.']
    },
    7: {
        code: "ERR_TIMED_OUT",
        emote: "timer",
        heading: DEFAULT_ERROR_MESSAGE,
        summary: "%url took too long to respond.",
        solutionHeading: DEFAULT_SOLUTION_MESSAGE,
        solutions: ['Check your connection to the internet.', 'Try again later.'],
        actionButtons: [
            {
                name: "Refresh",
                action: () => window.location.href = (window as any).realURL
            }
        ]
    },
    310: {
        code: "ERR_TOO_MANY_REDIRECTS",
        emote: "redirects",
        heading: DEFAULT_ERROR_MESSAGE,
        summary: "%url redirected you too many times.",
        solutionHeading: DEFAULT_SOLUTION_MESSAGE,
        solutions: ['This is usually caused by an issue with the site.', '%clearCookies'],
        actionButtons: [
            {
                name: "Refresh",
                action: () => window.location.href = (window as any).realURL
            }
        ]
    },
    201: {
        code: "ERR_CERT_DATE_INVALID",
        emote: "warning",
        heading: "Your connection isn't private",
        summary: "Attackers might be trying to steal your information from %url (for example, passwords, messages or credit cards).",
        solutionHeading: "What went wrong:",
        solutions: ['The server could not prove it is really %url.', 'The security certificate for this site expired %certExpiredWhen.'],
        actionButtons: [
            {
                name: "Go Home",
                action: () => window.location.href = NEWTAB_URL
            }
        ]
    }
}