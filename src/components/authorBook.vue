<template>
    <div>
        <h1>Author Book Page</h1>

        <h3>Author ID: {{ $route.params.authorId }}</h3>

        <h4>Book ID: {{ $route.params.bookId }}</h4>

        <p>
            <router-link to="/">Index</router-link>

            |

            <router-link to="/about">About</router-link>

            |

            <router-link :to="{ name: 'contact' }">Contact</router-link>

            |

            <router-link :to="{ name: 'user', params: { id: 4 } }">User ID 4</router-link>
        </p>
    </div>
</template>

<script>
    export default {

    }
</script>
