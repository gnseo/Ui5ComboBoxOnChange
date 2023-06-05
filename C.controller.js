sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, JSONModel, Fragment, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sap.m.sample.InputAssisted.C", {
      onInit: function () {
        var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/products.json"));
        // The default limit of the model is set to 100. We want to show all the entries.
        oModel.setSizeLimit(100000);
        this.getView().setModel(oModel);
        this.getView().setModel(new JSONModel(), "myModel");
        this.getView()
          .getModel("myModel")
          .setData({
            items: [
              {
                key: "ekansh2",
                name: "ekansh",
              },
              {
                key: "saxena2",
                name: "saxena",
              },
            ]
          });
      },

      onChange: function (oEvent) {
        console.warn("Change event called", oEvent.getParameters());
      },
    });
  }
);
