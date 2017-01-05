<template>
    <div>
        <h1>User Page</h1>

        <h3>User ID: {{ $route.params.id }}</h3>

        <p>
            <router-link to="/">Index</router-link>

            |

            <router-link to="/about">About</router-link>

            |

            <router-link :to="{ name: 'contact' }">Contact</router-link>

            |

            <router-link :to="{ name: 'authorBook', params: { authorId: 1, bookId: 4 } }">Author ID 1 & Book ID 4</router-link>
        </p>
    </div>
</template>

<script>
    export default {

    }
</script>
