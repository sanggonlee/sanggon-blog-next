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

      <label>
        <input name="fields[name]" type="text" />
        Name
      </label>
      <label>
        <input name="fields[email]" type="email" />
        E-mail
      </label>
      <label>
        <textarea name="fields[message]"></textarea>Message
      </label>

      <button type="submit">Go!</button>
    </form>
  );
}
