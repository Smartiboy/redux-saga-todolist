import {put, takeEvery} from 'redux-saga/effects';
import {GET_INIT_LIST_ACTION} from "./actionTypes";
import axios from 'axios';
import {initListAction} from "./actionCreator";
import {message} from "antd";

function* getInitList() {
    try {
        const res = yield axios.get('/api/todolist');
        const action = initListAction(res.data);
        yield put(action);
    } catch (e) {
        message.error('数据请求失败',e);
    }
}

// generator 函数
function* todoSagas() {
    yield takeEvery(GET_INIT_LIST_ACTION, getInitList);
}

export default todoSagas;
