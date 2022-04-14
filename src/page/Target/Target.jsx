import React from "react"

import { Card, Input, Button, Table } from 'antd'

import {
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons'

const { Search } = Input;


const columns=[{
    title:'序号',
    dataIndex:'index',
    key:'index'
},
{
    title:'标题',
    dataIndex:'title',
    key:'title'
},
{
    title:'描述',
    dataIndex:'description',
    key:'description'
},
{
    title:'操作',
    key:'operate',
    render:()=>(
        <>
            <Button type='primary' icon={<EditOutlined />} style={{ marginRight:'20px' }}/>
            <Button type='primary' icon={<DeleteOutlined />} danger/>
        </>
    )
}];

const data=[{
    index:'1',
    title:'中国智慧教育发展报告评估指标(正式版)',
    description:'中国智慧教育发展报告评估指标(正式版)'
}];

export default function Target() {
    return (
        <>
            <Card>
                <Search placeholder='请输入搜索内容' enterButton style={{ width: '500px' }}>
                </Search>
            </Card>

            <Card>
                <div className='title'>
                    <div>指标列表</div>
                    <Button type='primary'>创建标准</Button>
                </div>
                <Table columns={columns} dataSource={data} style={{ marginTop:'10px' }}></Table>
            </Card>
        </>
    );
}