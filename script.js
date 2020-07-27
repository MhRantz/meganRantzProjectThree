const beesKnees = {}

beesKnees.init = function() {
    beesKnees.random();
    beesKnees.update();
    beesKnees.entry();
    beesKnees.submitListener();
    beesKnees.againListener();
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
        recipe: '2oz Gin. 3/4oz Honey Syrup. 1/2oz Lemon Juice.'
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
        recipe: '1oz Bourbon. 1 1/2oz Ginger Liqueur. 1/2oz Lemon Juice.'
    },
    {
        name: 'Harvey Wallbanger',
        type: 'cocktail',
        definition: '',
        recipe: '4oz Orange Juice. 1 1/2oz Vodka. 1/2oz Galliano L\'Autentico. Orange slice and cherry.'
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
        recipe: '2oz Gin. 3/4oz Lime Cordial. Lime wedge.'
    },
    {
        name: 'Wolf Bite',
        type: 'cocktail',
        definition: '',
        recipe: '1/4oz Absinthe. 1/2oz Melon Liqueur. 1oz Pineapple Juice. Splash Lime Soda and Grenadine.'
    },
    {
        name: 'Floor Flusher',
        type: 'slang',
        definition: 'an insatiable dancer',
        recipe: ''
    },
    {
        name: 'Viex Carre',
        type: 'cocktail',
        definition: '',
        recipe: '1oz Bourbon. 1oz Cognac. 1oz Sweet vermouth. 1dh Angostura. 1dh Peychauds'
    },
    {
        name: 'Bell Bottom',
        type: 'slang',
        definition: 'A sailor',
        recipe: ''
    },
    {
        name: 'Cheaters',
        type: 'slang',
        definition: 'eye glasses',
        recipe: ''
    },  
    {
        name: 'Ruby Queen',
        type: 'cocktail',
        definition: '',
        recipe: '1 1/2oz Scotch. 1oz Red beet juice. 3/4oz Honey syrup. 3/4oz Lemon juice. Tarragon garnish.'
    },
    {
        name: 'Buzzer',
        type: 'slang',
        definition: 'Police badge',
        recipe: ''
    },
    {
        name: 'Getaway Sticks',
        type: 'slang',
        definition: 'Legs',
        recipe: ''
    },
    {
        name: 'Ward Eight',
        type: 'cocktail',
        definition: '',
        recipe: '2oz Whiskey. 1/2oz Lemon juice. 1/2oz Orange juice. 2tbsp Grenadine. 2 Cherries'
    },
    {
        name: 'Vamp',
        type: 'both',
        definition: 'a voracious flirt',
        recipe: '2oz Tart cherry juice. 1/4oz Simple syrup. 1/2 Angosturas. 2oz Tonic water. Cherries.'
    },
    {
        name: 'Ossified',
        type: 'slang',
        definition: 'to be drunk',
        recipe: ''
    },
    {
        name: 'Sinker',
        type: 'both',
        definition: 'a doughnut, from sinking in coffee',
        recipe: '2oz Whiskey. 1oz Pineapple juice. 1/2oz Lemon juice. 1/2oz Ginger syrup.'
    },
    {
        name: 'Drugstore Cowboy',
        type: 'both',
        definition: 'either a man who loafs outside drugstores looking to meet people',
        recipe: '3 Green cardamom pods. 1 1/2oz Cognac. 3/4oz Benedictine DOM. 3/4oz Apricot Brandy. 3/4oz Lemon Juice. '
    },
    // Horsefeathers - slang. Giggle Water. Cats PJ's. Dry Up. Clam. Dewdropper. Drugstore Cowboy. Oyster fruit. Heeler. 
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

//////Fade in of remaining page content for style 
beesKnees.entry = function(){
    $('.submitButtonsBank').css('visibility','visible').hide().fadeIn(2000);
    $('.gridFather').css('visibility','visible').hide().fadeIn(2000);
}

//Updates term to be guessed and currently functioning buttons
beesKnees.update = function(){
    $('h2').addClass('lightsOn').text(beesKnees.terms[beesKnees.index].name);
    setTimeout(function(){
        $('h2').removeClass('lightsOn');
    },1000);
    //locking the again button, unlocking the guess buttons and emptying the results definition and recipe
    beesKnees.butSub.removeClass('wrong right');
    beesKnees.butSub.prop("disabled", false);
    beesKnees.butAgn.prop("disabled", true);
    $('.definition div').children().empty();
    $('.recipe div').children().empty();
}

//Injection of Definition 
beesKnees.def = function() {
    $('.definition div h4').addClass('lightsOn').text('Slang Definition');
    setTimeout(function(){
        $('h4').removeClass('lightsOn');
    },1000);
    $('.definition div span').text(`${beesKnees.terms[beesKnees.index].name}:`);
    $('.definition div p').text(beesKnees.terms[beesKnees.index].definition);
}

//Injection of Cocktail Recipe
beesKnees.recipe = function() {
    $('.recipe div h4').addClass('lightsOn').text('Cocktail Recipe');
    setTimeout(function(){
        $('h4').removeClass('lightsOn');
    },1000);
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
         //Get Ready for next question
        if (beesKnees.index < beesKnees.terms.length){
            beesKnees.index++;       
        }
        //End game shut down 
        if (beesKnees.index === beesKnees.terms.length){
            $('.submitButtonsBank').addClass('hiddenTrue');
            $('.headline h3').text('Final Score');
            $('.headline h3 span').empty();
            beesKnees.butAgn.text('Play Again');
        }
    });
}

//Listening for next word button
beesKnees.againListener = function(){
    beesKnees.butAgn.on('click', function(){
        //End game re-load page to play again
        if (beesKnees.index === beesKnees.terms.length){
            location.reload(); 
        }
        //Set up new term
        beesKnees.update();
    });
}

//whole thing goes!
$(function () {
    beesKnees.init();
});



