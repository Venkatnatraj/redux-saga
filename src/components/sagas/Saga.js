

import { take , call  , put} from 'redux-saga/effects'




function* worker(){
    console.log('djfklds');
    yield put({type: "never"})
}


function* WatcherSaga(){
    yield take('Add');
    yield call(worker)
}

export default WatcherSaga