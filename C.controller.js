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
        var oModel = new JSONModel({
          myKey: "saxena2",
          myValue: "saxena",
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
        this.getView().setModel(oModel);
      },

      onChange: function (oEvent) {
        const params = oEvent.getParameters();
        console.warn("Change event called", params);

        // this.getView()
        //   .getModel("myModel")
        //   .setData({
        //     myValue: params.newValue,
        //     items: [
        //       {
        //         key: "ekansh2",
        //         name: "ekansh",
        //       },
        //       {
        //         key: "saxena2",
        //         name: "saxena",
        //       },
        //     ]
        //   });
      },
    });
  }
);
