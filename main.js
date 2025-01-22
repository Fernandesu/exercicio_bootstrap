$(document).ready(function(){
    const btnQueroEsteCursoOuBootcamp = $('.btn-success');
    const inputCursoBootcampDesejado = $('#cbDesejado');
    const todosOsInputsDeTextoOuNumero = $("input.form-control");
    
    const btnFe = $("a[href='#frontEnd']")
    const btnJava = $("a[href='#java']")
    const btnBs = $("a[href='#bs']")
    const btnAng= $("a[href='#ang']")


    btnFe.on('click', function(){
        
        $('html').animate({
            scrollTop: $('#frontEnd').offset().top - $("header").outerHeight()
        }, 200)
        
    })
    
    btnJava.on('click', function(){
        
        $('html').animate({
            scrollTop: $('#java').offset().top - $("header").outerHeight()
        }, 200)
        
    })
    
    btnBs.on('click', function(){
        
        $('html').animate({
            scrollTop: $('#bs').offset().top - $("header").outerHeight()
        }, 200)
        
    })
    
    btnAng.on('click', function(){
        
        $('html').animate({
            scrollTop: $('#ang').offset().top - $("header").outerHeight()
        }, 200)
        
    })
    
    btnQueroEsteCursoOuBootcamp.on('click', function(){

        let nomeCb =  $(this).parent().find('span').text();

        inputCursoBootcampDesejado.val(nomeCb)

        $('html').animate({
            scrollTop: $('#inscricao').offset().top 
        }, 200)
    })


    // masks

    $("input[name='telefone']").mask('(00)00000-0000', {
        placeholder: "(DDD) 98822-1122"
    });

    // validações

    $('form').validate({
        
        rules: {
            nome:{
                required: true,
            },

            email:{
                required:true,
                email: true,
            },

            telefone:{
                required: true,
            },

            curso:{
                required: true,
            }
        },

        messages:{
            nome:"Por favor, preencha este campo",

            email:"Por favor, preencha este campo",

            telefone:"Por favor, preencha este campo",

            curso: "Por favor, preencha este campo",
        },

        submitHandler: function(form){

            $('input.form-control').val('')

            $("input.form-check-input").prop('checked', false)

            $("#textoSucesso").css('display', 'block')
            
            setTimeout(function(){
                $("#textoSucesso").css('display', 'none')
            }, 2500)

            $('html').animate({
                scrollTop: $('#textoSucesso').offset().top
            }, 100)


        },

        invalidHandler: function(evento, validador){
            evento.preventDefault();
            // let numeroDeCamposIncorretos = validador.numberOfInvalids();

            // $(`Há ${numeroDeCamposIncorretos} campos que não foram preenchidos 
            //     ou que não foram preenchidos corretamente`).appendTo("p#textoAlerta")
            
            $("p#textoAlerta").css('display', 'block')
            
            setTimeout(function(){
                $("p#textoAlerta").css('display', 'none')
            }, 3000)

            $('html').animate({
                scrollTop: $('.alert').offset().top
            }, 100)

        },

    })

})


