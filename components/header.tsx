import Link from 'next/link'
import path from '../lib/basePath'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href={path("/")}>
        <a className="hover:underline">Math note</a>
      </Link>
    </h2>
  )
}

export default Header
