const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => 
    //Run your code here, after you have insured that the connection was made
   Recipe.create =({
               title: "Corn Pie",
               level: "Amateur Chef",
               ingredients: [
                "Beef",
                 "Onions", 
                 "Garlic", 
                 "Paprika", 
                 "Cumin",
                 "Salt",
                "Raisins",
                "chicken",
                "Heggs",
                "Corn" ,
                "Cream",
                "Basil"],
               cuisine: "Chilean",
               dishType: "main_course",
               image: "https://gypsyplate.com/wp-content/uploads/2019/10/pastel-de-choclo_6.jpg",
               duration: 90,
               creator: "Chilean folk"
    
    })
  )
  .then(favRecipe => 
    console.log("title of recipe", favRecipe.title))

    .then(() => Recipe.insertMany(data))
    .then(recipeArray => recipeArray.forEach(recipe => console.log("title of recipe: ", recipe.title)))

    .then(() => Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100}))

    .then(()=> console.log("recipe duration updated successfully. New duration: "))

    .then(() => Recipe.deleteOne({title: "Carrot Cake"}))
    .then(() => console.log(`"The recipe has been deleted`))

    // then(() => {
    //   mongoose.connection.close(() => {
    //       console.log('Mongoose default connection disconnected through app termination');
    //       process.exit(0);
    //     });
    // })
    
  .catch(error => 
    console.error('Error connecting to the database', error)
  );
