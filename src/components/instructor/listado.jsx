import React from "react"
import ReactTable from "react-table"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const datos = [
    { id: 1, nombre: "Antonio", apellido: "Rodriguez Carbajal" },
    { id: 2, nombre: "Luis Alfredo", apellido: "Gonzales Perez" }
]
class Listado extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const columns = [
            {
                Header: "ID",
                accessor: "id",
                width: 60,
                style: { textAlign: "center" }
            },
            {
                Header: "Nombre",
                accessor: "nombre"
            },
            {
                Header: "Apellido",
                accessor: "apellido"
            },
            {
                Header: "Acciones",
                width: 100,
                accessor: "id",
                sortable: false,
                filterable: false,
                Cell: () => (
                    <div style={{ textAlign: "center" }}>
                        <button className="btn-warning">x</button>
                        <button className="btn-danger">x</button>
                    </div>
                )
            }
        ]
        return (
            <div className="tablas">
                <a>
                    Agregar Instructor <FontAwesomeIcon icon="plus-circle" />
                </a>
                <ReactTable
                    data={datos}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    nextText="Siguiente"
                    previousText="Anterior"
                    noDataText="No hay datos"
                    pageText="Página"
                    ofText="de"
                    filterable={true}
                    rowsText="filas"
                />
            </div>
        )
    }
}

export default Listado
