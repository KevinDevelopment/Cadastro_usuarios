
import React from "react";
import Nav from "../../components/navbar";

function Home() {
  return (
    <div>
      <Nav />

      <div className="container-fluid mt-4">

        <div className="card">
          <div className="card-header">
            <h2>Fale conosco:</h2>
          </div>
          <div className="card-body">
            <form method="post" action="http://localhost:8080/save" className="row g-3 needs-validation" noValidate>

              <div className="col-md-6">
                <input type="text" name="nome" placeholder="Digite seu nome" className="form-control" required></input>
                <div class="valid-feedback"></div>            
                <div class="invalid-feedback">
                    Ops!
                </div>
              </div>

              <div className="col-md-6">
                <input type="text" name="sobrenome" placeholder="Digite seu sobrenome" className="form-control" required></input>
                <div class="valid-feedback"></div>            
                <div class="invalid-feedback">
                    Ops!
                </div>
              </div>

              <div className="col-md-6">
                <input type="text" name="email" placeholder="Email" className="form-control" required></input>
                <div class="valid-feedback"></div>            
                <div class="invalid-feedback">
                    Ops!
                </div>
              </div>

              <div className="col-md-6">
                <input type="text" name="telefone" placeholder="telefone de contato"  mask="(99) 99999-9999" className="form-control" required></input>
                <div class="valid-feedback"></div>            
                <div class="invalid-feedback">
                    Ops!
                </div>
              </div>

              <div className="col-md-4">
                <input type="text" name="cep" placeholder="CEP" mask="99999-999" className="form-control" required></input>
                <div class="valid-feedback"></div>            
                <div class="invalid-feedback">
                    Ops!
                </div>
              </div>

              <div className="col-md-4">
                <input type="text" name="numero" placeholder="Numero" className="form-control" required></input>
                <div class="valid-feedback"></div>            
                <div class="invalid-feedback">
                    Ops!
                </div>
              </div>

              <div className="col-md-4">
                <input type="text" name="complemento" placeholder="complemento" className="form-control" required></input>
                <div class="valid-feedback"></div>            
                <div class="invalid-feedback">
                    Ops!
                </div>
              </div>

              <div className="col-md-12">
                <textarea type="text" name="sugestao" placeholder="Deixe sua sugestão ou reclamação aqui :)" className="form-control" required></textarea>
                <div class="valid-feedback"></div>            
                <div class="invalid-feedback">
                    Ops!
                </div>
              </div>

              <button type="submit" className="btn btn-dark">Teste</button>

            </form>
          </div>
        </div>



      </div>

      {
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function () {

          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.querySelectorAll('.needs-validation')

          // Loop over them and prevent submission
          Array.prototype.slice.call(forms)
            .forEach(function (form) {
              form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
                }

                form.classList.add('was-validated')
              }, false)
            })
        })()
      }




    </div>
  );
}

export default Home;
