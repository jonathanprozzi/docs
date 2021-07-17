import * as React from "react";
import styles from "./SocialIcons.module.css";

export const DiscordIcon = ({ fillColor = "#333", strokeColor = "white" }) => (
  <svg
    width='100'
    height='101'
    viewBox='0 0 100 101'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle
      className={styles.SocialIconSvg}
      cx='50'
      cy='50.2864'
      r='50'
      fill='#A89D9D'
    />
    <path
      d='M71.0191 31.3735C67.1729 29.6035 63.0881 28.3135 58.8244 27.5935C58.2877 28.5235 57.6913 29.7835 57.2739 30.7735C52.739 30.1135 48.2367 30.1135 43.7643 30.7735C43.3469 29.7835 42.7207 28.5235 42.2138 27.5935C37.9204 28.3135 33.8356 29.6035 30.0162 31.3735C22.2939 42.8335 20.2068 54.0234 21.2503 65.0633C26.3786 68.8133 31.3281 71.0934 36.1911 72.5935C37.3838 70.9734 38.4571 69.2333 39.3814 67.4035C37.6223 66.7434 35.9526 65.9334 34.3425 64.9733C34.76 64.6735 35.1774 64.3435 35.565 64.0135C45.285 68.4835 55.813 68.4835 65.4137 64.0135C65.8311 64.3435 66.2187 64.6735 66.6362 64.9733C65.026 65.9334 63.3564 66.7434 61.5972 67.4035C62.5216 69.2333 63.595 70.9734 64.7875 72.5935C69.6475 71.0934 74.6268 68.8133 79.7283 65.0633C81.0103 52.2835 77.6978 41.1836 71.0191 31.3735ZM40.7231 58.2534C37.8011 58.2534 35.4159 55.5835 35.4159 52.3135C35.4159 49.0436 37.7415 46.3734 40.7231 46.3734C43.6749 46.3734 46.0899 49.0436 46.0302 52.3135C46.0302 55.5835 43.6749 58.2534 40.7231 58.2534ZM60.3153 58.2534C57.3932 58.2534 55.0049 55.5835 55.0049 52.3135C55.0049 49.0436 57.3335 46.3734 60.3153 46.3734C63.267 46.3734 65.682 49.0436 65.6224 52.3135C65.6224 55.5835 63.2968 58.2534 60.3153 58.2534Z'
      fill='#171212'
    />
  </svg>
);

export const TwitterIcon = ({ fillColor, strokeColor }) => (
  <svg
    width='100'
    height='101'
    viewBox='0 0 100 101'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='50' cy='50.2864' r='50' fill='#171212' />

    <path
      className={styles.SocialIconSvg}
      d='M0 50.5935C0 22.9793 22.3858 0.593506 50 0.593506C77.6142 0.593506 100 22.9793 100 50.5935C100 78.2077 77.6142 100.594 50 100.594C22.3858 100.594 0 78.2077 0 50.5935ZM48.5025 41.2341L48.6074 42.9642L46.8587 42.7524C40.4935 41.9403 34.9326 39.1862 30.2111 34.5608L27.9028 32.2658L27.3083 33.9606C26.0492 37.7386 26.8536 41.7285 29.4767 44.4119C30.8756 45.8948 30.5609 46.1067 28.1477 45.224C27.3083 44.9415 26.5738 44.7297 26.5039 44.8356C26.2591 45.0827 27.0984 48.2958 27.7629 49.5669C28.6723 51.3323 30.5259 53.0625 32.5544 54.0864L34.2681 54.8985L32.2396 54.9338C30.2811 54.9338 30.2111 54.9691 30.421 55.7106C31.1204 58.0056 33.8834 60.4419 36.9611 61.5012L39.1295 62.2426L37.2409 63.3725C34.443 64.9967 31.1554 65.9147 27.8679 65.9853C26.294 66.0206 25 66.1619 25 66.2678C25 66.6209 29.2668 68.5982 31.75 69.3749C39.1994 71.67 48.0478 70.6814 54.6929 66.7621C59.4144 63.9728 64.1359 58.4293 66.3392 53.0625C67.5283 50.2025 68.7175 44.9768 68.7175 42.4699C68.7175 40.8457 68.8224 40.6339 70.7809 38.6919C71.9351 37.5621 73.0192 36.3263 73.2291 35.9732C73.5788 35.3023 73.5439 35.3023 71.7602 35.9026C68.7874 36.9618 68.3677 36.8206 69.8366 35.2317C70.9208 34.1018 72.2149 32.0539 72.2149 31.4537C72.2149 31.3478 71.6902 31.5243 71.0957 31.8421C70.4662 32.1952 69.0672 32.7248 68.018 33.0426L66.1294 33.6428L64.4157 32.4776C63.4714 31.8421 62.1423 31.1359 61.4429 30.9241C59.6592 30.4298 56.9312 30.5004 55.3224 31.0653C50.9507 32.6542 48.1877 36.75 48.5025 41.2341Z'
      fill='#A89D9D'
    />
  </svg>
);

export const GitHubIcon = () => (
  <svg
    width='100'
    height='101'
    viewBox='0 0 100 101'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle
      className={styles.SocialIconSvg}
      cx='50'
      cy='50.2864'
      r='50'
      fill='#A89D9D'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M50 21.5935C33.9775 21.5935 21 34.6698 21 50.8144C21 63.7446 29.3012 74.6659 40.8287 78.5377C42.2787 78.7934 42.8225 77.9167 42.8225 77.1497C42.8225 76.4557 42.7863 74.1546 42.7863 71.7073C35.5 73.0588 33.615 69.9175 33.035 68.2739C32.7087 67.4338 31.295 64.8404 30.0625 64.1464C29.0475 63.5985 27.5975 62.247 30.0262 62.2105C32.31 62.174 33.9412 64.329 34.485 65.2057C37.095 69.6253 41.2638 68.3834 42.9313 67.6164C43.185 65.717 43.9462 64.4386 44.78 63.7081C38.3275 62.9776 31.585 60.4573 31.585 49.2803C31.585 46.1025 32.7087 43.4726 34.5575 41.4272C34.2675 40.6967 33.2525 37.7015 34.8475 33.6836C34.8475 33.6836 37.2763 32.9166 42.8225 36.6788C45.1425 36.0213 47.6075 35.6926 50.0725 35.6926C52.5375 35.6926 55.0025 36.0213 57.3225 36.6788C62.8688 32.8801 65.2975 33.6836 65.2975 33.6836C66.8925 37.7015 65.8775 40.6967 65.5875 41.4272C67.4362 43.4726 68.56 46.066 68.56 49.2803C68.56 60.4938 61.7812 62.9776 55.3288 63.7081C56.38 64.6212 57.2863 66.3745 57.2863 69.114C57.2863 73.0222 57.25 76.1635 57.25 77.1497C57.25 77.9167 57.7938 78.8299 59.2438 78.5377C65.0008 76.5794 70.0034 72.8512 73.5474 67.878C77.0914 62.9048 78.9984 56.9369 79 50.8144C79 34.6698 66.0225 21.5935 50 21.5935Z'
      fill='#171212'
    />
  </svg>
);

export const SubstackIcon = () => (
  <svg
    width='100'
    height='101'
    viewBox='0 0 100 101'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle
      className={styles.SocialIconSvg}
      cx='50'
      cy='50.2864'
      r='50'
      fill='#A89D9D'
    />
    <rect x='28' y='28.7363' width='44' height='5.5' fill='#171212' />
    <rect x='28' y='38.9507' width='44' height='5.5' fill='#171212' />
    <path
      d='M28 49.1648H72V75.8791L50 61.7362L28 75.8791V49.1648Z'
      fill='#171212'
    />
  </svg>
);

export const TelegramIcon = () => (
  <svg
    width='100'
    height='101'
    viewBox='0 0 100 101'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='50' cy='50.2864' r='50' fill='#171212' />

    <path
      className={styles.SocialIconSvg}
      d='M41.684 60.7649L40.8333 73.5102C42.0833 73.5102 42.6356 72.9385 43.3333 72.2602L49.339 66.4204L61.8333 75.6514C64.1327 76.9201 65.7922 76.2633 66.365 73.5166L74.5671 34.8654C75.4068 31.4986 73.2837 29.9716 71.084 30.9703L22.9215 49.5415C19.634 50.8602 19.6531 52.6943 22.3222 53.5115L34.6818 57.3692L63.2956 39.3171C64.6464 38.498 65.8861 38.9383 64.8686 39.8414L41.6833 60.7643L41.684 60.7649ZM50 100.594C22.3858 100.594 0 78.2077 0 50.5935C0 22.9793 22.3858 0.593506 50 0.593506C77.6142 0.593506 100 22.9793 100 50.5935C100 78.2077 77.6142 100.594 50 100.594Z'
      fill='#A89D9D'
    />
  </svg>
);
