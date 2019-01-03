import React from 'react'
import './QuemSomos.css'

function QuemSomos() {
  return (
    <main className="quem-somos">
      <h1>Quem somos</h1>
      <h3>Plataforma dedicada em empoderar mulheres no mercado de inovação audiovisual.
      </h3>
      <h1> MISSÃO</h1>
      <p> Rede Interativa Mulheres no Audiovisual é uma plataforma de produção de conteúdo. Nossa missão é empoderar mulheres no mercado de inovação audiovisual através da capacitação profissional, do dialógo com o mercado e a geração de renda.
     </p>
      <p><strong>Pra elas, por elas, com elas!</strong> </p>
      
      <div class="container-fluid quadrados">
                <div class="col-xs-12 col-md-3 caixa">
                    <p class="conte"> Das 2.583 obras audiovisuais registradas na ANCINE apenas 17% foram dirigidas e 21% roteirizadas por mulheres.</p>
                </div>
                <div class="col-xs-12 col-md-3 caixa">
                    <p class="conte"> Falta de representatividade na TV e no cinema, com ausência de personagens fortes e objetificação da mulher.</p>
                </div>
                <div class="col-xs-12 col-md-3 caixa">
                    <p class="conte"> Mulheres negras não dirigiram ou roteirizaram um filme entre os de maior bilheteria no período de 1995 a 2016.</p>
                </div>  
                <div class="col-xs-12 col-md-3 caixa">
                    <p class="conte"> 4% dos longas brasileiros de ficção lançados entre 1984 e 2014 tiveram diretoras de fotografia mulheres.</p>
                </div>   
        </div>
   
    </main>
    
  )
}

export default QuemSomos