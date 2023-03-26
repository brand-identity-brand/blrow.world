import Head from 'next/head'
import css from './index.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Logo from '@/public/google/logo.png'

import Timer from '@/component/Timer'
import { useContext, useRef, useEffect, useState } from 'react';
import { TimerContext } from '@/context/TimerContext';
import { ProgressContext } from '@/context/ProgressContext';

import ReactTestUtils from "react-dom/test-utils";

import Art1 from '@/public/fakeFileServer/Asset 10.png'

export default function Google(props) {
  const {
    keyword,
    searchResult
  } = props;
  const router = useRouter();
  const { stageVisited } = useState(ProgressContext);
  const { TimerState, setTimerState } = useContext(TimerContext);



  return (
    <>
        <Head>
            <title>blrow.world</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={css.main}>
          <Timer speed={1000}/>
          <div className={css.top}>
            {/* <div className={css.logoContainer}>
              <Image
                src={Logo}
                fill
                style={{
                  objectFit: 'contain'
                }}
              />
            </div> */}
            <div className={css.searchBarContainer}>
                <input 
                  type={'text'}
                  defaultValue={router.query.keyword}
                  className={css.input}
                />
                <button
                    className={css.searchButton}
                >
                    Go
                </button>
            </div>
            
          </div>
          <div className={css.mid}>
            { searchResult.map(item => {
              return (
                <div
                    key = { item }  
                    className = { css.searchResultCard}
                >
                  <div
                    className = { css.searchResultCard_left}
                  >
                    <div className = { css.searchResultCard_left_top} >
                      <Image
                        alt={'mask'}
                        src={Art1}
                        fill
                        style={{
                          // width: '100%',
                          // height: 'auto',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    <div>{'#000001'}</div>
                  </div>
                  <div
                    className = { css.searchResultCard_right}
                  >
                    <div className={css.searchResultCard_right_top}>
                      {'add title'}
                    </div>
                    <div className={css.searchResultCard_right_mid}>
                      {'add description'}
                    </div>
                    {/* <div className={css.searchResultCard_right_bot}>
                      {'#0000001'}
                    </div> */}
                  </div>
                  
                </div>
              )
            })}
          </div>
        </main>
    </>
  )
}

export async function getServerSideProps({query}) {
    const { keyword } = query;

    let randomResultLength = Math.floor(Math.random() * 29) + 1;
    let randomSearchResult = [];
    while (randomResultLength > 0) {
      randomSearchResult = [ ...randomSearchResult, randomResultLength ]
      randomResultLength = randomResultLength - 1;
    }
    return {
        props: {
            keyword,
            searchResult: [0]//randomSearchResult
        }, // will be passed to the page component as props
    }
}
