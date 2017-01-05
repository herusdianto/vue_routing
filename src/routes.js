import index from './components/index'
import about from './components/about'
import contact from './components/contact'
import user from './components/user'
import profile from './components/profile'
import posts from './components/posts'
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
        component: user,
        children: [
            {
                path: 'profile',
                name: 'profile',
                component: profile,
            },
            {
                path: 'posts',
                name: 'posts',
                component: posts,
            }
        ]
    },
    {
        path: '/authors/:authorId/books/:bookId',
        name: 'authorBook',
        component: authorBook
    },
]

export default routes
