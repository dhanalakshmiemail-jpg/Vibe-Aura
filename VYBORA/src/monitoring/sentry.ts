export const initMonitoring=()=>{const d=import.meta.env.VITE_SENTRY_DSN as string|undefined;if(d)console.info('Monitoring DSN configured; connect Sentry SDK in production.');};
