<template>
    <div>
        <h1>Index Page</h1>

        <p>
            <router-link to="/about">About</router-link>

            |

            <router-link :to="{ name: 'contact' }">Contact</router-link>
        </p>
    </div>
</template>

<script>
    export default {

    }
</script>
