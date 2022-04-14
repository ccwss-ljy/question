import React from "react"

import {
    Layout,
    Radio,
    Button,
    Card,
    Space,
    Divider,
    PageHeader,
} from 'antd'

import {
    EyeOutlined,
    DropboxCircleFilled,
    DeleteOutlined,
    CopyOutlined,
} from '@ant-design/icons';

import "./ProjectDesign.css"

// 引入单选题模块
import RadioQuestion from "../../component/RadioQuestion/RadioQuestion";

// 引入单选上传题模块
import RadioUploadQuestion from "../../component/RadioUploadQuestion/RadioUploadQuestion";

// 引入多选题模块
import CheckboxQuestion from "../../component/CheckboxQuestion/CheckboxQuestion";

// 引入多选上传题模块
import CheckboxUploadQuestion from "../../component/CheckboxUploadQuestion/CheckboxUploadQuestion";

// 引入自增选项可选题
import AddCheckboxQuestion from "../../component/AddCheckboxQuestion/AddCheckboxQuestion";

// 引入自增选项可选上传题
import AddCheckboxUploadQuestion from "../../component/AddCheckboxUploadQuestion/AddCheckboxUploadQuestion";

// 引入自增不可选题
import AddCantCheckboxQuestion from "../../component/AddCantCheckboxQuestion/AddCantCheckboxQuestion";

// 引入单选和填空题
import RadioAndInputQuestion from "../../component/RadioAndInputQuestion/RadioAndInputQuestion";

// 引入单行文本模块
import TextQuestion from "../../component/TextQuestion/TextQuestion";

// 多项文本题
import ManyTextQuestion from "../../component/ManyTextQuestion/ManyTextQuestion";

// 多项文本自增题
import AddManyTextQuestion from "../../component/AddManyTextQuestion/AddManyTextQuestion";

// 多项文本自增上传题
import AddManyTextUploadQuestion from "../../component/AddManyTextUploadQuestion/AddManyTextUploadQuestioin";

// 多行文本题
import TextAreaQuestion from "../../component/TextAreaQuestion/TextAreaQuestion";

const { Header, Content } = Layout

export default function ProjectDesign() {

    // 是否显示题
    const [isShow, setIsShow] = React.useState(false);

    // 各类型题组件的插入
    const [questionComponent, setQuestionComponent] = React.useState([]);

    // 点击题型插入题组件
    let selectQuestionComponent = (q) => {

        // 显示题
        setIsShow(true);

        switch (q) {
            // 往题组件中插入单选题
            case 1:
                setQuestionComponent([...questionComponent, 1]);
                break;
            // 往题组件中插入单选上传题
            case 2:
                setQuestionComponent([...questionComponent, 2]);
                break;
            // 往题组件中插入多选题
            case 3:
                setQuestionComponent([...questionComponent, 3]);
                break;
            // 往题组件中插入多选文件上传题
            case 4:
                setQuestionComponent([...questionComponent, 4]);
                break;
            // 往题组件中插入自增选项可选题
            case 5:
                setQuestionComponent([...questionComponent, 5]);
                break;
            // 往题组件中插入自增选项可选文件上传题
            case 6:
                setQuestionComponent([...questionComponent, 6]);
                break;
            // 往题组件中插入自增选项不可选题
            case 7:
                setQuestionComponent([...questionComponent, 7]);
                break;
            // 往题组件中插入单选和填空题
            case 8:
                setQuestionComponent([...questionComponent, 8]);
                break;
            // 往题组件中插入单行文本题
            case 9:
                setQuestionComponent([...questionComponent, 9]);
                break;
            case 10:
                setQuestionComponent([...questionComponent, 10]);
                break;
            case 11:
                setQuestionComponent([...questionComponent, 11]);
                break;
            case 12:
                setQuestionComponent([...questionComponent, 12]);
                break;
            case 13:
                setQuestionComponent([...questionComponent, 13]);
                break;
            case 14:
                setQuestionComponent([...questionComponent, 14]);
                break;
            case 15:
                setQuestionComponent([...questionComponent, 15]);
                break;
            case 16:
                setQuestionComponent([...questionComponent, 16]);
                break;
            case 17:
                setQuestionComponent([...questionComponent, 17]);
                break;
            case 18:
                setQuestionComponent([...questionComponent, 18]);
                break;
            case 19:
                setQuestionComponent([...questionComponent, 19]);
                break;
            case 20:
                setQuestionComponent([...questionComponent, 20]);
                break;
            case 21:
                setQuestionComponent([...questionComponent, 21]);
                break;
            case 22:
                setQuestionComponent([...questionComponent, 22]);
                break;
            default:
                break;
        }
    }


    // 将题组件中的内容与框架组合展示题内容
    let ShowComponent = () => {
        return questionComponent.map((item, index) => (
            <div className='radioQuestion' key={index}>
                {(() => {
                    switch (item) {
                        // 往题组件中插入单选题
                        case 1:
                            return (
                                <RadioQuestion index={index} />
                            )
                        // 往题组件中插入单选文件上传题    
                        case 2:
                            return (
                                <RadioUploadQuestion index={index} />
                            )
                        // 往题组件中插入多选题 
                        case 3:
                            return (
                                <CheckboxQuestion index={index} />
                            )
                        // 往题组件中插入多选文件上传题 
                        case 4:
                            return (
                                <CheckboxUploadQuestion index={index} />
                            )
                        // 往题组件中插入选项自增可选题 
                        case 5:
                            return (
                                <AddCheckboxQuestion index={index} />
                            )
                        // 往题组件中插入选项自增文件上传题 
                        case 6:
                            return (
                                <AddCheckboxUploadQuestion index={index} />
                            )
                        // 往题组件中插入选项自增不可选题 
                        case 7:
                            return (
                                <AddCantCheckboxQuestion index={index} />
                            )
                        // 往题组件中插入单项和填空题
                        case 8:
                            return (
                                <RadioAndInputQuestion index={index} />
                            )
                        // 往题组件中插入单行文本题
                        case 9:
                            return (
                                <TextQuestion index={index} />
                            )
                        // 往题组件中插入多项文本题
                        case 10:
                            return (
                                <ManyTextQuestion index={index} />
                            )
                        // 往题组件中插入多项文本自增题
                        case 11:
                            return (
                                <AddManyTextQuestion index={index} />
                            )
                        // 往题组件中插入多项文本自增上传题
                        case 12:
                            return (
                                <AddManyTextUploadQuestion index={index} />
                            )
                        // 往题组件中插入多行文本题
                        case 13:
                            return (
                                <TextAreaQuestion index={index} />
                            )
                        default:
                            break;
                    }
                })()}
                <div style={{ width: '300px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Divider type='vertical'></Divider>
                    <Button icon={<DeleteOutlined />} shape='circle'></Button>
                    <Button icon={<CopyOutlined />} shape='circle'></Button>
                    <Button>上移</Button>
                    <Button>下移</Button>
                </div>
            </div>
        ));
    }

    return (
        <>
            <Layout>
                <Header>
                    <div className="wrapOuter">
                        <div >
                            <Radio style={{ color: 'white' }}>隐藏系统题号</Radio>
                        </div>
                        <div>
                            <Button icon={<EyeOutlined />} style={{ marginRight: '10px' }}>预览</Button>
                            <Button type='primary'>√完成编辑</Button>
                        </div>
                    </div>
                </Header>
                <Content style={{ height: 900 }}>
                    <Space direction="horizontal" align='start'>

                        {/* 左边添加题组件 */}
                        <Card style={{ width: "313px", height: '800px', overflow: 'auto' }}>
                            <div className="componentTitle">
                                可添加的组件
                            </div>
                            <div className="component">
                                <Divider plain>选择型组件</Divider>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 1)}>单项选择</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 2)}>单选文件上传</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 3)}>多项选择</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 4)}>多选文件上传</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 5)}>选项自增可选</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 6)}>选项自增可选文件上传</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 7)}>选项自增不可选</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 8)}>单选和填空</Button>
                                <Divider plain>输入型组件</Divider>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 9)}>单行文本</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 10)}>多项文本</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 11)}>多项文本自增</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 12)}>多项文本自增文件上传</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 13)}>多行文本</Button>
                                <Divider plain>其他组件</Divider>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 14)}>文本选择</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 15)}>文件上传</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 16)}>表单组件</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 17)}>表格自增</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 18)}>表格计算</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 19)}>无标题表格自增</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 20)}>表格文件上传</Button>
                                <Divider plain>评分组件</Divider>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 21)}>单项评分</Button>
                                <Button className='componentBtn' onClick={selectQuestionComponent.bind(this, 22)}>表单评分</Button>
                            </div>
                        </Card>

                        {/* 右边显示题内容 */}
                        <Card style={{ width: "1210px" }}>

                            {/* 该项目标题 */}
                            <PageHeader
                                className="site-page-header"
                                onBack={false}
                                title="猜猜我是谁"
                                subTitle="让我猜猜你是谁"
                            />

                            {/* 根据是否有题显示内容 */}
                            {
                                isShow ?
                                    (<Card type="inner" style={{ height: '600px', position: 'relative' }}>
                                        {
                                            ShowComponent()
                                        }
                                    </Card>) :
                                    (<Card type="inner" style={{ height: '600px', position: 'relative' }} >
                                        <div className="iconStyle" >
                                            <DropboxCircleFilled style={{
                                                fontSize: '200px',
                                                color: 'gray',
                                                opacity: '0.1'
                                            }} />
                                            <div style={{ marginTop: '10px', opacity: '0.5', textAlign: 'center' }}>开始添加你的题目吧~~~</div>
                                        </div>
                                    </Card>)
                            }
                        </Card>
                    </Space>
                </Content>
            </Layout>
        </>
    );
}