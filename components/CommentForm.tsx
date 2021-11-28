import styled from 'styled-components';
import { COLORS } from '../lib/styles';

const STATICMAN_COMMENTS_URL =
  'https://sanggon-blog-next-comments.herokuapp.com';

type Props = {
  pageSlug: string;
};

export default function CommentForm({ pageSlug }: Props) {
  return (
    <form
      method="POST"
      action={`${STATICMAN_COMMENTS_URL}/v3/entry/github/sanggonlee/sanggon-blog-next/main/comments`}
    >
      <input name="options[slug]" type="hidden" value={pageSlug} />

      <Wrapper>
        <Field>
          <span>Name</span>
          <input name="fields[name]" type="text" />
        </Field>
        <Field>
          <span>E-mail (optional)</span>
          <input name="fields[email]" type="email" />
        </Field>
        <MessageField>
          <span>Message</span>
          <textarea name="fields[message]"></textarea>
        </MessageField>

        <button type="submit">Submit</button>
      </Wrapper>
    </form>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${COLORS.primary};
  font-weight: bold;
  padding: 1rem 0;
`;

const Field = styled.label`
  display: flex;
  padding: 0.5rem 0;

  & > span {
    display: inline-block;
    flex: 0 0 12rem;
  }

  & > input {
    flex: 1;
  }
`;

const MessageField = styled(Field)`
  display: block;

  & > textarea {
    display: block;
    width: 100%;
  }
`;
