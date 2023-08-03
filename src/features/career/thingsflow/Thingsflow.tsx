import React from 'react'
import Link from 'next/link'
import { thingsflow } from '@images/career/index'
import { CareerLayout, Role, Tag } from '../common'

const Thingsflow = () => {
  return (
    <CareerLayout
      logo={thingsflow}
      company="Thingsflow"
      period="JAN 2023 ~ 현재"
    >
      <div>
        <Role>
          자사 서비스{' '}
          <Link
            href={'https://www.storyplay.com'}
            target="_blank"
            rel="noreferrer"
            className="text-text-blue"
          >
            스토리플레이
          </Link>{' '}
          웹 기능 개발 및 유지 보수
        </Role>
        <iframe
          src="https://storyplay.com"
          width={600}
          height={450}
          className="max-[640px]:w-[100%] max-[640px]:h-[350px]"
        />
        <ul className="my-[20px] text-[18px] max-[640px]:text-[16px]">
          <li className="text-text-555 leading-[1.8]">
            <strong>✔️ 기간</strong>: 2023. 1.2 ~ 현재
          </li>
          <li className="text-text-555 leading-[1.8]">
            <strong>✔️ Skills </strong>:
            {[
              'Nextjs',
              'React',
              'Typescript',
              'Apollo GraphQL',
              'Redux-toolkit',
              '@emotion/styled',
            ].map((item, i) => (
              <Tag key={i}>{item}</Tag>
            ))}
          </li>
          <li className="text-text-555 leading-[1.8]">
            <strong>✔️ 담당 역할</strong>
            <ul className="my-[5px] pl-[20px]">
              <li>
                ■{' '}
                <Link
                  href={`https://velog.io/@april_5/%ED%86%A0%EC%8A%A4%ED%8E%98%EC%9D%B4%EB%A8%BC%EC%B8%A0-%EA%B2%B0%EC%A0%9C-%EC%9C%84%EC%A0%AF-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-blue"
                >
                  👆 토스페이먼츠 연동
                </Link>
              </li>
              <li>
                ■{' '}
                <Link
                  href={`https://velog.io/@april_5/%EC%9B%B9%EB%B7%B0-%ED%86%B5%EC%8B%A0-React-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EC%95%B1-React-React-%ED%86%B5%EC%8B%A0%ED%95%98%EA%B8%B0`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-blue"
                >
                  {`👆 웹소설 > epub file viewer 개발 및 웹뷰 연동`}
                </Link>
              </li>
              <li>
                ■{' '}
                <Link
                  href={`https://velog.io/@april_5/%EC%8B%A4%EC%8A%B5-%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-%EC%8B%A4%EC%8A%B5%ED%95%98%EA%B8%B0`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-blue"
                >
                  👆 LightHouse를 활용한 성능 최적화
                </Link>
              </li>
              <li>■ Sentry 설정</li>
            </ul>
          </li>
        </ul>
      </div>
    </CareerLayout>
  )
}

export default Thingsflow
