    let $ = id => document.getElementById(id)
    
    window.onload = function(){   
      

   // const elementsForm = $('form-create').elements;// busca cada uno de los elementos q conforman el form

    $('form-create').addEventListener('submit',function(e){      
        e.preventDefault()

        let errores = [];

     
        if($('name').value === "" || $('name').value.trim().length < 2){
            errores.push(`La tarea debe tener un nombre y tener mas de 2 caracteres`)
        }
        if($('status').value === ""){
            errores.push('Debe seleccionar un estado de tarea')
        }
      
      if(errores.length){
        errores.forEach(error =>{
            $('box-errors').innerHTML +=`<li>${error}</li>`           
            })
      }else{
        this.submit()
      }
    });
    
    $('form-edit').addEventListener('submit',function(event){
      console.log('q onda????')
      event.preventDefault()
      
   let erroresEdit = [];
      if($('statusEdit').value === ""){
          erroresEdit.push('Debe seleccionar un estado de tarea')
      }
    
    if(erroresEdit.length){
      erroresEdit.forEach(error =>{
          $('box-errors-edit').innerHTML +=`<li>${error}</li>`           
          })
    }else{
      this.submit()
    } 
  });
 
    
  }
    
    