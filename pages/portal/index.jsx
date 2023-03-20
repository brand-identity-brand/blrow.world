import Head from 'next/head'
import css from './index.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import thisButton from './thisButton.png'
import thisButtonPressed from './thisButtonPressed.png'
import { useState, useEffect } from 'react'
export default function Portal() {
  const router = useRouter()
  const { id } = router.query

  const [ isButtonPressed, setIsButtonPressed ] = useState(false);
  

  return (
    <>
      <Head>
        <title>blrow.world</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={css.main}>
          <div 
            className={isButtonPressed?  css.thisButtonPressedContainer : css.thisButtonContainer}
            onMouseDown={()=>{
              setIsButtonPressed(true);
            }}
            onClick={()=>{
              // setIsButtonPressed(false);
              setTimeout(()=>{router.push('/twitter')}, 300)
              // router.push('/twitter'); //gallery
            }}
          >
            <Image
              draggable={false}
              src={isButtonPressed? thisButtonPressed : thisButton}
              alt={'THIS button'}
              fill
            />
          </div>
        {/* <Link href={'/'}> home {id} </Link> */}
      </main>
    </>
  )
}

export async function getStaticProps(context) {

  return {
    props: {}, // will be passed to the page component as props
  }
}
