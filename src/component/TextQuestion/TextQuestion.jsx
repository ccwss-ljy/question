import React from "react"

import { Divider, Input } from "antd";

// 单行文本题
export default function TextQuestion(props) {
    // 文本输入个数
    const [count, setCount] = React.useState(0);

    // 输入框数字变化
    let inputOnChange = (e) => {
        setCount(e.target.value.length);
    }
    return (
        <>
            <div style={{ width: '300px', marginRight: '100px' }}>{props.index + 1}.单行文本题</div>
            <div style={{ marginLeft: '-300px', width: '500px', display: 'flex', alignItems: 'center' }}>
                <Divider type='vertical' style={{ color: 'black', opacity: '1' }}></Divider>
                <Input bordered={false} maxLength={10} onChange={inputOnChange}></Input>
                <div>{count}/10</div>
            </div>
        </>
    )
}