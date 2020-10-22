<template>
    <md-app id="app" >

      <md-app-toolbar class="md-primary">
        <span class="md-title">LoterÍa Productiva</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-tabs md-alignment="fixed">
          <md-tab id="tab-commands" md-label="Commands" >
            <md-toolbar class="md-transparent" md-elevation="0">
              Commands
            </md-toolbar>

            <md-list>
              <md-list-item>
                <md-icon>grade</md-icon>
                <span class="md-list-item-text">Points: {{ points }}</span>
              </md-list-item>
                <md-list-item>
                    <md-icon>videogame_asset</md-icon>
                    <span class="md-list-item-text">Dice</span>
                </md-list-item>
                          <Dice ref="dice" v-bind:dice="dice" />
                    <md-list-item>
                        <md-icon>gesture</md-icon>
                        <span class="md-list-item-text">WildCards</span>
                    </md-list-item>
                    <table>
                      <tr>
                        <td v-for="(wildcard,index) in wildcards" v-bind:key="index"  style="text-align:center" >
                          <Wildcard v-bind:wildcard="wildcard" v-on:click.native="updateSelected(wildcard)" />
                        </td>
                      </tr>
                    </table>
                    <!--
                      ##################PUT THIS BACK FOR SECOND BINGO
                    <md-list-item>
                      <md-field>
                        <label>Enter your number</label>
                        <md-input v-model="currentNumber" type="number"></md-input>
                      </md-field>
                    </md-list-item>
                    -->
                    <md-list-item>
                      <!--
                          ##################PUT THIS BACK FOR SECOND BINGO
                      <md-button class="md-raised md-primary" v-on:click="submitValue(true)">Submit</md-button>
                      -->
                      <md-button class="md-raised md-accent" style="width:100%" v-on:click="submitValue(false)" >Not Possible</md-button>
                    </md-list-item>

            </md-list>
          </md-tab>
        <md-tab id="tab-rules" md-label="Rules" > 
              <md-toolbar class="md-transparent" md-elevation="0">
                Rules
              </md-toolbar>
            
          <md-list>
            <md-list-item>
              <md-icon>cloud_download
</md-icon>
              <a class="md-list-item-text" href="" >Download Rules</a><br>
            </md-list-item>
            <md-list-item>
              <md-icon>download</md-icon>
              <a class="md-list-item-text"  href="">Download PDF </a>
            </md-list-item>          
          </md-list>
            </md-tab>
          </md-tabs>

      </md-app-drawer>

      <md-app-content style="flex-flow:nowrap; overflow:scroll;" >

        <Table v-bind:rows="rows" v-on:sendingID="submitValue"/>
  <div>
    <md-dialog :md-active.sync="snackbar.display">
          <md-dialog-title>{{ snackbar.message }}</md-dialog-title>
          <md-dialog-content>{{ snackbar.equation }}</md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" v-on:click="snackbar.display = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div>
        <Fireworks v-if="finished" />
      </md-app-content>

    </md-app>
</template>

<style lang="scss" scoped>
  .md-app {
    height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 300px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
export default {
  name: 'Waterfall'
}
</script>


<script>
// Music from https://freesound.org/people/themusicalnomad/
import Table from './components/Table';
import Fireworks from './components/Fireworks';
import Dice from './components/Dice';
import Wildcard from './components/Wildcard';
export default {
  name: 'App',
  data: function (){
    return{
      functionStrings: [],
      previousTries: [

      ],
      completed_values: [

      ],
      finished: false,
      snackbar: {
        display: false,
        message: ''
      },
      columns: 4,
      points: 100000,
      dice: [
        {
          id: 0
        },
        {
          id: 0
        }
      ],
      currentNumber: '',

      wildcards: [
      ],
      wildcards_list: [
        [
          1,6
        ],
        [
          1,5
        ],
        [
          1,3
        ],
        [
          2,5
        ],
        [
          3,4
        ],
        [
          2,4
        ],
        [
          4,6
        ],
        [
          2,6
        ]
      ],
      tables: [
        [
          2,
          3,
          4,
          5,
          6,
          7,
          9,
          10,
          12,
          13,
          15,
          17,
          19,
          20,
          21,
          22,
        ],
        [
            2,
            3,
            5,
            7,
            8,
            9,
            12,
            13,
            15,
            16,
            17,
            18,
            19,
            20,
            22,
            23,
        ],
        [
            2,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            14,
            17,
            18,
            20,
            21,
            23,
            24
        ],
        [
            2,
            3,
            5,
            7,
            8,
            9,
            10,
            11,
            12,
            15,
            16,
            17,
            20,
            21,
            23,
            24,
        ],
        [
            3,
            4,
            5,
            6,
            7,
            9,
            10,
            11,
            14,
            15,
            17,
            18,
            19,
            20,
            21,
            24
        ],
        [
            2,
            3,
            5,
            6,
            7,
            11,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            22,
            24
        ],
        [
            3,
            5,
            6,
            8,
            9,
            10,
            11,
            13,
            14,
            15,
            16,
            19,
            20,
            22,
            23,
            24
        ],
        [
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            14,
            16,
            18,
            19,
            20,
            24

        ]
      ],
      table: []
    }
  },
  created(){

    let randomNumber = this.generateRandomNumber(1,Math.min(this.tables.length,this.wildcards_list.length)) - 1;
    let table = [];
    let wildcards = [];
    let temp_table = this.tables[randomNumber];
    let temp_wildcards = this.wildcards_list[randomNumber]
    for (let index = 0; index < temp_table.length; index++) {
      table.push({id:temp_table[index],completed:false})
    }
    for (let index = 0; index < temp_wildcards.length; index++) {
      let temp = {};
      temp = {id:temp_table[index],selected:false}
      if (index == 0){
        temp = {id:temp_table[index],selected:true}
      }
      wildcards.push(temp);
    }

    this.table = table;
    this.wildcards = wildcards;

    this.dice = this.assignRandomNumbersToArray(this.dice,1,6);

    //this.wildcards = this.assignRandomNumbersToArray(this.wildcards,1,10);
    for (let index = 0; index < this.table.length; index++) {
      const element = this.table[index].id;
      this.table[index].url = require('@/assets/img/value_' + String(element) +'.png');
    }
    this.table = this.shuffle(this.table);

  },
  computed: {
    rows: function(){
      return(this.table_to_row(this.table,this.columns));
    }

  },
  methods: {
            updateSelected: function(wildcard){
              for (let index = 0; index < this.wildcards.length; index++) {
                this.wildcards[index].selected = this.wildcards[index].id == wildcard.id
              }
        },
    playSound (sound) {
      let url_list = {
        'success_url': require('@/assets/audio/success.mp3'),
        'fail_url': require('@/assets/audio/fail.mp3'),
        'win_url': require('@/assets/audio/win.mp3')
      }
      if(sound) {
        var audio = new Audio(url_list[sound]);
        audio.play();
      }
    },
    shuffle: function(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    table_to_row: function(items,columns){
          var array_length = items.length;
          var remainder = array_length % columns;
          var num_rows = (array_length - remainder)/columns;
          var rows = [[]];
          var current_row = 0;
          for (let index = 0; index < items.length; index++) {   
              const element = items[index];
              rows[current_row].push(element) 
              if ((index + 1) % columns == 0){
                  current_row++
                  rows.push([]);
              }
          }
          return(rows);
      },
    submitValue: function(possible,id){
      console.log("HERE");
      if (id != null) {
        this.currentNumber = id;
      }
      let possibleValues = this.getPossibleValues(this.dice, this.wildcards).possibleValues;
      let allPossibleValues =  this.getPossibleValues(this.dice, this.wildcards).allPossibleValues;
      let functionStrings = this.getPossibleValues(this.dice, this.wildcards).functionStrings;
      allPossibleValues = this.removePreviousValuesFromPossibleValues(allPossibleValues, this.completed_values);
      console.log(possibleValues);
      let inputNumber = parseInt(this.currentNumber);

      const possibilitiesInTable = this.getPossibilitiesInTable(allPossibleValues,this.table);
      const possibleCheck = this.getPossibleCheck(possible,possibilitiesInTable);
      const foundCorrectValue = this.correctValue(this.table,possibleValues,inputNumber).foundCorrectValue;
      const possibleValueIndex = this.correctValue(this.table,possibleValues,inputNumber).possibleValueIndex;

      //const inPreviousTries = this.checkIfInPreviousTries(inputNumber,possible,this.previousTries);
      const inPreviousTries = false;
      if (this.currentNumber == "" && possible){
        this.snackbar = this.updateSnackbar("You need a number",true);
        return(true);
      }
      if (inPreviousTries){
        this.snackbar = this.updateSnackbar("You have already tried this option",true);
        this.currentNumber = '';
        return(false)
      }

      
      this.previousTries = this.appendToPreviousTries(inputNumber,possible,this.previousTries);

      if (!possibilitiesInTable && possible){
          this.playSound('fail_url'); 
          this.snackbar = this.updateSnackbar("Nope. Try again",true);
          this.points = this.updatePoints(this.points,'minus');
          this.currentNumber = '';

          return(false)
      }
      if (possibilitiesInTable && !possible){
          this.playSound('fail_url');
          this.snackbar = this.updateSnackbar("Nope. Try again",true);
          this.points = this.updatePoints(this.points,'minus');

          return(false)
      }
      

      if (!foundCorrectValue && possible){
          this.playSound('fail_url');
          this.snackbar = this.updateSnackbar("Nope. Try again",true);
          this.points = this.updatePoints(this.points,'minus');
          this.currentNumber = '';

          return(false)
      }

      this.playSound('success_url');
      this.snackbar = this.updateSnackbar("Good Job!",true,functionStrings[possibleValueIndex]);
      this.completed_values.push(inputNumber);
      this.points = this.updatePoints(this.points,'plus');

      
      this.previousTries = [];
      if (possible){
        this.table.filter(item => item.id == inputNumber)[0].completed = true;
      }
      this.finished = this.finishedGame(this.rows,this.columns);
      if (this.finished){
        // https://freesound.org/people/LittleRobotSoundFactory/sounds/270402/
        this.playSound('win_url');
        this.snackbar = this.updateSnackbar("You Win!",true);
        return(true)
      }
      this.currentNumber = "";
      this.dice = this.assignRandomNumbersToArray(this.dice,1,6);
      this.$refs.dice.rollDice();
    },
    appendToPreviousTries(inputNumber,possible,previousTries){
      if (!possible){
        previousTries.push('Not Possible');
        return(previousTries);
      }
      previousTries.push(inputNumber);
      return(previousTries);
    },
    checkIfInPreviousTries(inputNumber,possible,previousTries){
      if(previousTries.includes(inputNumber)){
        return(true);
      }
      if (possible == false){
        console.log("isf alse")
        if (previousTries.includes('Not Possible')){
          console.log('not possible')
          return(true)
        }
      }
      return(false);
    },
    updateSnackbar: function(message,bool,equation=""){
      return{
        message: message,
        equation: equation,
        display: bool
      } 
    },
    finishedGame: function(rows,columns){
        for (let index = 0; index < rows.length; index++) {
          const row = rows[index];
          if (row.filter(item => item.completed).length == columns){
            return(true)
          }
        }
        rows = this.rotateClockwise(rows, columns);
        rows.pop();
        console.log(rows);
        for (let index = 0; index < rows.length; index++) {
          const row = rows[index];
          row.pop();
          if (row.filter(item => item.completed).length == columns){
            return(true)
          }
        }
        return(false);
    },
    getPossibleCheck: function(possible,possibilitiesInTable){
      return(possible == possibilitiesInTable);
    },
    getPossibilitiesInTable: function(possibleValues,table){
      let table_values = table.map(function(item){return(item.id)});
      let found = false
      for (let index = 0; index < possibleValues.length; index++) {
        let possibleValue = possibleValues[index];
        if (table_values.includes(possibleValue)){
          found = true
        }
      }
      return(found);
    },
    correctValue: function(table,possibleValues,value){
      if (!possibleValues.includes(value)){
        return(false)
      }
      const table_list = table.map(item => item.id);
      if (!table_list.includes(value)){
        return(false);
      }
      let index = possibleValues.findIndex((element) => element == value);

      let return_value =  {possibleValueIndex:index ,foundCorrectValue: true }
      return(return_value);
    },
    removePreviousValuesFromPossibleValues(possibleValues,previousValues){
      let values_to_remove = [];
      for (let index = 0; index < possibleValues.length; index++) {
        const possibleValue= possibleValues[index];
        if (previousValues.includes(possibleValue)){
          values_to_remove.push(possibleValue);
        }
      }
      for (let index = 0; index < values_to_remove.length; index++) {
        const to_remove = values_to_remove[index];
        this.removeA(possibleValues,to_remove);
      }
      return(possibleValues);
    },
    removeA: function (arr) {
        var what, a = arguments, L = a.length, ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax= arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        return arr;
    },

    inputNumberInPossibilities: function(inputNumber,possibleValues){
      return(possibleValues.includes(inputNumber));
    },
    /**
     * Assigns random variables to id int array if dictionaries
     * @param {array} array - An array with dictionaries with an id key
     * @returns {array} dice - An updated array of dictionaries
     */
    assignRandomNumbersToArray: function(array,min,max){
      for (let index = 0; index < array.length; index++) {
          const randomNumber = this.generateRandomNumber(min,max);
          array[index].id = randomNumber
      }
      return(array);
    },
    /**
     * Generates a random integer
     * @param {integer} min - Minimum value to be used in random number generation
     * @param {integer} max - Maximum value to be used in random number generation
     */
    generateRandomNumber: function (min,max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    },
    /**
     * Calculates new set of points
     * @param {integer} - Number of current points
     * @returns {integer} - Updated number of points
     */
    updatePoints: function(points,transition){
      if (transition == 'minus'){
        return(points -= 100);
      } else if (transition == 'plus'){
        return(points += 100);
      }
      return(points);
    },
    setIntervalX: function(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {

       callback();

       if (++x === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);
    },
    /**
     * Finds all possible values given dice roll and wildcards
     * @param {array} dice - An array of dice values
     * @param {array} wildcards - An array of wildcard values
     */
      getPossibleValues: function(dice,wildcards){
      let product = 1;
      let functionStrings = [];
      let productString ='1'
      let possibleValues = [];
      let allPossibleValues = [];
      for (let index = 0; index < dice.length; index++) {   
        const element = dice[index].id; 
        product *= element;
        productString += ' * ' +String(element);
        
      }
      for (let index = 0; index < wildcards.length; index++) {
        let wildcard = wildcards[index];
        const element = wildcard.id;
        const value_under = product - element;
        const value_over = product + element;

        let value_under_string = productString + ' - ' + String(element) + ' = ' + String(value_under);
        let value_over_string = productString + ' + ' + String(element) + ' = ' + String(value_over);
        value_under_string = value_under_string.substr(3);
        value_over_string = value_over_string.substr(3);
        allPossibleValues.push(value_under, value_over);
        if (wildcard.selected == true){
          possibleValues.push(...[value_under, value_over]);
          functionStrings.push(...[value_under_string, value_over_string]);
        }
      }
        productString = productString + ' = ' + String(product);
        productString = productString.substr(3);
        functionStrings.push(productString);
        possibleValues.push(product);
        console.log(possibleValues);
        console.log(functionStrings);
      return({possibleValues:possibleValues,allPossibleValues:allPossibleValues,functionStrings:functionStrings});
    },

   rotateClockwise: function (array, arrayLength){
        var newArray = [];
        for(var i = 0; i < array.length; i++){
            newArray.push([]);
        };

        for(var i = 0; i < array.length; i++){
            for(var j = 0; j < arrayLength; j++){
                newArray[j].push(array[i][j]);
            };
        };

        return newArray;
    },
    checkAcross: function(row,columns){
      return(row.filter(item => item.completed = true).length == columns);
    },
    checkHorizontal: function(matrix){
      for (let index = 0; index < matrix.length; index++) {
        const row = matrix[index];
        if (this.checkAcross(row)){
          return(true);
        }
      }
    },
    checkForFinish: function(matrix){
      if (this.checkHorizontal(matrix)){
        return(true);
      }
      matrix = this.rotateClockwise(matrix);
      if (this.checkHorizontal(matrix)){
        return(true);
      }
      return(false)
    }

  },
  components: {
    Table,
    Fireworks,
    Dice,
    Wildcard
  }
}
</script>