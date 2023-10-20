import React, { useState } from 'react';
import { Button, Upload } from 'antd';
import AddProductModal from './AddProductModal';
import DataTable from '../common/dataTable/DataTable';
import searchIcon from '../../assets/icons/search-icon.svg';
import clearIcon from '../../assets/icons/closeIcon.svg';
import ExcelDownload from '../common/excel-download/ExcelDownload';

export default function ProductDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productData = JSON.parse(localStorage.getItem('product-details'));

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const onAddProductBtnClick = () => {
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: 'Production No',
      dataIndex: 'productionNo',
      sorter: {
        compare: (a, b) => (a.productionNo > b.productionNo ? 1 : -1),
      },
    },
    {
      title: 'Sample No',
      dataIndex: 'sampleNo',
      sorter: {
        compare: (a, b) => (a.sampleNo > b.sampleNo ? 1 : -1),
      },
    },
    {
      title: 'No Of Faces',
      dataIndex: 'noOfFaces',
      sorter: {
        compare: (a, b) => (a.noOfFaces > b.noOfFaces ? 1 : -1),
      },
    },
    {
      title: 'Finishing/size in cms',
      dataIndex: 'finishing',
      sorter: {
        compare: (a, b) => (a.finishing > b.finishing ? 1 : -1),
      },
    },
    {
      title: 'Product Images',
      sorter: {
        compare: (a, b) => (a.finishing > b.finishing ? 1 : -1),
      },
      render: record => {
        return (
          <Upload
            listType="picture-card"
            fileList={record?.productUpload?.fileList}
            customRequest={({ onSuccess }) => onSuccess('ok')}
            className="consignment-product-img-list"
          />
        );
      },
    },
  ];

  const [tableData, setTableData] = useState(productData);
  const [searchVal, setSearchVal] = useState('');
  const filterColumns = ['productionNo', 'finishing', 'sampleNo', 'noOfFaces'];

  const onSearchChange = val => {
    const lowercasedValue = val.toLowerCase().trim();
    setSearchVal(lowercasedValue);
    if (lowercasedValue === '') {
      setTableData(productData);
    } else {
      const filteredData = productData?.filter(item => {
        return Object.keys(item).some(key => {
          return filterColumns.includes(key) ? item[key].toString().toLowerCase().includes(lowercasedValue) : false;
        });
      });
      setTableData(filteredData);
    }
  };

  const onSearchTextClear = () => {
    setSearchVal('');
    setTableData(productData);
  };

  const onTableColsChange = (pagination, filters, sorter, extra) => {
    console.log({ sorter });
  };

  return (
    <div className="consignment-product-detail-main">
      <div className="consignment-btn-container">
        <Button type="primary" className="consignment-add-product-btn" onClick={onAddProductBtnClick}>
          Add Product
        </Button>
      </div>

      <div className="consignment-product-search-input">
        <img src={searchIcon} alt="search-icon" className="consignment-product-search-icon" />
        <input
          className="consignment-product-search"
          placeholder="Production No, Sample No, No Of Faces, Finishing"
          onChange={event => onSearchChange(event.target.value)}
          value={searchVal}
        />
        {searchVal && (
          <img
            src={clearIcon}
            alt="clear-icon"
            onClick={onSearchTextClear}
            className="consignment-product-search-clear"
          />
        )}
      </div>

      <div>
        <ExcelDownload columnHeaders={columns} data={productData} />
      </div>

      {tableData?.length > 0 && (
        <DataTable
          columns={columns}
          rowData={tableData}
          onTableColsChange={onTableColsChange}
          tableTitle="Product List"
        />
      )}

      <AddProductModal isModalOpen={isModalOpen} onModalClose={onModalClose} />
    </div>
  );
}
