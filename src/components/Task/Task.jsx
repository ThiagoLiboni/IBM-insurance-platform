import { useEffect } from "react";
import "./Task.css"
import Agenda from "../../Models/Agenda.js";


function Task(){

    function FilteredByMonth(){
        const agenda = document.getElementById("pagesTask");
        if (!agenda) {
            console.error("Elemento #pagesTasks não encontrado!");
            return;
        }
        agenda.innerHTML = "";
        Agenda.FilterByMonth(agenda)
    }


useEffect(() => {
    FilteredByMonth();
  }, []);

return(
<div>
    <div className="title">
        <h1>TAREFAS</h1>
    </div>
    <nav>
        <div className="task-tools-manager">
            <ul className="task-tools-manager-item">
                <li className="option-text-tools" value="mass-shot">DISPARO EM MASSA</li>
                <div className="spacer">|</div>
                <li className="option-text-tools" value="manager-text">GERENCIAR MENSAGENS</li>
            </ul>
            <div className="filter-period-task">
                <ul className="filter-period-task-item">
                    <li className="option-period">Diario</li>
                    <div className="spacer">|</div>
                    <li className="option-period monthly">Mensal</li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="agenda">
        <div className="pages-task" id="pagesTask">
        </div>
    </div>
</div>
)
}

export default Task;