import { FluidLayout } from "../components/layout/Layout";
import { Container } from "../components/common/Grid";

import { Button } from "../components/common/Button";
import Editor from "../components/editor/Editor";

import styled from "styled-components";

const ImageUpload = styled.div`
height: 30rem;
margin-top: 1rem;
margin-bottom: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: repeating-linear-gradient(-21deg, #bdbdbd, #bdbdbd 30px, transparent 30px, transparent 60px, #bdbdbd 60px), repeating-linear-gradient(69deg, #bdbdbd, #bdbdbd 30px, transparent 30px, transparent 60px, #bdbdbd 60px), repeating-linear-gradient(159deg, #bdbdbd, #bdbdbd 30px, transparent 30px, transparent 60px, #bdbdbd 60px), repeating-linear-gradient(249deg, #bdbdbd, #bdbdbd 30px, transparent 30px, transparent 60px, #bdbdbd 60px);
background-size: 3px 100%, 100% 3px, 3px 100% , 100% 3px;
background-position: 0 0, 0 0, 100% 0, 0 100%;
background-repeat: no-repeat;
`;

const Write = () => {
    return (
        <FluidLayout>
            <ImageUpload>
                <p>썸네일을 추가해주세요.</p>
                <Button>업로드</Button>
            </ImageUpload>
            <Container>
                <p>#어쩌구, #저쩌구, #ABC</p>
                <h1>제목을 입력해주세요.</h1>
                <hr/>
                <Editor></Editor>
            </Container>
        </FluidLayout>
    )
}

export default Write;