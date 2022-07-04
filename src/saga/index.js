import { takeEvery, takeLatest } from "redux-saga/effects";
import getUserHandler from "./handler/getUserHandler";

export default function* sagaWatcher() {
    yield takeLatest("SET_USER", getUserHandler);
}