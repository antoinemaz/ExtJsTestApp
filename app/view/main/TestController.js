/**
 * Created by Antoine on 7/16/2016.
 */
Ext.define('ExtJsAppTest.view.main.TestController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.testController',
    
    addPerson : function(test){
    	var t = Ext.ComponentQuery.query('ajoutPersonne')[0].getValues();
    	console.log(t);
    	
    	Ext.Ajax.request({
    	     url: 'http://localhost:8080/personne-rest/personnes/add',
    	     method: 'POST',
             cors: true,
             useDefaultXhrHeader : false,
    	     headers: { 
    	         'Content-Type': 'application/json',
    	         'Access-Control-Allow-Origin': '*'
    	     },
    	     jsonData: {
    	         id: null,
    	         nom : t.nom,
    	         prenom: t.prenom,
    	         age: t.age
    	     },

    	     success: function(response, opts) {
    	         console.log("personne créée !");
    	     	
    	     	var t = Ext.ComponentQuery.query('listePersonnes')[0];
    	     	t.getStore().load();
    	     	t.up().setActiveItem(0);
    	     },

    	     failure: function(response, opts) {
    	         console.log('server-side failure with status code ' + response.status);
    	     }
    	 });
    }
});