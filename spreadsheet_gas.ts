function getList(sheetData) {
  var keys = sheetData.splice(0, 1)[0];
  return sheetData.map(function(row) {
    var obj = {};
    row.map(function(item, index) {
      obj[String(keys[index])] = String(item);
    });
    return obj;
  });
}

function doGet() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var rows = {};
  for (var i = 0; i < sheets.length; i++) {
    var name = parseInt(sheets[i].getSheetName());
    if (name > 0) {
      rows[name] = getList(sheets[i].getDataRange().getValues());
    }
  }
  return ContentService.createTextOutput(JSON.stringify(rows, null, 2)).setMimeType(ContentService.MimeType.JSON);
}

