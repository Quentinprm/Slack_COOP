<template>
	<div id="container">
		<div id="channels">
		<div class="imgcontainer">
			<img src="../assets/logo.png"/>
		</div>
			<h2>Channels</h2>
			<p id="add">
					<router-link :to="{ path: '/' }">Créer un channel</router-link>
			</P>
			<p v-for="chan in channels" class="chan">
				<router-link :to="{ path: '/' + chan._id }">{{chan.label}}</router-link>
			</p>

		</div>
		<div id="right">
			<router-view :key="$route.fullPath"></router-view>
		</div>
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
	.imgcontainer{
	    text-align: center;
	    margin: 24px 0 12px 0;
	}
	img {
	    width: 30%;
	}

	#channels {
	list-style-type:none;
 margin: 0;
 padding: 0;
 width: 25%;
 background-color: #f1f1f1;
 position: fixed;
 height: 100%;
 overflow: auto;
	}
	h2 {
		color:grey;
		text-align: center;
		margin: 0;
		padding-bottom: 5px;
		padding-top: 5px;
		border-bottom: 2px solid deepskyblue;
	}
	.chan {
	margin:0;
	}
	.chan a{
		display: block;
 	color: #000;
 	padding: 8px 16px;
 	text-decoration: none;
	}
 	.chan a:hover{
    background-color:deepskyblue;
    color: white;
}

#add {
margin:0;
margin-bottom:2px;
}
#add a{
	display: block;
color: white;
padding: 8px 16px;
text-decoration: none;
background-color:deepskyblue;
}
#add a:hover{
	background-color:dodgerblue;
}
#right{
 margin-left:25%;
 padding:1px 16px;
}

</style>
