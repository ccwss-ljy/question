import React from "react"

import { Card, Input, Button, Space, Table } from 'antd'

import {
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons'

const columns = [{
    title: '序号',
    dataIndex: 'index',
    key: 'index'
},
{
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
},
{
    title: '角色级别',
    dataIndex: 'roleLevel',
    key: 'roleLevel'
},
{
    title: '描述',
    dataIndex: 'description',
    key: 'description'
},
{
    title: '操作',
    key: 'operate',
    render: () => (
        <>
            <Button type='primary' icon={<EditOutlined />} style={{ marginRight:'20px' }}/>
            <Button type='primary' icon={<DeleteOutlined />} danger/>
        </>
    )
}
];

const data = [{
    index:'1',
    name:'张三',
    roleLevel:'2',
    description:'问卷人员'
}];

export default function Role() {
    return (
        <>
            <Card style={{ marginBottom: '30px' }}>
                <div className='search'>
                    <div>
                        姓名：
                    </div>
                    <Input placeholder='请输入姓名' style={{ width: '400px', marginRight: '50px' }}></Input>
                    <Button type="primary" style={{ marginRight: '20px' }}>搜索</Button>
                    <Button>取消</Button>
                </div>
            </Card>
            <Space direction='horizontal'>
                <Card style={{ width: "1050px", marginRight: '50px' }}>
                    <Table columns={columns} dataSource={data}></Table>
                </Card> 
                <Card style={{ width: "550px" }}>

                </Card>
            </Space>

        </>
    );
}