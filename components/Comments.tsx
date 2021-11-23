import { useEffect, useRef } from 'react';

export default function Comments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scriptEl = document.createElement('script');
    scriptEl.setAttribute('theme', 'github-light');
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', 'true');
    scriptEl.setAttribute('repo', 'sanggonlee/sanggon-blog-next');
    scriptEl.setAttribute('issue-term', 'url'); // you can change 'url' with other options
    ref.current.appendChild(scriptEl);
  }, []);

  return (
    <div style={{ width: '100%' }} id="comments">
      <div ref={ref} />
    </div>
  );
}
