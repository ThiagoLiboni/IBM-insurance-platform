import {icon } from "../../utils/commonData.js";
import Dates from "../../utils/DateInquiry.js";

let idProvisorio = 0

class Agenda{

    static getTasks(){
        //request data task
        return [ { date: "2024-01-04", data: {nome:"Thiago Liboni Faria",doc:"51035436",contato:"(12)9 9129-1870"}},
            { date: "2024-01-05", data: {nome:"Thiago Liboni Faria",doc:"51035436",contato:"12991291870"} },
            { date: "2024-01-05", data: {nome:"Thiago Liboni Faria",doc:"51035436",contato:"12991291870"} },
            { date: "2024-01-06", data: {nome:"Thiago Liboni Faria",doc:"51035436",contato:"12991291870"} },
            { date: "2024-02-04", data: {nome:"Thiago Liboni Faria",doc:"51035436",contato:"12991291870"} },
            { date: "2024-02-10", data: {nome:"Thiago Liboni Faria",doc:"51035436",contato:"12991291870"} },
            { date: "2024-03-15", data: {nome:"Thiago Liboni Faria",doc:"51035436",contato:"12991291870"} },
            { date: "2024-03-15", data: {nome:"Thiago Liboni Faria",doc:"51035436",contato:"12991291870"} },
            { date: "2024-04-20", data: {nome:"Thiago Liboni Faria",doc:"51035436",contato:"12991291870"} }]
    }
    static FilterByMonth(agenda){
        const tasks = this.getTasks()
    
        for (let month = 0; month < 12; month++) {
            const tasksList = document.createElement("div");
            tasksList.className = "page";

            const monthTitle = document.createElement('div')
            monthTitle.className="monthTitle"
            monthTitle.textContent= `${Dates.getNameAccurrentMonth(month)}`

            const appointment = document.createElement('div')
            appointment.className="days"



            let days = Dates.getDaysInMonth(month)
            let yearCurrent = 2024
    
            for (let day = 1; day <= days; day++){
                const task = document.createElement('div');
                task.className = "day";
                
                const taskForDay = tasks.filter(t => {
                    const date = t.date.split("-").map(Number);
                    return (
                        date[0] === yearCurrent &&
                        date[1] - 1 === month &&
                        date[2] === day
                    );
                })
                
                tasksList.appendChild(monthTitle)
                tasksList.appendChild(appointment)

                if(taskForDay.length > 0){
                    task.innerHTML=`
                    <div style="width:20%;font-size:30px;margin-right:3px;">${day}</div>`
                    const card = this.createCard(taskForDay);
                if (card) {
                    task.appendChild(card);
                }
                    
                }else{
                    task.className = "free-day"
                }
                appointment.appendChild(task)
            }
            agenda.appendChild(tasksList);
        }
    }
    static createCard(list){

        // if(!userLogger){
        //     console.error('Usuário não permitido')
        //     return
        // }
        
        const taskCard = document.createElement("div");
        taskCard.className = "taskCard";

        list.forEach(element => {
            
            let status = "pendente"
            let notification = 2

            const card = document.createElement("div");
            card.className = "taskUser";
            card.id = idProvisorio
            card.innerHTML = `
                <input type="checkbox" class="checkbox" id="check-${card.id}" >
                <div class="targetName">
                <div class="clientName">${element.data.nome}</div>
                <div class="notifyMessage">${notification}</div>
                </div>
                <div class="numberDoc">
                    <div>${element.data.doc}</div>
                    <div style="font-size:12px;" class="statusCard">${status}</div>
                </div>
                <div class="contactClient">
                    <div>${element.data.contato}</div>
                    <img style="margin: 3px;" src="${icon.whatsapp}" alt="WhatsApp" width="15" height="20">
                </div>
            `;
            const clientName = card.querySelector('.clientName')
            clientName.addEventListener('click',()=>{
                this.manageTasks(card.id, element.data.nome)
            })
            taskCard.appendChild(card);
            idProvisorio++
        });
        return taskCard;
    }
    static manageTasks(target, name) {
        //request profile
        console.log(target , name)
        const url = `/tarefas/${target}/${name}`;
        window.open(url,"_blank", "width=800,height=500");
    }
    
}
export default Agenda;