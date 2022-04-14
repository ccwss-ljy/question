import React from 'react'

import { Button, Divider, Checkbox } from 'antd'

import { UploadOutlined } from '@ant-design/icons'

export default function CheckboxUploadQuestion(props) {
    return (
        <>
            <div style={{ width: '300px', marginRight: '100px' }}>{props.index + 1}.多选上传题</div>
            <div style={{ marginLeft: '-300px', width: '500px' }}>
                <Divider type='vertical' style={{ color: 'black', opacity: '1' }}></Divider>
                <Checkbox.Group>
                    <Checkbox>
                        选项一
                    </Checkbox>
                    <Button shape='circle' icon={<UploadOutlined />} size='small' style={{ marginLeft: '-5px', marginRight: '10px' }}></Button>
                    <Checkbox>
                        选项二
                    </Checkbox>
                    <Button shape='circle' icon={<UploadOutlined />} size='small' style={{ marginLeft: '-5px', marginRight: '10px' }}></Button>
                </Checkbox.Group>
            </div>
        </>
    )
}
