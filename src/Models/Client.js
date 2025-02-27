import Dates from "../../utils/DateInquiry";

class Client {

    static registerClient({data}) {

        const date = Dates.getFormattedDate(new Date()).result
        const result = `
        <div
            id="${data.id}"
            className="w-100 co rounded text-light d-flex px-5 p-1 my-2 c-line-register">
            
            <div id="${data.id}-name" className="w-25 hdt">${data.name}</div>
            <div id="${data.id}-created" className="w-25  text-center">${date}</div>
            <div id="${data.id}-policy" className="w-25  text-center">${data.policy}</div>
            <div id="${data.id}-phone" className="w-25  text-center">${data.phone}</div>

        </div>`
        return result
    }
    
}

export default Client;