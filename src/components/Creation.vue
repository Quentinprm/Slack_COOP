<template>
	<div>
		<h1>Creation de channel!</h1>
		<form @submit.prevent="createChan()">
			<div>
				<label for="label">Label</label>
				<input v-model="channelData.label" id="label">
			</div>
			<div>
				<label for="topic">Topic</label>
				<input v-model="channelData.topic" id="topic">
			</div>
			<div><input type="submit" value="Create"></div>
		</form>
	</div>
</template>

<script>

export default {
	data () {
		return {
			channelData: {label: '', topic: ''}
		}
	},
	methods: {
		createChan () {
			this.$store.dispatch('chan/createChan', this.channelData).then(response => {
				this.$router.push({name: "home"})
			})
		}
	}
}
</script>
