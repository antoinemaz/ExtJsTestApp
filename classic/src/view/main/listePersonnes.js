var myStore = Ext.create('Ext.data.Store',{
    model: 'ExtJsAppTest.model.PersonneModel',
    alias: 'store.personneStore',
    xtype: 'personneStore',
         proxy: {
             type: 'rest',
             url: 'http://localhost:8080/personne-rest/personnes',
             useDefaultXhrHeader : false,
             cors: true,
             reader: {
                 type: 'json',

             }
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

myStore.load({
    callback : function(records) {
        console.log(records);
    }
});

Ext.define('ExtJsAppTest.view.main.listePersonnes', {
	extend : 'Ext.grid.Panel',
    xtype : "listePersonnes",
    title: 'Liste des personnes',
    height: 300,
    width: 300,
    bodyPadding: 10,
    store: myStore,
    columns: [
              { text: 'id',  dataIndex: 'id', width: 100 },
              { text: 'nom',  dataIndex: 'nom', width: 100 },
              { text: 'prenom',  dataIndex: 'prenom', width: 100 },
              { text: 'age',  dataIndex: 'age', width: 100 }
          ]
});
