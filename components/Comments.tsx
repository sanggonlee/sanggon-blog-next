const STATICMAN_COMMENTS_URL =
  'https://sanggon-blog-next-comments.herokuapp.com';

export default function Comments() {
  return (
    <form
      method="POST"
      action={`${STATICMAN_COMMENTS_URL}/v3/entry/github/sanggonlee/sanggon-blog-next/main/comments`}
    >
      <input
        name="options[redirect]"
        type="hidden"
        value="https://my-site.com"
      />

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
