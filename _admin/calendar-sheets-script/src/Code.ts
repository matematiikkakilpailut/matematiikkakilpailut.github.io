interface EventFormData {
  title: string;
  start_date: string;
  end_date?: string;
  description?: string;
  url?: string;
  display_override?: string;
}

function onOpen(): void {
  SpreadsheetApp.getUi()
    .createMenu('📅 Tapahtumat')
    .addItem('Lisää uusi tapahtuma', 'showEventForm')
    .addToUi();
}

function showEventForm(): void {
  const html = HtmlService.createHtmlOutputFromFile('src/Form')
    .setWidth(450)
    .setHeight(600)
    .setTitle('Lisää uusi tapahtuma');
  SpreadsheetApp.getUi().showModalDialog(html, 'Uusi tapahtuma');
}

/**
 * Processes the form data and appends it to the sheet.
 * @param data The event data from the form
 * @returns Success message
 */
function processForm(data: EventFormData): string {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  const id = Utilities.getUuid();
  const row = [
    id,
    data.start_date,
    data.end_date || data.start_date,
    data.title,
    data.description || '',
    data.url || '',
    data.display_override || ''
  ];
  sheet.appendRow(row);

  return "Tapahtuma lisätty!";
}
