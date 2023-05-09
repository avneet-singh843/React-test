import GridViewIcon from '@mui/icons-material/GridView';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
export const SideBarData = [
    {
        title: "Dashboard",
        icon: <GridViewIcon />,
        link: "/"
    },
    {
        title: "Montages",
        icon: <UploadFileIcon />,
        link: "/montages"
    },
    {
        title: "Credits",
        icon: <MonetizationOnIcon />,
        link: "/credits"
    }
]