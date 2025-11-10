// StarGazer Companion config.js -- (replace this with actual config from earlier)
const CONFIG = {
    api: {
        openMeteo: { baseUrl: 'https://api.open-meteo.com/v1/forecast', timeout: 10000, maxRetries: 3, retryDelay: 2000 },
        lightPollution: { baseUrl: 'https://www.lightpollutionmap.info' }
    },
    defaultLocation: { latitude: 45.4465, longitude: 8.6196, name: 'Novara, Italy', timezone: 'Europe/Rome' },
    settings: { forecastDays: 8, chartHours: 24, autoUpdateInterval: 300000, enableServiceWorker: true, enableNotifications: false },
    // ...rest of config omitted for brevity...
};
