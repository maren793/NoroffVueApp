<template>
    <div>
        <h1>RECEPIES</h1>
        
    <div class="[ row ]">
        <div v-for="recipe in recipies" class="[ col-sm-6 ]">
        <RecipiesComponent  v-bind:imgRecipe="recipe.thumbnail"
                            v-bind:title="recipe.title"
                            v-bind:ingredients="recipe.ingredients"
                            v-bind:recipe="recipe.href">
        </RecipiesComponent>
    </div>
  </div>
  </div>
</template>

<script>
import RecipiesComponent from './components/RecipiesComponent.vue'
export default {
 name: 'Recipies',
 components:{
   RecipiesComponent
 },
 data(){
  return{
    recipies: []
  }
 },
 beforeMount: function(){
  const app = this;
  const conversionUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'http://www.recipepuppy.com/api/';
      fetch(conversionUrl + url)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        app.recipies = result.results;
      })
 }
}
</script>