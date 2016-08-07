Ext.define('ExtJsAppTest.view.main.ajoutPersonne', {
	extend : 'Ext.form.Panel', 
    title: 'Formulaire d\'ajout d\'une personne',
    height: 300,
    width: 300,
    bodyPadding: 10,
    defaultType: 'textfield',
    xtype : "ajoutPersonne",
    controller: 'testController',
    items: [
        {
            fieldLabel: 'Prénom',
            name: 'prenom'
        },
        {
            fieldLabel: 'Nom',
            name: 'nom'
        },
        {
        	xtype: 'numberfield',
            fieldLabel: 'Age',
            name: 'age'
        },
        {
        	xtype: 'button',
            text: 'Enregistrer',
            listeners: {
          	  click : 'addPerson',
          	  args: ['foo']
            }
        }
        
    ],

    
    afterShow : function() {
    	this.callParent(arguments);
    }
    
});