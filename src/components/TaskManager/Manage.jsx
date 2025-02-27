import { icon } from "../../../utils/commonData.js";
import "./Manage.css"


function Manage(){
return(
    <div className="resume-task">
        <div className="title line-form">
            <h1>GERENCIAR - TAREFA</h1>
            <button>EDITAR PERFIL</button>
        </div>
        <div className="name-info line-form" id="name">
            <label htmlFor="nome">Nome:</label>
            <div className="name-client">Thiago Liboni</div>
        </div>
        <div className="line-form" style={{justifyContent:"space-between"}}>
            <div id='policy-info' className="info">
                <label htmlFor="apolice">Apólice:</label>
                <div id="policy-number">5123657952</div>
            </div>
            <div id='category' className="info">
                <label htmlFor="categoria">Categoria:</label>
                <div id="category-type">Carro</div>
                <div style={{marginLeft:"10px"}}><i className={icon.car}></i></div>
                <img src={icon.car} width="20" height="20" />
            </div>
            <div id='last-date-renewal' className="info">
                <label htmlFor="ultima-renovacao">Última Renovação:</label>
                <div id="lt-renewal">05/02/2024</div>
            </div>
        </div>
        <div className="line-form">
            <label htmlFor="servicos">Serviços:</label>
            <div id="services">
                <br /> 
                - Tipo de cobertura;<br />
                - Tipo de cobertura;<br />
                - Tipo de cobertura;<br />
                - Tipo de cobertura;<br />
            </div>
        </div>
        <div className="line-form" id="price">
            <label htmlFor="preco">Valor atual:</label>
            <div id="price-number">R$1.000,00</div>
        </div>
        <div className="line-form" style={{justifyContent:"end"}}>
            <button id="renewal" className="btn-renewal">Renovar</button>
            <button id="cancel" className="btn-cancel">Cancelar</button>
        </div>

    </div>
)

}
export default Manage;