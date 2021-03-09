import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

function ProjectsWord(props) {

  const { ref, inView, entry } = useInView({
    threshold: 0.51
  })

  useEffect(() => {
    if (inView) {
      props.parentCallBack(2)
    }
  }, [inView])

  const transition = useSpring({
    config: { mass: 1, tension: 40, friction: 1, clamp: true },
    // transform: `translate3d(${props.scroll / 2 + 600}px, 0, 0)`,
    marginLeft: `${props.scroll / 2 + 600}px`
  })

  return (
    <div ref={ref} className="w-full h-full overflow-hidden">
      <div className="w-full h-full my-20 leading-none" style={{ zIndex: -1 }}>
        <animated.svg style={transition} width="100%" viewBox="0 0 293 45" fill="none" xmlns="http://www.w3.org/2000/svg" 
        className="w-5/6 h-full mx-auto my-auto">
          <path d="M1.01383 44H0.813828V44.2H1.01383V44ZM1.01383 1.4V1.2H0.813828V1.4H1.01383ZM23.6938 2.54L23.6044 2.71889L23.6062 2.7198L23.6938 2.54ZM27.7138 5.66L27.5612 5.78946L27.5656 5.7943L27.7138 5.66ZM30.3538 9.98L30.1665 10.0503L30.1688 10.0559L30.3538 9.98ZM29.7538 21.38L29.932 21.4708L29.9327 21.4694L29.7538 21.38ZM25.4338 26.36L25.548 26.5242L25.548 26.5242L25.4338 26.36ZM5.21383 28.28V28.08H5.01383V28.28H5.21383ZM5.21383 44V44.2H5.41383V44H5.21383ZM5.21383 24.56H5.01383V24.76H5.21383V24.56ZM26.0938 19.58L26.2756 19.6635L26.2756 19.6635L26.0938 19.58ZM25.9138 9.98L25.7379 10.0751L25.739 10.0771L25.9138 9.98ZM22.7338 6.44L22.6205 6.60482L22.6229 6.60641L22.7338 6.44ZM5.21383 5.12V4.92H5.01383V5.12H5.21383ZM1.21383 44V1.4H0.813828V44H1.21383ZM1.01383 1.6H18.6538V1.2H1.01383V1.6ZM18.6538 1.6C20.4654 1.6 22.1144 1.97389 23.6044 2.71888L23.7833 2.36111C22.2332 1.5861 20.5223 1.2 18.6538 1.2V1.6ZM23.6062 2.7198C25.1414 3.4677 26.4593 4.49056 27.5613 5.78939L27.8663 5.5306C26.7284 4.18944 25.3663 3.1323 23.7814 2.3602L23.6062 2.7198ZM27.5656 5.7943C28.7089 7.05581 29.5755 8.47412 30.1666 10.0502L30.5411 9.90977C29.9321 8.28588 29.0388 6.82419 27.862 5.52569L27.5656 5.7943ZM30.1688 10.0559C30.7992 11.5925 31.1138 13.1668 31.1138 14.78H31.5138C31.5138 13.1132 31.1885 11.4875 30.5389 9.90409L30.1688 10.0559ZM31.1138 14.78C31.1138 17.0689 30.6011 19.2383 29.5749 21.2906L29.9327 21.4694C30.9866 19.3617 31.5138 17.1311 31.5138 14.78H31.1138ZM29.5756 21.2892C28.5503 23.3005 27.132 24.935 25.3196 26.1958L25.548 26.5242C27.4157 25.225 28.8774 23.5395 29.932 21.4708L29.5756 21.2892ZM25.3196 26.1958C23.5161 27.4504 21.4168 28.08 19.0138 28.08V28.48C21.4909 28.48 23.6715 27.8296 25.548 26.5242L25.3196 26.1958ZM19.0138 28.08H5.21383V28.48H19.0138V28.08ZM5.01383 28.28V44H5.41383V28.28H5.01383ZM5.21383 43.8H1.01383V44.2H5.21383V43.8ZM5.21383 24.76H18.8338V24.36H5.21383V24.76ZM18.8338 24.76C20.5528 24.76 22.0555 24.2885 23.333 23.3406L23.0947 23.0194C21.8922 23.9115 20.4749 24.36 18.8338 24.36V24.76ZM23.333 23.3406C24.6015 22.3995 25.5823 21.1723 26.2756 19.6635L25.9121 19.4965C25.2453 20.9477 24.3062 22.1205 23.0947 23.0194L23.333 23.3406ZM26.2756 19.6635C26.9683 18.1558 27.3138 16.5272 27.3138 14.78H26.9138C26.9138 16.4728 26.5794 18.0441 25.9121 19.4965L26.2756 19.6635ZM27.3138 14.78C27.3138 12.9884 26.9063 11.3546 26.0887 9.88287L25.739 10.0771C26.5214 11.4854 26.9138 13.0516 26.9138 14.78H27.3138ZM26.0898 9.88489C25.2752 8.37797 24.1936 7.17279 22.8448 6.27359L22.6229 6.60641C23.9141 7.4672 24.9524 8.62203 25.7379 10.0751L26.0898 9.88489ZM22.8471 6.27519C21.5336 5.37216 20.0741 4.92 18.4738 4.92V5.32C19.9936 5.32 21.374 5.74783 22.6205 6.60481L22.8471 6.27519ZM18.4738 4.92H5.21383V5.32H18.4738V4.92ZM5.01383 5.12V24.56H5.41383V5.12H5.01383ZM38.338 44H38.138V44.2H38.338V44ZM38.338 1.4V1.2H38.138V1.4H38.338ZM61.378 2.54L61.2886 2.71889L61.2905 2.7198L61.378 2.54ZM65.398 5.66L65.2455 5.78941L65.2475 5.7917L65.398 5.66ZM67.978 9.98L67.7907 10.0503L67.793 10.0559L67.978 9.98ZM67.7381 20.6L67.5553 20.5188L67.5538 20.5222L67.7381 20.6ZM64.438 25.16L64.5686 25.3116L64.5686 25.3116L64.438 25.16ZM59.458 27.56L59.4204 27.3636L59.1315 27.4189L59.2892 27.6672L59.458 27.56ZM69.898 44V44.2H70.262L70.0669 43.8928L69.898 44ZM65.158 44L64.9894 44.1075L65.0484 44.2H65.158V44ZM55.138 28.28L55.3067 28.1725L55.2477 28.08H55.138V28.28ZM42.538 28.28V28.08H42.338V28.28H42.538ZM42.538 44V44.2H42.738V44H42.538ZM42.538 24.56H42.338V24.76H42.538V24.56ZM60.838 23.18L60.9572 23.3407L60.9605 23.3381L60.838 23.18ZM63.718 19.52L63.5363 19.4365L63.5363 19.4365L63.718 19.52ZM63.538 10.04L63.36 10.1314L63.3632 10.1371L63.538 10.04ZM60.418 6.5L60.3037 6.66411L60.3071 6.66641L60.418 6.5ZM42.538 5.12V4.92H42.338V5.12H42.538ZM38.538 44V1.4H38.138V44H38.538ZM38.338 1.6H56.338V1.2H38.338V1.6ZM56.338 1.6C58.1496 1.6 59.7986 1.97389 61.2886 2.71888L61.4675 2.36111C59.9175 1.5861 58.2065 1.2 56.338 1.2V1.6ZM61.2905 2.7198C62.8256 3.4677 64.1435 4.49056 65.2455 5.78939L65.5505 5.5306C64.4126 4.18944 63.0505 3.1323 61.4656 2.3602L61.2905 2.7198ZM65.2475 5.7917C66.3516 7.0535 67.1992 8.47265 67.7908 10.0502L68.1653 9.90977C67.5569 8.28734 66.6845 6.8265 65.5486 5.5283L65.2475 5.7917ZM67.793 10.0559C68.4234 11.5925 68.738 13.1668 68.738 14.78H69.138C69.138 13.1132 68.8127 11.4875 68.1631 9.90409L67.793 10.0559ZM68.738 14.78C68.738 16.8336 68.3433 18.7458 67.5553 20.5188L67.9208 20.6812C68.7328 18.8542 69.138 16.8864 69.138 14.78H68.738ZM67.5538 20.5222C66.8054 22.2946 65.7235 23.7891 64.3075 25.0084L64.5686 25.3116C66.0326 24.0509 67.1507 22.5054 67.9223 20.6778L67.5538 20.5222ZM64.3075 25.0084C62.8943 26.2254 61.2663 27.0101 59.4204 27.3636L59.4957 27.7564C61.4098 27.3899 63.1018 26.5746 64.5686 25.3116L64.3075 25.0084ZM59.2892 27.6672L69.7292 44.1072L70.0669 43.8928L59.6269 27.4528L59.2892 27.6672ZM69.898 43.8H65.158V44.2H69.898V43.8ZM65.3267 43.8925L55.3067 28.1725L54.9694 28.3875L64.9894 44.1075L65.3267 43.8925ZM55.138 28.08H42.538V28.48H55.138V28.08ZM42.338 28.28V44H42.738V28.28H42.338ZM42.538 43.8H38.338V44.2H42.538V43.8ZM42.538 24.76H56.458V24.36H42.538V24.76ZM56.458 24.76C58.177 24.76 59.6797 24.2885 60.9572 23.3406L60.7189 23.0194C59.5164 23.9115 58.0991 24.36 56.458 24.36V24.76ZM60.9605 23.3381C62.227 22.3576 63.2069 21.1116 63.8998 19.6035L63.5363 19.4365C62.8692 20.8884 61.9291 22.0824 60.7156 23.0219L60.9605 23.3381ZM63.8998 19.6035C64.5922 18.0965 64.938 16.4879 64.938 14.78H64.538C64.538 16.4321 64.2039 17.9835 63.5363 19.4365L63.8998 19.6035ZM64.938 14.78C64.938 13.0276 64.5301 11.4139 63.7129 9.94287L63.3632 10.1371C64.146 11.5461 64.538 13.0924 64.538 14.78H64.938ZM63.716 9.94864C62.9412 8.43986 61.8787 7.23342 60.529 6.33359L60.3071 6.66641C61.5974 7.52657 62.6149 8.68014 63.3601 10.1314L63.716 9.94864ZM60.5324 6.33592C59.18 5.39332 57.7003 4.92 56.098 4.92V5.32C57.6158 5.32 59.0161 5.76668 60.3037 6.66408L60.5324 6.33592ZM56.098 4.92H42.538V5.32H56.098V4.92ZM42.338 5.12V24.56H42.738V5.12H42.338ZM86.5373 42.5L86.4466 42.6783L86.449 42.6795L86.5373 42.5ZM80.2373 37.58L80.3887 37.4494L80.3887 37.4494L80.2373 37.58ZM76.1573 30.68L75.9696 30.7493L75.97 30.7502L76.1573 30.68ZM76.2173 14.6L76.4036 14.6728L76.4039 14.6718L76.2173 14.6ZM80.4173 7.7L80.2688 7.56605L80.2686 7.56621L80.4173 7.7ZM86.8373 2.9L86.9231 3.08064L86.9255 3.07947L86.8373 2.9ZM102.857 2.96L102.767 3.1383L102.767 3.1383L102.857 2.96ZM109.157 7.94L109.005 8.0692L109.006 8.07087L109.157 7.94ZM113.237 14.9L113.049 14.9676L113.05 14.9702L113.237 14.9ZM113.177 30.92L113.364 30.9928L113.364 30.9918L113.177 30.92ZM108.977 37.82L109.126 37.9538L109.127 37.9523L108.977 37.82ZM102.617 42.56L102.703 42.7406L102.703 42.7406L102.617 42.56ZM80.0573 29.36L80.2455 29.2925L80.2455 29.2925L80.0573 29.36ZM83.2973 35.06L83.1436 35.188L83.1436 35.188L83.2973 35.06ZM88.2773 39.08L88.1849 39.2574L88.1893 39.2596L88.2773 39.08ZM101.237 39.02L101.33 39.1974L101.331 39.1967L101.237 39.02ZM106.217 34.88L106.062 34.7537L106.06 34.756L106.217 34.88ZM109.397 29.18L109.586 29.2454L109.587 29.2443L109.397 29.18ZM109.337 16.04L109.149 16.1075L109.149 16.1075L109.337 16.04ZM106.037 10.34L105.884 10.468L105.885 10.4702L106.037 10.34ZM88.1573 6.44L88.0664 6.26184L88.0649 6.26261L88.1573 6.44ZM83.1773 10.52L83.0222 10.3937L83.0218 10.3942L83.1773 10.52ZM79.9973 16.22L79.809 16.1525L79.8079 16.1557L79.9973 16.22ZM94.6973 44.1C91.7247 44.1 89.0353 43.5057 86.6255 42.3205L86.449 42.6795C88.9192 43.8943 91.6699 44.5 94.6973 44.5V44.1ZM86.6279 42.3217C84.2107 41.0933 82.1314 39.4693 80.3887 37.4494L80.0858 37.7106C81.8631 39.7706 83.9839 41.4267 86.4467 42.6783L86.6279 42.3217ZM80.3887 37.4494C78.6443 35.4275 77.2964 33.148 76.3445 30.6098L75.97 30.7502C76.9382 33.332 78.3102 35.6525 80.0858 37.7106L80.3887 37.4494ZM76.3449 30.6107C75.3929 28.0325 74.9173 25.3959 74.9173 22.7H74.5173C74.5173 25.4441 75.0016 28.1275 75.9696 30.7493L76.3449 30.6107ZM74.9173 22.7C74.9173 19.8841 75.4129 17.2088 76.4036 14.6728L76.031 14.5272C75.0216 17.1112 74.5173 19.8359 74.5173 22.7H74.9173ZM76.4039 14.6718C77.3955 12.0938 78.7829 9.81498 80.5659 7.83379L80.2686 7.56621C78.4517 9.58502 77.0391 11.9062 76.0306 14.5282L76.4039 14.6718ZM80.5658 7.83395C82.3885 5.81314 84.5073 4.22914 86.9231 3.08062L86.7514 2.71937C84.2872 3.89085 82.1261 5.50686 80.2688 7.56605L80.5658 7.83395ZM86.9255 3.07947C89.3368 1.89358 91.9465 1.3 94.7573 1.3V0.899998C91.8881 0.899998 89.2177 1.50642 86.749 2.72053L86.9255 3.07947ZM94.7573 1.3C97.6884 1.3 100.357 1.9137 102.767 3.1383L102.948 2.7817C100.478 1.52629 97.7461 0.899998 94.7573 0.899998V1.3ZM102.767 3.1383C105.183 4.36628 107.262 6.00962 109.005 8.06919L109.31 7.81081C107.533 5.71037 105.412 4.03372 102.948 2.7817L102.767 3.1383ZM109.006 8.07087C110.79 10.1325 112.137 12.4311 113.049 14.9676L113.425 14.8324C112.497 12.2489 111.124 9.90753 109.309 7.80912L109.006 8.07087ZM113.05 14.9702C114.002 17.5082 114.477 20.1045 114.477 22.76H114.877C114.877 20.0555 114.393 17.4118 113.425 14.8298L113.05 14.9702ZM114.477 22.76C114.477 25.5759 113.982 28.2716 112.991 30.8482L113.364 30.9918C114.373 28.3684 114.877 25.6241 114.877 22.76H114.477ZM112.991 30.8472C111.999 33.3856 110.612 35.6654 108.827 37.6877L109.127 37.9523C110.943 35.8946 112.355 33.5744 113.364 30.9928L112.991 30.8472ZM108.829 37.6862C107.046 39.6665 104.948 41.2306 102.531 42.3794L102.703 42.7406C105.167 41.5694 107.308 39.9735 109.126 37.9538L108.829 37.6862ZM102.531 42.3794C100.12 43.526 97.5091 44.1 94.6973 44.1V44.5C97.5654 44.5 100.235 43.914 102.703 42.7406L102.531 42.3794ZM78.7173 22.7C78.7173 25.0423 79.101 27.2852 79.869 29.4275L80.2455 29.2925C79.4935 27.1948 79.1173 24.9977 79.1173 22.7H78.7173ZM79.869 29.4275C80.6367 31.5689 81.7282 33.4895 83.1436 35.188L83.4509 34.932C82.0664 33.2705 80.9979 31.3911 80.2455 29.2925L79.869 29.4275ZM83.1436 35.188C84.5604 36.8882 86.2412 38.245 88.1849 39.2574L88.3697 38.9026C86.4734 37.915 84.8341 36.5918 83.4509 34.932L83.1436 35.188ZM88.1893 39.2596C90.1784 40.2339 92.3487 40.72 94.6973 40.72V40.32C92.4058 40.32 90.2961 39.8461 88.3652 38.9004L88.1893 39.2596ZM94.6973 40.72C97.1653 40.72 99.3777 40.214 101.33 39.1974L101.145 38.8426C99.2569 39.826 97.1092 40.32 94.6973 40.32V40.72ZM101.331 39.1967C103.315 38.1438 104.997 36.746 106.374 35.004L106.06 34.756C104.718 36.454 103.079 37.8162 101.144 38.8433L101.331 39.1967ZM106.372 35.0063C107.787 33.2683 108.859 31.3477 109.586 29.2454L109.208 29.1146C108.496 31.1723 107.448 33.0517 106.062 34.7537L106.372 35.0063ZM109.587 29.2443C110.314 27.104 110.677 24.9223 110.677 22.7H110.277C110.277 24.8777 109.921 27.016 109.208 29.1157L109.587 29.2443ZM110.677 22.7C110.677 20.3577 110.294 18.1148 109.526 15.9725L109.149 16.1075C109.901 18.2052 110.277 20.4023 110.277 22.7H110.677ZM109.526 15.9725C108.757 13.83 107.645 11.9087 106.189 10.2098L105.885 10.4702C107.309 12.1313 108.397 14.01 109.149 16.1075L109.526 15.9725ZM106.191 10.212C104.774 8.51117 103.092 7.17369 101.147 6.20111L100.968 6.55888C102.863 7.50631 104.501 8.80882 105.884 10.468L106.191 10.212ZM101.147 6.20111C99.1967 5.22613 97.0458 4.74 94.6973 4.74V5.14C96.9888 5.14 99.0778 5.61387 100.968 6.55888L101.147 6.20111ZM94.6973 4.74C92.2686 4.74 90.057 5.24621 88.0664 6.26184L88.2482 6.61815C90.1775 5.63378 92.3259 5.14 94.6973 5.14V4.74ZM88.0649 6.26261C86.1201 7.27552 84.4389 8.65314 83.0222 10.3937L83.3324 10.6463C84.7156 8.94686 86.3544 7.60448 88.2497 6.61738L88.0649 6.26261ZM83.0218 10.3942C81.6471 12.0924 80.5763 14.0122 79.809 16.1525L80.1855 16.2875C80.9383 14.1877 81.9874 12.3076 83.3327 10.6458L83.0218 10.3942ZM79.8079 16.1557C79.081 18.296 78.7173 20.4777 78.7173 22.7H79.1173C79.1173 20.5223 79.4736 18.384 80.1866 16.2843L79.8079 16.1557ZM117.655 38.66L117.771 38.4973L117.556 38.3433L117.467 38.5927L117.655 38.66ZM120.955 40.22L120.894 40.4103L120.895 40.4108L120.955 40.22ZM131.995 39.02L132.128 39.1697L132.13 39.1676L131.995 39.02ZM134.755 33.32L134.559 33.2826L134.558 33.2856L134.755 33.32ZM135.475 1.4V1.2H135.275V1.4H135.475ZM139.675 1.4H139.875V1.2H139.675V1.4ZM139.195 31.82L138.997 31.7959L138.997 31.7959L139.195 31.82ZM137.335 38.66L137.516 38.7464L137.516 38.7464L137.335 38.66ZM133.195 43.1L133.097 42.9259L133.195 43.1ZM116.455 42.02L116.267 41.9527L116.215 42.0976L116.342 42.1848L116.455 42.02ZM117.539 38.8227C118.401 39.4383 119.521 39.9662 120.894 40.4103L121.017 40.0297C119.669 39.5938 118.59 39.0817 117.771 38.4973L117.539 38.8227ZM120.895 40.4108C122.318 40.8581 123.939 41.08 125.755 41.08V40.68C123.971 40.68 122.392 40.4619 121.015 40.0292L120.895 40.4108ZM125.755 41.08C128.541 41.08 130.677 40.4545 132.128 39.1697L131.863 38.8703C130.513 40.0655 128.489 40.68 125.755 40.68V41.08ZM132.13 39.1676C133.573 37.8489 134.507 35.9029 134.952 33.3544L134.558 33.2856C134.123 35.7771 133.218 37.6311 131.86 38.8724L132.13 39.1676ZM134.952 33.3574C135.435 30.8208 135.675 27.6673 135.675 23.9H135.275C135.275 27.6527 135.036 30.7792 134.559 33.2826L134.952 33.3574ZM135.675 23.9V1.4H135.275V23.9H135.675ZM135.475 1.6H139.675V1.2H135.475V1.6ZM139.475 1.4V23.06H139.875V1.4H139.475ZM139.475 23.06C139.475 26.2535 139.316 29.1653 138.997 31.7959L139.394 31.8441C139.715 29.1947 139.875 26.2665 139.875 23.06H139.475ZM138.997 31.7959C138.679 34.4195 138.063 36.6774 137.155 38.5736L137.516 38.7464C138.447 36.8026 139.072 34.5005 139.394 31.8441L138.997 31.7959ZM137.155 38.5736C136.252 40.4569 134.901 41.9062 133.097 42.9259L133.294 43.2741C135.17 42.2138 136.578 40.7031 137.516 38.7464L137.155 38.5736ZM133.097 42.9259C131.297 43.9431 128.895 44.46 125.875 44.46V44.86C128.936 44.86 131.413 44.3369 133.294 43.2741L133.097 42.9259ZM125.875 44.46C123.93 44.46 122.209 44.2416 120.711 43.8079L120.6 44.1921C122.141 44.6384 123.901 44.86 125.875 44.86V44.46ZM120.711 43.8079C119.211 43.3737 117.831 42.7228 116.569 41.8552L116.342 42.1848C117.64 43.0772 119.059 43.7463 120.6 44.1921L120.711 43.8079ZM116.644 42.0873L117.844 38.7273L117.467 38.5927L116.267 41.9527L116.644 42.0873ZM178.462 40.28H178.662V40.08H178.462V40.28ZM178.462 44V44.2H178.662V44H178.462ZM149.842 44H149.642V44.2H149.842V44ZM149.842 1.4V1.2H149.642V1.4H149.842ZM177.922 1.4H178.122V1.2H177.922V1.4ZM177.922 5.12V5.32H178.122V5.12H177.922ZM154.042 5.12V4.92H153.842V5.12H154.042ZM154.042 20.48H153.842V20.68H154.042V20.48ZM174.862 20.48H175.062V20.28H174.862V20.48ZM174.862 24.02V24.22H175.062V24.02H174.862ZM154.042 24.02V23.82H153.842V24.02H154.042ZM154.042 40.28H153.842V40.48H154.042V40.28ZM178.262 40.28V44H178.662V40.28H178.262ZM178.462 43.8H149.842V44.2H178.462V43.8ZM150.042 44V1.4H149.642V44H150.042ZM149.842 1.6H177.922V1.2H149.842V1.6ZM177.722 1.4V5.12H178.122V1.4H177.722ZM177.922 4.92H154.042V5.32H177.922V4.92ZM153.842 5.12V20.48H154.242V5.12H153.842ZM154.042 20.68H174.862V20.28H154.042V20.68ZM174.662 20.48V24.02H175.062V20.48H174.662ZM174.862 23.82H154.042V24.22H174.862V23.82ZM153.842 24.02V40.28H154.242V24.02H153.842ZM154.042 40.48H178.462V40.08H154.042V40.48ZM184.084 14.78L183.896 14.7114L183.895 14.7141L184.084 14.78ZM188.044 7.94L188.197 8.06892L188.198 8.06745L188.044 7.94ZM194.404 3.02L194.49 3.20059L194.492 3.19945L194.404 3.02ZM212.704 3.8L212.595 3.96792L212.597 3.96904L212.704 3.8ZM218.704 10.46L218.809 10.6301L218.961 10.5363L218.885 10.3748L218.704 10.46ZM215.404 12.5L215.224 12.5879L215.322 12.7862L215.509 12.6701L215.404 12.5ZM211.924 8.06L211.799 8.2162L211.802 8.21835L211.924 8.06ZM207.424 5.66L207.365 5.85116L207.367 5.85156L207.424 5.66ZM195.964 6.5L196.055 6.67818L196.058 6.67667L195.964 6.5ZM190.984 10.58L190.827 10.4559L190.825 10.4582L190.984 10.58ZM188.164 29.42L187.977 29.4895L187.977 29.4906L188.164 29.42ZM191.524 35.12L191.372 35.2502L191.372 35.2502L191.524 35.12ZM196.564 39.14L196.472 39.3174L196.476 39.3196L196.564 39.14ZM207.844 39.74L207.781 39.5503L207.781 39.5503L207.844 39.74ZM212.524 37.16L212.65 37.3158L212.65 37.3158L212.524 37.16ZM216.064 32.66L216.156 32.4824L215.976 32.3892L215.885 32.5706L216.064 32.66ZM219.544 34.46L219.728 34.5396L219.802 34.3682L219.636 34.2824L219.544 34.46ZM215.404 39.86L215.279 39.7041L215.277 39.7055L215.404 39.86ZM209.284 43.22L209.221 43.0303L209.22 43.0306L209.284 43.22ZM194.644 42.5L194.551 42.6771L194.554 42.6783L194.644 42.5ZM188.284 37.46L188.13 37.5878L188.133 37.5909L188.284 37.46ZM184.204 30.38L184.016 30.4483L184.017 30.4493L184.204 30.38ZM182.964 22.4C182.964 19.8634 183.4 17.3457 184.273 14.8459L183.895 14.7141C183.008 17.2543 182.564 19.8166 182.564 22.4H182.964ZM184.272 14.8486C185.184 12.3505 186.492 10.0909 188.197 8.06892L187.891 7.81108C186.156 9.86909 184.824 12.1695 183.896 14.7114L184.272 14.8486ZM188.198 8.06745C189.899 6.01068 191.996 4.38848 194.49 3.20057L194.318 2.83943C191.773 4.05152 189.629 5.70931 187.89 7.81255L188.198 8.06745ZM194.492 3.19945C196.981 1.97474 199.81 1.36 202.984 1.36V0.959997C199.758 0.959997 196.867 1.58525 194.316 2.84055L194.492 3.19945ZM202.984 1.36C206.712 1.36 209.913 2.23205 212.595 3.96791L212.813 3.63209C210.055 1.84795 206.776 0.959997 202.984 0.959997V1.36ZM212.597 3.96904C215.287 5.67019 217.261 7.86205 218.523 10.5452L218.885 10.3748C217.588 7.61795 215.561 5.3698 212.811 3.63096L212.597 3.96904ZM218.599 10.2899L215.299 12.3299L215.509 12.6701L218.809 10.6301L218.599 10.2899ZM215.584 12.4121C214.653 10.5095 213.475 9.00355 212.046 7.90164L211.802 8.21835C213.174 9.27645 214.316 10.7305 215.224 12.5879L215.584 12.4121ZM212.049 7.90382C210.631 6.769 209.108 5.95632 207.482 5.46843L207.367 5.85156C208.94 6.32367 210.418 7.111 211.799 8.21617L212.049 7.90382ZM207.483 5.46884C205.905 4.98325 204.325 4.74 202.744 4.74V5.14C204.283 5.14 205.823 5.37674 207.365 5.85115L207.483 5.46884ZM202.744 4.74C200.157 4.74 197.863 5.2658 195.87 6.32333L196.058 6.67667C197.985 5.6542 200.212 5.14 202.744 5.14V4.74ZM195.873 6.32185C193.888 7.33488 192.205 8.7133 190.827 10.456L191.141 10.704C192.483 9.0067 194.121 7.66512 196.055 6.67815L195.873 6.32185ZM190.825 10.4582C189.492 12.1964 188.481 14.1165 187.794 16.2179L188.174 16.3421C188.847 14.2835 189.837 12.4036 191.143 10.7018L190.825 10.4582ZM187.794 16.2179C187.108 18.3176 186.764 20.4586 186.764 22.64H187.164C187.164 20.5014 187.501 18.4024 188.174 16.3421L187.794 16.2179ZM186.764 22.64C186.764 25.0231 187.168 27.3067 187.977 29.4895L188.352 29.3505C187.56 27.2133 187.164 24.9769 187.164 22.64H186.764ZM187.977 29.4906C188.785 31.6318 189.917 33.5521 191.372 35.2502L191.676 34.9898C190.251 33.3279 189.143 31.4482 188.351 29.3494L187.977 29.4906ZM191.372 35.2502C192.829 36.9491 194.529 38.3053 196.472 39.3174L196.657 38.9626C194.76 37.9747 193.1 36.6509 191.676 34.9898L191.372 35.2502ZM196.476 39.3196C198.465 40.2936 200.615 40.78 202.924 40.78V40.38C200.673 40.38 198.583 39.9064 196.652 38.9604L196.476 39.3196ZM202.924 40.78C204.548 40.78 206.209 40.4958 207.907 39.9297L207.781 39.5503C206.119 40.1042 204.5 40.38 202.924 40.38V40.78ZM207.907 39.9297C209.611 39.3619 211.192 38.49 212.65 37.3158L212.399 37.0042C210.976 38.15 209.437 38.9981 207.781 39.5503L207.907 39.9297ZM212.65 37.3158C214.114 36.1358 215.312 34.6122 216.243 32.7494L215.885 32.5706C214.977 34.3878 213.814 35.8642 212.399 37.0042L212.65 37.3158ZM215.972 32.8376L219.452 34.6376L219.636 34.2824L216.156 32.4824L215.972 32.8376ZM219.361 34.3804C218.454 36.47 217.094 38.244 215.279 39.7042L215.529 40.0158C217.394 38.516 218.794 36.69 219.728 34.5396L219.361 34.3804ZM215.277 39.7055C213.497 41.1695 211.478 42.2778 209.221 43.0303L209.347 43.4097C211.65 42.6422 213.712 41.5105 215.531 40.0145L215.277 39.7055ZM209.22 43.0306C206.999 43.7842 204.82 44.16 202.684 44.16V44.56C204.868 44.56 207.09 44.1758 209.348 43.4094L209.22 43.0306ZM202.684 44.16C199.793 44.16 197.145 43.5465 194.735 42.3217L194.554 42.6783C197.023 43.9335 199.735 44.56 202.684 44.56V44.16ZM194.737 42.3229C192.319 41.0545 190.219 39.3902 188.435 37.3291L188.133 37.5909C189.949 39.6898 192.089 41.3855 194.551 42.6771L194.737 42.3229ZM188.438 37.3322C186.693 35.2298 185.344 32.8896 184.392 30.3107L184.017 30.4493C184.984 33.0704 186.356 35.4502 188.13 37.5878L188.438 37.3322ZM184.392 30.3117C183.44 27.6925 182.964 25.0556 182.964 22.4H182.564C182.564 25.1044 183.049 27.7875 184.016 30.4483L184.392 30.3117ZM256.84 5.12V5.32H257.04V5.12H256.84ZM241.66 5.12V4.92H241.46V5.12H241.66ZM241.66 44V44.2H241.86V44H241.66ZM237.46 44H237.26V44.2H237.46V44ZM237.46 5.12H237.66V4.92H237.46V5.12ZM222.28 5.12H222.08V5.32H222.28V5.12ZM222.28 1.4V1.2H222.08V1.4H222.28ZM256.84 1.4H257.04V1.2H256.84V1.4ZM256.84 4.92H241.66V5.32H256.84V4.92ZM241.46 5.12V44H241.86V5.12H241.46ZM241.66 43.8H237.46V44.2H241.66V43.8ZM237.66 44V5.12H237.26V44H237.66ZM237.46 4.92H222.28V5.32H237.46V4.92ZM222.48 5.12V1.4H222.08V5.12H222.48ZM222.28 1.6H256.84V1.2H222.28V1.6ZM256.64 1.4V5.12H257.04V1.4H256.64ZM288.121 9.38L287.973 9.51453L288.153 9.71258L288.292 9.48379L288.121 9.38ZM283.321 6.14L283.24 6.32309L283.243 6.32439L283.321 6.14ZM268.261 6.98L268.387 7.13512L268.389 7.13335L268.261 6.98ZM266.941 16.7L266.79 16.8317L266.79 16.8317L266.941 16.7ZM270.781 19.1L270.711 19.2875L270.716 19.2893L270.781 19.1ZM277.501 20.9L277.458 21.0953L277.46 21.0957L277.501 20.9ZM285.361 23.18L285.287 23.3657L285.287 23.3657L285.361 23.18ZM290.461 26.78L290.304 26.9039L290.306 26.906L290.461 26.78ZM290.281 39.32L290.44 39.4418L290.44 39.4418L290.281 39.32ZM284.821 43.16L284.886 43.3491L284.889 43.3481L284.821 43.16ZM259.801 38.18L259.63 38.0753L259.542 38.2201L259.67 38.3312L259.801 38.18ZM261.901 34.76L262.046 34.6222L261.867 34.4336L261.73 34.6553L261.901 34.76ZM268.141 38.9L268.06 39.0831L268.061 39.0835L268.141 38.9ZM284.941 38.78L285.049 38.948L285.049 38.948L284.941 38.78ZM286.381 29.06L286.231 29.1929L286.234 29.1957L286.381 29.06ZM274.981 24.44L274.936 24.6349L274.936 24.635L274.981 24.44ZM267.481 22.16L267.403 22.3444L267.405 22.3449L267.481 22.16ZM262.921 18.86L263.08 18.7385L263.08 18.7385L262.921 18.86ZM263.281 6.68L263.118 6.56342L263.118 6.56409L263.281 6.68ZM268.681 2.54L268.756 2.72549L268.758 2.72432L268.681 2.54ZM284.101 2.42L284.028 2.60617L284.031 2.60726L284.101 2.42ZM290.161 6.02L290.332 6.12379L290.419 5.97945L290.292 5.86886L290.161 6.02ZM288.269 9.24546C287.045 7.89976 285.419 6.8045 283.398 5.9556L283.243 6.32439C285.222 7.1555 286.796 8.22024 287.973 9.51453L288.269 9.24546ZM283.401 5.95693C281.372 5.06401 279.064 4.62 276.481 4.62V5.02C279.018 5.02 281.27 5.45598 283.24 6.32306L283.401 5.95693ZM276.481 4.62C272.703 4.62 269.906 5.34196 268.132 6.82665L268.389 7.13335C270.056 5.73803 272.739 5.02 276.481 5.02V4.62ZM268.135 6.82489C266.363 8.26699 265.481 10.2467 265.481 12.74H265.881C265.881 10.3533 266.719 8.493 268.387 7.13511L268.135 6.82489ZM265.481 12.74C265.481 14.4528 265.909 15.825 266.79 16.8317L267.091 16.5683C266.292 15.655 265.881 14.3872 265.881 12.74H265.481ZM266.79 16.8317C267.66 17.8253 268.973 18.6406 270.711 19.2874L270.851 18.9126C269.149 18.2794 267.902 17.4947 267.091 16.5683L266.79 16.8317ZM270.716 19.2893C272.486 19.8926 274.734 20.4944 277.458 21.0953L277.544 20.7047C274.828 20.1056 272.596 19.5074 270.845 18.9107L270.716 19.2893ZM277.46 21.0957C280.492 21.734 283.1 22.4911 285.287 23.3657L285.435 22.9943C283.222 22.1089 280.59 21.346 277.542 20.7043L277.46 21.0957ZM285.287 23.3657C287.461 24.2356 289.13 25.4169 290.304 26.9039L290.618 26.6561C289.392 25.1031 287.66 23.8844 285.435 22.9943L285.287 23.3657ZM290.306 26.906C291.468 28.3398 292.061 30.3101 292.061 32.84H292.461C292.461 30.2499 291.854 28.1802 290.616 26.654L290.306 26.906ZM292.061 32.84C292.061 35.405 291.41 37.5197 290.122 39.1982L290.44 39.4418C291.791 37.6803 292.461 35.475 292.461 32.84H292.061ZM290.122 39.1982C288.829 40.8839 287.042 42.1431 284.753 42.9719L284.889 43.3481C287.24 42.4969 289.093 41.1961 290.44 39.4418L290.122 39.1982ZM284.756 42.9709C282.46 43.7624 279.843 44.16 276.901 44.16V44.56C279.879 44.56 282.541 44.1576 284.886 43.3491L284.756 42.9709ZM276.901 44.16C270.306 44.16 264.653 42.1155 259.932 38.0288L259.67 38.3312C264.468 42.4845 270.216 44.56 276.901 44.56V44.16ZM259.971 38.2847L262.071 34.8647L261.73 34.6553L259.63 38.0753L259.971 38.2847ZM261.756 34.8977C263.299 36.5219 265.403 37.9155 268.06 39.0831L268.221 38.7169C265.599 37.5645 263.543 36.1981 262.046 34.6222L261.756 34.8977ZM268.061 39.0835C270.769 40.2555 273.757 40.84 277.021 40.84V40.44C273.805 40.44 270.873 39.8645 268.22 38.7165L268.061 39.0835ZM277.021 40.84C280.402 40.84 283.085 40.2165 285.049 38.948L284.832 38.612C282.957 39.8235 280.359 40.44 277.021 40.44V40.84ZM285.049 38.948C287.031 37.6683 288.021 35.7624 288.021 33.26H287.621C287.621 35.6376 286.691 37.4117 284.832 38.612L285.049 38.948ZM288.021 33.26C288.021 31.4625 287.53 30.0097 286.528 28.9243L286.234 29.1957C287.152 30.1903 287.621 31.5375 287.621 33.26H288.021ZM286.53 28.9271C285.541 27.8137 284.067 26.9184 282.128 26.2315L281.994 26.6085C283.895 27.2816 285.301 28.1463 286.231 29.1929L286.53 28.9271ZM282.128 26.2315C280.198 25.5481 277.83 24.8861 275.025 24.245L274.936 24.635C277.732 25.2739 280.084 25.9319 281.994 26.6085L282.128 26.2315ZM275.026 24.2451C272.073 23.5667 269.584 22.8096 267.557 21.9751L267.405 22.3449C269.458 23.1903 271.969 23.9533 274.936 24.6349L275.026 24.2451ZM267.558 21.9756C265.582 21.1456 264.094 20.0643 263.08 18.7385L262.762 18.9815C263.828 20.3757 265.38 21.4944 267.403 22.3444L267.558 21.9756ZM263.08 18.7385C262.074 17.4239 261.561 15.6315 261.561 13.34H261.161C261.161 15.6885 261.687 17.5761 262.762 18.9815L263.08 18.7385ZM261.561 13.34C261.561 10.7332 262.192 8.55586 263.444 6.7959L263.118 6.56409C261.809 8.40414 261.161 10.6668 261.161 13.34H261.561ZM263.443 6.79658C264.739 4.99002 266.508 3.63254 268.756 2.72547L268.606 2.35453C266.294 3.28745 264.462 4.68997 263.118 6.56342L263.443 6.79658ZM268.758 2.72432C271.01 1.77649 273.602 1.3 276.541 1.3V0.899998C273.559 0.899998 270.912 1.3835 268.603 2.35567L268.758 2.72432ZM276.541 1.3C279.32 1.3 281.815 1.73667 284.028 2.60615L284.174 2.23385C281.907 1.34333 279.362 0.899998 276.541 0.899998V1.3ZM284.031 2.60726C286.248 3.43896 288.248 4.62676 290.03 6.17114L290.292 5.86886C288.474 4.29324 286.433 3.08103 284.171 2.23273L284.031 2.60726ZM289.99 5.9162L287.95 9.2762L288.292 9.48379L290.332 6.12379L289.99 5.9162Z" fill="#A6A6A6" />
        </animated.svg>
      </div>
    </div>
  );
}

export default ProjectsWord