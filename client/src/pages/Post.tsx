import React from "react";
import { FluidLayout } from "../components/layout/Layout";
import { Container } from "../components/common/Grid";
import styled from "styled-components";
import { ImagesObjectType, LINE_TYPE } from "../components/editor/type";
import { DynamicTagReadOnly } from "../components/editor/LineBlock/DynamicTag";
import { useParams } from "react-router-dom";
import { getPost } from "../api/upload";
import { PostHeaderImage } from "../components/Image/PostHeaderImage";
import ImageBlock from "../components/editor/LineBlock/ImageLineBlock/ImageBlock";
import { useDispatch } from "react-redux";
import { resetImages } from "../modules/images";
import ImageBlockReadonly from "../components/editor/LineBlock/ImageLineBlock/ImageBlockReadonly";
import { Line, LineStyle } from "../components/editor/common/LineStyle";
import { dateFormat } from "../utils/format";
import ProfileBar from "../components/profile/ProfileBar";
// import { Line } from "../components/editor/LineBlock/EditLineBlock";
// import { ImagesObjectType } from "../modules/images";

type PostData = {
  title: string;
  thumbnail: string;
  content: LINE_TYPE[];
  hashtags: string[];
  created_at: string;
};

const Post = () => {
  const dispatch = useDispatch();
  const { post_id } = useParams();

  const [post, setPost] = React.useState<PostData>();

  React.useEffect(() => {
    initPost();
  }, [post_id]);

  const initPost = async () => {
    if (!post_id) return;
    // 이미지 업로드
    try {
      const res = await getPost(post_id);

      if (res.success) {
        console.log(res);
        setPost({ ...res.post, content: res.post.content.content });
        dispatch(resetImages(res.post.content.images));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FluidLayout>
      {post && (
        <>
          <PostHeaderImage thumbnail={post.thumbnail} />
          <Container>
            <PostHead>
              <Tags>{post.hashtags.map((t) => "#" + t)}</Tags>
              <Title>{post.title}</Title>
              <PostDate>{dateFormat(new Date(post.created_at))}</PostDate>
              <ProfileBar profileID={'11'} nickname={'고롱스'}></ProfileBar>
            </PostHead>
            <Content>
              {post.content.map((line) => {
                return (
                  <Line key={line.id}>
                    {line.tag === "ol" ? (
                      <ol start={line.flag + 1}>
                        <DynamicTagReadOnly as={"li"}>
                          {line.html}
                        </DynamicTagReadOnly>
                      </ol>
                    ) : line.tag === "ul" ? (
                      <ul>
                        <DynamicTagReadOnly as={"li"}>
                          {line.html}
                        </DynamicTagReadOnly>
                      </ul>
                    ) : line.tag === "img" ? (
                      <ImageBlockReadonly id={line.id}></ImageBlockReadonly>
                    ) : (
                      <DynamicTagReadOnly as={line.tag}>
                        {line.html}
                      </DynamicTagReadOnly>
                    )}
                  </Line>
                );
              })}
            </Content>
          </Container>
        </>
      )}
    </FluidLayout>
  );
};

export default Post;

const PostHead = styled.div`
  margin: 2rem 0rem;
  ${LineStyle}
`;
const Tags = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};

`;
const Title = styled.h1`
  margin: 0.5rem 0rem;
  font-size: 2rem;
  font-weight: bold;
`;
const PostDate = styled.p`
  margin: 0.5rem 0rem;
`;
const Content = styled.div`
  font-size: 1.25rem;
  // padding: 1rem;
`;