import Link from 'next/link';

export default function Custom404() {
  return (
    <div>
      <h1>404 - That page does not seem to exist...</h1>
      <iframe src="https://giphy.com/embed/ZNnQvIYzIBmZAbrBR7" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/boomerangtoons-boomerang-garfield-and-friends-ZNnQvIYzIBmZAbrBR7">via GIPHY</a></p>
      <Link href='/'>
        <button className='btn-blue'>Take me home</button>
      </Link>
    </div>
  );
}
