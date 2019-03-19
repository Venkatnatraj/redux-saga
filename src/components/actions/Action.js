import {IMAGES} from '../constants/Constants';

const loadImages = ()=>({
    type : IMAGES.LOAD
});

const setImages = images =>({
    type : IMAGES.LOAD_SUCESS,
    images
})

const setError = Error=>({
    type : IMAGES.LOAD_FAIL,
    Error
})

export {
    loadImages,
    setImages,
    setError
}