Ext.application({
    name: 'TransitoDF',

    controllers: ['PrincipalController', 'ArticulosController', 'CalcMultaController', 'DepositosController'],
    views: ['Main', 'Principal'],
    stores: ['Reglamento', 'Depositos', 'Consejos'],
    models: ['Articulo', 'Deposito', 'Consejo'],

    launch: function() {
        Ext.Viewport.add(Ext.create('TransitoDF.view.Main'));
    },

    verMapa: function() { 
        Ext.getCmp('mainView').push({
            xtype: 'mapadepositos'
        });
    }
});
