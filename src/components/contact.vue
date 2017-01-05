<template>
    <div>
        <h1>Contact Page</h1>

        <p>
            <router-link to="/">Index</router-link>

            |

            <router-link to="/about">About</router-link>

            |

            <router-link :to="{ name: 'user', params: { id: 3 } }">User ID 3</router-link>

            |

            <router-link :to="{ name: 'authorBook', params: { authorId: 1, bookId: 3 } }">Author ID 1 & Book ID 3</router-link>
        </p>
    </div>
</template>

<script>
    export default {

    }
</script>
