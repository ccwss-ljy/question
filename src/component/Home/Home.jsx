import { Layout, Menu, Modal, Space, Input, Select } from 'antd';

import { Link, Route, Switch, useHistory } from 'react-router-dom'

import React from 'react';

import {
    UserOutlined,
    PlusOutlined,
    AlignRightOutlined,
    PieChartOutlined,
    BlockOutlined
} from '@ant-design/icons';

import './Home.css'

import AddProject from "../../page/AddProject/AddProject"

import MyProgramme from '../../page/MyProgramme/MyProgramme';

import User from "../../page/User/User"

import Role from "../../page/Role/Role"

import Target from "../../page/Target/Target"



const { Header, Content, Sider } = Layout;

const { TextArea } = Input;

const { Option } = Select;


export default function Home() {
    let history = useHistory();

    const [isModalVisible, setModalVisible] = React.useState(false);

    let showModal = () => {
        setModalVisible(!isModalVisible);
    }

    let handleOk = () => {
        setModalVisible(!isModalVisible);  
        console.log("haha");     
        history.push('/projectdesign');
    }

    let handleCancel = () => {
        setModalVisible(!isModalVisible);
    }

    let handleChange = (e) => {
        console.log(e);
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 菜单栏 */}
            <Sider>
                <div className="logo" style={{ color: 'white', height: '6vh', textAlign: 'center', fontSize: '24px', lineHeight: '6vh' }}>
                    常态化检测系统
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PlusOutlined />} onClick={showModal}>
                        <Link className="list-group-item" to="/home/project">新建项目</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<AlignRightOutlined />}>
                        <Link className="list-group-item" to="/home/programme">我的工程</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UserOutlined />}>
                        <Link className="list-group-item" to="/home/user">用户管理</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<PieChartOutlined />}>
                        <Link className="list-group-item" to="/home/role">角色管理</Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<BlockOutlined />}>
                        <Link className="list-group-item" to="/home/target">指标管理</Link>
                    </Menu.Item>
                </Menu>
            </Sider>


            {/* 内容栏 */}
            <Layout className="site-layout">

                {/* <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        Bill is a cat.
                    </div>
                </Content> */}
                <Header className="site-layout-background" style={{ padding: 0, height: '7vh' }} />
                <Content style={{ margin: '32px 16px' }}>
                    <Switch>
                        {/* 添加项目 */}
                        <Route path='/home/project' component={AddProject} />
                        {/* 我的工程 */}
                        <Route path="/home/programme" component={MyProgramme} />
                        {/* 用户管理 */}
                        <Route path="/home/user" component={User} />
                        {/* 角色管理 */}
                        <Route path="/home/role" component={Role} />
                        {/* 指标管理 */}
                        <Route path="/home/target" component={Target} />
                        {/* 重定向 */}
                        {/* <Redirect to='/project'></Redirect> */}
                    </Switch>


                    <Modal title="新建项目" visible={isModalVisible} okText='确定' cancelText='取消' onOk={handleOk} onCancel={handleCancel} width={800}>
                        <Space direction="vertical" size='middle'>
                            <div>项目名称：<Input style={{ width: '35vw' }}></Input></div>
                            <div>项目描述：<TextArea style={{ width: '35vw' }}></TextArea></div>
                            <div>指标体系：<Select defaultValue="请选择" style={{ width: '35vw' }} onChange={handleChange}>
                                <Option value="stable">中国智慧教育发展报告评估指标(正式版)</Option>
                                <Option value="agion">中国智慧教育发展报告指标(区域版)</Option>
                                <Option value="school">中国智慧教育发展报告指标(学校版)</Option>
                                <Option value="noTarget">(无指标)</Option>
                            </Select>
                            </div>
                        </Space>
                    </Modal>
                </Content>



            </Layout>
        </Layout>
    )
}



