import styled from "styled-components"

export const ContainerDiv: any = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left:5px;
`

export const Container: any = styled.div`
    display: flex;
    flex-direction: column;
    div{
        padding: 17px;
        h4{
            display:inline-block;
            margin: 0;
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