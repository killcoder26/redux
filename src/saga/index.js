import { takeEvery } from "redux-saga/effects";
import getUserHandler from "./handler/getUserHandler";

export default function* sagaWatcher() {
    yield takeEvery("SET_USER", getUserHandler);
}