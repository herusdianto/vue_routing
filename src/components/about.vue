<template>
    <div>
        <h1>About Page</h1>

        <p>
            <router-link to="/">Index</router-link>

            |

            <router-link :to="{ name: 'contact' }">Contact</router-link>
        </p>
    </div>
</template>

<script>
    export default {

    }
</script>
