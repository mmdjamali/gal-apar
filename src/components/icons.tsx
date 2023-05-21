import { RiShoppingCartLine, RiShoppingCartFill, RiArrowLeftLine, RiCloseLine, RiMenuLine } from "react-icons/ri"
import { FiLogIn, FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { TbFidgetSpinner, TbSearch } from "react-icons/tb"
import { BiMap } from "react-icons/bi"
import { RxHamburgerMenu } from "react-icons/rx"
import { TbQuestionCircle } from "react-icons/tb"
import { IoLogoUsd } from "react-icons/io"
import { CgSpinner } from "react-icons/cg"

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
    Logo : IoLogoUsd,
    Spinner : CgSpinner
}