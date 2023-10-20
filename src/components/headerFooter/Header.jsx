import React from 'react';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

export default function HeaderComponent() {
  const renderHeaderText = () => {
    let headerText = '';
    if (window.location.pathname.includes('dashboard')) {
      headerText = 'Dashboard';
    } else if (window.location.pathname.includes('product')) {
      headerText = 'Product';
    } else if (window.location.pathname.includes('proforma')) {
      headerText = 'Proforma Invoice';
    } else {
      headerText = null;
    }
    return headerText;
  };

  const onLogoutClick = () => {
    localStorage.clear();
  };

  return (
    <div className="consignment-header-main">
      <h3 className="header-text">{renderHeaderText()}</h3>
      <div className="consignment-header-btn-section">
        <div>
          <UserOutlined className="consignment-user-icon" />
          <span className="consignment-user-name">Admin</span>
        </div>
        <LogoutOutlined className="consignment-logout-icon" onClick={onLogoutClick} />
      </div>
    </div>
  );
}
