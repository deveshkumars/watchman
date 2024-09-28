import { Image } from "lucide-react"

const HeroImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
        <Image>
            src={imgSrc}
            alt=""
        </Image>
    </div>
  )
}

export default HeroImg