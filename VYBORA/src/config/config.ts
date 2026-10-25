import {environment} from './environment'; export const config={...environment,isLiveApiConfigured:Boolean(environment.apiBaseUrl)};
