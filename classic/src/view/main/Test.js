/**
 * Created by Antoine on 7/15/2016.
 */
var childPanel1 = Ext.create('Ext.panel.Panel', {
    title: '',
    html: '<span>Je suis un Header</span>',
    width:'100%',
    height: 100
});

var childPanel3 = Ext.create('Ext.panel.Panel', {
	html: '<span>Je suis un Footer</span>',
	width:'100%',
	height: 100
});

//var childPanel2 = Ext.create('Ext.panel.Panel', {
////  html: 'Contenu de la page',
//    items: [{
//        xtype: 'ajoutPersonne'
//    }]
//});

var menu = Ext.create('Ext.tab.Panel', {
	fullscreen: true,
	tabPosition: 'left',
	tabRotation: 0,
	height: 500,
	autoScroll: true,
    plugins: 'responsive',
    xtype : 'mypanel',
    responsiveConfig: {
          landscape: {
                  tabPosition: 'left'
          },
          portrait: {
                  tabPosition: 'top'
          }
    },
    requires: [
               'ExtJsAppTest.view.main.listePersonnes'
           ],
    items: [
            {
                title: 'Liste des personnes',
                xtype: 'listePersonnes'
            },
            {
                title: 'Ajout d\'une personne',
                xtype: 'ajoutPersonne'
            }
        ]
});

Ext.define('ExtJsAppTest.view.main.Test', {
    extend: 'Ext.container.Viewport',
//    plugins: 'responsive',
//    responsiveConfig: {
//            landscape: {
//                    tabPosition: 'left'
//            },
//            portrait: {
//                    tabPosition: 'top'
//            }
//    },
    
//    layout: {                        
//        type: 'vbox',
//        align: 'center'
//    },
    
    
    controller: 'testController',
    
    items: [childPanel1, menu, childPanel3]
    
});