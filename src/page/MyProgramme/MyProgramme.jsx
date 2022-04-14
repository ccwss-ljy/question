import React from "react"

import { Card, List, Alert, Select, Progress } from 'antd'

import {
    ScissorOutlined,
    SendOutlined,
    PieChartOutlined,
    PlayCircleOutlined,
    CopyOutlined,
    HighlightOutlined,
    CloseOutlined,
    CreditCardOutlined
} from '@ant-design/icons';

import './MyProgramme.css'

const { Option } = Select;

export default function MyProgramme() {
    return (
        <Card title='工程列表'>
            <Card type='inner'>
                <List size="middle">
                    {/* 标题 */}
                    <List.Item className='item'>
                        <div className='left'>
                            中国智慧教育发展报告（教师版）
                        </div>
                        <div className='right'>
                            <div className='type'>类型：具名</div>
                            <Alert message="已发布" type="success" showIcon='true' style={{ width: '90px', height: '30px', fontSize: '5px' }}></Alert>
                            <Alert message="进行中" type="info" showIcon='true' style={{ width: '90px', height: '30px', fontSize: '5px' }}></Alert>
                            <div className='date'>2021-10-28</div>
                        </div>
                    </List.Item>
                    {/* 选项 */}
                    <List.Item>
                        <div className='left'>
                            <ScissorOutlined />
                            <Select placeholder='填报设计' bordered={false}>
                                <Option value='guide'>
                                    设计向导
                                </Option>
                                <Option vale='edit'>
                                    填报编辑
                                </Option>
                            </Select>

                            <SendOutlined />
                            <Select placeholder='填报发送' bordered={false}>
                                <Option value='anonymity '>
                                    匿名链接
                                </Option>
                            </Select>

                            <PieChartOutlined />
                            <Select placeholder='结果分析' bordered={false}>
                                <Option value='result'>
                                    查看结果
                                </Option>
                                <Option vale='pretreatment'>
                                    数据预处理
                                </Option>
                            </Select>
                        </div>

                        <div className='right'>
                            <div>
                                <PlayCircleOutlined />
                                发布
                            </div>
                            <div>
                                <CopyOutlined />
                                复制
                            </div>
                            <div>
                                <HighlightOutlined />
                                编辑
                            </div>
                            <div>
                                <CloseOutlined />
                                删除
                            </div>
                            <div>
                                <CreditCardOutlined />
                                文件夹
                            </div>
                        </div>
                    </List.Item>
                    <List.Item className='progress'>
                        <div>答卷进度(8/16)</div>
                        <Progress percent={30} />
                    </List.Item>
                </List>
            </Card>
        </Card>
    );
}