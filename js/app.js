

'use strict';

let page1=[];
let page2=[];

$.ajax( './data/page-1.json' )
  .then( hornsData => {
    console.log( hornsData );
    hornsData.forEach( val=> {
      console.log( val );
      let newAnimal = new Horn( val );
      page1.push( newAnimal );
      newAnimal.render();

    } );
    selectOption();
    sortAnimals ();
    $( '#photo-template' ).first().remove();

  } );
//  .then( () => selectOption() );



$.ajax( './data/page-2.json' )
  .then( hornsData => {
    console.log( hornsData );
    hornsData.forEach( val=> {
      console.log( val );
      let newAnimal = new Horn( val );
      page2.push(newAnimal);
      newAnimal.render();

    } );
    selectOption();
    sortAnimals ();
    $( '#photo-template' ).first().remove();

  } );
//  .then( () => selectOption() );


$( '#page1' ).on( 'click', function() {
let selected = $(this).val();
$(div).hide();
$('')
} );

$( '#page2' ).on( 'click', function(){
  $( 'section' ).removeData();
  $( 'section' ).removeAttr();

} );


let animals = [];
let titlesArr = [];
let hornsArr =[];
function Horn( data ) {
  this.image_url = data.image_url;
  this.title = data.title;
  this.description = data.description;
  this.keyword = data.keyword;
  this.horns = data.horns;
  Horn.all.push( this );
  animals.push( this );
  titlesArr.push( this.title );
  hornsArr.push( this.horns );

}

Horn.all = [];
Horn.prototype.render=function () {

  let template = $( '#hornTemplate' ).html();
  let dataSet = Mustache.render( template,this );
  $( 'main' ).append( dataSet );


};
function selectOption() {
  let filteredKeyword =[];
  Horn.all.forEach( val => {
    if ( !filteredKeyword.includes( val.keyword ) ) {
      filteredKeyword.push( val.keyword );
    }

  } );
  filteredKeyword.forEach( val => {
    let option = `<option value="${val}">${val}</option>`;
    $( '.select' ).append( option );

  } );

}


$( '.select' ).on( 'change', function() {
  let selected = $( this ).val();
  $( 'div' ).hide();
  $( `.${selected}` ).show( );
  // $( `.${selected}` ).fadeIn( );
} );

// selectOption();
