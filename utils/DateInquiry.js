import { calendar } from "./commonData";

class Dates {

    static getDaysInMonth(month) {
        const year = new Date().getFullYear();
        return new Date(year, month + 1, 0).getDate();
    }
    static getNameAccurrentMonth(month) {
        return calendar[month]
    }
    static getFormattedDate(Date) {
        const date = Date;
        const dateWithoutTime = date.toISOString().split("T")[0];
        const newDate = dateWithoutTime.split('-')
        const indexedResult = [newDate[2],newDate[1],newDate[0]]
        const result = `${newDate[2]}-${newDate[1]}-${newDate[0]}`

        return {result: result, indexedResult: indexedResult}
    }

}
export default Dates;