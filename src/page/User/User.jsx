import React from "react"

import { Card, Button, Input, Table, Space } from 'antd'

import {
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    DownloadOutlined
} from '@ant-design/icons'

import './User.css'

const data = [
    {
        key: '1',
        index: '1',
        name: '胡彦斌',
        role: '教师账号',
        createTime: '2021.10.11',
    }
];

const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
    },
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '角色',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
    },
    {
        title: '操作',
        key: 'operate',
        render: () => {
            return (
                <>
                    <Space size='middle'>
                        <Button type='primary' icon={<PlusOutlined />} />
                        <Button type='primary' icon={<EditOutlined />} />
                        <Button type='primary' icon={<DeleteOutlined />} />
                        <Button type='primary' icon={<DownloadOutlined />} />
                    </Space>
                </>
            )
        }
    },
];

export default function User() {
    return (
        <>
            <Card>
                <div className='search'>
                    <div>
                        姓名：
                    </div>
                    <Input placeholder='请输入姓名' style={{ width: '400px', marginRight: '50px' }}></Input>
                    <Button type="primary" style={{ marginRight: '20px' }}>搜索</Button>
                    <Button>取消</Button>
                </div>
            </Card>
            <Card style={{ marginTop: '50px' }}>
                <div className='title'>
                    <div>
                        用户列表
                    </div>
                    <div>
                        <Button type='primary' icon={<DownloadOutlined />} style={{ marginRight:'20px' }}/>
                        <Button type='primary'>创建用户</Button>
                    </div>
                </div>
                <Table columns={columns} dataSource={data} style={{ marginTop: '20px' }} />
            </Card>
        </>
    );
}