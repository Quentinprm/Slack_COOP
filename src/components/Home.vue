<template>
	<div id="container">
		<div id="channels">
			<h2>Channels</h2>
			<p v-for="chan in channels" class="chan">
				<router-link :to="{ path: '/' + chan._id }">{{chan.label}}</router-link>
			</p>
		</div>

		<router-view :key="$route.fullPath"></router-view>
	</div>
</template>

<script>
import api from '@/api'

export default {
	data () {
		return {
			channels: []
		}
	},
	created () {

		api.get('/channels').then((response) => {
			this.channels = response.data
		});

	},
	computed: {
		hasChannel () {
			return this.channels.length > 0
		}
	}
}
</script>


<style lang="css" scoped>
	#container {
		height: 100%;
		width: 100%;
		display: flex;
	}

	.chan {
		color: #ecf0f1;
		margin: 0;
		margin-top: 10px;
		margin-left: 10px;
		font-size: 20px;
	}

	#channels {
		background: #2c3e50;
		width: 200px;
		height: 100vh;
		color: #ecf0f1;
	}

	#messages, #reation {
		margin-left: 20px;
	}

	h2 {
		text-align: center;
		margin: 0;
		padding-bottom: 5px;
		padding-top: 5px;
		border-bottom: 2px solid #34495e;
	}
</style>
