/* ========================================================================
 * Copyright 2014 monitor
 *
 * Licensed under the MIT, The MIT License (MIT)
 * Copyright (c) 2014 monitor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 * ========================================================================


Source generated by CrudMaker version 1.0.0.201408112050

*/
define(['model/_memberModel'], function() {
    App.Model.MemberModel = App.Model._MemberModel.extend({

 	validate: function(attrs,options){
            var validationMessage = "";
            if(!attrs.name||!attrs.firstName || !attrs.lastName 
                    || !attrs.docNumber ){
                validationMessage += "No puede haber campos vacios.\n";
            }
            var fecha = attrs.birthDate.split("/");
            var anio = fecha[2];
            var act = new Date();
            if (parseInt(anio)-act.getFullYear() > 100){
                validationMessage += "Edad invalida.\n";
            }
            if(parseInt(fecha[0]) >= act.getDay() && parseInt(fecha[1])>=act.getMonth()+1 && parseInt(fecha[2])>=act.getFullYear()){
                validationMessage += "Fecha invalida.\n";
            }
            var doc = attrs.docNumber + "";
            if(doc.length < 5){
                validationMessage += "El n�mero de documento debe tener 5 caracteres minimo.\n";
            }
            if(attrs.documenttypeID === "None"){
                validationMessage += "El tipo de documento debe ser especificado.\n";
            }
            if(validationMessage.length>0){
               return validationMessage;
            }
        }

    });

    App.Model.MemberList = App.Model._MemberList.extend({
        model: App.Model.MemberModel
    });

    return  App.Model.MemberModel;

});