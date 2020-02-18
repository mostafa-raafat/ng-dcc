import { call, put, takeLatest } from "redux-saga/effects";
import { types as configTypes } from "../reducers/config";
import { getAppConfig } from "../../utils/request";

// WORKER //
function* fetchConfig(action) {
  try {
    // fetch config
    const config = yield call(getAppConfig);

    // load config into Redux store
    yield put({
      type: configTypes.SET_CONFIG,
      payload: config
    });
  } catch (e) {
    console.error("SAGA ERROR: config/fetchConfig, ", e);
  }
}

// WATCHER //
export function* watchFetchConfig() {
  yield takeLatest(configTypes.CONFIG_FETCH, fetchConfig);
}
