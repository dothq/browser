export const PROTOCOL_REGEX = /[a-zA-Z-0-9]+:\/\//gi;
export const NAKED_DOMAIN_REGEX = /^(((?!-))(xn--|_{1,1})?[a-z0-9-]{0,61}[a-z0-9]{1,1}\.)*(xn--)?([a-z0-9][a-z0-9\-]{0,60}|[a-z0-9-]{1,30}\.[a-z]{2,})$/;

export const CLEAN_URL_REGEX = /htt(ps?):\/\/(w?w?w?\.?)/gi;
export const REMOVE_TRAILING_SLASH_REGEX = /\/+$/gm;
