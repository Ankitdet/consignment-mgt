import React from 'react';
import { Table } from 'antd';

export default function DataTable({
  columns,
  rowData,
  onTableColsChange,
  tableClassName,
  tableRowSelection,
  tablePagination,
  tableScroll,
  tableFooter,
  tableOnRowClick,
  isTableRowSelection,
  tableTitle,
  isRowClickEnabled,
}) {
  const onChange = (pagination, filters, sorter, extra) => {
    onTableColsChange(pagination, filters, sorter, extra);
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      tableRowSelection(selectedRowKeys, selectedRows);
    },
  };

  const onRowClick = (row, index) => {
    if (isRowClickEnabled) {
      return { onClick: e => tableOnRowClick(row, index) };
    }
  };

  const renderTableTitle = () => {
    return tableTitle ? <h6>{tableTitle}</h6> : '';
  };
  return (
    <Table
      columns={columns}
      dataSource={rowData}
      onChange={onChange}
      className={`datatable-main ${tableClassName}`}
      rowSelection={isTableRowSelection ? rowSelection : ''}
      pagination={tablePagination}
      scroll={tableScroll}
      footer={() => tableFooter || ''}
      title={renderTableTitle}
      onRow={onRowClick}
    />
  );
}
