import { RiShoppingCartLine, RiShoppingCartFill, RiArrowLeftLine, RiCloseLine, RiMenuLine, RiEyeLine, RiEyeFill } from "react-icons/ri"
import { FiLogIn, FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { TbFidgetSpinner, TbSearch } from "react-icons/tb"
import { BiMap } from "react-icons/bi"
import { RxHamburgerMenu } from "react-icons/rx"
import { TbQuestionCircle } from "react-icons/tb"
import { IoLogoUsd } from "react-icons/io"
import { CgSpinner } from "react-icons/cg"
import { HiOutlinePlusSmall } from "react-icons/hi2"

import { IconType, IconBaseProps} from "react-icons"

export const Icons = {
    CartOutline : RiShoppingCartLine,
    CartFill : RiShoppingCartFill,
    LoginOutline : FiLogIn,
    Search : TbSearch,
    Map : BiMap,
    ChevronRight : FiChevronRight,
    ChevronLeft : FiChevronLeft,
    Menu : RiMenuLine,
    Question : TbQuestionCircle,
    ArrowLeft : RiArrowLeftLine,
    Close : RiCloseLine,
    Logo : (props : IconBaseProps) => (
        <svg {...props} viewBox="0 0 68 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6325 39.144C17.7552 39.144 16.0485 38.7173 14.5125 37.864C13.0192 37.0107 11.8458 35.8373 10.9925 34.344C10.1392 32.8507 9.7125 31.1653 9.7125 29.288V20.136C9.7125 19.7093 9.8405 19.368 10.0965 19.112C10.3952 18.856 10.7578 18.728 11.1845 18.728H14.7045C15.0885 18.728 15.4298 18.8773 15.7285 19.176C16.0272 19.432 16.1765 19.752 16.1765 20.136V28.904C16.1765 29.9707 16.5392 30.9307 17.2645 31.784C18.0325 32.6373 18.9498 33.064 20.0165 33.064H27.6965C28.8058 33.064 29.7445 32.6373 30.5125 31.784C31.2805 30.9307 31.6645 29.9707 31.6645 28.904V3.432C31.6645 3.048 31.7925 2.728 32.0485 2.472C32.3045 2.17333 32.6245 2.024 33.0085 2.024H36.6565C37.0405 2.024 37.3605 2.17333 37.6165 2.472C37.9152 2.728 38.0645 3.048 38.0645 3.432V29.288C38.0645 31.1653 37.6378 32.8507 36.7845 34.344C35.9312 35.8373 34.7365 37.0107 33.2005 37.864C31.7072 38.7173 30.0218 39.144 28.1445 39.144H19.6325ZM40.8165 33.064C39.8778 33.064 38.7898 32.872 37.5525 32.488L38.0645 23.976C38.0645 24.7013 38.3205 25.32 38.8325 25.832C39.3445 26.344 40.0058 26.6 40.8165 26.6H42.1605V33.064H40.8165ZM38.812 10.344C38.6413 10.216 38.556 10.088 38.556 9.96C38.556 9.78933 38.6627 9.59733 38.876 9.384L46.044 1C46.3853 0.658666 46.7053 0.637332 47.004 0.935997L49.82 3.368C50.076 3.53867 50.0973 3.77333 49.884 4.072L42.716 12.456C42.3747 12.7973 42.0547 12.8613 41.756 12.648L38.812 10.344ZM38.812 26.6H53.404C54.6413 26.6 55.6013 26.4293 56.284 26.088C56.9667 25.7467 57.308 25.0853 57.308 24.104C57.308 23.2507 56.9667 22.6107 56.284 22.184C55.644 21.7573 54.7907 21.544 53.724 21.544H45.724C44.6147 21.544 43.6973 21.1173 42.972 20.264C42.2467 19.4107 41.884 18.472 41.884 17.448C41.884 16.7653 42.076 16.168 42.46 15.656L52.636 3.496C52.9773 3.02666 53.3613 2.792 53.788 2.792C54.172 2.792 54.5347 2.94133 54.876 3.24L57.436 5.16C57.9053 5.544 58.14 5.928 58.14 6.312C58.14 6.65333 57.9693 7.03733 57.628 7.464L51.1 15.208H54.62C56.4973 15.208 58.0973 15.6347 59.42 16.488C60.7853 17.3413 61.8093 18.4507 62.492 19.816C63.2173 21.1813 63.58 22.632 63.58 24.168C63.58 26.5573 62.7907 28.6267 61.212 30.376C59.676 32.1253 57.4787 33 54.62 33H38.812V26.6ZM1.6155 85.416C1.53017 85.416 1.44483 85.3733 1.3595 85.288C1.27417 85.2027 1.2315 85.1173 1.2315 85.032L0.5275 79.656V79.528C0.5275 79.3147 0.6555 79.208 0.9115 79.208C3.51417 79.1653 5.6475 78.5467 7.3115 77.352C9.01817 76.1573 9.8715 74.7067 9.8715 73V55.464C9.8715 55.08 9.97817 54.76 10.1915 54.504C10.4475 54.248 10.7462 54.0987 11.0875 54.056H14.9275C15.3115 54.056 15.6102 54.2053 15.8235 54.504C16.0795 54.76 16.2075 55.08 16.2075 55.464V72.616C16.2075 75.048 15.5888 77.224 14.3515 79.144C13.1568 81.1067 11.4715 82.6427 9.2955 83.752C7.1195 84.8613 4.60217 85.416 1.7435 85.416H1.6155ZM29.271 73C27.5643 73 26.007 72.5947 24.599 71.784C23.191 70.9307 22.0817 69.8 21.271 68.392C20.4603 66.984 20.055 65.4693 20.055 63.848V43.368C20.055 43.0267 20.2043 42.728 20.503 42.472C20.8017 42.1733 21.143 42.024 21.527 42.024H25.111C25.4523 42.024 25.7723 42.1733 26.071 42.472C26.3697 42.728 26.519 43.0267 26.519 43.368V63.848C26.519 65.6827 27.4363 66.6 29.271 66.6H30.679V73H29.271ZM26.83 66.6H43.086C44.0673 66.6 44.7713 66.28 45.198 65.64C45.6673 64.9573 45.902 64.0827 45.902 63.016V53.736C45.902 53.3093 46.03 52.968 46.286 52.712C46.542 52.4133 46.862 52.264 47.246 52.264H50.766C51.1927 52.264 51.534 52.4133 51.79 52.712C52.046 52.968 52.174 53.3093 52.174 53.736V63.016C52.174 66.0453 51.342 68.456 49.678 70.248C48.0567 72.04 45.8593 72.936 43.086 72.936H26.83V66.6ZM30.414 82.792C30.03 82.792 29.6887 82.6427 29.39 82.344C29.134 82.088 29.006 81.768 29.006 81.384V77.544C29.006 77.2027 29.134 76.904 29.39 76.648C29.6887 76.392 30.03 76.264 30.414 76.264H34.254C34.638 76.264 34.958 76.392 35.214 76.648C35.47 76.904 35.598 77.2027 35.598 77.544V81.384C35.598 81.768 35.47 82.088 35.214 82.344C34.958 82.6427 34.638 82.792 34.254 82.792H30.414ZM34.702 90.408C34.318 90.408 33.9767 90.2587 33.678 89.96C33.422 89.704 33.294 89.384 33.294 89V85.16C33.294 84.8187 33.422 84.4987 33.678 84.2C33.9767 83.944 34.318 83.816 34.702 83.816H38.542C38.926 83.816 39.2247 83.944 39.438 84.2C39.694 84.456 39.822 84.776 39.822 85.16V89C39.822 89.384 39.694 89.704 39.438 89.96C39.2247 90.2587 38.926 90.408 38.542 90.408H34.702ZM38.286 82.792C37.9447 82.792 37.6247 82.6427 37.326 82.344C37.07 82.088 36.942 81.768 36.942 81.384V77.544C36.942 77.2027 37.07 76.904 37.326 76.648C37.6247 76.392 37.9447 76.264 38.286 76.264H42.126C42.51 76.264 42.83 76.392 43.086 76.648C43.342 76.904 43.47 77.2027 43.47 77.544V81.384C43.47 81.768 43.342 82.088 43.086 82.344C42.83 82.6427 42.51 82.792 42.126 82.792H38.286ZM57.4695 73C57.0855 73 56.7442 72.8507 56.4455 72.552C56.1468 72.2533 55.9975 71.9333 55.9975 71.592V46.248C55.9975 45.864 56.1468 45.544 56.4455 45.288C56.7442 44.9893 57.0855 44.84 57.4695 44.84H61.0535C61.4375 44.84 61.7575 44.9893 62.0135 45.288C62.3122 45.544 62.4615 45.864 62.4615 46.248V71.592C62.4615 71.9333 62.3122 72.2533 62.0135 72.552C61.7575 72.8507 61.4375 73 61.0535 73H57.4695ZM48.3175 42.792C48.1468 42.7067 48.0402 42.5573 47.9975 42.344C47.9548 42.1307 47.9762 41.9387 48.0615 41.768L48.3815 41.192C49.2775 39.3573 50.4082 38.0347 51.7735 37.224C53.1388 36.4133 54.8242 36.008 56.8295 36.008H66.6215C67.0055 36.008 67.3255 36.1573 67.5815 36.456C67.8375 36.712 67.9655 37.0107 67.9655 37.352V40.424C67.9655 40.808 67.8375 41.128 67.5815 41.384C67.3255 41.64 67.0055 41.768 66.6215 41.768H57.2135C56.0188 41.768 55.1228 41.96 54.5255 42.344C53.9282 42.6853 53.3735 43.368 52.8615 44.392C52.8188 44.5627 52.7122 44.6053 52.5415 44.52L48.3175 42.792Z" fill="currentColor"/>
        </svg>
    ),
    Logo2 : (props : IconBaseProps) => (
        <svg {...props} viewBox="0 0 128 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.4855 49.416C1.40017 49.416 1.31483 49.3733 1.2295 49.288C1.14417 49.2027 1.1015 49.1173 1.1015 49.032L0.397499 43.656V43.528C0.397499 43.3147 0.525499 43.208 0.781499 43.208C3.38417 43.1653 5.5175 42.5467 7.1815 41.352C8.88817 40.1573 9.7415 38.7067 9.7415 37V19.464C9.7415 19.08 9.84817 18.76 10.0615 18.504C10.3175 18.248 10.6162 18.0987 10.9575 18.056H14.7975C15.1815 18.056 15.4802 18.2053 15.6935 18.504C15.9495 18.76 16.0775 19.08 16.0775 19.464V36.616C16.0775 39.048 15.4588 41.224 14.2215 43.144C13.0268 45.1067 11.3415 46.6427 9.1655 47.752C6.9895 48.8613 4.47217 49.416 1.6135 49.416H1.4855ZM29.141 37C27.4343 37 25.877 36.5947 24.469 35.784C23.061 34.9307 21.9517 33.8 21.141 32.392C20.3303 30.984 19.925 29.4693 19.925 27.848V7.368C19.925 7.02667 20.0743 6.728 20.373 6.472C20.6717 6.17333 21.013 6.024 21.397 6.024H24.981C25.3223 6.024 25.6423 6.17333 25.941 6.472C26.2397 6.728 26.389 7.02667 26.389 7.368V27.848C26.389 29.6827 27.3063 30.6 29.141 30.6H30.549V37H29.141ZM26.7 30.6H42.956C43.9373 30.6 44.6413 30.28 45.068 29.64C45.5373 28.9573 45.772 28.0827 45.772 27.016V17.736C45.772 17.3093 45.9 16.968 46.156 16.712C46.412 16.4133 46.732 16.264 47.116 16.264H50.636C51.0627 16.264 51.404 16.4133 51.66 16.712C51.916 16.968 52.044 17.3093 52.044 17.736V27.016C52.044 30.0453 51.212 32.456 49.548 34.248C47.9267 36.04 45.7293 36.936 42.956 36.936H26.7V30.6ZM30.284 46.792C29.9 46.792 29.5587 46.6427 29.26 46.344C29.004 46.088 28.876 45.768 28.876 45.384V41.544C28.876 41.2027 29.004 40.904 29.26 40.648C29.5587 40.392 29.9 40.264 30.284 40.264H34.124C34.508 40.264 34.828 40.392 35.084 40.648C35.34 40.904 35.468 41.2027 35.468 41.544V45.384C35.468 45.768 35.34 46.088 35.084 46.344C34.828 46.6427 34.508 46.792 34.124 46.792H30.284ZM34.572 54.408C34.188 54.408 33.8467 54.2587 33.548 53.96C33.292 53.704 33.164 53.384 33.164 53V49.16C33.164 48.8187 33.292 48.4987 33.548 48.2C33.8467 47.944 34.188 47.816 34.572 47.816H38.412C38.796 47.816 39.0947 47.944 39.308 48.2C39.564 48.456 39.692 48.776 39.692 49.16V53C39.692 53.384 39.564 53.704 39.308 53.96C39.0947 54.2587 38.796 54.408 38.412 54.408H34.572ZM38.156 46.792C37.8147 46.792 37.4947 46.6427 37.196 46.344C36.94 46.088 36.812 45.768 36.812 45.384V41.544C36.812 41.2027 36.94 40.904 37.196 40.648C37.4947 40.392 37.8147 40.264 38.156 40.264H41.996C42.38 40.264 42.7 40.392 42.956 40.648C43.212 40.904 43.34 41.2027 43.34 41.544V45.384C43.34 45.768 43.212 46.088 42.956 46.344C42.7 46.6427 42.38 46.792 41.996 46.792H38.156ZM57.3395 37C56.9555 37 56.6142 36.8507 56.3155 36.552C56.0168 36.2533 55.8675 35.9333 55.8675 35.592V10.248C55.8675 9.864 56.0168 9.544 56.3155 9.288C56.6142 8.98933 56.9555 8.84 57.3395 8.84H60.9235C61.3075 8.84 61.6275 8.98933 61.8835 9.288C62.1822 9.544 62.3315 9.864 62.3315 10.248V35.592C62.3315 35.9333 62.1822 36.2533 61.8835 36.552C61.6275 36.8507 61.3075 37 60.9235 37H57.3395ZM48.1875 6.792C48.0168 6.70666 47.9102 6.55733 47.8675 6.344C47.8248 6.13066 47.8462 5.93866 47.9315 5.768L48.2515 5.192C49.1475 3.35733 50.2782 2.03467 51.6435 1.224C53.0088 0.413333 54.6942 0.00799942 56.6995 0.00799942H66.4915C66.8755 0.00799942 67.1955 0.157332 67.4515 0.455997C67.7075 0.711999 67.8355 1.01067 67.8355 1.352V4.424C67.8355 4.808 67.7075 5.128 67.4515 5.384C67.1955 5.64 66.8755 5.768 66.4915 5.768H57.0835C55.8888 5.768 54.9928 5.96 54.3955 6.344C53.7982 6.68533 53.2435 7.368 52.7315 8.392C52.6888 8.56267 52.5822 8.60533 52.4115 8.52L48.1875 6.792ZM83.7325 43.144C81.8552 43.144 80.1485 42.7173 78.6125 41.864C77.1192 41.0107 75.9458 39.8373 75.0925 38.344C74.2392 36.8507 73.8125 35.1653 73.8125 33.288V24.136C73.8125 23.7093 73.9405 23.368 74.1965 23.112C74.4952 22.856 74.8578 22.728 75.2845 22.728H78.8045C79.1885 22.728 79.5298 22.8773 79.8285 23.176C80.1272 23.432 80.2765 23.752 80.2765 24.136V32.904C80.2765 33.9707 80.6392 34.9307 81.3645 35.784C82.1325 36.6373 83.0498 37.064 84.1165 37.064H91.7965C92.9058 37.064 93.8445 36.6373 94.6125 35.784C95.3805 34.9307 95.7645 33.9707 95.7645 32.904V7.432C95.7645 7.048 95.8925 6.728 96.1485 6.472C96.4045 6.17333 96.7245 6.024 97.1085 6.024H100.757C101.141 6.024 101.461 6.17333 101.716 6.472C102.015 6.728 102.165 7.048 102.165 7.432V33.288C102.165 35.1653 101.738 36.8507 100.884 38.344C100.031 39.8373 98.8365 41.0107 97.3005 41.864C95.8072 42.7173 94.1218 43.144 92.2445 43.144H83.7325ZM104.917 37.064C103.978 37.064 102.89 36.872 101.653 36.488L102.165 27.976C102.165 28.7013 102.421 29.32 102.932 29.832C103.444 30.344 104.106 30.6 104.917 30.6H106.261V37.064H104.917ZM102.912 14.344C102.741 14.216 102.656 14.088 102.656 13.96C102.656 13.7893 102.763 13.5973 102.976 13.384L110.144 5C110.485 4.65867 110.805 4.63733 111.104 4.936L113.92 7.368C114.176 7.53867 114.197 7.77333 113.984 8.072L106.816 16.456C106.475 16.7973 106.155 16.8613 105.856 16.648L102.912 14.344ZM102.912 30.6H117.504C118.741 30.6 119.701 30.4293 120.384 30.088C121.067 29.7467 121.408 29.0853 121.408 28.104C121.408 27.2507 121.067 26.6107 120.384 26.184C119.744 25.7573 118.891 25.544 117.824 25.544H109.824C108.715 25.544 107.797 25.1173 107.072 24.264C106.347 23.4107 105.984 22.472 105.984 21.448C105.984 20.7653 106.176 20.168 106.56 19.656L116.736 7.496C117.077 7.02666 117.461 6.792 117.888 6.792C118.272 6.792 118.635 6.94133 118.976 7.24L121.536 9.16C122.005 9.544 122.24 9.928 122.24 10.312C122.24 10.6533 122.069 11.0373 121.728 11.464L115.2 19.208H118.72C120.597 19.208 122.197 19.6347 123.52 20.488C124.885 21.3413 125.909 22.4507 126.592 23.816C127.317 25.1813 127.68 26.632 127.68 28.168C127.68 30.5573 126.891 32.6267 125.312 34.376C123.776 36.1253 121.579 37 118.72 37H102.912V30.6Z" fill="currentColor"/>
        </svg>
    ),
    Dollar : IoLogoUsd,
    Spinner : CgSpinner,
    Plus : HiOutlinePlusSmall,
    EyeLine : RiEyeLine,
    EyeFill : RiEyeFill,
}