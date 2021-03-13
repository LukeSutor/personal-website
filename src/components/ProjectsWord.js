import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

function ProjectsWord(props) {

  const { ref, inView, entry } = useInView({
    threshold: 0.7
  })

  useEffect(() => {
    if (inView) {
      props.parentCallBack(2)
    }
  }, [inView])

  const transition = useSpring({
    config: { mass: 1, tension: 40, friction: 1, clamp: true },
    transform: `translate3d(${props.scroll / 2 + 700}px, 0, 0)`,
  })

  return (
    <div ref={ref} className="w-full h-full overflow-hidden">
      <div className="relative w-full h-full my-32 leading-none" style={{ zIndex: -1 }}>
        <animated.svg style={transition} width="100%" viewBox="0 0 294 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5/6 h-full mx-auto my-auto">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="25%">
              <stop offset="0%" stopColor="#9039ff" />
              <stop offset="50%" stopColor="#f147f0" />
              <stop offset="100%" stopColor="#ff6e6b" />
            </linearGradient>
          </defs>
          <path transform="translate(1, 1)" d="M0.0138282 43V0.399998H17.6538C19.4938 0.399998 21.1738 0.779998 22.6938 1.54C24.2538 2.3 25.5938 3.34 26.7138 4.66C27.8738 5.94 28.7538 7.38 29.3538 8.98C29.9938 10.54 30.3138 12.14 30.3138 13.78C30.3138 16.1 29.7938 18.3 28.7538 20.38C27.7138 22.42 26.2738 24.08 24.4338 25.36C22.5938 26.64 20.4538 27.28 18.0138 27.28H4.21383V43H0.0138282ZM4.21383 23.56H17.8338C19.5138 23.56 20.9738 23.1 22.2138 22.18C23.4538 21.26 24.4138 20.06 25.0938 18.58C25.7738 17.1 26.1138 15.5 26.1138 13.78C26.1138 12.02 25.7138 10.42 24.9138 8.98C24.1138 7.5 23.0538 6.32 21.7338 5.44C20.4538 4.56 19.0338 4.12 17.4738 4.12H4.21383V23.56ZM37.338 43V0.399998H55.338C57.178 0.399998 58.858 0.779998 60.378 1.54C61.938 2.3 63.278 3.34 64.398 4.66C65.518 5.94 66.378 7.38 66.978 8.98C67.618 10.54 67.938 12.14 67.938 13.78C67.938 15.86 67.538 17.8 66.7381 19.6C65.978 21.4 64.878 22.92 63.438 24.16C61.998 25.4 60.338 26.2 58.458 26.56L68.898 43H64.158L54.138 27.28H41.538V43H37.338ZM41.538 23.56H55.458C57.138 23.56 58.598 23.1 59.838 22.18C61.078 21.22 62.038 20 62.718 18.52C63.398 17.04 63.738 15.46 63.738 13.78C63.738 12.06 63.338 10.48 62.538 9.04C61.778 7.56 60.738 6.38 59.418 5.5C58.098 4.58 56.658 4.12 55.098 4.12H41.538V23.56ZM93.6973 43.3C90.6973 43.3 87.9773 42.7 85.5373 41.5C83.0973 40.26 80.9973 38.62 79.2373 36.58C77.4773 34.54 76.1173 32.24 75.1573 29.68C74.1973 27.08 73.7173 24.42 73.7173 21.7C73.7173 18.86 74.2173 16.16 75.2173 13.6C76.2173 11 77.6173 8.7 79.4173 6.7C81.2573 4.66 83.3973 3.06 85.8373 1.9C88.2773 0.699997 90.9173 0.099998 93.7573 0.099998C96.7173 0.099998 99.4173 0.719998 101.857 1.96C104.297 3.2 106.397 4.86 108.157 6.94C109.957 9.02 111.317 11.34 112.237 13.9C113.197 16.46 113.677 19.08 113.677 21.76C113.677 24.6 113.177 27.32 112.177 29.92C111.177 32.48 109.777 34.78 107.977 36.82C106.177 38.82 104.057 40.4 101.617 41.56C99.1773 42.72 96.5373 43.3 93.6973 43.3ZM77.9173 21.7C77.9173 24.02 78.2973 26.24 79.0573 28.36C79.8173 30.48 80.8973 32.38 82.2973 34.06C83.6973 35.74 85.3573 37.08 87.2773 38.08C89.2373 39.04 91.3773 39.52 93.6973 39.52C96.1373 39.52 98.3173 39.02 100.237 38.02C102.197 36.98 103.857 35.6 105.217 33.88C106.617 32.16 107.677 30.26 108.397 28.18C109.117 26.06 109.477 23.9 109.477 21.7C109.477 19.38 109.097 17.16 108.337 15.04C107.577 12.92 106.477 11.02 105.037 9.34C103.637 7.66 101.977 6.34 100.057 5.38C98.1373 4.42 96.0173 3.94 93.6973 3.94C91.2973 3.94 89.1173 4.44 87.1573 5.44C85.2373 6.44 83.5773 7.8 82.1773 9.52C80.8173 11.2 79.7573 13.1 78.9973 15.22C78.2773 17.34 77.9173 19.5 77.9173 21.7ZM116.655 37.66C117.495 38.26 118.595 38.78 119.955 39.22C121.355 39.66 122.955 39.88 124.755 39.88C127.515 39.88 129.595 39.26 130.995 38.02C132.395 36.74 133.315 34.84 133.755 32.32C134.235 29.8 134.475 26.66 134.475 22.9V0.399998H138.675V22.06C138.675 25.26 138.515 28.18 138.195 30.82C137.875 33.46 137.255 35.74 136.335 37.66C135.415 39.58 134.035 41.06 132.195 42.1C130.355 43.14 127.915 43.66 124.875 43.66C122.915 43.66 121.175 43.44 119.655 43C118.135 42.56 116.735 41.9 115.455 41.02L116.655 37.66ZM177.462 39.28V43H148.842V0.399998H176.922V4.12H153.042V19.48H173.862V23.02H153.042V39.28H177.462ZM181.764 21.4C181.764 18.84 182.204 16.3 183.084 13.78C184.004 11.26 185.324 8.98 187.044 6.94C188.764 4.86 190.884 3.22 193.404 2.02C195.924 0.779998 198.784 0.159997 201.984 0.159997C205.744 0.159997 208.984 1.04 211.704 2.8C214.424 4.52 216.424 6.74 217.704 9.46L214.404 11.5C213.484 9.62 212.324 8.14 210.924 7.06C209.524 5.94 208.024 5.14 206.424 4.66C204.864 4.18 203.304 3.94 201.744 3.94C199.184 3.94 196.924 4.46 194.964 5.5C193.004 6.5 191.344 7.86 189.984 9.58C188.664 11.3 187.664 13.2 186.984 15.28C186.304 17.36 185.964 19.48 185.964 21.64C185.964 24 186.364 26.26 187.164 28.42C187.964 30.54 189.084 32.44 190.524 34.12C191.964 35.8 193.644 37.14 195.564 38.14C197.524 39.1 199.644 39.58 201.924 39.58C203.524 39.58 205.164 39.3 206.844 38.74C208.524 38.18 210.084 37.32 211.524 36.16C212.964 35 214.144 33.5 215.064 31.66L218.544 33.46C217.624 35.58 216.244 37.38 214.404 38.86C212.604 40.34 210.564 41.46 208.284 42.22C206.044 42.98 203.844 43.36 201.684 43.36C198.764 43.36 196.084 42.74 193.644 41.5C191.204 40.22 189.084 38.54 187.284 36.46C185.524 34.34 184.164 31.98 183.204 29.38C182.244 26.74 181.764 24.08 181.764 21.4ZM255.84 4.12H240.66V43H236.46V4.12H221.28V0.399998H255.84V4.12ZM287.121 8.38C285.921 7.06 284.321 5.98 282.321 5.14C280.321 4.26 278.041 3.82 275.481 3.82C271.721 3.82 268.981 4.54 267.261 5.98C265.541 7.38 264.681 9.3 264.681 11.74C264.681 13.42 265.101 14.74 265.941 15.7C266.781 16.66 268.061 17.46 269.781 18.1C271.541 18.7 273.781 19.3 276.501 19.9C279.541 20.54 282.161 21.3 284.361 22.18C286.561 23.06 288.261 24.26 289.461 25.78C290.661 27.26 291.261 29.28 291.261 31.84C291.261 34.44 290.601 36.6 289.281 38.32C287.961 40.04 286.141 41.32 283.821 42.16C281.501 42.96 278.861 43.36 275.901 43.36C269.261 43.36 263.561 41.3 258.801 37.18L260.901 33.76C262.421 35.36 264.501 36.74 267.141 37.9C269.821 39.06 272.781 39.64 276.021 39.64C279.381 39.64 282.021 39.02 283.941 37.78C285.861 36.54 286.821 34.7 286.821 32.26C286.821 30.5 286.341 29.1 285.381 28.06C284.421 26.98 282.981 26.1 281.061 25.42C279.141 24.74 276.781 24.08 273.981 23.44C271.021 22.76 268.521 22 266.481 21.16C264.481 20.32 262.961 19.22 261.921 17.86C260.881 16.5 260.361 14.66 260.361 12.34C260.361 9.7 261.001 7.48 262.281 5.68C263.601 3.84 265.401 2.46 267.681 1.54C269.961 0.579998 272.581 0.099998 275.541 0.099998C278.341 0.099998 280.861 0.539998 283.101 1.42C285.341 2.26 287.361 3.46 289.161 5.02L287.121 8.38Z" fill="url(#gradient)" />
          <path d="M0.0138282 43V0.399998H17.6538C19.4938 0.399998 21.1738 0.779998 22.6938 1.54C24.2538 2.3 25.5938 3.34 26.7138 4.66C27.8738 5.94 28.7538 7.38 29.3538 8.98C29.9938 10.54 30.3138 12.14 30.3138 13.78C30.3138 16.1 29.7938 18.3 28.7538 20.38C27.7138 22.42 26.2738 24.08 24.4338 25.36C22.5938 26.64 20.4538 27.28 18.0138 27.28H4.21383V43H0.0138282ZM4.21383 23.56H17.8338C19.5138 23.56 20.9738 23.1 22.2138 22.18C23.4538 21.26 24.4138 20.06 25.0938 18.58C25.7738 17.1 26.1138 15.5 26.1138 13.78C26.1138 12.02 25.7138 10.42 24.9138 8.98C24.1138 7.5 23.0538 6.32 21.7338 5.44C20.4538 4.56 19.0338 4.12 17.4738 4.12H4.21383V23.56ZM37.338 43V0.399998H55.338C57.178 0.399998 58.858 0.779998 60.378 1.54C61.938 2.3 63.278 3.34 64.398 4.66C65.518 5.94 66.378 7.38 66.978 8.98C67.618 10.54 67.938 12.14 67.938 13.78C67.938 15.86 67.538 17.8 66.7381 19.6C65.978 21.4 64.878 22.92 63.438 24.16C61.998 25.4 60.338 26.2 58.458 26.56L68.898 43H64.158L54.138 27.28H41.538V43H37.338ZM41.538 23.56H55.458C57.138 23.56 58.598 23.1 59.838 22.18C61.078 21.22 62.038 20 62.718 18.52C63.398 17.04 63.738 15.46 63.738 13.78C63.738 12.06 63.338 10.48 62.538 9.04C61.778 7.56 60.738 6.38 59.418 5.5C58.098 4.58 56.658 4.12 55.098 4.12H41.538V23.56ZM93.6973 43.3C90.6973 43.3 87.9773 42.7 85.5373 41.5C83.0973 40.26 80.9973 38.62 79.2373 36.58C77.4773 34.54 76.1173 32.24 75.1573 29.68C74.1973 27.08 73.7173 24.42 73.7173 21.7C73.7173 18.86 74.2173 16.16 75.2173 13.6C76.2173 11 77.6173 8.7 79.4173 6.7C81.2573 4.66 83.3973 3.06 85.8373 1.9C88.2773 0.699997 90.9173 0.099998 93.7573 0.099998C96.7173 0.099998 99.4173 0.719998 101.857 1.96C104.297 3.2 106.397 4.86 108.157 6.94C109.957 9.02 111.317 11.34 112.237 13.9C113.197 16.46 113.677 19.08 113.677 21.76C113.677 24.6 113.177 27.32 112.177 29.92C111.177 32.48 109.777 34.78 107.977 36.82C106.177 38.82 104.057 40.4 101.617 41.56C99.1773 42.72 96.5373 43.3 93.6973 43.3ZM77.9173 21.7C77.9173 24.02 78.2973 26.24 79.0573 28.36C79.8173 30.48 80.8973 32.38 82.2973 34.06C83.6973 35.74 85.3573 37.08 87.2773 38.08C89.2373 39.04 91.3773 39.52 93.6973 39.52C96.1373 39.52 98.3173 39.02 100.237 38.02C102.197 36.98 103.857 35.6 105.217 33.88C106.617 32.16 107.677 30.26 108.397 28.18C109.117 26.06 109.477 23.9 109.477 21.7C109.477 19.38 109.097 17.16 108.337 15.04C107.577 12.92 106.477 11.02 105.037 9.34C103.637 7.66 101.977 6.34 100.057 5.38C98.1373 4.42 96.0173 3.94 93.6973 3.94C91.2973 3.94 89.1173 4.44 87.1573 5.44C85.2373 6.44 83.5773 7.8 82.1773 9.52C80.8173 11.2 79.7573 13.1 78.9973 15.22C78.2773 17.34 77.9173 19.5 77.9173 21.7ZM116.655 37.66C117.495 38.26 118.595 38.78 119.955 39.22C121.355 39.66 122.955 39.88 124.755 39.88C127.515 39.88 129.595 39.26 130.995 38.02C132.395 36.74 133.315 34.84 133.755 32.32C134.235 29.8 134.475 26.66 134.475 22.9V0.399998H138.675V22.06C138.675 25.26 138.515 28.18 138.195 30.82C137.875 33.46 137.255 35.74 136.335 37.66C135.415 39.58 134.035 41.06 132.195 42.1C130.355 43.14 127.915 43.66 124.875 43.66C122.915 43.66 121.175 43.44 119.655 43C118.135 42.56 116.735 41.9 115.455 41.02L116.655 37.66ZM177.462 39.28V43H148.842V0.399998H176.922V4.12H153.042V19.48H173.862V23.02H153.042V39.28H177.462ZM181.764 21.4C181.764 18.84 182.204 16.3 183.084 13.78C184.004 11.26 185.324 8.98 187.044 6.94C188.764 4.86 190.884 3.22 193.404 2.02C195.924 0.779998 198.784 0.159997 201.984 0.159997C205.744 0.159997 208.984 1.04 211.704 2.8C214.424 4.52 216.424 6.74 217.704 9.46L214.404 11.5C213.484 9.62 212.324 8.14 210.924 7.06C209.524 5.94 208.024 5.14 206.424 4.66C204.864 4.18 203.304 3.94 201.744 3.94C199.184 3.94 196.924 4.46 194.964 5.5C193.004 6.5 191.344 7.86 189.984 9.58C188.664 11.3 187.664 13.2 186.984 15.28C186.304 17.36 185.964 19.48 185.964 21.64C185.964 24 186.364 26.26 187.164 28.42C187.964 30.54 189.084 32.44 190.524 34.12C191.964 35.8 193.644 37.14 195.564 38.14C197.524 39.1 199.644 39.58 201.924 39.58C203.524 39.58 205.164 39.3 206.844 38.74C208.524 38.18 210.084 37.32 211.524 36.16C212.964 35 214.144 33.5 215.064 31.66L218.544 33.46C217.624 35.58 216.244 37.38 214.404 38.86C212.604 40.34 210.564 41.46 208.284 42.22C206.044 42.98 203.844 43.36 201.684 43.36C198.764 43.36 196.084 42.74 193.644 41.5C191.204 40.22 189.084 38.54 187.284 36.46C185.524 34.34 184.164 31.98 183.204 29.38C182.244 26.74 181.764 24.08 181.764 21.4ZM255.84 4.12H240.66V43H236.46V4.12H221.28V0.399998H255.84V4.12ZM287.121 8.38C285.921 7.06 284.321 5.98 282.321 5.14C280.321 4.26 278.041 3.82 275.481 3.82C271.721 3.82 268.981 4.54 267.261 5.98C265.541 7.38 264.681 9.3 264.681 11.74C264.681 13.42 265.101 14.74 265.941 15.7C266.781 16.66 268.061 17.46 269.781 18.1C271.541 18.7 273.781 19.3 276.501 19.9C279.541 20.54 282.161 21.3 284.361 22.18C286.561 23.06 288.261 24.26 289.461 25.78C290.661 27.26 291.261 29.28 291.261 31.84C291.261 34.44 290.601 36.6 289.281 38.32C287.961 40.04 286.141 41.32 283.821 42.16C281.501 42.96 278.861 43.36 275.901 43.36C269.261 43.36 263.561 41.3 258.801 37.18L260.901 33.76C262.421 35.36 264.501 36.74 267.141 37.9C269.821 39.06 272.781 39.64 276.021 39.64C279.381 39.64 282.021 39.02 283.941 37.78C285.861 36.54 286.821 34.7 286.821 32.26C286.821 30.5 286.341 29.1 285.381 28.06C284.421 26.98 282.981 26.1 281.061 25.42C279.141 24.74 276.781 24.08 273.981 23.44C271.021 22.76 268.521 22 266.481 21.16C264.481 20.32 262.961 19.22 261.921 17.86C260.881 16.5 260.361 14.66 260.361 12.34C260.361 9.7 261.001 7.48 262.281 5.68C263.601 3.84 265.401 2.46 267.681 1.54C269.961 0.579998 272.581 0.099998 275.541 0.099998C278.341 0.099998 280.861 0.539998 283.101 1.42C285.341 2.26 287.361 3.46 289.161 5.02L287.121 8.38Z" fill="white" />
        </animated.svg>
      </div>
    </div>
  );
}

export default ProjectsWord