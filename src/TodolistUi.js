import React from 'react';
import {Button, Input, List} from "antd";

function TodolistUi(props) {
    return (
        <div style={{width: 500,margin: '20px auto'}}>
            <div>
                <Input
                    placeholder={'todo info'}
                    style={{width: 300, marginRight: 20}}
                    onChange={props.handleInputChange}
                    value={props.inputValue}
                />
                <Button type={"primary"} onClick={props.handleAddItem}>提交</Button>
            </div>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (
                        <List.Item>
                            {item}
                            <Button type={"link"} onClick={() => {props.handleDeleteItem(index)}}>删除</Button>
                        </List.Item>
                    )
                }
                style={{marginTop: 20}}
            />
        </div>
    );
}

export default TodolistUi;
