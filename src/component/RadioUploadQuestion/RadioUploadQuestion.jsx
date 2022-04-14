import React from 'react'

import { Button, Divider, Radio } from 'antd'

import { UploadOutlined } from '@ant-design/icons'

export default function RadioUploadQuestion(props) {
    return (
        <>
            <div style={{ width: '300px', marginRight: '100px' }}>{props.index + 1}.单选文件上传题</div>
            <div style={{ marginLeft: '-300px', width: '500px' }}>
                <Divider type='vertical' style={{ color: 'black', opacity: '1' }}></Divider>
                <Radio.Group>
                    <Radio>
                        是
                    </Radio>
                    <Button shape='circle' icon={<UploadOutlined />} size='small' style={{ marginLeft: '-5px', marginRight: '10px' }}></Button>
                    <Radio>
                        否
                    </Radio>
                </Radio.Group>
            </div>
        </>
    )
}
