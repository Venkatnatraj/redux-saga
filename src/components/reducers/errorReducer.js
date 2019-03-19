import {IMAGES} from '../constants/Constants';

const errorReducer = (state = null , action)=>{
    switch(action.type){
        case IMAGES.LOAD_FAIL :
            return action.error;

        case IMAGES.LOAD:
        case IMAGES.LOAD_SUCESS :
            return null;

        default :
            return state
    }
}

export default errorReducer;