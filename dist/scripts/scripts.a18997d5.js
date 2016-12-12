"use strict";angular.module("kubitusApp",["ngRoute","ngCookies","ngResource","ngSanitize","ngTouch","ngAnimate","pascalprecht.translate","slickCarousel","wu.masonry","kub.mainMenu","kub.topHeader","kub.bannerSlideshow","kub.banner","kub.mainGallery","kub.pageGallery","kub.productGallery","kub.newsletter","kub.pageNotFounded","kub.footer"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl",controllerAs:"home"}).when("/home",{templateUrl:"views/home.html",controller:"HomeCtrl",controllerAs:"home"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/gallery",{templateUrl:"views/gallery.html",controller:"GalleryCtrl",controllerAs:"gallery"}).when("/gallery/:product_type",{templateUrl:"views/gallery_page.html",controller:"GalleryPageCtrl",controllerAs:"galleryPage"}).when("/gallery/:product_type/:product_id",{templateUrl:"views/gallery_product.html",controller:"GalleryProductCtrl",controllerAs:"galleryProduct"}).otherwise({redirectTo:"/"})}]).config(["$translateProvider",function(a){a.useStaticFilesLoader({prefix:"translations/",suffix:".json"}),a.preferredLanguage("en")}]).config(["slickCarouselConfig",function(a){a.dots=!0,a.autoplay=!1}]),angular.module("kub.topHeader",["angularModalService","ngCookies"]).directive("topHeader",function(){return{templateUrl:"views/top-header.html"}}).controller("LanguageCtrl",["$scope","$cookies","$translate","ModalService",function(a,b,c,d){a.isLanguageSelected=function(a){return a===b.get("language")},a.changeLanguage=function(a){b.put("language",a),c.use(a)},a.myLanguage=function(){b.get("language")?c.use(b.get("language")):d.showModal({templateUrl:"views/language.html",controller:"LanguagePopUpController"}).then(function(a){a.element.modal(),a.close.then(function(a){b.put("language",a),c.use(a)})})}}]).controller("LanguagePopUpController",["$scope","close",function(a,b){var c="fr";a.close=function(a){a||(a=c),b(a,500)}}]),angular.module("kub.mainMenu",[]).directive("mainMenu",function(){return{templateUrl:"views/main-menu.html"}}).controller("MenuCtrl",["$scope","$location",function(a,b){var c={home:{urlMatch:["home"]},about:{urlMatch:["about"]},gallery:{urlMatch:["gallery"]},contact:{urlMatch:["contact"]}};a.isActive=function(a){var d=b.path().split("/")[1];return d?c[a].urlMatch.some(function(a){return d.indexOf(a)!==-1}):"home"===a}}]),angular.module("kub.bannerSlideshow",["slickCarousel"]).directive("bannerSlideshow",function(){return{templateUrl:"views/banner-slideshow.html"}}).controller("SliderSlickCtrl",["$scope",function(a){a.slides=[{id:"banner1",class:"banner-slide-1",label:"label"},{id:"banner2",class:"banner-slide-2",label:"label"},{id:"banner3",class:"banner-slide-3",label:"label"}],a.slickConfigLoaded=!0,a.slickCurrentIndex=0,a.slickConfig={dots:!0,autoplay:!0,initialSlide:0,infinite:!0,autoplaySpeed:2e3,method:{},event:{beforeChange:function(){},afterChange:function(b,c,d){a.slickCurrentIndex=d}}}}]),angular.module("kub.banner",[]).directive("banner",function(){return{templateUrl:"views/banner.html",scope:{view:"=view",subview:"=subview"}}}),angular.module("kubitusApp").constant("GalleryConst",{kitchen:{name:"KITCHEN",url:"kitchen",mainImage:"gallery_cozinha.png",filter:".kitchen"},furniture:{name:"FURNITURE",url:"furniture",mainImage:"gallery_mobiliario.png",filter:".furniture",category:{pradi:{name:"Pradi",items:[{name:"",image:"furniture/pradi/1.png"},{name:"",image:"furniture/pradi/2.png"},{name:"",image:"furniture/pradi/3.png"},{name:"",image:"furniture/pradi/4.png"},{name:"",image:"furniture/pradi/5.png"},{name:"",image:"furniture/pradi/6.png"},{name:"",image:"furniture/pradi/7.png"},{name:"",image:"furniture/pradi/8.png"},{name:"",image:"furniture/pradi/9.png"},{name:"",image:"furniture/pradi/10.png"},{name:"",image:"furniture/pradi/11.png"},{name:"",image:"furniture/pradi/12.png"},{name:"",image:"furniture/pradi/13.png"},{name:"",image:"furniture/pradi/14.png"},{name:"",image:"furniture/pradi/15.png"},{name:"",image:"furniture/pradi/16.png"},{name:"",image:"furniture/pradi/17.png"},{name:"",image:"furniture/pradi/18.png"},{name:"",image:"furniture/pradi/19.png"},{name:"",image:"furniture/pradi/20.png"},{name:"",image:"furniture/pradi/21.png"},{name:"",image:"furniture/pradi/22.png"},{name:"",image:"furniture/pradi/23.png"}]},bruma:{name:"Bruma",items:[{name:"",image:"furniture/bruma/1.png"},{name:"",image:"furniture/bruma/2.png"},{name:"",image:"furniture/bruma/2a.png"},{name:"",image:"furniture/bruma/3.png"},{name:"",image:"furniture/bruma/4.png"},{name:"",image:"furniture/bruma/5.png"},{name:"",image:"furniture/bruma/6.png"},{name:"",image:"furniture/bruma/7.png"},{name:"",image:"furniture/bruma/8.png"},{name:"",image:"furniture/bruma/9.png"},{name:"",image:"furniture/bruma/9a.png"},{name:"",image:"furniture/bruma/10.png"},{name:"",image:"furniture/bruma/10a.png"}]},modelar:{name:"Modelar",items:[{name:"",image:"furniture/modelar/1.png"},{name:"",image:"furniture/modelar/2.png"},{name:"",image:"furniture/modelar/3.png"},{name:"",image:"furniture/modelar/4.png"},{name:"",image:"furniture/modelar/5.png"},{name:"",image:"furniture/modelar/6.png"},{name:"",image:"furniture/modelar/7.png"},{name:"",image:"furniture/modelar/8.png"},{name:"",image:"furniture/modelar/9.png"},{name:"",image:"furniture/modelar/10.png"},{name:"",image:"furniture/modelar/11.png"}]},ap:{name:"AP",items:[{name:"",image:"furniture/AP/1.png"},{name:"",image:"furniture/AP/2.png"},{name:"",image:"furniture/AP/3.png"},{name:"",image:"furniture/AP/4.png"},{name:"",image:"furniture/AP/5.png"},{name:"",image:"furniture/AP/6.png"},{name:"",image:"furniture/AP/7.png"},{name:"",image:"furniture/AP/8.png"},{name:"",image:"furniture/AP/9.png"},{name:"",image:"furniture/AP/10.png"},{name:"",image:"furniture/AP/11.png"},{name:"",image:"furniture/AP/12.png"},{name:"",image:"furniture/AP/13.png"},{name:"",image:"furniture/AP/14.png"},{name:"",image:"furniture/AP/15.png"},{name:"",image:"furniture/AP/16.png"},{name:"",image:"furniture/AP/17.png"},{name:"",image:"furniture/AP/18.png"},{name:"",image:"furniture/AP/19.png"},{name:"",image:"furniture/AP/20.png"},{name:"",image:"furniture/AP/21.png"},{name:"",image:"furniture/AP/22.png"},{name:"",image:"furniture/AP/23.png"},{name:"",image:"furniture/AP/24.png"},{name:"",image:"furniture/AP/25.png"},{name:"",image:"furniture/AP/26.png"},{name:"",image:"furniture/AP/27.png"},{name:"",image:"furniture/AP/28.png"},{name:"",image:"furniture/AP/29.png"},{name:"",image:"furniture/AP/30.png"},{name:"",image:"furniture/AP/31.png"},{name:"",image:"furniture/AP/32.png"},{name:"",image:"furniture/AP/33.png"}]}}},estofos:{name:"ESTOFOS",url:"estofos",mainImage:"gallery_estofos.png",filter:".estofos"},chairs:{name:"CHAIRS",url:"chairs_tables",mainImage:"gallery_chairs.png",filter:".chairs"}}),angular.module("kubitusApp").controller("AboutCtrl",["$scope",function(a){a.pageClass="page-about"}]),angular.module("kubitusApp").controller("HomeCtrl",["$scope",function(a){a.pageClass="page-home"}]),angular.module("kubitusApp").controller("ContactCtrl",["$scope",function(a){a.pageClass="page-contact"}]),angular.module("kubitusApp").controller("GalleryCtrl",["$scope",function(a){a.pageClass="main-gallery"}]),angular.module("kubitusApp").controller("GalleryPageCtrl",["$scope",function(a){a.pageClass="page-gallery-page"}]),angular.module("kubitusApp").controller("GalleryProductCtrl",["$scope",function(a){a.pageClass="page-gallery-product"}]),angular.module("kub.newsletter",[]).directive("newsletter",function(){return{templateUrl:"views/newsletter.html"}}),angular.module("kub.mainGallery",[]).directive("mainGallery",function(){return{templateUrl:"views/main-gallery.html"}}).controller("MainGalleryCtrl",["$scope","GalleryConst",function(a,b){a.mainGallery=b}]),angular.module("kub.pageGallery",[]).directive("pageGallery",function(){return{templateUrl:"views/page-gallery.html"}}).controller("PageGalleryCtrl",["$scope","$routeParams","$timeout","GalleryConst",function(a,b,c,d){a.$watch("selectedItem",function(){c(function(){$("[masonry]").masonry("reloadItems"),$("[masonry]").masonry()},700)}),a.galleryPage=d[b.product_type],a.galleryPageFounded=!!a.galleryPage,a.selectedItem="all-products",a.allGalleryItems=$.map(a.galleryPage.category,function(a,b){return $.map(a.items,function(a,c){return angular.extend({},a,{type:b})})}),a.selectedItems=a.events={selectItem:function(b){a.selectedItem=b}}}]),angular.module("kub.productGallery",[]).directive("productGallery",function(){return{templateUrl:"views/product-gallery.html"}}).controller("ProductGalleryCtrl",["$scope",function(a){}]),angular.module("kub.pageNotFounded",[]).directive("pageNotFounded",function(){return{templateUrl:"views/page-not-founded.html"}}).controller("PageNotFoundedCtrl",["$scope",function(a){}]),angular.module("kub.footer",[]).directive("footer",function(){return{templateUrl:"views/footer.html"}}),angular.module("kubitusApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="contact-container"> <div banner view="\'ABOUT\'"></div> <!--about start here--> <div class="about"> <div class="container"> <div class="about-main"> <!--<div class="about-top">--> <!--<h2>{{\'ABOUT_PAGE.TITLE\' | translate}}</h2>--> <!--</div>--> <div class="about-bottom"> <div class="col-md-6 about-left"> <img src="images/ab.jpg" alt="" class="img-responsive"> </div> <div class="col-md-6 about-right"> <p>{{\'ABOUT_PAGE.DESCRIPTION.P1\' | translate}}</p> <p>{{\'ABOUT_PAGE.DESCRIPTION.P2\' | translate}}</p> <p>{{\'ABOUT_PAGE.DESCRIPTION.P3\' | translate}}</p> <p>{{\'ABOUT_PAGE.DESCRIPTION.P4\' | translate}}</p> <p>{{\'ABOUT_PAGE.DESCRIPTION.P5\' | translate}}</p> </div> <div class="clearfix"> </div> </div> </div> </div> </div> <!--about end here--> <!--advantage start here--> <div class="advantages"> <div class="container"> <div class="advantages-main"> <div class="col-md-3 fact-grid"> <div class="col-md-2 cord-drop"> <span class="numbers">1</span> </div> <div class="col-md-10 feature-text"> <h4>{{\'ABOUT_PAGE.ADVANTAGES.1\' | translate}}</h4> <span class="pencil-rule-icon"></span> </div> <div class="clearfix"> </div> </div> <div class="col-md-3 fact-grid"> <div class="col-md-2 cord-drop"> <span class="numbers">2</span> </div> <div class="col-md-10 feature-text"> <h4>{{\'ABOUT_PAGE.ADVANTAGES.2\' | translate}}</h4> <span class="draw-icon"></span> </div> <div class="clearfix"> </div> </div> <div class="col-md-3 fact-grid"> <div class="col-md-2 cord-drop"> <span class="numbers">3</span> </div> <div class="col-md-10 feature-text"> <h4>{{\'ABOUT_PAGE.ADVANTAGES.3\' | translate}}</h4> <span class="chair-icon"></span> </div> <div class="clearfix"> </div> </div> <div class="col-md-3 fact-grid"> <div class="col-md-2 cord-drop"> <span class="numbers">4</span> </div> <div class="col-md-10 feature-text"> <h4>{{\'ABOUT_PAGE.ADVANTAGES.4\' | translate}}</h4> <span class="fornecedor-icon"></span> </div> <div class="clearfix"> </div> </div> <div class="clearfix"> </div> </div> </div> </div> <!--advantages end here--> <div newsletter></div> </div>'),a.put("views/banner-slideshow.html",'<!--banner  start hwew--> <div class="banner" ng-controller="SliderSlickCtrl"> <div class="container"> <div class="banner-main"> <script type="text/ng-template" id="tpl2.html"><div class="{{slide.class}}">\n          <h3>{{ slide.label }}</h3>\n        </div></script> <slick class="slider" settings="slickConfig" ng-if="slickConfigLoaded" dots="true"> <div ng-repeat="slide in slides track by $index"> <div class="" ng-include="\'tpl2.html\'"></div> </div> </slick> </div> </div> </div> <!--BANNER END HERE-->'),a.put("views/banner.html",'<!--banner  start here--> <div class="banner-cropped"> <div class="container"> <div class="banner-cropped-main"> <!--<h3>{{view | translate}}</h3>--> <!--<span ng-if="!!subview">--> <!--<a href="subview.path">--> <!--{{subview.text | translate}}--> <!--</a>--> <!--</span>--> </div> </div> </div> <!--BANNER END HERE-->'),a.put("views/contact.html",'<div class="contact-container"> <div banner view="\'CONTACT\'"></div> <div class="contact" id="contact"> <div class="container"> <div class="contact-main"> <!--<div class="contact-top">--> <!--<h2>{{\'CONTACT_US\' | translate}}</h2>--> <!--</div>--> <div class="contact-bottom"> <div class="col-md-6 contact-left"> <form action="#" method="post"> <p>{{\'YOUR_NAME\' | translate}}</p> <input type="text" placeholder="" name="Your Name" required> <p>{{\'YOUR_EMAIL\' | translate}}</p> <input type="text" placeholder="" name="Your Email"> <p>{{\'YOUR_MESSAGE\' | translate}}</p> <textarea placeholder="" name="Your Message">  </textarea> <input type="submit" value="{{\'SUBMIT\' | translate}}"> </form> </div> <div class="col-md-6 contact-right"> <h4>{{\'CONTACT_INFO\' | translate}}</h4> <p> Rua S. João Evangelista, 1322<br> 4595-077 Eiriz <br> Paços de Ferreira - Portugal </p> <ul> <li><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>41.309508 | -8.376839</li> <li><span class="glyphicon glyphicon-phone" aria-hidden="true"></span>+00351 918 642 711</li> <li><span class="glyphicon glyphicon-phone" aria-hidden="true"></span>+00352 621 765 499</li> <li><a href="mailto:kubitus.rms@gmail.com"><span class="glyphicon glyphicon-envelope" aria-hidden="true"> </span> kubitus.rms@gmail.com</a></li> </ul> </div> <div class="clearfix"> </div> </div> </div> </div> </div> <!--map start here--> <div class="map"> <div class="container"> <div class="map-main"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.9708486751924!2d-8.379014584920986!3d41.30949777927137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24f347034f1f03%3A0xe79b8f478d16db6e!2sR.+de+S%C3%A3o+Jo%C3%A3o+Evangelista+1322%2C+Eiriz!5e0!3m2!1spt-PT!2spt!4v1479071489796" width="570" height="350" frameborder="0" style="border:0" allowfullscreen></iframe> </div> </div> </div> <!--map end here--> </div>'),a.put("views/footer.html",'<!--footer start here--> <div class="footer"> <div class="container"> <div class="footer-wthree"> <div class="col-md-4 footer-grid"> <h4>{{\'INFORMATION\' | translate}}</h4> <p> Rua S. João Evangelista, 1322 <br> 4595-077 Eiriz <br> Paços de Ferreira - Portugal</p> </div> <div class="col-md-4 footer-grid"> <div class="ftr-icons"> <div class="ftr-iblock"> <span class="glyphicon glyphicon-map-marker"> </span> </div> <div class="ftr-text"> <p>41.309508 | -8.376839</p> </div> <div class="clearfix"> </div> </div> <div class="ftr-icons"> <div class="ftr-iblock"> <span class="glyphicon glyphicon-earphone"> </span> </div> <div class="ftr-text"> <p>+00351 918 642 711</p> </div> <div class="clearfix"> </div> </div> <div class="ftr-icons"> <div class="ftr-iblock"> <span class="glyphicon glyphicon-earphone"> </span> </div> <div class="ftr-text"> <p>+00352 621 765 499</p> </div> <div class="clearfix"> </div> </div> <div class="ftr-icons"> <div class="ftr-iblock"> <span class="glyphicon glyphicon-envelope"> </span> </div> <div class="ftr-text"> <p><a href="mailto:kubitus.rms@gmail.com">kubitus.rms@gmail.com</a></p> </div> <div class="clearfix"> </div> </div> </div> <div class="col-md-4 footer-grid"> <h5>{{\'FOLLOW\' | translate}}</h5> <ul class="ftr-social-icons"> <li><a class="fb" href="#"></a> </li> </ul> </div> <div class="clearfix"> </div> </div> </div> </div> <!--footer end here-->'),a.put("views/gallery.html",'<div banner view="\'GALLERY\'"></div> <div class="gallery-container"> <div main-gallery></div> </div>'),a.put("views/gallery_page.html",'<div banner view="\'GALLERY\'"></div> <!--page gallery start here--> <div class="page-gallery container"> <div page-gallery></div> </div> <!--page gallery end here-->'),a.put("views/gallery_product.html",'<div banner view="\'GALLERY\'"></div> <!--product gallery start here--> <div class="product-gallery container"> <div product-gallery></div> </div> <!--product gallery end here-->'),a.put("views/home.html",'<div banner-slideshow></div> <!--creative start here--> <div class="creative"> <div class="container"> <div class="creative-main"> <div class="col-md-6 creative-left"> <div class="above-creative left"> <img src="images/main/pic2.f169dfe0.png" alt="" class="img-responsive"> </div> <div class="above-creative right"> <img src="images/main/pic1.df83d6bd.png" alt="" class="img-responsive"> </div> </div> <div class="col-md-6 creative-right"> <h4>{{\'MAIN_HOME.CUSTOMIZED_SOLUTIONS\' | translate}}</h4> <p>{{\'MAIN_HOME.SOLUTIONS_DESCRIPTION\' | translate}}</p> </div> <div class="clearfix"> </div> </div> </div> </div> <!--creative end here--> <!--welcome start here--> <div class="welcome agileits"> <div class="container"> <div class="welcome-main"> <div class="welcome-top"> <h4>{{\'MAIN_HOME.WELCOME.IMAGINE\' | translate}}</h4> <p>{{\'MAIN_HOME.WELCOME.DESCRIPTION\' | translate}}</p> </div> <div class="welcome-bottom"> <div class="gallery-container-home"> <div main-gallery></div> </div> <div class="clearfix"> </div> </div> </div> </div> </div> <!--welcoome end here--> <!--work start here--> <div class="work"> <div class="container"> <div class="work-main"> <h3>{{\'MAIN_HOME.WORK.IMPRESSED\' | translate}}</h3> <div class="work-btns"> <a href="#/contact">{{\'MAIN_HOME.WORK.GET_IN_TOUCH\' | translate}}</a> </div> </div> </div> </div> <!--work end here--> <!--look back to our history--> <div class="history"> <div class="container"> <div class="history-main"> <div class="history-top"> <h3>{{\'MAIN_HOME.HISTORY.TITLE\' | translate}}</h3> </div> <div class="history-bottom"> <span class="devide-line"> </span> <div class="history-block"> <div class="changer-left histo-agile"> <div class="hist-date-strip"> <div class="hist-date"> <h4>18 SEP</h4> </div> <div class="hist-text"> <a href="single.html"><h5>sint occaecat cupidatat non</h5></a> </div> <div class="clearfix"> </div> </div> <div class="history-info"> <div class="history-info-left"> <a href="single.html"><img src="images/main/s1.c94ea366.jpg" alt="" class="img-responsive"></a> </div> <div class="history-info-right"> <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p> </div> <div class="clearfix"> </div> </div> <div class="gd-tl-tip"> </div> </div> <div class="clearfix"> </div> <div class="ch-bott1"> <span class="botted"> </span> </div> </div> <div class="history-block-snd"> <div class="changer-right-snd"> <div class="changer-right-snd-strip"> <div class="changer-right-snd-text"> <a href="single.html"><h5>sint occaecat cupidatat non</h5></a> </div> <div class="changer-right-snd-date"> <h4>30 JUL</h4> </div> <div class="clearfix"> </div> </div> <div class="hist-gallery"> <div class="hist-gall-grid"> <a href="single.html"><img src="images/main/s6.886b8f01.jpg" alt="" class="img-responsive"></a> </div> <div class="hist-gall-grid"> <a href="single.html"><img src="images/main/s2.899186f8.jpg" alt="" class="img-responsive"></a> </div> <div class="hist-gall-grid"> <a href="single.html"><img src="images/main/s3.208fe098.jpg" alt="" class="img-responsive"></a> </div> <div class="hist-gall-grid"> <a href="single.html"><img src="images/main/s4.f6b357c7.jpg" alt="" class="img-responsive"></a> </div> <div class="clearfix"> </div> </div> <div class="gd-tl-tip2"> </div> </div> <div class="clearfix"> </div> <div class="ch-bott1 bott-w3"> <span class="botted"> </span> </div> </div> <div class="history-block"> <div class="changer-left"> <div class="hist-date-strip"> <div class="hist-date"> <h4>10 JAN</h4> </div> <div class="hist-text"> <a href="single.html"><h5>sint occaecat cupidatat non</h5></a> </div> <div class="clearfix"> </div> </div> <div class="history-info"> <div class="history-info-left"> <a href="single.html"><img src="images/main/s5.61b33a7c.jpg" alt="" class="img-responsive"></a> </div> <div class="history-info-right"> <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p> </div> <div class="clearfix"> </div> </div> <div class="gd-tl-tip3"> </div> </div> <div class="clearfix"> </div> <div class="ch-bott1"> <span class="botted"> </span> </div> </div> </div> <div class="clearfix"> </div> </div> </div> </div> <!--look back to our history--> <div newsletter></div>'),a.put("views/language.html",'<div class="modal fade"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-body"> <span class="logo"></span> <button type="button" class="close" ng-click="close()" data-dismiss="modal" aria-hidden="true">&times;</button> <div class="languages-list"> <span class="languages-list-sub"> <span class="pt" ng-click="close(\'pt\')" data-dismiss="modal" aria-hidden="true"> </span> <span class="fr" ng-click="close(\'fr\')" data-dismiss="modal" aria-hidden="true"> </span> <span class="en" ng-click="close(\'en\')" data-dismiss="modal" aria-hidden="true"> </span> </span> </div> </div> </div> </div> </div>'),a.put("views/main-gallery.html",'<!--main gallery start here--> <div class="main-gallery container" ng-controller="MainGalleryCtrl"> <div ng-repeat="galleryItem in mainGallery"> <a href="#/gallery/{{galleryItem.url}}"> <div class="col-md-3 col-sm-6 col-xs-12 main-gallery-item-outer"> <div class="inner-box"> <figure class="image-box"> <img src="../images/gallery/{{galleryItem.mainImage}}" alt=""> <!--Overlay Box--> <div class="overlay-one"> <div class="overlay-inner"> <div class="content"></div> </div> </div> </figure> <!--Caption Box--> <div class="caption-box-two"> <h3>{{ \'GALLERY_PAGE.\' + galleryItem.name | translate}}</h3> </div> </div> </div> </a> </div> </div> <!--main gallery end here-->'),a.put("views/main-menu.html",'<!--header start here--><!-- NAVBAR ================================================== --> <div class="header w3l" ng-controller="MenuCtrl"> <div class="fixed-header"> <div class="navbar-wrapper"> <div class="container"> <nav class="navbar navbar-inverse navbar-static-top"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div id="navbar" class="navbar-collapse collapse"> <nav class="cl-effect-3" id="cl-effect-3"> <ul class="nav navbar-nav"> <li><a class="nav-item{{ isActive(\'home\') ? \' active\' : \'\' }}" href="#/home">{{\'HOME\' | translate}}</a></li> <li><a class="nav-item{{ isActive(\'about\') ? \' active\' : \'\' }}" href="#/about">{{\'ABOUT\' | translate}}</a></li> <li><a class="nav-item{{ isActive(\'gallery\') ? \' active\' : \'\' }}" href="#/gallery">{{\'GALLERY\' | translate}}</a></li> <li><a class="nav-item{{ isActive(\'contact\') ? \' active\' : \'\' }}" href="#/contact">{{\'CONTACT\' | translate}}</a></li> </ul> </nav> </div> <div class="clearfix"> </div> </nav> </div> <div class="clearfix"> </div> </div> </div> </div> <!--header end here-->'),a.put("views/newsletter.html",'<!--news letter stat here--> <div class="newsletter"> <div class="container"> <div class="newsletter-main"> <h5>Subscribe For Our Newsletter</h5> <div class="newsletter-w3"> <form action="#" method="post"> <input type="text" placeholder="Enter Your Email Here" name="Enter Your Email Here" required> <input type="submit" value="Send"> </form> </div> <div class="clearfix"> </div> </div> </div> </div> <!--newletter end here-->'),a.put("views/page-gallery.html",'<!--product gallery start here--> <div class="gallery-page container" ng-controller="PageGalleryCtrl"> <div ng-if="galleryPageFounded"> <div class="main-title"> <h3 class="main-gallery-title"> {{ \'GALLERY_PAGE.\' + galleryPage.name | translate}} </h3> </div> <div class="filters text-center"> <ul class="filter-tabs filter-btns clearfix"> <li class="filter all-products {{selectedItem == \'all-products\' ? \'active\' : \'\'}}" data-role="button" data-filter="all" ng-click="events.selectItem(\'all-products\')">{{ \'GALLERY_PAGE.ALL\' | translate}}</li> <li class="filter {{galleryItemKey}} {{selectedItem == galleryItemKey ? \'active\': \'\'}}" ng-repeat="(galleryItemKey, galleryPageItem) in galleryPage.category" data-role="button" ng-click="events.selectItem(galleryItemKey)" data-filter="{{ galleryPageItem.filter }}">{{ galleryPageItem.name }}</li> </ul> </div> <div class="filter-list" masonry="{ transitionDuration: \'0.5s\'}" reload-on-resize reload-on-show> <div ng-repeat="galleryPageItem in allGalleryItems | filter: (selectedItem === \'all-products\') ? undefined : { type: selectedItem }" masonry-brick class="col-lg-3 col-md-4 col-sm-6 col-xs-12 masonry-brick page-gallery-item-outer {{galleryPageItem.type}}"> <a href="#/gallery/{{galleryPage.url}}/{{galleryPageItem.type}}"> <div class="inner-box"> <figure class="image-box"> <img src="../images/{{galleryPageItem.image}}" alt=""> </figure> <!--Overlay Box--> <div class="overlay-one"> <div class="overlay-inner"> <div class="content"> <span class="zoom-in"></span> </div> </div> </div> <!--Caption Box--> <div class="caption-box-one"> <h3>{{ galleryPage.category[galleryPageItem.type].name }}</h3> </div> </div> </a> </div> </div> </div> <div ng-if="!galleryPageFounded"> <div page-not-founded></div> </div> </div> <!--product gallery end here-->'),a.put("views/page-not-founded.html",'<div class="page-not-found-container"> <div class="container"> <h3>404</h3> <h4>{{\'PAGE_NOT_FOUND\' | translate }} </h4> <a class="go-back red-button" href="#/home"> {{\'GO_BACK_HOME\' | translate }} </a> </div> </div>'),a.put("views/product-gallery.html",'<!--product gallery start here--> <div class="gallery-product container" ng-controller="ProductGalleryCtrl"> </div> <!--product gallery end here-->'),a.put("views/top-header.html",'<!--header-top start here--> <div class="top-header" ng-controller="LanguageCtrl" ng-init="myLanguage()"> <div class="container"> <div class="top-header-main"> <div class="col-md-8"> <h1><a href="#/home" class="logo"></a></h1> </div> <div class="col-md-4 top-social"> <ul class="top-social-list"> <li class="top-social-nav"><a class="top-social-anchor" href="#"><span class="fb"> </span></a></li> <li class="top-social-nav"><a class="top-social-anchor" ng-click="changeLanguage(\'pt\')"><span class="pt{{ isLanguageSelected(\'pt\') ? \' selected\' : \'\' }}"> </span></a></li> <li class="top-social-nav"><a class="top-social-anchor" ng-click="changeLanguage(\'fr\')"><span class="fr{{ isLanguageSelected(\'fr\') ? \' selected\' : \'\' }}"> </span></a></li> <li class="top-social-nav"><a class="top-social-anchor" ng-click="changeLanguage(\'en\')"><span class="en{{ isLanguageSelected(\'en\') ? \' selected\' : \'\' }}"> </span></a></li> </ul> </div> <div class="clearfix"> </div> </div> </div> </div> <!--header-top end here-->')}]);