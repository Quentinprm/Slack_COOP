<template>
	<div>
		<div id="messages">
			<h1>Channel messages!<button @click="deleteChan()">X</button></h1>
				<div v-for="com in channelData" class="comment">
				<div class="entete">
				<h3>{{com.member_id}} à {{com.created_at}}</h3>
				</div>
				<p>{{com.message}}</p>
				</div>

		</div>
		<div id="ecrire">
        <form @submit.prevent="sendMessage()">
            <textarea v-model="comment" id="comment" placeholder="Votre commentaire..."></textarea>
            <input type="submit" value="Send">
        </form>
	</div>
	</div>
</template>

<script>
import api from '@/api';
import ls from '@/services/ls'
import store from '@/store'
import Vue from 'vue'


export default {

	data () {
		return {
            channelData: [],
            idChannel: '',
            token: ls.get('token'),
            comment: ''
		}
    },

    created () {
        this.idChannel = this.$route.params.id
        api.get('/channels/' + this.$route.params.id + '/posts', ls.get('token')).then((response) => {
            this.channelData = response.data
        }).catch( (error) => {
            alert("La channel auquel vous essayez d'accéder n'existe pas !")
        });
    },

	methods: {
        deleteChan () {
            api.delete('/channels/' + this.idChannel, this.token).then((response) => {
                this.$router.push({path: '/'})
            }).catch( (error) => {
                alert("Le channel que vous essayez de supprimer n'existe pas !")
            });
        },
        sendMessage() {
            let params = {
                token: this.token,
                message: this.comment
            }
            api.post('/channels/' + this.idChannel + '/posts', params).then((response) => {
                api.get('/channels/' + this.$route.params.id + '/posts', ls.get('token')).then((response) => {
                    this.channelData = response.data
                });
            });
        }
	}
}
</script>

<style>
#messages{
	height:90vh;
	overflow-y:scroll;
    overflow-x: none;
}
#messages h1{
	text-align:center;
	color:deepskyblue;
}
#ecrire{
	height:10vh;
	bottom:0;
}
.comment{
border: 1px solid gainsboro;
margin-bottom:3px;
}
textarea{
width:100%;
resize:none;
}
.entete{
text-align:center;
color:#485166;
border-bottom: 0.5px solid gainsboro;
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
