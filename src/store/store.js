import {configureStore} from "@reduxjs/toolkit"
import newSlicer from "../slices/newSlicer"

export const store=configureStore({
    reducer:{
        newSlicer:newSlicer
    }
})