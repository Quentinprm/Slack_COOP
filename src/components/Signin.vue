
<template>
	<div id="login">
		<div class="imgcontainer">
			<img src="../assets/logo.png"/>
		</div>
		<div id="formulaires">
		<div id="formulaire">
			<h1>Signin</h1>
			<form @submit.prevent="signin()">
				<div>
					<label for="email">Email :</label>
					<input v-model="user.email" id="email" type="text" />
				</div>
				<div>
					<label for="password">Password :</label>
					<input v-model="user.password" id="password" type="password" />
				</div>
				<div class="buttons"><input type="submit" value="Go !"/></div>
			</form>
		</div>
		<div id="formulaire">
			<h1>Signup</h1>
			<form @submit.prevent="signup()">
			<div>
				<label for="fullname">fullname :</label>
				<input v-model="user_signup.fullname" id="email" type="text" />
			</div>
				<div>
					<label for="email">Email :</label>
					<input v-model="user_signup.email" id="email" type="text" />
				</div>
				<div>
					<label for="password">Password :</label>
					<input v-model="user_signup.password" id="password" type="password" />
				</div>
				<div class="buttons"><input type="submit" value="Go !"/></div>
			</form>
		</div>
		</div>
	</div>
</template>

<script>
import api from '../api'

export default {
	data () {
		return {
			user:{email: "", password: ""},
			user_signup:{email:"",possword:"",fullname:""}
		}
	},
	methods: {
		signin () {
			this.$store.dispatch('auth/login', this.user).then(response => {
				this.$router.push({name: "home"})
			})
		},
	signup (){
			this.$store.dispatch('auth/signup',this.user_signup).then(response =>{
				this.$router.push({name: "home"})

			})
		}
	}
}
</script>

<style lang="css" scoped>
.imgcontainer{
    text-align: center;
    margin: 24px 0 12px 0;
}
img {
    height:50vh;
}

#login{
width:100%;
}
#formulaires{
	width:100%;
	height:50vh;
}
#formulaire{
border:3px solid #f1f1f1;
justify-content: center;
flex-direction: column;
text-align: center;
width:49%;
display:inline-flex;

}

input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

input[type=submit] {
    background-color: deepskyblue;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}



</style>
