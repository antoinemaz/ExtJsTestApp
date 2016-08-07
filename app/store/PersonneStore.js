Ext.define('ExtJsAppTest.store.PersonneStore', {
    extend: 'Ext.data.Store',
    model: 'ExtJsAppTest.model.PersonneModel',
    alias: 'store.personneStore',
    xtype: 'personneStore',
         proxy: {
             type: 'ajax',
             url: 'http://localhost:8080/personne-rest/personnes',
             reader: {
                 type: 'json',
                 rootProperty: 'personnes'
             },
             autoLoad: true
         }
         
//         data: { 
//        	 items: [
//             { id: '1' },
//         ]},
         
//         proxy: {
//             type: 'memory',
//             reader: {
//                 type: 'json',
//                 rootProperty: 'items'
//             }
//         }
    
});