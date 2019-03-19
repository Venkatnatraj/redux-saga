import {IMAGES} from '../constants/Constants';

const imageReducer = (state = [] , action)=>{
    switch(action.type){
        case IMAGES.LOAD_SUCESS:
            return{
                ...state,
                ...action.images
            }
        default:
            return state
    }
}

export default imageReducer;