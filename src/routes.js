import index from './components/index'
import about from './components/about'
import contact from './components/contact'

const routes = [
    {
        path: '/',
        component: index
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/contact',
        name: 'contact',
        component: contact
    },
]

export default routes
