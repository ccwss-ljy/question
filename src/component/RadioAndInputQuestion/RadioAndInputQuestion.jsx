import React from 'react'

import { Radio, Divider, Input } from 'antd'

export default function RadioAndInputQuestion(props) {
    return (
        <>
            <div style={{ width: '300px', marginRight: '100px' }}>{props.index + 1}.单项和填空题</div>
            <div style={{ marginLeft: '-300px', width: '500px', display: 'flex', alignItems: 'center' }}>
                <Divider type='vertical' style={{ color: 'black', opacity: '1' }}></Divider>
                <Radio.Group className="radioGroup">
                    <div className="questionCombo">
                        <Radio>
                            是
                        </Radio>
                        <Input></Input>
                    </div>
                    <div className="questionCombo">
                        <Radio>
                            否
                        </Radio>
                        <Input></Input>
                    </div>
                </Radio.Group>
            </div>
        </>
    )
}
