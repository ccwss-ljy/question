import React from 'react'

import { Divider, Input } from 'antd'

export default function ManyTextQuestion(props) {
    let inputOnChange = ()=>{

    }
    return (
        <>
        <div style={{ width: '300px', marginRight: '100px' }}>{props.index + 1}.多项文本题</div>
        <div style={{ marginLeft: '-300px', width: '500px', display: 'flex', alignItems: 'center' }}>
            <Divider type='vertical' style={{ color: 'black', opacity: '1' }}></Divider>
            <Input maxLength={10} onChange={inputOnChange}></Input>
            <div>,</div>
            <Input maxLength={10} onChange={inputOnChange}></Input>
        </div>
    </>
    )
}
