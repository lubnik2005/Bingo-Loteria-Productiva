<template>
    <div :class="[{'selected':wildcard.selected}, 'card']" >
        <img src="@/assets/img/wildcard_background.png" alt="wildcard_background" style="width:100%">
        <div class="circleBase color">
            <p class="number" >{{ wildcard.id }}</p> 
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card {
    width: 140px;
    transition: 0.3s;
    position: relative;

}
.card:hover {
    cursor: pointer;
}

.selected {
    filter: drop-shadow(0px 0px 10px black);

}

.container {
  padding: 2px 16px;
  position: absolute;
  top: 1%;
}
.color {
    width: 90px;
    height: 90px;
    background-color:rgba(192, 255, 255, 0.70);
    border: 2px solid rgb(238, 255, 65);
    transition: 0.3s;

}
.circleBase {
    border-radius: 50%;
    position: absolute;
    top: 30px;
    left: 32px;
    transition: 0.3s;

}

.number {
    position: absolute;
    top: -38px;
    left: 23px;
    font-size: 70px;
    font-weight: bold;

}
</style>
<script>
export default {
    name: 'Wildcard',
    props: ['wildcard'],
    methods: {

    }    
}
</script>