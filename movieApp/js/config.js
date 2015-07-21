var config_module = angular.module('app.config', [])
.constant('CONFIG', {
  'APP_NAME': 'Sticar',
  'APP_VERSION': '0.1',
  'BACKEND_URL': 'http://ratulroy.inmobi.com:3000/moviesbackend1/:id',
  'BACKEND_URL_LOGIN': 'http://ratulroy.inmobi.com:3000/login/'
});
// angular.forEach(config_data,function(key,value) {
//   config_module.constant(value,key);
// }
