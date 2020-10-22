<template>
   <td> 
       {{ item.id }}
   </td>
</template>
<script>
export default {
    name: 'TableValue',
    props: ['item']
}
</script>