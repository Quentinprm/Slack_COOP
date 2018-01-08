<template>
    <div>
        <form v-on:submit="login()" action="" method="get">
            <div>
                <label>Email:</label>
                <input v-model="user.email" type="text" name="" id="email" placeholder="email">
            </div>
            <div>
                <label>Mot de passe:</label>
                <input v-model="user.password" type="password" name="" id="password" placeholder="password">
            </div>    
            <input type="submit" value="Login">
        </form>
    </div>
</template>

<script>
    import api from '../api'

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
                api.post("/members/signin", this.user).then( (res) => {
                    console.log(res.data.token)
                    this.$store.dispatch('login', res.data.token)
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
