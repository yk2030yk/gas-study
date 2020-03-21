const main = () => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getActiveSheet()
  const members = getMembersBySheet(sheet)
  Logger.log(members)
}

function getMembersBySheet(Sheet) {
  const rows: string[][] = Sheet.getDataRange().getValues()
  return rows.map((columns, rowNumber) =>
    MembersSpreadSheet.buildMember(rowNumber + 1, columns)
  )
}
