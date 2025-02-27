import "./Client.css";
import { Tooltip } from "react-tooltip";
import { filterToClient as filter } from "../../../utils/commonData";

function Clients() {
  return (
    <div>
      <div className="title">
        <h1>CLIENTES</h1>
      </div>

      <nav className="d-flex justify-content-between">
        <div
          className="filter-client mx-2 bg-light d-flex"
          style={{ width: "70%" }}
        >
          <i
            className="bi bi-search position-absolute mt-2"
            style={{ marginLeft: "10px" }}
          ></i>
          <input
            className="bg-transparent border-0 ms-5 mt-1"
            style={{ width: "70%" }}
            type="text"
            name="searchClient"
            id="searchClient"
          />
          <button
            id="btn-filter"
            className="bg-transparent border-0 txi text-secondary"
            type="button"
          >
            Buscar
          </button>
          <select
            className="form-select form-select-sm border-0 bg-transparent border-start border-dark-subtle rounded-0 txi text-capitalize"
            style={{ width: "20%" }}
          >
            <option selected>{filter.name}</option>
            <option value="1">{filter.createAt}</option>
            <option value="2">{filter.policy}</option>
            <option value="3">{filter.phone}</option>
          </select>
        </div>

        <i
          className="bi bi-person-plus fs-4 me-3 add-client"
          data-tooltip-id="toolt-1"
        ></i>
        <Tooltip
          id="toolt-1"
          content="Novo Cliente"
          place="right"
          type="dark"
          effect="float"
        />
      </nav>

      <div className="w-100 m-2 bg-dark p-2 rounded" style={{ height: "70vh" }}>
        <div id="headerTable" className="w-100 d-flex text-white-50 px-5 mb-2">
          <div className="w-25 th">{filter.name.toUpperCase()}</div>

          <div className="w-25 th text-center">
            {filter.createAt.toUpperCase()}
          </div>

          <div className="w-25 th text-center">
            {filter.policy.toUpperCase()}
          </div>

          <div className="w-25 th text-center">
            {filter.phone.toUpperCase()}
          </div>

        </div>

        <div id="clientsList" className="c-list mb-2" style={{ height: "87%" }}>
        </div>

        <div
          className="w-100 text-light text-sm-end d-flex justify-content-end"
          id="pagesClient"
          style={{ height: "4%", fontSize: "12px" }}
        >
          <div id="i-Start" className="mx-2">
            01
          </div>{" "}
          -{" "}
          <div id="i-End" className="mx-2">
            100
          </div>
          <input
            type="50"
            name="i-PerPage"
            id="i-PerPage"
            className="bg-transparent h-100 text-light form-control p-2 ms-1 me-3 rounded-1"
            style={{ width: "40px", fontSize: "12px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Clients;
