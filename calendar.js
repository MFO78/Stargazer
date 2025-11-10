// StarGazer Companion calendar.js (replace with full code)
function generateICalendar(params) { return 'BEGIN:VCALENDAR\n...'; }
function downloadICalendar(icsContent, filename = 'stargazer-observation.ics') { /* download logic */ }
function exportObservationPlan(appState) { /* export logic */ }
function showNotification(message, type = 'info') { /* notification logic */ }
// Export (CommonJS compatibility)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateICalendar,
        downloadICalendar,
        exportObservationPlan,
        showNotification
    };
}