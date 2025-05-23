class internForm{
    submit(){
        console.log(this.name + ":Form Submitted")
    }
    cancel(){
        console.log(this.name + ":This form is cancelled")
    }
    fill(givenname){
        this.name = givenname
        
    }
}

//create a form for pooja
let poojaForm =  new internForm()
//fill the form with details
poojaForm.fill("Pooja")

//create a form for suzane
let suzaneForm = new internForm()
//fill the form for detail
suzaneForm.fill("Suzane")

poojaForm.submit()
suzaneForm.submit()
suzaneForm.cancel()