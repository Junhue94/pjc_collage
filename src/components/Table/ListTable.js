import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class ListTable extends Component {
    renderTableHeader = headerList => (
        <Table.Row>
            {headerList.map(({ name, field }) => (
                <Table.HeaderCell key={field}>{name}</Table.HeaderCell>
            ))}
        </Table.Row>
    );

    renderTableBody = (headerList, dataList) => dataList.map(data => (
        <Table.Row key={data._id}>
            {headerList.map(({ field }) => (
                <Table.Cell key={`${field}_${data._id}`}>{data[field]}</Table.Cell>
            ))}
        </Table.Row>
    ));

    render() {
        const { headerList, dataList } = this.props;

        return (
            <Table celled>
                <Table.Header>
                    {this.renderTableHeader(headerList)}
                </Table.Header>
                <Table.Body>
                    {this.renderTableBody(headerList, dataList)}
                </Table.Body>
            </Table>
        );
    }
}

export default ListTable;
