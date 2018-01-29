<template>
	<div id="formule">
		<h1>Créer un channel</h1>
		<form @submit.prevent="createChan()">
			<div>
				<label for="label">Label</label>
				<input v-model="channelData.label" id="label" type="text">
			</div>
			<div>
				<label for="topic">Topic</label>
				<input v-model="channelData.topic" id="topic" type="text">
			</div>
			<div><input type="submit" value="Create"></div>
		</form>
	</div>
</template>

<script>
import ls from '@/services/ls'
import api from '@/api'

export default {
	data () {
		return {
			channelData: {label: '', topic: ''}
		}
	},
	methods: {
		createChan () {
			/*
			this.$store.dispatch('chan/createChan', this.channelData).then(response => {
				this.$router.push({path: '/'})
			})
			*/arguments
			let params = {
                token: ls.get('token'),
                label: this.channelData.label,
                topic: this.channelData.topic
            }

            api.post('/channels', params).then(response => {
				this.$router.push({path: '/' + response.data._id})
			}).catch(error => {
				console.log(error)
			})
		}
	}
}
</script>
<style>

#formule{
border:3px solid #f1f1f1;
width:50%;
margin:0 auto 0 auto;
text-align:center;
margin-top: 50vh;
 transform: translateY(-50%);
}
#formule h1{
	color:deepskyblue;
}
input[type=text] {
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
