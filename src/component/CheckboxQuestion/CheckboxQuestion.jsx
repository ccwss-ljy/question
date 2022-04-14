import React from 'react'

import { Divider, Checkbox } from 'antd'

export default function CheckboxQuestion(props) {
    // 自增默认选项
    const [plainOptions, setPlainOptions] = React.useState(['Apple', 'Pear', 'Orange']);
    
    return (
        <>
            <div style={{ width: '300px', marginRight: '100px' }}>{props.index + 1}.多项选择题</div>
            <div style={{ marginLeft: '-300px', width: '500px' }}>
                <Divider type='vertical' style={{ color: 'black', opacity: '1' }}></Divider>
                <Checkbox.Group options={plainOptions}></Checkbox.Group>
            </div>
        </>
    )
}