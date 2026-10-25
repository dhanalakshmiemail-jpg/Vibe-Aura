import {BrowserRouter} from 'react-router-dom'; import {CssBaseline,ThemeProvider} from '@mui/material'; import {useAppSelector} from './app/hooks'; import {makeTheme} from './app/theme'; import NavBar from './components/navigation/NavBar'; import Footer from './components/Footer'; import AppRoutes from './routes/AppRoutes';
function Shell(){const mode=useAppSelector(s=>s.discovery.theme);return <ThemeProvider theme={makeTheme(mode)}><CssBaseline/><NavBar/><main><AppRoutes/></main><Footer/></ThemeProvider>}
export default function App(){return <BrowserRouter><Shell/></BrowserRouter>}
