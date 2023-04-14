import React from 'react';

import styled, { CSSProperties } from "styled-components";

import { FluidLayout } from "../components/layout/Layout";
import { Container } from "../components/common/Grid";
import { PrimaryButton } from "../components/common/Button";
import Editor from "../components/editor/Editor";
import { TagInput, TitleInput } from '../components/common/Input';

const ImageUpload = styled.div`
height: 30rem;
margin-top: 1rem;
margin-bottom: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// background-image: repeating-linear-gradient(-21deg, #bdbdbd, #bdbdbd 30px, transparent 30px, transparent 60px, #bdbdbd 60px), repeating-linear-gradient(69deg, #bdbdbd, #bdbdbd 30px, transparent 30px, transparent 60px, #bdbdbd 60px), repeating-linear-gradient(159deg, #bdbdbd, #bdbdbd 30px, transparent 30px, transparent 60px, #bdbdbd 60px), repeating-linear-gradient(249deg, #bdbdbd, #bdbdbd 30px, transparent 30px, transparent 60px, #bdbdbd 60px);
background-size: 3px 100%, 100% 3px, 3px 100% , 100% 3px;
background-position: 0 0, 0 0, 100% 0, 0 100%;
background-repeat: no-repeat;
`;

const Write = () => {

    const [title, setTitle] = React.useState<string>('');
    // const [tags, setTags] = React.useState<string[]>(['어쩌구', '저쩌구', 'ABC']);
    const [tags, setTags] = React.useState<string>('');     // 만약 분리식으로 저장해야 한다면 윗줄식으로로 변경

    const [thumbnailImage, setThumbnailImage] = React.useState<string>('');

    const handleAddImages = (event: React.ChangeEvent<HTMLInputElement>) => {
        const imageLists = event.target.files;

        if (imageLists == null || imageLists.length !== 1) {
            // 이미지 입력 안했음. 잘못된 행동
            return;
        }
        console.log('-----------');
        setThumbnailImage(URL.createObjectURL(imageLists[0]));
    };
    const bgStyle : CSSProperties = {
        backgroundImage: `url(${thumbnailImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    }
    return (
        <FluidLayout>
            <ImageUpload style={bgStyle}>
                {thumbnailImage}
                <p>썸네일을 추가해주세요.</p>
                <PrimaryButton>업로드</PrimaryButton>
                <input type="file" name="thumbnail_file" onChange={handleAddImages} />

            </ImageUpload>
            <Container>
                {/* <p>
                    {
                        tags.map(tag => {
                            return <strong className='primary' key={tag}>#{tag} </strong>
                        })
                    }
                </p> */}
                <TagInput
                    className='outline-none'
                    spellCheck='false'
                    type='text' placeholder='#태그입력' onChange={(e) => { setTags(e.target.value) }}
                />
                <TitleInput
                    className='outline-none'
                    spellCheck='false'
                    type='text' placeholder='제목을 입력해주세요.' onChange={(e) => { setTitle(e.target.value) }}
                />
                {/* <hr/> */}
                <Editor></Editor>
            </Container>
        </FluidLayout>
    )
}

export default Write;