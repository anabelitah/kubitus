'use strict';

/**
 * @ngdoc function
 * @name kubitusApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the kubitusApp
 */
angular.module('kubitusApp')
  .constant('GalleryConst', {
    'kitchen': {
      'name': 'KITCHEN',
      'url': 'kitchen',
      'mainImage': 'gallery_cozinha.png',
      'filter': '.kitchen'
    },
    'furniture': {
      'name': 'FURNITURE',
      'url': 'furniture',
      'mainImage': 'gallery_mobiliario.png',
      'filter': '.furniture',
      'category': {
        'pradi': {
          'name': 'Pradi',
          'items': [
            {
              name: "",
              image: "furniture/pradi/1.png"
            },
            {
              name: "",
              image: "furniture/pradi/2.png"
            },
            {
              name: "",
              image: "furniture/pradi/3.png"
            },
            {
              name: "",
              image: "furniture/pradi/4.png"
            },
            {
              name: "",
              image: "furniture/pradi/5.png"
            },
            {
              name: "",
              image: "furniture/pradi/6.png"
            },
            {
              name: "",
              image: "furniture/pradi/7.png"
            },
            {
              name: "",
              image: "furniture/pradi/8.png"
            },
            {
              name: "",
              image: "furniture/pradi/9.png"
            },
            {
              name: "",
              image: "furniture/pradi/10.png"
            },
            {
              name: "",
              image: "furniture/pradi/11.png"
            },
            {
              name: "",
              image: "furniture/pradi/12.png"
            },
            {
              name: "",
              image: "furniture/pradi/13.png"
            },
            {
              name: "",
              image: "furniture/pradi/14.png"
            },
            {
              name: "",
              image: "furniture/pradi/15.png"
            },
            {
              name: "",
              image: "furniture/pradi/16.png"
            },
            {
              name: "",
              image: "furniture/pradi/17.png"
            },
            {
              name: "",
              image: "furniture/pradi/18.png"
            },
            {
              name: "",
              image: "furniture/pradi/19.png"
            },
            {
              name: "",
              image: "furniture/pradi/20.png"
            },
            {
              name: "",
              image: "furniture/pradi/21.png"
            },
            {
              name: "",
              image: "furniture/pradi/22.png"
            },
            {
              name: "",
              image: "furniture/pradi/23.png"
            }
          ]
        },
        'bruma': {
          'name': 'Bruma',
          'items': [
            {
              name: "",
              image: "furniture/bruma/1.png"
            },
            {
              name: "",
              image: "furniture/bruma/2.png"
            },
            {
              name: "",
              image: "furniture/bruma/2a.png"
            },
            {
              name: "",
              image: "furniture/bruma/3.png"
            },
            {
              name: "",
              image: "furniture/bruma/4.png"
            },
            {
              name: "",
              image: "furniture/bruma/5.png"
            },
            {
              name: "",
              image: "furniture/bruma/6.png"
            },
            {
              name: "",
              image: "furniture/bruma/7.png"
            },
            {
              name: "",
              image: "furniture/bruma/8.png"
            },
            {
              name: "",
              image: "furniture/bruma/9.png"
            },
            {
              name: "",
              image: "furniture/bruma/9a.png"
            },
            {
              name: "",
              image: "furniture/bruma/10.png"
            },
            {
              name: "",
              image: "furniture/bruma/10a.png"
            }
          ]
        },
        'modelar': {
          'name': 'Modelar',
          'items': [
            {
              name: "",
              image: "furniture/modelar/1.png"
            },
            {
              name: "",
              image: "furniture/modelar/2.png"
            },
            {
              name: "",
              image: "furniture/modelar/3.png"
            },
            {
              name: "",
              image: "furniture/modelar/4.png"
            },
            {
              name: "",
              image: "furniture/modelar/5.png"
            },
            {
              name: "",
              image: "furniture/modelar/6.png"
            },
            {
              name: "",
              image: "furniture/modelar/7.png"
            },
            {
              name: "",
              image: "furniture/modelar/8.png"
            },
            {
              name: "",
              image: "furniture/modelar/9.png"
            },
            {
              name: "",
              image: "furniture/modelar/10.png"
            },
            {
              name: "",
              image: "furniture/modelar/11.png"
            }
          ]
        },
        'ap': {
          'name': 'AP',
          'items': [
            {
              name: "",
              image: "furniture/AP/1.png"
            },
            {
              name: "",
              image: "furniture/AP/2.png"
            },
            {
              name: "",
              image: "furniture/AP/3.png"
            },
            {
              name: "",
              image: "furniture/AP/4.png"
            },
            {
              name: "",
              image: "furniture/AP/5.png"
            },
            {
              name: "",
              image: "furniture/AP/6.png"
            },
            {
              name: "",
              image: "furniture/AP/7.png"
            },
            {
              name: "",
              image: "furniture/AP/8.png"
            },
            {
              name: "",
              image: "furniture/AP/9.png"
            },
            {
              name: "",
              image: "furniture/AP/10.png"
            },
            {
              name: "",
              image: "furniture/AP/11.png"
            },
            {
              name: "",
              image: "furniture/AP/12.png"
            },
            {
              name: "",
              image: "furniture/AP/13.png"
            },
            {
              name: "",
              image: "furniture/AP/14.png"
            },
            {
              name: "",
              image: "furniture/AP/15.png"
            },
            {
              name: "",
              image: "furniture/AP/16.png"
            },
            {
              name: "",
              image: "furniture/AP/17.png"
            },
            {
              name: "",
              image: "furniture/AP/18.png"
            },
            {
              name: "",
              image: "furniture/AP/19.png"
            },
            {
              name: "",
              image: "furniture/AP/20.png"
            },
            {
              name: "",
              image: "furniture/AP/21.png"
            },
            {
              name: "",
              image: "furniture/AP/22.png"
            },
            {
              name: "",
              image: "furniture/AP/23.png"
            },
            {
              name: "",
              image: "furniture/AP/24.png"
            },
            {
              name: "",
              image: "furniture/AP/25.png"
            },
            {
              name: "",
              image: "furniture/AP/26.png"
            },
            {
              name: "",
              image: "furniture/AP/27.png"
            },
            {
              name: "",
              image: "furniture/AP/28.png"
            },
            {
              name: "",
              image: "furniture/AP/29.png"
            },
            {
              name: "",
              image: "furniture/AP/30.png"
            },
            {
              name: "",
              image: "furniture/AP/31.png"
            },
            {
              name: "",
              image: "furniture/AP/32.png"
            },
            {
              name: "",
              image: "furniture/AP/33.png"
            }
          ]
        }
      }
    },
    'estofos': {
      'name': 'ESTOFOS',
      'url': 'estofos',
      'mainImage': 'gallery_estofos.png',
      'filter': '.estofos'
    },
    'chairs': {
      'name': 'CHAIRS',
      'url': 'chairs_tables',
      'mainImage': 'gallery_chairs.png',
      'filter': '.chairs'
    }
  });
