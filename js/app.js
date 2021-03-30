
'use strict';


$.ajax( './data/page-1.json' )
  .then( hornsData => {
    console.log( hornsData );
    hornsData.forEach( val=> {
      console.log( val );
      let newAnimal = new Horn( val );
      newAnimal.render();
    } );
    selectOption();
    $( '#photo-template' ).first().remove();

  } );
//  .then( () => selectOption() );

function Horn( data ) {
  this.image_url = data.image_url;
  this.title = data.title;
  this.description = data.description;
  this.keyword = data.keyword;
  this.horns = data.horns;
  Horn.all.push( this );
}

Horn.all = [];
Horn.prototype.render=function () {

  let photoTemplate = $( '#photo-template' ).clone();
  photoTemplate.addClass( this.keyword );
  photoTemplate.removeClass( 'photo-template' );
  photoTemplate.find( 'h2' ).text( this.title );
  photoTemplate.find( 'img' ).attr( 'src', this.image_url );
  photoTemplate.find( 'p' ).text( this.description );
  $( 'main' ).append( photoTemplate );


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
    $('select').append( option );

  } );

}







$( 'select' ).on( 'change', function() {
  let selected = $( this ).val();
  $( 'div' ).hide();
  $( `.${selected}` ).show( );
  // $( `.${selected}` ).fadeIn( );
} );

// function selectOption() {
//   let shown = {};
//   let select = $( 'select' );
//   Horn.all.forEach( ( horn ) => {
//     if ( ! shown[horn.keyword] ) {
//       let option = `<option value="${horn.keyword}">${horn.keyword}</option>`;
//       select.append( option );
//       shown[horn.keyword] = true;
//     }
//   } );
// }
