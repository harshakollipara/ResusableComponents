import BaseLocalization from '../../modules/localization-manager/content/base-localization';

export class DateUtility {
    public static getDayByDate(date: string, separator: string) {
        let firstSeparator = date.indexOf(separator);
        let day = date.substring(0, firstSeparator);
        if (day.length < 2) day = '0' + day;
        return day;
    }

    public static getDayAndMonthNameByDate(date: string, separator: string) {
        return this.getDayByDate(date, separator) + ' ' + this.getMonthNameByNumber(Number.parseInt(this.getMonthByDate(date, separator))).substring(0, 3);
    }

    public static getDayAndMonthFullNameByDate(date: string, separator: string) {
        return this.getDayByDate(date, separator) + ' ' + this.getMonthNameByNumber(Number.parseInt(this.getMonthByDate(date, separator)));
    }

    public static getMonthByDate(date: string, separator: string) {
        let firstSeparator = date.indexOf(separator);
        let secondSeparator = date.indexOf(separator, firstSeparator + 1);
        let month = date.substring(firstSeparator + 1, secondSeparator);
        if (month.length < 2) month = '0' + month;
        return month;
    }

    public static getYearByDate(date: string, separator: string) {
        let firstSeparator = date.indexOf(separator);
        let secondSeparator = date.indexOf(separator, firstSeparator + 1);
        return date.substring(secondSeparator + 1, date.length);
    }

    public static getMonthAndYearByDate(date: string, separator: string, withSeparator: boolean = false) {
        const month = this.getMonthByDate(date, separator);
        const year = this.getYearByDate(date, separator);
        return month + (withSeparator ? separator : '') + year;
    }

    public static getYearAndMonthByDate(date: string, separator: string, withSeparator: boolean = false) {
        const month = this.getMonthByDate(date, separator);
        const year = this.getYearByDate(date, separator);
        return year + (withSeparator ? separator : '') + month;
    }

    public static getYearAndMonthByResponseDate(date: string, separator: string, withSeparator: boolean = true) {
        const month = Number.parseInt(date.substring(0, 2), 10);
        const year = Number.parseInt(date.substring(3, 7), 10);
        const dateObj = new Date(year, month - 1);

        const resultDate = this.formatDate(dateObj, 'yyyy' + (withSeparator ? separator : '') + 'MM');

        return resultDate;
    }

    public static formatDate(date: Date, format: string): string {
        var res: string = format;
        if (res.indexOf('dd') >= 0) {
            const day = date.getDate().toString();
            res = res.replace('dd', day.length < 2 ? '0' + day : day);
        }

        if (res.indexOf('MMMM') >= 0) {
            res = res.replace('MMMM', this.getMonthNameByNumber(date.getMonth() + 1));
        } else if (res.indexOf('MM') >= 0) {
            const month = (date.getMonth() + 1).toString();
            res = res.replace('MM', month.length < 2 ? '0' + month : month);
        }

        if (res.indexOf('yyyy') >= 0) {
            res = res.replace('yyyy', date.getFullYear().toString());
        }

        return res;
    }

    public static parse(date: string, separator: string): Date {
        var firstSep = date.indexOf(separator);
        var secondSep = date.indexOf(separator, firstSep + 1);
        var day = date.substring(0, firstSep);
        var month = date.substring(firstSep + 1, secondSep);
        var year = date.substring(secondSep + 1, date.length);
        return new Date(Number.parseInt(year, 10), Number.parseInt(month, 10) - 1, Number.parseInt(day, 10));
    }

    public static addDayToDate(date: Date, daysQuantity: number = 1): Date {
        try {
            date.setDate(date.getDate() + daysQuantity);
        } catch (ex) { }

        return date;
    }

    public static addYearToDate(date: Date, yearsQuantity: number = 1): Date {
        try {
            date.setFullYear(date.getFullYear() + yearsQuantity);
        } catch (ex) { }

        return date;
    }

    public static subtractYearToDate(date: Date, yearsQuantity: number = 1): Date {
        try {
            date.setFullYear(date.getFullYear() - yearsQuantity);
        } catch (ex) { }

        return date;
    }

    public static subtractMonthToDate(date: Date, monthsQuantity: number = 1): Date {
        try {
            date.setMonth(date.getMonth() - monthsQuantity);
        } catch (ex) { }

        return date;
    }

    public static subtractDayToDate(date: Date, daysQuantity: number = 1): Date {
        try {
            date.setDate(date.getDate() - daysQuantity);
        } catch (ex) { }

        return date;
    }

    public static getMonthNameByNumber(month: number): string {
        switch (month) {
            case 1:
                return BaseLocalization.monthJan;

            case 2:
                return BaseLocalization.monthFeb;

            case 3:
                return BaseLocalization.monthMar;

            case 4:
                return BaseLocalization.monthApr;

            case 5:
                return BaseLocalization.monthMay;

            case 6:
                return BaseLocalization.monthJun;

            case 7:
                return BaseLocalization.monthJul;

            case 8:
                return BaseLocalization.monthAug;

            case 9:
                return BaseLocalization.monthSep;

            case 10:
                return BaseLocalization.monthOct;

            case 11:
                return BaseLocalization.monthNov;

            case 12:
                return BaseLocalization.monthDec;

            default:
                return '';
        }
    }

    public static stringDateToDate(date: string): string {
        let changedDate = date
            .split('/')
            .reverse()
            .join('/');
        return changedDate;
    }

    public static checkStringDate(date: string): string {
        if (date == '03/01/0001') {
            return '-';
        }
        return date;
    }
}
