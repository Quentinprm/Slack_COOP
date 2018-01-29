<template>
	<div>
		<h1>Channel messages!</h1>
				{{token}}
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
            token: ls.get('token')
		}
    },

    created () {
        api.get('/channels/' + this.$route.params.id + '/posts', ls.get('token')).then((response) => {
            this.channelData = response.data
        });
    },

	methods: {

	}
}
</script>
