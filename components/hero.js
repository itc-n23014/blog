import styles from 'styles/hero.module.css'
<<<<<<< HEAD
=======
import Image from 'next/image'
import cube from 'images/cube.jpg'

>>>>>>> chapter5
const Hero = ({ title, subtitle, imageOn = false }) => {
  return (
    <div className={styles.flexCotainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
<<<<<<< HEAD
        {imageOn && <figure> [image] </figure>}
=======
>>>>>>> chapter5
      </div>
      {imageOn && (
        <figure>
          {' '}
          <Image
            src={cube}
            alt=''
            sizes='(min-width:1152px) 576px, (min-width:768px) 50vw, 100vw'
            priority
            placeholder='blur'
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </figure>
      )}
    </div>
  )
}
export default Hero
