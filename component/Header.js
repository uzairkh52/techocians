import Image from "next/image";
import Script from 'next/script'
import Head from 'next/head';
import styles from "./../styles/sass/components/Header.module.scss"
import { Avatar, Grid, Container, Menu, MenuItem, Box } from "@mui/material";
import Link from "next/link";
import classNames from "classnames";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [isMenueitems, setisMenueitems] = useState(false);
  const navbtn =()=> {
    setIsMobile(isMobile ? false : true);
    

  }
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
  
  }, [])
  
  return (
    <>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1624182310549814"
     crossorigin="anonymous"></script>
        {/* <!-- Google tag (gtag.js) --> */}
        

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="google-site-verification"
          content="l556Qqvxm0WIu4TDeOY0EMYPtEAd6zYR0nS9JBMNWoo"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5VZKN8GW1Q"
        ></script>

        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5VZKN8GW1Q');`}
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav-icon.png" />
      </Head>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-JSWTFCCN6J"
          height="0"
          width="0"
          className={styles.dNone + styles.hidden}
        ></iframe>
      </noscript>
         
      
                
      <section className={styles.Header}>
        <Container maxWidth="">
          <Grid>
            <Grid item xs={12}>
              <div className={" d-flex justify-content-between align-items-center"}>
                <div className={styles.Logo}>
                  <Link href={"/"}>
                  <span className="d-none">Techoceans</span>
                    <svg
                      width="166"
                      height="50"
                      viewBox="0 0 166 50"
                      alt="Techoceans"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M45.2054 0.270264V49.5853"
                        stroke="#FF4136"
                        strokeWidth="1.20724"
                      />
                      <path
                        d="M30.6847 7.38965C28.3604 7.38965 26.4593 9.29102 26.4593 11.615C26.4593 12.2065 26.5858 12.7136 26.7971 13.2206L19.4875 20.5305C18.8956 20.2346 18.2619 20.0657 17.5858 20.0657C15.2619 20.0657 13.3604 21.967 13.3604 24.291C13.3604 26.6149 15.2619 28.5164 17.5858 28.5164C18.3872 28.5126 19.1712 28.2817 19.8467 27.8504C20.5222 27.4192 21.0616 26.8051 21.4023 26.0796C21.7429 25.3542 21.8708 24.547 21.7712 23.7518C21.6716 22.9566 21.3486 22.2058 20.8396 21.5868L27.7688 14.6572C28.5294 15.3758 29.5435 15.8403 30.6843 15.8403C33.0083 15.8403 34.9097 13.9389 34.9097 11.615C34.9097 9.29102 33.0086 7.38965 30.6847 7.38965ZM17.5858 26.8262C16.1917 26.8262 15.0505 25.6853 15.0505 24.291C15.0505 22.8966 16.1917 21.7558 17.5858 21.7558C18.9799 21.7558 20.121 22.8969 20.121 24.291C20.121 25.6851 18.9801 26.8262 17.5858 26.8262ZM30.6843 14.1502C29.2903 14.1502 28.1491 13.0093 28.1491 11.615C28.1491 10.2206 29.2903 9.07979 30.6843 9.07979C32.0784 9.07979 33.2195 10.2209 33.2195 11.615C33.2195 13.009 32.0787 14.1502 30.6843 14.1502Z"
                        fill="#FF4136"
                      />
                      <path
                        d="M17.5861 15.8403C19.9098 15.8403 21.8114 13.9389 21.8114 11.615C21.8114 9.29102 19.9098 7.38965 17.5861 7.38965C15.2625 7.38965 13.3608 9.29102 13.3608 11.615C13.3608 13.9389 15.2619 15.8403 17.5861 15.8403ZM17.5861 9.07979C18.9802 9.07979 20.1213 10.2209 20.1213 11.615C20.1213 13.009 18.9802 14.1502 17.5861 14.1502C16.1921 14.1502 15.0509 13.0093 15.0509 11.615C15.0509 10.2206 16.1914 9.07979 17.5861 9.07979ZM30.6847 20.0657C28.3605 20.0657 26.4593 21.967 26.4593 24.291C26.4593 26.6149 28.3605 28.5164 30.6847 28.5164C33.0089 28.5164 34.91 26.6149 34.91 24.291C34.91 21.967 33.0084 20.0657 30.6847 20.0657ZM30.6847 26.8262C29.29 26.8262 28.1495 25.6853 28.1495 24.291C28.1495 22.8966 29.29 21.7558 30.6847 21.7558C32.0793 21.7558 33.2199 22.8969 33.2199 24.291C33.2199 25.6851 32.0788 26.8262 30.6847 26.8262ZM4.48755 32.7417C2.16333 32.7417 0.262207 34.6431 0.262207 36.967C0.262207 39.2909 2.16333 41.1924 4.48755 41.1924C6.81178 41.1924 8.71288 39.2909 8.71288 36.967C8.71288 34.6431 6.81121 32.7417 4.48755 32.7417ZM4.48755 39.5023C3.0929 39.5023 1.95235 38.3614 1.95235 36.967C1.95235 35.5727 3.0929 34.4318 4.48755 34.4318C5.88221 34.4318 7.02275 35.5729 7.02275 36.967C7.02275 38.3611 5.88163 39.5023 4.48755 39.5023Z"
                        fill="#FF4136"
                      />
                      <path
                        d="M30.6846 32.7417C28.6561 32.7417 26.9237 34.1783 26.5435 36.122H21.7266C21.3463 34.1783 19.6139 32.7417 17.5857 32.7417C16.2759 32.7417 15.0928 33.3332 14.3322 34.3053L7.36045 27.3755C7.9295 26.8481 8.34196 26.174 8.55258 25.4273C8.76313 24.6805 8.76361 23.8901 8.55395 23.1431C8.34429 22.3962 7.93258 21.7215 7.36415 21.1935C6.79572 20.6654 6.09263 20.3044 5.33226 20.1501V15.7558C7.27593 15.3755 8.71251 13.6431 8.71251 11.615C8.71251 9.29102 6.81113 7.38965 4.48719 7.38965C2.16325 7.38965 0.261841 9.29102 0.261841 11.615C0.261841 13.6431 1.69846 15.3755 3.64212 15.7558V20.1501C1.69846 20.5305 0.261841 22.2628 0.261841 24.291C0.261841 26.6149 2.16325 28.5164 4.48719 28.5164C4.99423 28.5164 5.45901 28.4318 5.88154 28.2628L13.4872 35.8684C13.4026 36.2487 13.3607 36.587 13.3607 36.967C13.3607 39.2909 15.2618 41.1924 17.5861 41.1924C19.6139 41.1924 21.3463 39.7557 21.7266 37.8121H26.5435C26.9237 39.7557 28.6561 41.1924 30.6843 41.1924C33.0083 41.1924 34.9096 39.2909 34.9096 36.967C34.9096 34.6431 33.0086 32.7417 30.6846 32.7417ZM1.95198 11.615C1.95198 10.2209 3.09311 9.07979 4.48719 9.07979C5.88126 9.07979 7.02237 10.2209 7.02237 11.615C7.02237 13.009 5.88155 14.1502 4.48719 14.1502C3.09282 14.1502 1.95198 13.0093 1.95198 11.615ZM1.95198 24.291C1.95198 22.8969 3.09311 21.7558 4.48719 21.7558C5.88126 21.7558 7.02237 22.8969 7.02237 24.291C7.02237 25.6851 5.88155 26.8262 4.48719 26.8262C3.09282 26.8262 1.95198 25.6853 1.95198 24.291ZM17.5857 39.5023C16.1917 39.5023 15.0505 38.3614 15.0505 36.967C15.0505 35.5727 16.1917 34.4318 17.5857 34.4318C18.9798 34.4318 20.1209 35.5729 20.1209 36.967C20.1209 38.3611 18.9801 39.5023 17.5857 39.5023ZM30.6843 39.5023C29.2902 39.5023 28.1491 38.3614 28.1491 36.967C28.1491 35.5727 29.2902 34.4318 30.6843 34.4318C32.0784 34.4318 33.2195 35.5729 33.2195 36.967C33.2195 38.3611 32.0787 39.5023 30.6843 39.5023Z"
                        fill="#FF4136"
                      />
                      <path
                        d="M60.4945 13.477H57.8213V19.5133C57.8213 20.0115 57.9276 20.3631 58.1403 20.5681C58.3511 20.7732 58.7181 20.8757 59.2413 20.8757H60.4945V22.3158H58.9624C58.0158 22.3158 57.3058 22.0973 56.8325 21.6604C56.3592 21.2254 56.1225 20.5097 56.1225 19.5133V13.477H54.7946V12.0773H56.1225V9.49889H57.8213V12.0773H60.4945V13.477ZM71.8884 16.8027C71.8884 17.1266 71.8692 17.4696 71.8309 17.8318H63.6476C63.7109 18.8397 64.0568 19.6273 64.6853 20.1945C65.3139 20.7617 66.0765 21.0453 66.9733 21.0453C67.7091 21.0453 68.3224 20.8738 68.8131 20.5308C69.3055 20.1878 69.6514 19.7298 69.8507 19.1568H71.6815C71.4076 20.1418 70.8596 20.9428 70.0377 21.5599C69.2151 22.1749 68.1939 22.4825 66.9733 22.4825C66.0017 22.4825 65.1328 22.265 64.3663 21.83C63.6017 21.3931 63.0009 20.7732 62.564 19.9703C62.129 19.1674 61.9115 18.2361 61.9115 17.1764C61.9115 16.1186 62.1233 15.1912 62.5467 14.394C62.9702 13.5968 63.5643 12.9836 64.3289 12.5544C65.0954 12.1232 65.9769 11.9077 66.9733 11.9077C67.9448 11.9077 68.8041 12.1194 69.5514 12.5429C70.2987 12.9664 70.8747 13.5489 71.2795 14.2905C71.6857 15.0321 71.8884 15.8695 71.8884 16.8027ZM70.1322 16.4492C70.1322 15.8015 69.9884 15.2438 69.7014 14.7763C69.4158 14.3087 69.0267 13.9542 68.5343 13.7127C68.0416 13.4694 67.4965 13.3477 66.8986 13.3477C66.0401 13.3477 65.3081 13.6217 64.7026 14.1698C64.0989 14.7178 63.754 15.4776 63.6678 16.4492H70.1322ZM73.498 17.1764C73.498 16.1186 73.7096 15.194 74.1336 14.4026C74.5569 13.6112 75.1452 12.998 75.898 12.563C76.6514 12.1261 77.5137 11.9077 78.485 11.9077C79.7439 11.9077 80.7809 12.2133 81.5952 12.8246C82.4117 13.434 82.9507 14.2809 83.2137 15.3655H81.3829C81.2083 14.7427 80.8678 14.2503 80.3624 13.8881C79.8583 13.5279 79.2322 13.3477 78.485 13.3477C77.5137 13.3477 76.7288 13.6812 76.1309 14.348C75.5329 15.0129 75.2343 15.9557 75.2343 17.1764C75.2343 18.4105 75.5329 19.3638 76.1309 20.0364C76.7288 20.709 77.5137 21.0453 78.485 21.0453C79.2322 21.0453 79.8555 20.8709 80.3535 20.5222C80.8521 20.1734 81.1946 19.6752 81.3829 19.0275H83.2137C82.9398 20.0738 82.3918 20.9112 81.5692 21.5397C80.7473 22.1682 79.7192 22.4825 78.485 22.4825C77.5137 22.4825 76.6514 22.265 75.898 21.83C75.1452 21.3931 74.5569 20.7761 74.1336 19.9789C73.7096 19.1818 73.498 18.2476 73.498 17.1764ZM90.5548 11.8904C91.3268 11.8904 92.0247 12.0552 92.6473 12.3848C93.2699 12.7144 93.7589 13.2097 94.113 13.8709C94.4699 14.5301 94.648 15.3329 94.648 16.2796V22.3158H92.9665V16.5239C92.9665 15.5025 92.7103 14.7207 92.1987 14.1784C91.6891 13.6361 90.9918 13.365 90.1062 13.365C89.2096 13.365 88.4966 13.6457 87.9678 14.2072C87.4391 14.7667 87.1747 15.582 87.1747 16.6533V22.3158H85.4726V8.48999H87.1747V13.5345C87.5096 13.0114 87.9733 12.6061 88.5658 12.3187C89.1576 12.0331 89.8206 11.8904 90.5548 11.8904ZM101.894 22.4825C100.934 22.4825 100.065 22.265 99.287 21.83C98.5089 21.3931 97.8987 20.7732 97.4562 19.9703C97.0137 19.1674 96.7925 18.2361 96.7925 17.1764C96.7925 16.1301 97.0192 15.2055 97.4733 14.4026C97.9295 13.5997 98.5494 12.9836 99.3329 12.5544C100.119 12.1232 100.997 11.9077 101.969 11.9077C102.94 11.9077 103.818 12.1232 104.602 12.5544C105.388 12.9836 106.008 13.5968 106.462 14.394C106.916 15.1912 107.142 16.1186 107.142 17.1764C107.142 18.2361 106.909 19.1674 106.442 19.9703C105.976 20.7732 105.345 21.3931 104.547 21.83C103.75 22.265 102.866 22.4825 101.894 22.4825ZM101.894 20.9878C102.503 20.9878 103.077 20.8451 103.613 20.5595C104.148 20.2721 104.58 19.8419 104.91 19.269C105.241 18.6959 105.407 17.9985 105.407 17.1764C105.407 16.3543 105.245 15.6568 104.921 15.0838C104.597 14.5109 104.173 14.0845 103.651 13.8047C103.127 13.5249 102.56 13.3851 101.949 13.3851C101.326 13.3851 100.756 13.5249 100.238 13.8047C99.7233 14.0845 99.3089 14.5109 98.9966 15.0838C98.6863 15.6568 98.5309 16.3543 98.5309 17.1764C98.5309 18.0119 98.6836 18.7161 98.9884 19.289C99.2932 19.862 99.7007 20.2884 100.212 20.5681C100.723 20.8479 101.283 20.9878 101.894 20.9878ZM108.753 17.1764C108.753 16.1186 108.964 15.194 109.388 14.4026C109.811 13.6112 110.399 12.998 111.153 12.563C111.908 12.1261 112.771 11.9077 113.742 11.9077C114.999 11.9077 116.036 12.2133 116.853 12.8246C117.669 13.434 118.208 14.2809 118.468 15.3655H116.637C116.462 14.7427 116.123 14.2503 115.619 13.8881C115.115 13.5279 114.49 13.3477 113.742 13.3477C112.771 13.3477 111.986 13.6812 111.388 14.348C110.79 15.0129 110.492 15.9557 110.492 17.1764C110.492 18.4105 110.79 19.3638 111.388 20.0364C111.986 20.709 112.771 21.0453 113.742 21.0453C114.49 21.0453 115.112 20.8709 115.611 20.5222C116.109 20.1734 116.451 19.6752 116.637 19.0275H118.468C118.194 20.0738 117.646 20.9112 116.824 21.5397C116.001 22.1682 114.975 22.4825 113.742 22.4825C112.771 22.4825 111.908 22.265 111.153 21.83C110.399 21.3931 109.811 20.7761 109.388 19.9789C108.964 19.1818 108.753 18.2476 108.753 17.1764ZM130.072 16.8027C130.072 17.1266 130.053 17.4696 130.014 17.8318H121.831C121.894 18.8397 122.24 19.6273 122.869 20.1945C123.497 20.7617 124.26 21.0453 125.157 21.0453C125.893 21.0453 126.506 20.8738 126.996 20.5308C127.488 20.1878 127.834 19.7298 128.034 19.1568H129.865C129.591 20.1418 129.042 20.9428 128.221 21.5599C127.399 22.1749 126.377 22.4825 125.157 22.4825C124.185 22.4825 123.316 22.265 122.549 21.83C121.785 21.3931 121.184 20.7732 120.747 19.9703C120.312 19.1674 120.095 18.2361 120.095 17.1764C120.095 16.1186 120.307 15.1912 120.73 14.394C121.153 13.5968 121.747 12.9836 122.512 12.5544C123.279 12.1232 124.16 11.9077 125.157 11.9077C126.128 11.9077 126.988 12.1194 127.735 12.5429C128.482 12.9664 129.058 13.5489 129.462 14.2905C129.869 15.0321 130.072 15.8695 130.072 16.8027ZM128.316 16.4492C128.316 15.8015 128.172 15.2438 127.884 14.7763C127.599 14.3087 127.21 13.9542 126.717 13.7127C126.225 13.4694 125.679 13.3477 125.082 13.3477C124.223 13.3477 123.491 13.6217 122.886 14.1698C122.282 14.7178 121.937 15.4776 121.851 16.4492H128.316ZM131.679 17.1592C131.679 16.1129 131.89 15.194 132.314 14.4026C132.737 13.6112 133.319 12.998 134.058 12.563C134.8 12.1261 135.626 11.9077 136.536 11.9077C137.433 11.9077 138.211 12.1012 138.871 12.4883C139.532 12.8734 140.024 13.3592 140.348 13.9456V12.0773H142.066V22.3158H140.348V20.4101C140.01 21.0079 139.508 21.5033 138.842 21.8962C138.177 22.287 137.401 22.4825 136.516 22.4825C135.608 22.4825 134.786 22.2583 134.05 21.8099C133.316 21.3615 132.737 20.7329 132.314 19.9243C131.89 19.1138 131.679 18.192 131.679 17.1592ZM140.348 17.1764C140.348 16.4042 140.192 15.7315 139.879 15.1586C139.569 14.5856 139.148 14.1468 138.617 13.8421C138.088 13.5374 137.507 13.3851 136.873 13.3851C136.236 13.3851 135.657 13.5346 135.134 13.8335C134.61 14.1324 134.194 14.5683 133.883 15.1413C133.571 15.7143 133.414 16.3869 133.414 17.1592C133.414 17.9429 133.571 18.6251 133.883 19.2057C134.194 19.7844 134.61 20.2261 135.134 20.5308C135.657 20.8355 136.236 20.9878 136.873 20.9878C137.507 20.9878 138.088 20.8355 138.617 20.5308C139.148 20.2261 139.569 19.7844 139.879 19.2057C140.192 18.6251 140.348 17.9486 140.348 17.1764ZM149.931 11.8904C151.177 11.8904 152.186 12.2669 152.958 13.0201C153.73 13.7731 154.116 14.8596 154.116 16.2796V22.3158H152.434V16.5239C152.434 15.5025 152.179 14.7207 151.67 14.1784C151.158 13.6361 150.461 13.365 149.577 13.365C148.681 13.365 147.966 13.6457 147.436 14.2072C146.907 14.7667 146.643 15.582 146.643 16.6533V22.3158H144.944V12.0773H146.643V13.5345C146.98 13.0114 147.438 12.6061 148.016 12.3187C148.595 12.0331 149.234 11.8904 149.931 11.8904ZM160.526 22.4825C159.74 22.4825 159.036 22.3493 158.413 22.0829C157.79 21.8147 157.299 21.441 156.938 20.962C156.577 20.4809 156.377 19.9291 156.34 19.3063H158.097C158.147 19.8179 158.386 20.2357 158.816 20.5595C159.245 20.8833 159.808 21.0453 160.506 21.0453C161.153 21.0453 161.664 20.9016 162.038 20.6142C162.412 20.3286 162.598 19.9674 162.598 19.5305C162.598 19.0821 162.399 18.7496 162.001 18.5331C161.602 18.3146 160.986 18.099 160.152 17.8864C159.391 17.687 158.771 17.4849 158.292 17.2799C157.814 17.0749 157.402 16.7701 157.06 16.3658C156.716 15.9596 156.545 15.4268 156.545 14.7677C156.545 14.2445 156.701 13.7645 157.014 13.3276C157.324 12.8926 157.766 12.5477 158.338 12.2928C158.912 12.036 159.566 11.9077 160.301 11.9077C161.434 11.9077 162.349 12.1941 163.047 12.7671C163.745 13.3401 164.118 14.1247 164.168 15.1212H162.469C162.431 14.5866 162.215 14.1573 161.822 13.8335C161.432 13.5096 160.906 13.3477 160.244 13.3477C159.635 13.3477 159.149 13.478 158.787 13.7386C158.427 14.0012 158.247 14.3442 158.247 14.7677C158.247 15.103 158.355 15.3799 158.571 15.5983C158.79 15.8168 159.064 15.9912 159.393 16.1215C159.725 16.2518 160.183 16.3984 160.767 16.5613C161.503 16.7605 162.101 16.957 162.561 17.1505C163.023 17.3421 163.419 17.6315 163.748 18.0186C164.077 18.4038 164.249 18.9077 164.262 19.5305C164.262 20.092 164.106 20.5969 163.794 21.0453C163.484 21.4937 163.045 21.8453 162.477 22.1002C161.91 22.3551 161.26 22.4825 160.526 22.4825Z"
                        fill="white"
                      />
                      <path
                        d="M60.5611 35.0811C60.5611 35.5892 60.4926 36.0426 60.3557 36.4413C60.222 36.8433 60.0296 37.1809 59.7785 37.4542C59.5275 37.7308 59.2226 37.9414 58.8639 38.0861C58.5085 38.2308 58.1041 38.3032 57.6509 38.3032C57.2303 38.3032 56.8455 38.2308 56.4966 38.0861C56.1477 37.9414 55.8461 37.7308 55.5918 37.4542C55.3374 37.1809 55.1402 36.8433 55 36.4413C54.863 36.0426 54.7946 35.5892 54.7946 35.0811C54.7946 34.4026 54.9103 33.8254 55.1418 33.3495C55.3765 32.8736 55.7108 32.5102 56.1445 32.2594C56.5782 32.0086 57.095 31.8832 57.695 31.8832C58.2656 31.8832 58.7661 32.0086 59.1965 32.2594C59.627 32.5135 59.9611 32.8784 60.1991 33.3543C60.4404 33.8302 60.5611 34.4059 60.5611 35.0811ZM55.7776 35.0811C55.7776 35.5796 55.8445 36.0104 55.9782 36.3738C56.1119 36.7404 56.3189 37.0233 56.5994 37.2227C56.8765 37.4221 57.2352 37.5217 57.6754 37.5217C58.1123 37.5217 58.471 37.4221 58.7514 37.2227C59.0318 37.0233 59.2389 36.7404 59.3726 36.3738C59.5063 36.0104 59.5731 35.5796 59.5731 35.0811C59.5731 34.5859 59.5063 34.1598 59.3726 33.8029C59.2389 33.4427 59.0318 33.1646 58.7514 32.9685C58.4743 32.7723 58.1139 32.6742 57.6705 32.6742C57.0151 32.6742 56.5358 32.8865 56.2325 33.3109C55.9293 33.7386 55.7776 34.3287 55.7776 35.0811ZM64.7185 38.3032C64.1544 38.3032 63.6555 38.1874 63.2218 37.9559C62.7914 37.7276 62.4556 37.3771 62.2143 36.9044C61.973 36.4349 61.8524 35.8416 61.8524 35.1246C61.8524 34.3753 61.9795 33.7627 62.2339 33.2868C62.4882 32.8109 62.8387 32.4572 63.2854 32.2257C63.7322 31.9973 64.2408 31.8832 64.8114 31.8832C65.1245 31.8832 65.4277 31.9137 65.7211 31.9748C66.0113 32.0359 66.2511 32.1147 66.4402 32.2111L66.1516 32.9974C65.9624 32.9202 65.7424 32.8511 65.4913 32.79C65.2402 32.7321 65.0054 32.7031 64.787 32.7031C64.3533 32.7031 63.9913 32.7948 63.7011 32.9781C63.4142 33.1614 63.199 33.4331 63.0556 33.7933C62.9121 34.1502 62.8404 34.5907 62.8404 35.1149C62.8404 35.6165 62.9104 36.0442 63.0507 36.3979C63.1876 36.7516 63.3946 37.0217 63.6718 37.2083C63.9489 37.3948 64.2963 37.488 64.7136 37.488C65.0462 37.488 65.3462 37.4526 65.6136 37.3819C65.8809 37.3144 66.1239 37.234 66.3424 37.1407V37.9752C66.1304 38.0813 65.8956 38.1617 65.638 38.2163C65.3804 38.2742 65.0739 38.3032 64.7185 38.3032ZM70.25 31.8832C70.785 31.8832 71.2432 31.9989 71.6247 32.2304C72.0062 32.4652 72.2994 32.7932 72.5048 33.2144C72.7069 33.6324 72.8083 34.1228 72.8083 34.6856V35.2692H68.47C68.4797 35.996 68.6624 36.5491 69.0178 36.9285C69.3733 37.3111 69.874 37.5025 70.5192 37.5025C70.9172 37.5025 71.2692 37.4655 71.5761 37.3915C71.8788 37.3208 72.1952 37.2163 72.5247 37.0781V37.9028C72.2083 38.0411 71.8939 38.1424 71.5809 38.2067C71.2706 38.271 70.9041 38.3032 70.4802 38.3032C69.8767 38.3032 69.35 38.181 68.9 37.9366C68.4504 37.6954 68.1015 37.3385 67.8537 36.8658C67.6059 36.3963 67.482 35.8207 67.482 35.139C67.482 34.4701 67.5961 33.8913 67.8243 33.4026C68.0493 32.917 68.3705 32.5424 68.7877 32.2787C69.2021 32.015 69.6898 31.8832 70.25 31.8832ZM70.2404 32.6501C69.7315 32.6501 69.3261 32.8141 69.0226 33.1421C68.7226 33.47 68.5432 33.9283 68.4846 34.5167H71.8103C71.8076 34.147 71.7487 33.8222 71.6343 33.5424C71.5206 33.2594 71.3493 33.0408 71.1206 32.8865C70.8925 32.7289 70.5994 32.6501 70.2404 32.6501ZM76.7699 31.8928C77.5165 31.8928 78.0726 32.0584 78.4377 32.3896C78.8 32.7208 78.9809 33.2498 78.9809 33.9765V38.1874H78.2863L78.1055 37.2758H78.0562C77.8802 37.5009 77.698 37.689 77.5089 37.8402C77.3165 37.9945 77.0946 38.1102 76.8432 38.1874C76.5959 38.2646 76.2891 38.3032 75.924 38.3032C75.5425 38.3032 75.2035 38.2373 74.9069 38.1054C74.6096 37.9736 74.3767 37.7742 74.2069 37.5073C74.0377 37.2372 73.9528 36.8979 73.9528 36.4896C73.9528 35.8722 74.2021 35.3963 74.7014 35.0618C75.1966 34.7306 75.9535 34.5505 76.9706 34.5216L78.0514 34.4782V34.0972C78.0514 33.5633 77.9357 33.1887 77.7041 32.9733C77.4692 32.7578 77.1404 32.6501 76.7165 32.6501C76.387 32.6501 76.074 32.6967 75.7774 32.79C75.4774 32.8864 75.1932 32.9974 74.9261 33.1228L74.6377 32.4137C74.9178 32.2691 75.2425 32.1468 75.611 32.0472C75.9761 31.9443 76.3624 31.8928 76.7699 31.8928ZM78.0418 35.7082V35.139L77.0829 35.1776C76.3007 35.2065 75.748 35.332 75.4254 35.5538C75.1055 35.7789 74.9459 36.094 74.9459 36.4992C74.9459 36.8529 75.0548 37.115 75.2733 37.2854C75.4918 37.4559 75.7802 37.5411 76.1391 37.5411C76.6966 37.5411 77.1535 37.3883 77.5089 37.0828C77.8637 36.7774 78.0418 36.3191 78.0418 35.7082ZM83.9206 31.8832C84.6644 31.8832 85.2281 32.0633 85.6131 32.4234C85.9946 32.7803 86.1857 33.3575 86.1857 34.155V38.1874H85.2466V34.2177C85.2466 33.7 85.1254 33.3125 84.8843 33.0552C84.6466 32.8012 84.2809 32.6742 83.7891 32.6742C83.0939 32.6742 82.6048 32.8672 82.3213 33.253C82.0377 33.6421 81.8959 34.2065 81.8959 34.9461V38.1874H80.9473V31.9941H81.7151L81.8569 32.8865H81.9103C82.0446 32.6678 82.2137 32.4845 82.4192 32.3365C82.6247 32.1887 82.8562 32.0761 83.1137 31.9989C83.3678 31.9217 83.637 31.8832 83.9206 31.8832ZM96.6035 35.0811C96.6035 35.5892 96.5363 36.0426 96.4028 36.4413C96.2692 36.8433 96.0767 37.1809 95.8254 37.4542C95.5747 37.7308 95.2699 37.9414 94.911 38.0861C94.5555 38.2308 94.1514 38.3032 93.698 38.3032C93.2774 38.3032 92.8925 38.2308 92.5439 38.0861C92.1946 37.9414 91.8932 37.7308 91.6391 37.4542C91.3843 37.1809 91.187 36.8433 91.0473 36.4413C90.9103 36.0426 90.8418 35.5892 90.8418 35.0811C90.8418 34.4026 90.9576 33.8254 91.1891 33.3495C91.4206 32.8736 91.7528 32.5102 92.187 32.2594C92.6233 32.0086 93.1404 31.8832 93.737 31.8832C94.311 31.8832 94.813 32.0086 95.2439 32.2594C95.674 32.5135 96.0083 32.8784 96.2466 33.3543C96.4843 33.8302 96.6035 34.4059 96.6035 35.0811ZM91.8247 35.0811C91.8247 35.5796 91.8918 36.0104 92.0254 36.3738C92.1589 36.7404 92.3658 37.0233 92.6466 37.2227C92.9233 37.4221 93.2822 37.5217 93.7226 37.5217C94.1596 37.5217 94.5178 37.4221 94.7987 37.2227C95.0788 37.0233 95.2863 36.7404 95.4199 36.3738C95.5535 36.0104 95.6199 35.5796 95.6199 35.0811C95.6199 34.5859 95.5535 34.1598 95.4199 33.8029C95.2863 33.4427 95.0788 33.1646 94.7987 32.9685C94.5213 32.7723 94.161 32.6742 93.7178 32.6742C93.0624 32.6742 92.5829 32.8865 92.2795 33.3109C91.9761 33.7386 91.8247 34.3287 91.8247 35.0811ZM101.049 31.9941V32.7272H99.4843V38.1874H98.5302V32.7272H97.4199V32.2787L98.5302 31.9652V31.5552C98.5302 31.0342 98.6089 30.6113 98.7651 30.2866C98.922 29.9586 99.15 29.7174 99.45 29.5631C99.7466 29.4087 100.108 29.3315 100.536 29.3315C100.777 29.3315 100.999 29.3524 101.201 29.3943C101.4 29.4361 101.576 29.4827 101.729 29.5341L101.484 30.277C101.354 30.2351 101.208 30.1965 101.045 30.1612C100.882 30.1258 100.716 30.1081 100.551 30.1081C100.185 30.1081 99.9165 30.2239 99.7432 30.4554C99.5706 30.687 99.4843 31.0487 99.4843 31.5407V31.9941H101.049ZM107.28 37.5363C107.44 37.5363 107.601 37.5217 107.764 37.4928C107.927 37.4671 108.062 37.435 108.166 37.3963V38.1296C108.055 38.1778 107.901 38.218 107.706 38.2501C107.507 38.2855 107.314 38.3032 107.129 38.3032C106.797 38.3032 106.495 38.2453 106.224 38.1296C105.95 38.0138 105.734 37.8192 105.573 37.5459C105.41 37.2694 105.329 36.8883 105.329 36.4027V32.7272H104.434V32.2739L105.334 31.9024L105.71 30.5567H106.288V31.9941H108.127V32.7272H106.288V36.3738C106.288 36.7629 106.377 37.0539 106.557 37.2468C106.739 37.4398 106.981 37.5363 107.28 37.5363ZM111.853 31.8832C112.388 31.8832 112.847 31.9989 113.228 32.2304C113.61 32.4652 113.901 32.7932 114.103 33.2144C114.306 33.6324 114.407 34.1228 114.407 34.6856V35.2692H110.069C110.082 35.996 110.266 36.5491 110.621 36.9285C110.977 37.3111 111.477 37.5025 112.123 37.5025C112.521 37.5025 112.871 37.4655 113.174 37.3915C113.481 37.3208 113.799 37.2163 114.128 37.0781V37.9028C113.812 38.0411 113.497 38.1424 113.184 38.2067C112.874 38.271 112.506 38.3032 112.079 38.3032C111.475 38.3032 110.951 38.181 110.503 37.9366C110.053 37.6954 109.705 37.3385 109.457 36.8658C109.209 36.3963 109.085 35.8207 109.085 35.139C109.085 34.4701 109.198 33.8913 109.423 33.4026C109.651 32.917 109.972 32.5424 110.386 32.2787C110.801 32.015 111.29 31.8832 111.853 31.8832ZM111.839 32.6501C111.33 32.6501 110.926 32.8141 110.626 33.1421C110.323 33.47 110.143 33.9283 110.088 34.5167H113.409C113.406 34.147 113.349 33.8222 113.238 33.5424C113.124 33.2594 112.953 33.0408 112.724 32.8865C112.492 32.7289 112.198 32.6501 111.839 32.6501ZM118.54 38.3032C117.975 38.3032 117.477 38.1874 117.043 37.9559C116.612 37.7276 116.277 37.3771 116.036 36.9044C115.794 36.4349 115.673 35.8416 115.673 35.1246C115.673 34.3753 115.801 33.7627 116.055 33.2868C116.31 32.8109 116.66 32.4572 117.107 32.2257C117.553 31.9973 118.062 31.8832 118.633 31.8832C118.946 31.8832 119.249 31.9137 119.543 31.9748C119.833 32.0359 120.072 32.1147 120.262 32.2111L119.973 32.9974C119.784 32.9202 119.564 32.8511 119.312 32.79C119.062 32.7321 118.827 32.7031 118.608 32.7031C118.175 32.7031 117.812 32.7948 117.523 32.9781C117.236 33.1614 117.02 33.4331 116.877 33.7933C116.734 34.1502 116.662 34.5907 116.662 35.1149C116.662 35.6165 116.732 36.0442 116.872 36.3979C117.009 36.7516 117.216 37.0217 117.493 37.2083C117.77 37.3948 118.117 37.488 118.535 37.488C118.867 37.488 119.167 37.4526 119.435 37.3819C119.702 37.3144 119.945 37.234 120.164 37.1407V37.9752C119.951 38.0813 119.717 38.1617 119.459 38.2163C119.201 38.2742 118.895 38.3032 118.54 38.3032ZM121.645 29.3991H122.599V32.0278C122.599 32.179 122.596 32.3301 122.59 32.4813C122.579 32.6356 122.565 32.7771 122.545 32.9057H122.609C122.74 32.6871 122.906 32.5022 123.108 32.3511C123.307 32.2031 123.535 32.0906 123.793 32.0134C124.047 31.9362 124.318 31.8976 124.605 31.8976C125.11 31.8976 125.531 31.9764 125.866 32.134C126.206 32.2915 126.46 32.5375 126.629 32.872C126.799 33.2032 126.884 33.6325 126.884 34.1598V38.1922H125.945V34.2226C125.945 33.7048 125.826 33.3174 125.588 33.0601C125.35 32.8061 124.984 32.679 124.492 32.679C124.026 32.679 123.654 32.7659 123.377 32.9395C123.1 33.1163 122.901 33.3736 122.78 33.7113C122.66 34.0521 122.599 34.4669 122.599 34.9557V38.1922H121.645V29.3991ZM131.824 31.8832C132.571 31.8832 133.135 32.0633 133.516 32.4234C133.898 32.7803 134.088 33.3575 134.088 34.155V38.1874H133.149V34.2177C133.149 33.7 133.03 33.3125 132.793 33.0552C132.554 32.8012 132.188 32.6742 131.692 32.6742C130.997 32.6742 130.508 32.8672 130.225 33.253C129.944 33.6421 129.804 34.2065 129.804 34.9461V38.1874H128.85V31.9941H129.618L129.764 32.8865H129.814C129.947 32.6678 130.117 32.4845 130.322 32.3365C130.531 32.1887 130.762 32.0761 131.016 31.9989C131.275 31.9217 131.543 31.8832 131.824 31.8832ZM141.464 35.0811C141.464 35.5892 141.397 36.0426 141.264 36.4413C141.127 36.8433 140.933 37.1809 140.682 37.4542C140.43 37.7308 140.125 37.9414 139.767 38.0861C139.412 38.2308 139.007 38.3032 138.554 38.3032C138.134 38.3032 137.749 38.2308 137.399 38.0861C137.051 37.9414 136.749 37.7308 136.495 37.4542C136.24 37.1809 136.043 36.8433 135.903 36.4413C135.766 36.0426 135.697 35.5892 135.697 35.0811C135.697 34.4026 135.813 33.8254 136.045 33.3495C136.279 32.8736 136.614 32.5102 137.047 32.2594C137.481 32.0086 137.998 31.8832 138.598 31.8832C139.169 31.8832 139.669 32.0086 140.099 32.2594C140.53 32.5135 140.864 32.8784 141.102 33.3543C141.343 33.8302 141.464 34.4059 141.464 35.0811ZM136.681 35.0811C136.681 35.5796 136.747 36.0104 136.881 36.3738C137.015 36.7404 137.222 37.0233 137.502 37.2227C137.779 37.4221 138.138 37.5217 138.578 37.5217C139.015 37.5217 139.374 37.4221 139.654 37.2227C139.935 37.0233 140.142 36.7404 140.275 36.3738C140.41 36.0104 140.476 35.5796 140.476 35.0811C140.476 34.5859 140.41 34.1598 140.275 33.8029C140.142 33.4427 139.935 33.1646 139.654 32.9685C139.377 32.7723 139.017 32.6742 138.573 32.6742C137.921 32.6742 137.442 32.8865 137.136 33.3109C136.832 33.7386 136.681 34.3287 136.681 35.0811ZM144.066 29.3991V38.1922H143.108V29.3991H144.066ZM151.486 35.0811C151.486 35.5892 151.419 36.0426 151.286 36.4413C151.151 36.8433 150.96 37.1809 150.708 37.4542C150.454 37.7308 150.149 37.9414 149.794 38.0861C149.435 38.2308 149.031 38.3032 148.581 38.3032C148.16 38.3032 147.775 38.2308 147.426 38.0861C147.077 37.9414 146.776 37.7308 146.521 37.4542C146.267 37.1809 146.07 36.8433 145.929 36.4413C145.79 36.0426 145.719 35.5892 145.719 35.0811C145.719 34.4026 145.837 33.8254 146.071 33.3495C146.303 32.8736 146.636 32.5102 147.069 32.2594C147.503 32.0086 148.02 31.8832 148.62 31.8832C149.194 31.8832 149.696 32.0086 150.126 32.2594C150.557 32.5135 150.891 32.8784 151.129 33.3543C151.367 33.8302 151.486 34.4059 151.486 35.0811ZM146.708 35.0811C146.708 35.5796 146.774 36.0104 146.908 36.3738C147.042 36.7404 147.247 37.0233 147.524 37.2227C147.805 37.4221 148.165 37.5217 148.605 37.5217C149.039 37.5217 149.396 37.4221 149.676 37.2227C149.96 37.0233 150.169 36.7404 150.302 36.3738C150.436 36.0104 150.503 35.5796 150.503 35.0811C150.503 34.5859 150.436 34.1598 150.302 33.8029C150.169 33.4427 149.962 33.1646 149.681 32.9685C149.401 32.7723 149.04 32.6742 148.6 32.6742C147.945 32.6742 147.465 32.8865 147.162 33.3109C146.859 33.7386 146.708 34.3287 146.708 35.0811ZM154.885 40.9754C154.06 40.9754 153.425 40.8243 152.977 40.522C152.531 40.2165 152.308 39.7904 152.308 39.2437C152.308 38.8579 152.432 38.5267 152.679 38.2501C152.93 37.9768 153.277 37.7951 153.721 37.7051C153.558 37.6279 153.418 37.5137 153.301 37.3626C153.183 37.2115 153.125 37.0378 153.125 36.8417C153.125 36.6166 153.19 36.4188 153.32 36.2484C153.447 36.0748 153.643 35.9091 153.907 35.7516C153.577 35.6198 153.31 35.3963 153.105 35.0811C152.899 34.7692 152.797 34.4026 152.797 33.9814C152.797 33.5376 152.891 33.1581 153.08 32.8431C153.266 32.5279 153.537 32.2883 153.893 32.1244C154.248 31.9571 154.678 31.8735 155.184 31.8735C155.295 31.8735 155.407 31.8783 155.521 31.888C155.632 31.8976 155.74 31.9105 155.844 31.9266C155.945 31.9459 156.034 31.9667 156.113 31.9893H158.265V32.5922L157.11 32.7321C157.225 32.88 157.319 33.0585 157.395 33.2675C157.473 33.4733 157.512 33.7032 157.512 33.9572C157.512 34.5746 157.3 35.065 156.876 35.4284C156.452 35.7917 155.869 35.9735 155.125 35.9735C154.949 35.9735 154.769 35.959 154.587 35.93C154.401 36.0298 154.259 36.1423 154.161 36.2677C154.064 36.3931 154.014 36.5362 154.014 36.697C154.014 36.8159 154.052 36.9124 154.127 36.9864C154.202 37.0572 154.31 37.1086 154.45 37.1407C154.59 37.1729 154.76 37.1889 154.958 37.1889H156.064C156.749 37.1889 157.273 37.3304 157.639 37.6134C158.004 37.8964 158.186 38.308 158.186 38.8483C158.186 39.5364 157.905 40.0622 157.34 40.4255C156.773 40.7921 155.955 40.9754 154.885 40.9754ZM154.914 40.2422C155.433 40.2422 155.863 40.1891 156.206 40.0831C156.548 39.9801 156.804 39.8322 156.974 39.6393C157.143 39.4463 157.228 39.2148 157.228 38.9447C157.228 38.6971 157.171 38.5106 157.057 38.3852C156.942 38.2565 156.775 38.1713 156.553 38.1296C156.332 38.0877 156.061 38.0668 155.741 38.0668H154.651C154.366 38.0668 154.121 38.1087 153.912 38.1922C153.7 38.2791 153.538 38.4077 153.427 38.5781C153.314 38.7485 153.256 38.9591 153.256 39.21C153.256 39.5476 153.4 39.8033 153.687 39.977C153.974 40.1538 154.383 40.2422 154.914 40.2422ZM155.159 35.2885C155.616 35.2885 155.958 35.176 156.186 34.9509C156.414 34.7258 156.529 34.3962 156.529 33.9621C156.529 33.499 156.413 33.1517 156.182 32.9202C155.947 32.6854 155.603 32.568 155.149 32.568C154.712 32.568 154.377 32.6887 154.142 32.9298C153.907 33.1678 153.79 33.5167 153.79 33.9765C153.79 34.401 153.909 34.7258 154.147 34.9509C154.385 35.176 154.722 35.2885 155.159 35.2885ZM161.028 38.2019L158.514 31.9941H159.532L160.921 35.5876C161.002 35.7998 161.077 36.0024 161.146 36.1953C161.214 36.3915 161.275 36.578 161.327 36.7549C161.382 36.9317 161.425 37.1022 161.454 37.2661H161.493C161.549 37.0796 161.625 36.832 161.723 36.5233C161.824 36.2178 161.932 35.9043 162.046 35.5827L163.356 31.9941H164.384L161.649 39.0991C161.503 39.4817 161.333 39.8129 161.141 40.0927C160.949 40.3757 160.715 40.5944 160.441 40.7487C160.164 40.8998 159.832 40.9754 159.444 40.9754C159.264 40.9754 159.105 40.9657 158.964 40.9465C158.827 40.9239 158.71 40.8998 158.612 40.8741V40.1216C158.697 40.1409 158.798 40.1586 158.915 40.1747C159.036 40.1876 159.162 40.1939 159.292 40.1939C159.53 40.1939 159.736 40.1506 159.908 40.0637C160.084 39.9737 160.234 39.8451 160.358 39.6779C160.486 39.5074 160.595 39.3048 160.686 39.0701L161.028 38.2019Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="d-flex align-items-center gap-3">
                
                  {!isMobile ? (
                    <>
                      <div onClick={navbtn} className={styles.menueBackdrop}></div>
                      <div id="menueitems" className={styles.menueitems}>
                        <Link
                          className={styles.menueitem + "  align-center"}
                          href={"/"}
                        >
                          Home
                        </Link>

                        <Link
                          className={styles.menueitem + "  align-center"}
                          href={"/about"}
                        >
                          About Us
                        </Link>

                        <Link
                          className={styles.menueitem + "  align-center"}
                          href={
                            "/services"
                          }
                        >
                          Services
                        </Link>
                        <Link
                          className={styles.menueitem + "  align-center"}
                          href={"/blog"}
                        >
                          Blog
                        </Link>
                        <Link
                          className={styles.menueitem + "  align-center"}
                          href={
                            "/portfolio"
                          }
                        >
                          Portfolio
                        </Link>

                        <Link
                          className={styles.menueitem + "  align-center"}
                          href={"/contact"}
                        >
                          Contact Us
                        </Link>
                        
                      </div>
                        
                    </>
                  ) : 
                  ""
                  }
                  
                  <Box sx={{display: {xs: " block", sm: "block", lg:"none", md:"none"}}} >
                    <i onClick={navbtn} className="f30 white icofont-navigation-menu icofont"></i>)
                    
                  </Box>
                  {/*  */}
                </div>
                {/*  */}
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Link
        className={
          styles.whatsapp  +
          " br-7 white-bg align-center mr-20 d-flex align-items-center"
        }
        href={"https://wa.me/03472696576?text=please%20visit%20our%20facebook%20page%20for%20more%20detail%20you%20want%20to%20purchase%20anything%20just%20message%20inbox%20on%20whatsapp%20chat%20or%20call%20we%20will%20response%20quick%0Ahttps://www.facebook.com/profile.php?id=61568919442130"}
      >
      <span className="d-none">techoceans whatsapp</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1219.547 1225.016"
            width="50"
            height="50"
          >
            <path
              fill="#E0E0E0"
              d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"
            />
            <linearGradient
              id="a"
              x1="609.77"
              x2="609.77"
              y1="1190.114"
              y2="21.084"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#20b038" />
              <stop offset="1" stopColor="#60d66a" />
            </linearGradient>
            <path
              fill="url(#a)"
              d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"
            />
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z"
              clipRule="evenodd"
            />
            <path
              fill="#FFF"
              d="M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z"
            />
          </svg>
      </Link>
    </>
  );
};

export default Header;