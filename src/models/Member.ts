class MembersSpreadSheet {
  public static COLUMN_NUMBERS = {
    nameSei: 0,
    nameMei: 1,
    email: 2,
    telNo: 3,
    url: 4
  }

  public static buildMember(rowNumber: number, columns: string[]) {
    return new Member(
      rowNumber,
      columns[this.COLUMN_NUMBERS.nameSei],
      columns[this.COLUMN_NUMBERS.nameMei],
      columns[this.COLUMN_NUMBERS.email],
      columns[this.COLUMN_NUMBERS.telNo],
      columns[this.COLUMN_NUMBERS.url]
    )
  }
}

class Member {
  public readonly rowNumber: number
  public readonly nameSei: string
  public readonly nameMei: string
  public readonly email: string
  public readonly telNo: string
  public readonly url: string

  constructor(
    rowNumber: number,
    nameSei: string,
    nameMei: string,
    email: string,
    telNo: string,
    url: string
  ) {
    this.rowNumber = rowNumber
    this.nameSei = nameSei
    this.nameMei = nameMei
    this.email = email
    this.telNo = telNo
    this.url = url
  }
}
