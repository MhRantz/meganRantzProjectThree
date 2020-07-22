//Watch for user click on the 3 button's 
//Determine if user is correct by looking up the answer in that terms object in an array of terms
//Update score with number of guesses, and number that are correct if needed
//Serve up next term in the array of objects of 1920's slang or cocktails or both

//NEXT STEP OF EXPANSION
//display meaning of the slang or recipe of the cocktail or both

//NEXT STEP OF EXPANSION
//cool animations and nice designs

const beesKnees = {}

beesKnees.init = function() {
    beesKnees.random();
    beesKnees.update();
    beesKnees.submitListener();
    beesKnees.againListener();
    console.log(beesKnees.index);
}

beesKnees.terms = [
    {
        name: 'MAZUMA',
        type: 'both',
        definition: 'A person or thing that surpasses excellence; dope',
        recipe: '40ml Bourbon. 1dh Grenadine. 1dh Pastis. 20ml Sweet Vermouth.'
    },
    {
        name: 'BEES KNEES',
        type: 'both',
        definition: 'Cash; Money',
        recipe: '2on Gin. 3/4on Honey Syrup. 1/2on Lemon Juice.'
    },
    {
        name: 'SHEBA',
        type: 'slang',
        definition: 'an attractive person (primarily a woman)',
        recipe: ''
    },
    {
        name: 'JAKE',
        type: 'slang',
        definition: 'Fine; Copasetic',
        recipe: ''
    },
    {
        name: 'DUCK SOUP',
        type: 'slang',
        definition: 'An easy task',
        recipe: ''
    },
    {
        name: 'GOLD RUSH',
        type: 'cocktail',
        definition: '',
        recipe: '1on Bourbon. 1 1/2on Ginger Liqueur. 1/2on Lemon Juice.'
    },
    {
        name: 'HARVEY WALLBANGER',
        type: 'cocktail',
        definition: '',
        recipe: '4on Orange Juice. 1 1/2on Vodka. 1/2on Galliano L\'Autentico. Orange slice and cherry.'
    },
    {
        name: 'GO CHASE YOURSELF',
        type: 'slang',
        definition: 'Get out of here; Beat it',
        recipe: ''
    },
    {
        name: 'GIMLET',
        type: 'both',
        definition: 'a continually boring person',
        recipe: '2on Gin. 3/4on Lime Cordial. Lime wedge.'
    },
    {
        name: 'WOLF BITE',
        type: 'cocktail',
        definition: '',
        recipe: '1/4on Absinthe. 1/2on Melon Liqueur. 1on Pineapple Juice. Splash Lime Soda and Grenadine.'
    },
    //Ruby Queen, Vieux Carre - cocktail. Buzzer - slang. Horsefeathers - slang. Giggle Water. Cats PJ's. Dry Up. Clam. Dewdropper. Drugstore Cowboy. Floorflusher. Oyster fruit. Heeler. 
]
beesKnees.index = 0;
beesKnees.numGuess = 0;

//Randomize the term list array
beesKnees.random = function(){
    beesKnees.terms.sort(function(a, b){return 0.5 - Math.random()});
}

//Updates term to be guessed and currently functioning buttons
beesKnees.update = function(){
    $('h2').text(beesKnees.terms[beesKnees.index].name);  
    $('button[type=submit').show();
    $('button[type=reset]').hide();
}
//Listening for users guess
beesKnees.submitListener = function(){
    $('button[type=submit]').on('click', function(){
        guess = $(this).val();
        //checking if user guess is correct
        if(guess === beesKnees.terms[beesKnees.index].type){
            beesKnees.numGuess++;
            console.log('yep', beesKnees.numGuess);
        } else {
            console.log('nerp');
        };   
        $('.score').text(`${beesKnees.numGuess} of ${beesKnees.index+1}`)
        //taking away the guessing buttons so you cant continue to guess on one term 
        $('button[type=submit').hide();
        if(beesKnees.index < beesKnees.terms.length-1){
            $('button[type=reset]').show();
        }; 
    });
}

//Listening for against button and running term update
beesKnees.againListener = function(){
    $('button[type=reset]').on('click', function(){
        if(beesKnees.index < beesKnees.terms.length-1){
            beesKnees.index++;
        };
        beesKnees.update();
    });
}



$(function () {
    beesKnees.init();
});



