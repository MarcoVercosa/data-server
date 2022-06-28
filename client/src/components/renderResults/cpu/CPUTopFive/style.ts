import styled from "styled-components"

export const ContainerNav: any = styled.nav`
    margin-top: 20px;
    padding: 20px
`

export const Container: any = styled.div`
    display: flex;
    flex-direction: column;
    div{
        padding: 17px;
        h4{
            display:inline-block;
            margin: 0
        }
        h2{
            color: gray;
        }
        p{
            display:inline-block;
            margin: 0;
            margin-left: 10px;
            font-weight: bold;
            color: #707372
        }
    }    
`