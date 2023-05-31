// document.querySelector('h1').innerHTML = 123

// document.getElementById('test').addEventListener('click',function(){
    // document.write('123')
    // document.getElementById('test').style.display = 'none';
// })
// $('#test').on('click', function(){
//     document.write(123)
    //   $(this).hide();
// })

// selector.action(argument1,argument2,argument3)

// $('').action()

// $('').addclass()

// $('').hide()

// $('').show()

// $('').on('click',function(){ },)

// document.getElementById('action1').addEventListener('click', function(){
//     document.getElementById('output').style.display = 'none';
// })
// $('#action1').on('click', function(){
//     $('output').hide(1000);
// })
// $('#action2').on('click', function(){
//     // $('output').show(1000);
//     alert('show')
// })
// $('#action3').on('click', function(){
//     $('output').toggle(1000);
// })

// hide, show,toggle

// $('#action1').on('click', function(){
//     $('output').slideUp(1000);
// })
// $('#action2').on('click', function(){
//     $('output').slideDown(1000);
// })
// $('#action3').on('click', function(){
//     $('output').slideToggle(1000);
// })

// slideUp, slideDown ,SlideToggle

// $('#action1').on('click', function(){
//     $('output').fadeOut(1000);
// })
// $('#action2').on('click', function(){
//     $('output').fadeIn(1000);
// })
// $('#action3').on('click', function(){
//     $('output').fadeToggle(1000);
// })
// $('#action4').on('click', function(){
//     $('output').fadeTo(1000,0.5);
// })

// fadeOut, fadeIn, fadeToggle, fadeTo

// $('#action1').on('click', function(){
//     $('output').animate({
//         width: '200px',
//         width: '500px',
//         marginLeft:'100px'
//     },1000);
// })

// $('#action1').on('click', function(){
//     $('output').hide(2000);
// })

// $('#action2').on('click', function(){
//     $('output').stop();
// })

// $('#action1').on('click', function(){
//     $('output').hide(2000),show(2000),slideUp(2000),slideDown(2000),fadeOut(2000),fadeIn(2000);

// })


// $('#action1').on('click', function(){
//     let output = $('#output').text()
//     let output = $('#output').html()
//     let output = $('#output').val()


//     console.log(output)
// })

// $('#action1').on('click', function(){
//         $('#output').html('Inner Text')
//         $('#output').html('<b>Inner</b>')
//         $('#output').text('<b>Inner</b>')
         
// })
// $('#action1').on('click', function(){
//         $('#output').append('Append Text')
//         $('#output').after('Append Text')
//         $('#output').after('<h1>append text</h1>')
// })

// $('#action1').on('click', function(){
//         $('#output').empty();
        // div ar vitor sob child remove hoe jabe
       
// })

// $('#action1').on('click', function(){
//         $('#output').addClass('active');
       
// })
// $('#action2').on('click', function(){
//     $('#output').removeClass('active');
   
// })
// $('#action2').on('click', function(){
//     $('#output').css('font-size','50px');
   
// })

// $('#action2').on('click', function(){
//     $('#output').css({
//         'font-size':'50px',
//         'background--color':'green',
//     });
   
// })
// $('#action2').on('click', function(){
//    let outputvalue= $('#output').width();
//    let outputvalue= $('#output').height();
//    let outputvalue= $('#output').innerwidth();
//    let outputvalue= $('#output').innerheight();
//    let outputvalue= $('#output').outerwidth();
//    let outputvalue= $('#output').outerheight();

//    console.log(outputvalue);
   
// })
// $('#action2').on('click', function(){
//    let outputvalue= $('#output').parent();
//    let outputvalue= $('#output h1').parent();
//    console.log(outputvalue);
   
// })

// $(document).ready(function(){
//     $('#action1').on('click', function(){
//         $('#output').addClass('active');
//     });
//     $('#action2').on('click', function(){
//         let outputvalue= $('#output h1').parent();
//         console.log(outputvalue);
//     });
// })

$(function(){
    $('#action1').on('click', function(){
        $('#output').addClass('active');
    })
    $('#action2').on('click', function(){
        let outputvalue= $('#output h1').parent();
        console.log(outputvalue);
   
    });
})
       













