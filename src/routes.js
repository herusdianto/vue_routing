import index from './components/index'
import about from './components/about'
import contact from './components/contact'
import user from './components/user'
import authorBook from './components/authorBook'

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
    {
        path: '/user/:id',
        name: 'user',
        component: user
    },
    {
        path: '/authors/:authorId/books/:bookId',
        name: 'authorBook',
        component: authorBook
    },
]

export default routes
