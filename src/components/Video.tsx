import Styled from "./Video.styled";

type VideoProps = {
  embedId: string;
  title: string;
};

export const Video = (props: VideoProps) => {
  const { embedId, title } = props;

  return (
    <Styled.Wrapper>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </Styled.Wrapper>
  );
};
