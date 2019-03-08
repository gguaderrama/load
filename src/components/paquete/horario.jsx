import React from "react"
import ReactTable from "react-table"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const datos = [
    {
        id: 1,
        nombre: "yoga",
        hora: "09:00",
        dia: "21-12-2018",
        categoria: "wellness",
        salon: "Salón A",
        club: "Insurgentes"
    },
    {
        id: 2,
        nombre: "yoga",
        hora: "10:00",
        dia: "21-12-2018",
        categoria: "wellness",
        salon: "Salón A",
        club: "Insurgentes"
    },
    {
        id: 3,
        nombre: "yoga",
        hora: "11:00",
        dia: "21-12-2018",
        categoria: "wellness",
        salon: "Salón A",
        club: "Insurgentes"
    },
    {
        id: 4,
        nombre: "spinning",
        hora: "10:00",
        dia: "21-12-2018",
        categoria: "cycling",
        salon: "Salón B",
        club: "Insurgentes"
    },
    {
        id: 5,
        nombre: "spinning",
        hora: "11:00",
        dia: "21-12-2018",
        categoria: "cycling",
        salon: "Salón B",
        club: "Insurgentes"
    },
    {
        id: 6,
        nombre: "spinning",
        hora: "12:00",
        dia: "21-12-2018",
        categoria: "cycling",
        salon: "Salón B",
        club: "Insurgentes"
    }
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
                Header: "Clase",
                accessor: "nombre"
            },
            {
                Header: "Hora",
                accessor: "hora"
            },
            {
                Header: "Día",
                accessor: "dia"
            },
            {
                Header: "Salón",
                accessor: "salon"
            },
            {
                Header: "Club",
                accessor: "club"
            },
            {
                Header: "Categoría",
                accessor: "categoria"
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
                    Agendar Clase <FontAwesomeIcon icon="plus-circle" />
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
