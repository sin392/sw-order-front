import Image from 'next/image'
import styles from './style.module.css'

import { ImageProps } from 'next/image'

interface FillImageProps extends Omit<ImageProps, 'width' | 'height' | 'fill'> {}

export const FillImage: React.FC<FillImageProps> = (props) => {
  return (
    <div className={styles.container}>
      {/* altは明示的に指定しないとエラー */}
      <Image {...props} alt={props.alt} fill />
    </div>
  )
}
