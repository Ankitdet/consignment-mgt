import React, { useState, useRef, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FormOutlined,
  SolutionOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import BrandLogo from '../../assets/images/logo.png';
import ShortBrandLogo from '../../assets/images/shortLogo.png';
import HeaderComponent from '../headerFooter/Header';
import AppContent from '../../layout/AppContent';

export default function SideBarLayout() {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [contentStyle, setContentStyle] = useState({});

  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      setContentStyle({ height: `calc(100vh - ${headerRef.current.getBoundingClientRect().height}px)` });
    }
  }, [headerRef]);

  const onMenuItemClick = event => {
    navigate(event?.key);
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={collapsed ? 'consignment-sidebar-main collapsed-sidebar' : 'consignment-sidebar-main'}
      >
        <div className="consignment-header-logo-section">
          <img
            src={collapsed ? ShortBrandLogo : BrandLogo}
            alt="brand-logo"
            className={collapsed ? 'consignment-header-logo short-logo' : 'consignment-header-logo'}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/dashboard']}
          // selectedKeys={[]}
          onClick={onMenuItemClick}
          items={[
            {
              key: '/dashboard',
              icon: <DashboardOutlined className="consignment-sidebar-icons" />,
              label: 'Dashboard',
            },
            {
              key: '/product-details',
              icon: <FormOutlined className="consignment-sidebar-icons" />,
              label: 'Product',
            },
            {
              key: '/proforma-invoice',
              icon: <SolutionOutlined className="consignment-sidebar-icons" />,
              label: 'Proforma Invoice',
            },
          ]}
        />
      </Sider>
      <Layout>
        <div className="consignment-header-layout-main" ref={headerRef}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="consignment-header-layout-collapse-btn"
          />
          <HeaderComponent />
        </div>

        <div style={contentStyle}>
          <AppContent />
        </div>
      </Layout>
    </Layout>
  );
}
