// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA_z-zO24oVwxDTJrplArmjUtTqSuiB5Ao",
    authDomain: "somewhere-warm.firebaseapp.com",
    databaseURL: "https://somewhere-warm.firebaseio.com",
    storageBucket: "somewhere-warm.appspot.com",
    messagingSenderId: "675537655730"
  };
  firebase.initializeApp(config);
  
// EMAIL/PASSWORD LOGIN VIA FIREBASE
const auth = firebase.auth();
auth.signInWithEmailAndPassword(email, pass);
auth.createUserWithEmailAndPassword(email, pass);
auth.onAuthStateChanged(firebaseUser => {})

const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignup');
const btnLogOut = document.getElementById('btnLogOut')

//ADD LOGIN EVENT 
btnLogin.addEventListener('click', e => {
    //GET EMAIL AND PASS
    const email = loginEmail.value;
    const pass = loginPassword.value;
    const auth = firebase.auth();
    //SIGN IN
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

//SIGN UP EVENT
btnSignup.addEventListener('click', e => {
    //GET EMAIL AND PASS
    //TO DO: CHECK FOR REAL EMAILS (#FUTURE GOALS)
    const email = loginEmail.value;
    const pass = loginPassword.value;
    const auth = firebase.auth();
    //SIGN IN
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

//LOG OUT EVENT
btnLogOut.addEventListener('click', e => {
    firebase.auth().signOut();

});

//ADD REALTIME LISTENER 
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('not logged in');
    }
});


(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

})(jQuery); // End of use strict
