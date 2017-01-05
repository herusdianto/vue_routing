<template>
    <div>
        <h1>Index Page</h1>

        <p>
            <router-link to="/about">About</router-link>

            |

            <router-link :to="{ name: 'contact' }">Contact</router-link>

            |

            <router-link :to="{ name: 'user', params: { id: 1 } }">User ID 1</router-link>

            |

            <router-link :to="{ name: 'authorBook', params: { authorId: 1, bookId: 1 } }">Author ID 1 & Book ID 1</router-link>
        </p>
    </div>
</template>

<script>
    export default {

    }
</script>
