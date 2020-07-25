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
        name: 'Mazuma',
        type: 'both',
        definition: 'Cash; Money',
        recipe: '40ml Bourbon. 1dh Grenadine. 1dh Pastis. 20ml Sweet Vermouth.'
    },
    {
        name: 'Bees Knees',
        type: 'both',
        definition: 'A person or thing that surpasses excellence; dope',
        recipe: '2on Gin. 3/4on Honey Syrup. 1/2on Lemon Juice.'
    },
    {
        name: 'Sheba',
        type: 'slang',
        definition: 'an attractive person (primarily a woman)',
        recipe: ''
    },
    {
        name: 'Jake',
        type: 'slang',
        definition: 'Fine; Copasetic',
        recipe: ''
    },
    {
        name: 'Duck Soup',
        type: 'slang',
        definition: 'An easy task',
        recipe: ''
    },
    {
        name: 'Gold Rush',
        type: 'cocktail',
        definition: '',
        recipe: '1on Bourbon. 1 1/2on Ginger Liqueur. 1/2on Lemon Juice.'
    },
    {
        name: 'Harvey Wallbanger',
        type: 'cocktail',
        definition: '',
        recipe: '4on Orange Juice. 1 1/2on Vodka. 1/2on Galliano L\'Autentico. Orange slice and cherry.'
    },
    {
        name: 'Go Chase Yourself',
        type: 'slang',
        definition: 'Get out of here; Beat it',
        recipe: ''
    },
    {
        name: 'Gimlet',
        type: 'both',
        definition: 'a continually boring person',
        recipe: '2on Gin. 3/4on Lime Cordial. Lime wedge.'
    },
    {
        name: 'Wolf Bite',
        type: 'cocktail',
        definition: '',
        recipe: '1/4on Absinthe. 1/2on Melon Liqueur. 1on Pineapple Juice. Splash Lime Soda and Grenadine.'
    },
    //Ruby Queen, Vieux Carre - cocktail. Buzzer - slang. Horsefeathers - slang. Giggle Water. Cats PJ's. Dry Up. Clam. Dewdropper. Drugstore Cowboy. Floorflusher. Oyster fruit. Heeler. 
]

//GLOBALS!//
beesKnees.index = 0;
beesKnees.numGuess = 0;
beesKnees.butSub = $('button[type=submit]');
beesKnees.butAgn = $('button[type=reset]');
////////////////////////////////////////////

//Randomize the term list array
beesKnees.random = function(){
    beesKnees.terms.sort(function(a, b){return 0.5 - Math.random()});
}

//Updates term to be guessed and currently functioning buttons
beesKnees.update = function(){
    $('h2').text(beesKnees.terms[beesKnees.index].name);
    //locking the again button, unlocking the guess buttons and emptying the results definition and recipe
    beesKnees.butSub.removeClass('wrong right');
    beesKnees.butSub.prop("disabled", false);
    beesKnees.butAgn.prop("disabled", true);
    $('.definition div').children().empty();
    $('.recipe div').children().empty();
}

//Injection of Definition 
beesKnees.def = function() {
    $('.definition div h4').text('Slang Definition');
    $('.definition div span').text(`${beesKnees.terms[beesKnees.index].name}:`);
    $('.definition div p').text(beesKnees.terms[beesKnees.index].definition);
}

//Injection of Cocktail Recipe
beesKnees.recipe = function() {
    $('.recipe div h4').text('Cocktail Recipe');
    $('.recipe div span').text(`${beesKnees.terms[beesKnees.index].name}:`);
    $('.recipe div p').text(beesKnees.terms[beesKnees.index].recipe);
}

//Listening for users guess
beesKnees.submitListener = function(){
    beesKnees.butSub.on('click', function(){
        guess = $(this).val();
        //checking if user guess is correct
        if(guess === beesKnees.terms[beesKnees.index].type){
            beesKnees.numGuess++;
            $(this).addClass('right');
        } else {
            $(this).addClass('wrong');
        };
        //Injecting words definition and recipe
        if (beesKnees.terms[beesKnees.index].type === 'slang'){
            beesKnees.def();
        } else if (beesKnees.terms[beesKnees.index].type === 'cocktail'){
            beesKnees.recipe();
        } else if (beesKnees.terms[beesKnees.index].type === 'both') {
            beesKnees.def();
            beesKnees.recipe();
        }
        $('.score').text(`${beesKnees.numGuess} of ${beesKnees.index+1}`)
        //locking the guess buttons, unlocking the again button 
        beesKnees.butSub.prop("disabled", true);
        beesKnees.butAgn.prop("disabled", false);
    });
}

//Listening for against button and running term update
beesKnees.againListener = function(){
    beesKnees.butAgn.on('click', function(){
        if(beesKnees.index < beesKnees.terms.length-1){
            beesKnees.index++;
        };
        beesKnees.update();
    });
}

//whole thing goes!
$(function () {
    beesKnees.init();
});



