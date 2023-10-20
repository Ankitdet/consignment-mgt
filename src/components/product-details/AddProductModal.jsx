import React, { useState } from 'react';
import { Modal, Form, Input, message, Button, Select, Upload } from 'antd';
import { sampleDropdownData, noOfFacesData, finishingData } from '../../constants/constants';
import { PlusOutlined } from '@ant-design/icons';

export default function AddProductModal({ isModalOpen, onModalClose }) {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const onFinish = values => {
    const getProductData = JSON.parse(localStorage.getItem('product-details'));
    if (getProductData) {
      localStorage.setItem('product-details', JSON.stringify([...getProductData, values]));
    } else {
      localStorage.setItem('product-details', JSON.stringify([values]));
    }
    form.resetFields();
    onModalClose();
    messageApi.open({
      type: 'success',
      content: 'Product Added successfully',
      duration: 3,
    });
  };

  //   useEffect(() => {
  //     if (postNcmCreateActionResponse) {
  //       messageApi.open({
  //         type: postNcmCreateActionResponse ? 'success' : 'error',
  //         content: postNcmCreateActionResponse ? 'NCM action created successfully!' : 'Please try again after sometime!',
  //         duration: 3,
  //       });
  //     }
  //   }, [postNcmCreateActionResponse]);

  const onAddProductReset = () => {
    form.resetFields();
    setFileList([]);
  };

  const onAddProductModalClose = () => {
    onModalClose();
    onAddProductReset();
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  return (
    <div className="consignment-add-product-modal">
      {contextHolder}

      <Modal open={isModalOpen} onCancel={onAddProductModalClose} title="Add Product Details" footer={null} width={800}>
        <Form
          name="consignment_add_product"
          className="consignment-add-product-form"
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
          form={form}
        >
          <div className="add-product-first-row">
            <Form.Item
              name="productionNo"
              label="Production No"
              rules={[
                {
                  required: true,
                  message: 'Please input production no!',
                },
              ]}
              className="production-no-label"
            >
              <Input className="production-no-input" />
            </Form.Item>

            <Form.Item
              name="sampleNo"
              label="Sample No"
              className="sample-no-label"
              //   initialValue={ncmSelectedDevice}
              rules={[
                {
                  required: true,
                  message: 'Please select device type!',
                },
              ]}
            >
              <Select options={sampleDropdownData} placeholder="Sample No" />
            </Form.Item>
          </div>

          <div className="add-product-second-row">
            <Form.Item
              name="noOfFaces"
              label="No Of Faces"
              className="no-of-faces-label"
              //   initialValue={ncmSelectedDevice}
              rules={[
                {
                  required: true,
                  message: 'Please select no of faces!',
                },
              ]}
            >
              <Select options={noOfFacesData} placeholder="No Of Faces" />
            </Form.Item>

            <Form.Item
              name="finishing"
              label="Finishing (in cms)"
              className="Finishing-label"
              //   initialValue={ncmSelectedDevice}
              rules={[
                {
                  required: true,
                  message: 'Please select finishing!',
                },
              ]}
            >
              <Select options={finishingData} placeholder="Finishing (in cms)" />
            </Form.Item>
          </div>

          <div className="add-product-third-row">
            <Form.Item
              name="productUpload"
              label="Product Image"
              className="product-image-label"
              //   initialValue={ncmSelectedDevice}
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please select finishing!',
              //   },
              // ]}
            >
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
                customRequest={({ onSuccess }) => onSuccess('ok')}
                className="consignment-product-img-upload"
              >
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </div>
              </Upload>
            </Form.Item>
          </div>

          <div className="add-product-btn">
            <Form.Item>
              <Button type="primary" htmlType="submit" className="add-form-button">
                Add
              </Button>
              <Button type="primary" onClick={onAddProductReset} htmlType="reset" className="reset-form-button">
                Reset
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
