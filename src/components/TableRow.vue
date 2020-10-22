<template>
    <md-table-row>
        <md-table-cell v-for="item in row" v-bind:key="item.id" v-bind:class="[item.completed ? 'completed-number' : 'not-completed-number']" >
            <img style="height: 250px;" :src="item.url" v-on:click="sendValue(item)" disabled />
        </md-table-cell>
    </md-table-row> 
</template>
<script>
export default {
    name: 'TableRow',
    props: ['row'],
    methods: {
        sendValue: function(item){
            if (item.completed == true){
                return(false)
            }
            const id = item.id
            this.$emit('sendingID', id);
        }
    }
}
</script>

<style lang="scss"  scoped>
.red {
    color: red;
}
.completed-number {
    img {
        filter: grayscale(100%);
    }
    cursor: not-allowed;
}
.not-completed-number {
    img{
        cursor: pointer;
    }
}
</style>