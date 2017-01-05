<template>
    <div>
        <h1>About Page</h1>

        <p>
            <router-link to="/">Index</router-link>

            |

            <router-link :to="{ name: 'contact' }">Contact</router-link>

            |

            <router-link :to="{ name: 'user', params: { id: 2 } }">User ID 2</router-link>

            |

            <router-link :to="{ name: 'authorBook', params: { authorId: 1, bookId: 2 } }">Author ID 1 & Book ID 2</router-link>
        </p>
    </div>
</template>

<script>
    export default {

    }
</script>
