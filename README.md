# <p align = "center"> ✨ SPA - API IBGE ✨ </p>  

</br>
</br>

    🚨 Sobre
    
</br>
</br>

Projeto frontend de criação de  um SPA com React + Redux utilizando API do IBGE, onde o usuário seleciona o estado e cidade de interesse e tem acesso a  informações da localização geográfica. 


**- status concluído** ✅
</BR>
</BR>


     🖋 Funcionalidades

</BR>

-  **selecionar estado :**  select para selecionar um estado utilizando  a api: https://servicodados.ibge.gov.br/api/v1/localidades/etasdos; 
</BR>

-  **selecionar cidade:** select para selecionar um município utilizando a api: https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios. Onde só é mostrado os municípios do estado que foi selecionado, tornando o select de municípios dependente do select de estados;
</BR>

-  **tabela de informações:** ao selecionar um município é mostrado na tela as informações de microrregião, mesorregião, UF e região do municípios utilizando esta api: https://servicodados.ibge.gov.br/api/v1/localidades/municipios/{municipio}/distritos; 
</BR>

- **responsividade:** desenvolvimento adaptado para telas de  celulares/ tables e computadores utilizando o media query;
</BR>
</BR>  


      🔧  Ferramentas:


- React
- Typescript
- Redux Toolkit
- Material UI
- Styled - component
- Axios;

