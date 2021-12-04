import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import useSnackbar from '../lib/hooks/useSnackbar';
import { COLORS, WIDTH } from '../lib/styles';

const STATICMAN_COMMENTS_URL =
  'https://sanggon-blog-next-comments.herokuapp.com';

const formError = Object.freeze({
  nameMissing: 'Name is required',
  messageMissing: 'Message is required',
});

type Props = {
  pageSlug: string;
};

export default function CommentForm({ pageSlug }: Props) {
  const router = useRouter();
  const [openErrorSnackbar] = useSnackbar('error');
  const [openInfoSnackbar] = useSnackbar();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    const form = new URLSearchParams();
    form.append('options[slug]', pageSlug);
    form.append('fields[name]', name);
    form.append('fields[email]', email);
    form.append('fields[message]', message);

    const response = await fetch(
      `${STATICMAN_COMMENTS_URL}/v3/entry/github/sanggonlee/sanggon-blog-next/main/comments`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: form,
      },
    );

    if (!response.ok) {
      openErrorSnackbar('Something went wrong. Please contact me!');
      return;
    }

    openInfoSnackbar('Your comment got submitted.');
    router.reload();
  };

  const validateForm: () => boolean = () => {
    if (!name) {
      openErrorSnackbar(formError.nameMissing);
      return false;
    }

    if (!message) {
      openErrorSnackbar(formError.messageMissing);
      return false;
    }

    return true;
  };

  return (
    <Wrapper>
      <Field>
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={evt => setName(evt.target.value)}
        />
      </Field>
      <Field>
        <span>E-mail (optional)</span>
        <input
          type="email"
          value={email}
          onChange={evt => setEmail(evt.target.value)}
        />
      </Field>
      <MessageField>
        <span>Message</span>
        <textarea
          value={message}
          onChange={evt => setMessage(evt.target.value)}
        ></textarea>
      </MessageField>

      <button onClick={onSubmit}>Submit</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${COLORS.primary};
  padding: 1rem 0;
`;

const Field = styled.label`
  display: flex;
  padding: 0.5rem 0;

  & > span {
    display: inline-block;
    flex: 0 0 12rem;
    font-weight: bold;
  }

  & > input {
    flex: 1;
  }

  @media (max-width: ${WIDTH.mobile}px) {
    flex-direction: column;

    & > span {
      flex: 0;
    }
  }
`;

const MessageField = styled(Field)`
  display: block;

  & > textarea {
    display: block;
    width: 100%;
  }
`;
