import styled from 'styled-components';

type Props = {
  src: string;
  caption?: {
    imgSource?: string;
    text?: string;
  };
}

export default function CaptionedImage({ src, caption }: Props) {
  const { imgSource, text } = caption ?? {};
  return (
    <Wrapper>
      <Img
        src={src}
        alt={src}
        loading="lazy"
      />
      <Caption>
        {text && <div>{text}</div>}
        {imgSource && (
          <div>Source: {<a href={imgSource}>{imgSource}</a>}</div>
        )}
      </Caption>
    </Wrapper>
  );
}

// function formatCaption(src: string, caption: { showSource: boolean, text?: string }): React.ReactElement {
//   return (
//     <span>
//       {isSource ? `Source: ${<a href={text}>{text}</a>}` : text}
//     </span>
//   );
// }

const Wrapper = styled.div`
  text-align: center;
`;

const Img = styled.img`
  display: inline;
`;

const Caption = styled.div`
  color: rgba(117, 117, 117, 1);
`;