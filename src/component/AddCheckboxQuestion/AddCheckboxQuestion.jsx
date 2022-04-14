import React from 'react'

import { Button, Divider, Checkbox } from 'antd'

import { PlusOutlined } from '@ant-design/icons'

export default function AddCheckboxQuestion(props) {
    return (
        <>
            <div style={{ width: '300px', marginRight: '100px' }}>{props.index + 1}.自增选项可选题</div>
            <div style={{ marginLeft: '-300px', width: '500px' }}>
                <Divider type='vertical' style={{ color: 'black', opacity: '1' }}></Divider>
                <Checkbox.Group>
                    <Checkbox>
                        选项一
                    </Checkbox>
                </Checkbox.Group>

                <Button shape='circle' icon={<PlusOutlined />} size='small' style={{ marginLeft: '-5px', marginRight: '10px' }}></Button>
            </div>
        </>
    )
}
