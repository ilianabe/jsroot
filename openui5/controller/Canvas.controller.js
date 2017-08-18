sap.ui.define([
   'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
   'sap/ui/model/json/JSONModel',
   'sap/m/MessageToast',
   'sap/m/Dialog',
   'sap/m/List',
   'sap/m/StandardListItem',
   'sap/m/Button',
   'sap/ui/layout/SplitterLayoutData',
   'sap/ui/unified/Menu',
   'sap/ui/unified/MenuItem'

], function (jQuery, Controller, JSONModel, MessageToast, Dialog, List, StandardListItem, Button, SplitterLayoutData, Menu, MenuItem) {
	"use strict";

	var CController = Controller.extend("sap.ui.jsroot.controller.Canvas", {
		onInit : function() {
		   this._Page = this.getView().byId("CanvasMainPage");

         var model = new JSONModel({ GedIcon: "" });
         this.getView().setModel(model);

         var canvp = this.getCanvasPainter(true);

         if (canvp) canvp.canvas_controller = this;

		   // this.toggleGedEditor();
		},

		getCanvasPainter : function(also_without_websocket) {
         var elem = this.getView().byId("jsroot_canvas");

         var p = elem ? elem.getController().canvas_painter : null;

         return (p && (p._websocket || also_without_websocket)) ? p : null;
		},

		showMethodsDialog : function(method, call_back) {
		   var that = this;
         this.pressDialog = new Dialog({
            title: 'Execute',
            content: new List({
              items: {
                 path: '/MethodArgs',
                 template: new StandardListItem({
                    title: "{Name}",
                    counter: "{Value}"
                 })
              }
             }),
             beginButton: new Button({
               text: 'Cancel',
               press: function () {
                  that.pressDialog.close();
                  that.pressDialog.destroy();
               }
             }),
             endButton: new Button({
               text: 'Ok',
               press: function () {
                  that.pressDialog.close();
                  that.pressDialog.destroy();
                  JSROOT.CallBack(call_back);
               }
             })
         });

         this.getView().getModel().setProperty("/MethodArgs", [ {Name:"abc", Value:10}, { Name: "zdf", Value: 20} ]);

         //to get access to the global model
         this.getView().addDependent(this.pressDialog);

         this.pressDialog.open();
		},

		onFileMenuAction : function (oEvent) {
         //var oItem = oEvent.getParameter("item"),
         //    sItemPath = "";
         //while (oItem instanceof sap.m.MenuItem) {
         //   sItemPath = oItem.getText() + " > " + sItemPath;
         //   oItem = oItem.getParent();
         //}
         //sItemPath = sItemPath.substr(0, sItemPath.lastIndexOf(" > "));

		   var p = this.getCanvasPainter();
		   if (!p) return;

		   var name = oEvent.getParameter("item").getText();

         switch (name) {
            case "Close canvas": p.OnWebsocketClosed(); p.CloseWebsocket(true); break;
            case "Interrupt": p.SendWebsocket("INTERRUPT"); break;
            case "Quit ROOT": p.SendWebsocket("QUIT"); break;
            case "Canvas.png":
            case "Canvas.jpeg":
            case "Canvas.svg":
               p.SaveCanvasAsFile(name);
               break;
         }

         MessageToast.show("Action triggered on item: " + name);
		},

		onCloseCanvasPress : function() {
		   var p = this.getCanvasPainter();
         if (p) {
            p.OnWebsocketClosed();
            p.CloseWebsocket(true);
         }
		},

		onInterruptPress : function() {
		   var p = this.getCanvasPainter();
         if (p) p.SendWebsocket("INTERRUPT");
		},

		onQuitRootPress : function() {
		   var p = this.getCanvasPainter();
         if (p) p.SendWebsocket("QUIT");
		},

		ShowCanvasStatus : function (text1,text2,text3,text4) {
		   this.getView().byId("FooterLbl1").setText(text1);
		   this.getView().byId("FooterLbl2").setText(text2);
		   this.getView().byId("FooterLbl3").setText(text3);
		   this.getView().byId("FooterLbl4").setText(text4);
		},

		SelectPainter : function(painter, pnt) {
		   var obj = painter.GetObject();

		   var split = this.getView().byId("MainAreaSplitter");

         if (split) {
	          var area0 = split.getContentAreas()[0];

	          // if (area0) area0.setText("select " + (obj ? obj._typename : painter.GetTipName()));
	       }

         console.log('Select painter', obj ? obj._typename : painter.GetTipName());
		},

		showGeEditor : function(new_state) {
         var current_state = !! this.getView().getModel().getProperty("/GedIcon");

         if (current_state != new_state) this.toggleGedEditor();
		},

		toggleGedEditor : function() {

	      var new_state = ! this.getView().getModel().getProperty("/GedIcon");

         this.getView().getModel().setProperty("/GedIcon", new_state ? "sap-icon://accept" : "");

         var split = this.getView().byId("MainAreaSplitter"),
             p = this.getCanvasPainter(true);

         if (!p || !split) return;

         if (new_state) {
            var oLd = new SplitterLayoutData({
               resizable : true,
               size      : "250px",
               maxSize   : "500px"
            });

            var oContent = sap.ui.xmlview({
               viewName : "sap.ui.jsroot.view.Ged",
               layoutData: oLd
            });

            split.insertContentArea(oContent, 0);

            var ctrl = oContent.getController();
            p.SelectObjectPainter = ctrl.onObjectSelect.bind(ctrl, p);

            ctrl.onObjectSelect(p,p);

         } else {
            split.removeContentArea(split.getContentAreas()[0]);
            delete p.SelectObjectPainter;
         }
		},

		onViewMenuAction : function (oEvent) {
         var p = this.getCanvasPainter(true);
         if (!p) return;

         var item = oEvent.getParameter("item"),
             name = item.getText();

         var new_state = !item.getIcon();

         switch (name) {
            case "Editor":
               this.toggleGedEditor();
               return;
            case "Toolbar":
               this._Page.setShowSubHeader(new_state)
               break;
            case "Event statusbar":
               this._Page.setShowFooter(new_state);
               if (new_state) {
                  p.ShowStatus = this.ShowCanvasStatus.bind(this);
               } else {
                  delete p.ShowStatus;
               }
               break;
            case "Tooltip info": p.SetTooltipAllowed(new_state); break;
            default: return;
         }

         item.setIcon(new_state ? "sap-icon://accept" : "");

         // MessageToast.show("Action triggered on item: " + name);
		}

	});


	return CController;

});
