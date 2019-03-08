import React from "react"
import ReactTable from "react-table"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const datos = [
    { id: 1, nombre: "Paquete 20 Clases", clases: "20", precio: "$ 2,500.00", descuento: "$ 2,300.00" },
    { id: 2, nombre: "Paquete 5 Clases", clases: "5", precio: "$ 1,000.00", descuento: "$ 950.00" },
    { id: 2, nombre: "Una Clase", clases: "1", precio: "$ 300.00", descuento: "$ 280.00" }
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
                Header: "Clases",
                accessor: "clases"
            },
            {
                Header: "Precio",
                accessor: "precio"
            },
            {
                Header: "Descuento",
                accessor: "descuento"
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
                    Agregar Paquete <FontAwesomeIcon icon="plus-circle" />
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
