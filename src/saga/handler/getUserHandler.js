import { call, put } from 'redux-saga/effects';
import getMyUser from '../requests/index';

export default function* getUserHandler() {

    try {
        const response = yield call(getMyUser);
        const { data } = response;
        yield put({ type: "SET_USER", payload: data });
    }
    catch (error) {
        console.log(error);
    }

}