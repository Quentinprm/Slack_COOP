<template>
	<div>
		<h1>Channel messages!<button @click="deleteChan()">Delete Channel</button></h1>
            {{channelData}}

        <form @submit.prevent="sendMessage()">
            <label for="comment">Comment :</label>
            <input v-model="comment" id="comment">

            <input type="submit" value="Send">
        </form>
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
        });
    },

	methods: {
        deleteChan () {
            api.delete('/channels/' + this.idChannel, this.token).then((response) => {
                this.$router.push({path: '/'})            
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
