import React from 'react'

import { Divider, Input } from "antd";

const { TextArea } = Input

export default function TextAreaQuestion(props) {
    // 文本输入个数
    const [count, setCount] = React.useState(0);

    // 输入框数字变化
    let inputOnChange = (e) => {
        setCount(e.target.value.length);
    }
    return (
        <>
            <div style={{ width: '300px', marginRight: '100px' }}>{props.index + 1}.多行文本题</div>
            <div style={{ marginLeft: '-300px', width: '500px', display: 'flex', alignItems: 'center' }}>
                <Divider type='vertical' style={{ color: 'black', opacity: '1' }}></Divider>
                <TextArea bordered={false} autoSize={true} maxLength={100} onChange={inputOnChange}></TextArea>
                <div>{count}/100</div>
            </div>
        </>
    )
}
