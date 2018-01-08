<template>
    <div>
        <form v-on:submit="login()" action="" method="get">
            <div>
                <label>Email:</label>
                <input v-model="user.email" type="text" name="" id="email" placeholder="email" required>
            </div>
            <div>
                <label>Mot de passe:</label>
                <input v-model="user.password" type="password" name="" id="password" placeholder="password" required>
            </div>    
            <input type="submit" value="Login">
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    email: '', 
                    password: ''
                }
            }
        },
        methods: {
            login () {
                this.$store.dispatch('login', this.user)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
