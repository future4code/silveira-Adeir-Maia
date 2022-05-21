import React from "react";
import useForm from "../Hooks/useForm";
import { Post } from "./contexts";

export const GlobalState = (props) => {

    return (
        <Post.Provider>
            {props.children}
        </Post.Provider>
    )
}