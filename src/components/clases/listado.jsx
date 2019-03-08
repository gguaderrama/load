import React from 'react'
import ReactTable from 'react-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Alert from '../alerta'

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
                Header: 'Nombre',
                accessor: 'name'
            },
            {
                Header: 'Descripciones',
                accessor: 'categoria',
                Cell: row =>
                    row.original.description.map((e, i) => {
                        return <p key={i}>{e.description}</p>
                    })
            },
            {
                Header: 'Acciones',
                width: 100,
                accessor: 'id',
                sortable: false,
                filterable: false,
                Cell: row => (
                    <div style={{ textAlign: 'center' }}>
                        <button
                            onClick={() => this.props.setEditClass(row.value)}
                        >
                            <FontAwesomeIcon icon={['fas', 'pencil-alt']} />
                        </button>
                        <button
                            onClick={() => this.props.showAlertClass(row.value)}
                        >
                            <FontAwesomeIcon icon={['fas', 'times']} />
                        </button>
                    </div>
                )
            }
        ]
        return (
            <div className="tablas">
                <a onClick={() => this.props.setSaveClass()}>
                    Agregar Clase <FontAwesomeIcon icon="plus-circle" />
                </a>
                <ReactTable
                    data={this.props.clases}
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
                <Alert
                    type="question"
                    visible={this.props.visible_alert_class}
                    handleAlert={() => this.props.showAlertClass(0)}
                    onClick={() => this.props.deleteClub()}
                    title="¿Estas seguro?"
                    message={
                        'Se procederá a eliminar la clase ' + 'seleccionada.'
                    }
                />
            </div>
        )
    }
}

export default Listado
