const BaseLocalization = {
    CONFIRM: 'Confirm',
    DEFAULT: 'Default',
    STARTDATE: 'StartDate',
    ENDDATE: 'EndDate',
    monthJan: 'Jan',
    monthFeb: 'Feb',
    monthMar: 'Mar',
    monthApr: 'Apr',
    monthMay: 'May',
    monthJun: 'Jun',
    monthJul: 'Jul',
    monthAug: 'Aug',
    monthSep: 'Sep',
    monthOct: 'Oct',
    monthNov: 'Nov',
    monthDec: 'Dec',
    searchFormType: 'SEARCH FORM TYPE',
    select: 'SELECT',
    check: 'CHECK',
    amount: 'AMOUNT',
    selectAmount: 'Please Enter Amount',
    searchField: 'Please Enter Text',


    set(key: string, value: string): void {
        const loc: any = BaseLocalization;
        loc[key] = value;
    },
};

export default BaseLocalization;
