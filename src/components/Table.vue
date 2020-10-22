<template>
   <md-table style="min-width:800px;">
        <TableRow 
          v-for="row in rows" 
          :key="row.message" 
          v-bind:row="row" 
          v-on:sendingID="sendingID"/>
   </md-table> 
</template>
<script>

import TableRow from './TableRow';

export default {
    name: 'Table',
      data: function() {
        return{ 
            row_items : this.items
        }
  },
    props: ['rows'],
    methods: {
      sendingID: function(id){
        this.$emit('sendingID',true, id)
      }
    },
    created: function(){

    },
    components: {
        TableRow
    }
}
</script>