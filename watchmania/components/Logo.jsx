import Image from 'next/image'
import Link from 'next/link'
import logo from './logo.png';

const Logo = () => {
  return (
    <Link href="/">
        <Image
        src={logo}
        width={300}
        height={300}
        priority alt=''
        />  
    </Link>
  )
}

export default Logo