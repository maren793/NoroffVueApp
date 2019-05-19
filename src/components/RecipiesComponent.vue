<template>
    <div class="[ row ]">
        <div class="[ col-sm-12 ]">
            <div class="[ card ]">
                <div>
                    <h3><b>Title: </b>{{title}}</h3><br />
                        <img :src="imgRecipe" /><br />
                </div>
            <div class="[ card--information ]"><br />
            <b>Ingredients: </b>{{ingredients}}<br />
            <b>Recipe: </b><a href="recipe" target="_blank">Click Here</a><br />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'recipesComponent',
  props: ['imgRecipe', 'title', 'ingredients', 'recipe'],
}
</script>

<style scoped>
.card{
    border: solid 3px lightgreen;
    border-top: 15px solid darkgreen;
    border-radius: 4px;
    padding: 20px 20px 30px;
    margin-top: 30px;
   
    
}
.card img{
    width: 20%;
    padding-top: 20px;
}
</style>
