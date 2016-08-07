Ext.define('ExtJsAppTest.model.PersonneModel', {
    extend: 'Ext.data.Model',
    fields: [
             {name: 'id',  type: 'int'},
             {name: 'nom',   type: 'string'},
             {name: 'prenom', type: 'string'},
             {name: 'age', type: 'int'}
         ]
});