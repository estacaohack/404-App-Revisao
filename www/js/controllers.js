angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

    $scope.cartoesFeed = [
              {
                  img:'http://jenios.com.br/wp-content/uploads/2016/12/vo.jpg',
                  legenda: 'antes eu sofria, hoje eu sou fria kk',
                  statusLegenda: false
              },
              {
                  img:'https://falauniversidades.com.br/wp-content/uploads/2017/06/faust%C3%A3o-CAPA-660x330.jpg',
                  legenda: 'kkkkkkk cada k uma lagrima',
                  statusLegenda: false
              },
              {
                  img:'http://cdn.naosalvo.com.br/2016/01/faustaoselena3x.jpg',
                  legenda: 'adeus 2017, a Deus 2018',
                  statusLegenda: false
              },
              {
                  img:'http://i0.kym-cdn.com/photos/images/original/000/894/883/7ca.jpg',
                  legenda: 'service é facil, dificil é segurar essa barra que é gostar de voce',
                  statusLegenda: false
              },
              {
                  img:'https://rd1.com.br/wp-content/uploads/2015/08/Faustao.png',
                  legenda: 'nao me olha com esse tom de voz',
                  statusLegenda: false
              }
          ];



          $scope.mostrar = (cartao) =>{
              cartao.statusLegenda = true;
          }

          $scope.esconder = (cartao) =>{
              cartao.statusLegenda = false;
          }


})

.controller('LoginCtrl', function($scope, $state) {

    let usuariosCadastrados = [
        {
            login: 'daniel',
            senha: '123'
        },
        {
            login: 'barbara',
            senha: '321'
        },
        {
            login: 'john',
            senha: '456'
        },
        {
            login: 'caique',
            senha: '654'
        }
    ];

    $scope.erro = false;


    $scope.entrar = (login, senha) =>{

        for (let usuario of usuariosCadastrados){

            if(login == usuario.login && senha == usuario.senha){

                $state.go('tab.dash');

            } else{

                    $scope.erro = true;

            }

        }

    }





})

.controller('ChatsCtrl', function($scope, Chats) {

    $scope.usuarioLogado = {
                nome: 'Ana Maria Braga',
                img: 'http://i1.r7.com/data/files/2C95/948E/3A7D/8DDB/013A/88DA/8EB3/2E2F/Supla_Francisco%20Cepeda%20AGNews.jpg',
                status: []
    }

    $scope.postar = (post) =>{
            let objeto = {
                p: post
            }


            $scope.usuarioLogado.status.push(objeto);
            console.log($scope.usuarioLogado.status);
    }


})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
