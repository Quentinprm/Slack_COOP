<template>
	<div>
		<h1>Channel messages!<button @click="deleteChan()">Delete Channel</button></h1>
            {{channelData}}
	</div>
</template>

<script>
import api from '@/api';
import ls from '@/services/ls'
import store from '@/store'

export default {

	data () {
		return {
            channelData: [],
            idChannel: '',
            token: ls.get('token')
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
        }
	}
}
</script>
