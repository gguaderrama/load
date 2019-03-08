import React from 'react'
import ReactTable from 'react-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const datos = [
    {
        id: 1,
        nombre: 'yoga',
        hora: '09:00',
        dia: '21-12-2018',
        categoria: 'wellness',
        salon: 'Salón A',
        club: 'Insurgentes'
    },
    {
        id: 2,
        nombre: 'yoga',
        hora: '10:00',
        dia: '21-12-2018',
        categoria: 'wellness',
        salon: 'Salón A',
        club: 'Insurgentes'
    },
    {
        id: 3,
        nombre: 'yoga',
        hora: '11:00',
        dia: '21-12-2018',
        categoria: 'wellness',
        salon: 'Salón A',
        club: 'Insurgentes'
    },
    {
        id: 4,
        nombre: 'spinning',
        hora: '10:00',
        dia: '21-12-2018',
        categoria: 'cycling',
        salon: 'Salón B',
        club: 'Insurgentes'
    },
    {
        id: 5,
        nombre: 'spinning',
        hora: '11:00',
        dia: '21-12-2018',
        categoria: 'cycling',
        salon: 'Salón B',
        club: 'Insurgentes'
    },
    {
        id: 6,
        nombre: 'spinning',
        hora: '12:00',
        dia: '21-12-2018',
        categoria: 'cycling',
        salon: 'Salón B',
        club: 'Insurgentes'
    }
]
class Listado extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const columns = [
            {
                Header: 'ID',
                accessor: 'id',
                width: 60,
                style: { textAlign: 'center' }
            },
            {
                Header: 'Clase',
                accessor: 'id',
                Cell: row => row.original.discipline.name
            },
            {
                Header: 'Hora',
                accessor: 'atTime'
            },
            {
                Header: 'Día',
                accessor: 'atDay'
            },
            {
                Header: 'Entrenador',
                accessor: 'id',
                Cell: row =>
                    row.original.coach.name + ' ' + row.original.coach.surname
            },
            {
                Header: 'Club',
                accessor: 'id',
                Cell: row => row.original.club.name
            },
            {
                Header: 'Acciones',
                width: 100,
                accessor: 'id',
                sortable: false,
                filterable: false,
                Cell: row => (
                    <div style={{ textAlign: 'center' }}>
                        <button onClick={() => {}}>
                            <FontAwesomeIcon icon={['fas', 'pencil-alt']} />
                        </button>
                        <button onClick={() => {}}>
                            <FontAwesomeIcon icon={['fas', 'times']} />
                        </button>
                    </div>
                )
            }
        ]
        return (
            <div className="tablas">
                <a onClick={() => this.props.setSaveHorario()}>
                    Agendar Clase
                    <FontAwesomeIcon icon="plus-circle" />
                </a>
                <ReactTable
                    data={this.props.horarios}
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
