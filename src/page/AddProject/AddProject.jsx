import React from "react"

import { Card } from 'antd';

export default function AddProject() {
    return (
        <Card title="新建项目">
            <Card type="inner" title="Inner Card title">
                Inner Card content
            </Card>
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Inner Card title"
            >
                Inner Card content
            </Card>
        </Card>
    )
}


