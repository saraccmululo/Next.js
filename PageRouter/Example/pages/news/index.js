//websitedomain.com/news
import Link from 'next/link';
export default function newsPage(){
  return (
  <>
  <h1>The News page</h1>
   <ul>
        <li>
          <Link href='/news/nextjs-is-a-great-framework'>
            NextJS Is A Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
  </>
  )
}