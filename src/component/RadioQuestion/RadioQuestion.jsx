import React from 'react'

import { Radio, Divider } from 'antd';

export default function RadioQuestion(props) {
    return (
        <>
            <div style={{ width: '300px', marginRight: '100px' }}>{props.index + 1}.单项选择题</div>
            <div style={{ marginLeft: '-300px', width: '500px' }}>
                <Divider type='vertical' style={{ color: 'black', opacity: '1' }}></Divider>
                <Radio.Group>
                    <Radio>
                        是
                    </Radio>
                    <Radio>
                        否
                    </Radio>
                </Radio.Group>
            </div>
        </>
    );
}