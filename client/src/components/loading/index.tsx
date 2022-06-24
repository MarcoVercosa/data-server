import * as React from 'react';
import GifLoading from "../../assets/loading.gif"
import styled from "styled-components"
import { LoadingStyle } from './style';



export default function Loading() {
    return (
        <>
            <LoadingStyle>
                <img src={GifLoading} alt="loading" />
            </LoadingStyle>
        </>
    );
}