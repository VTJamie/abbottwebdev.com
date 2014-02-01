(function($)
{

    var AMC = {
        REQUEST_TYPE_IDENTIFIER: "REQUEST_TYPE_IDENTIFIER",
        REQUEST_TYPE_SUB_IDENTIFIER: "REQUEST_TYPE_SUB_IDENTIFIER",
        REQUEST_OBJECT_NAME: "REQUEST_OBJECT_NAME",
        REQUEST_DATA_OBJECT_ID: "REQUEST_DATA_OBJECT_ID",
        REQUEST_FIELD_ACTION_PROPERTY_NAME: "REQUEST_FIELD_ACTION_PROPERTY_NAME",
        REQUEST_MAIN_OBJECT_ID: "REQUEST_MAIN_OBJECT_ID",
        REQUEST_MAIN_OBJECT_FIELD_NAME: "REQUEST_MAIN_OBJECT_FIELD_NAME",
        REQUEST_COMPLEX_ITEM_ID: "REQUEST_COMPLEX_ITEM_ID",
        REQUEST_GRID_VIEW_ITEM_ID: "REQUEST_GRID_VIEW_ITEM_ID",
        CONSTANTS: "CONSTANTS",
        REQUEST_TYPE_FIELD_CONSTANTS: "REQUEST_TYPE_FIELD_CONSTANTS",
        REQUEST_TYPE_FULL_DEFINITION: "REQUEST_TYPE_FULL_DEFINITION",
        REQUEST_TYPE_REFRESH_CONTROLS: "REQUEST_TYPE_REFRESH_CONTROLS",
        REQUEST_TYPE_FIELD_REQUEST: "REQUEST_TYPE_FIELD_REQUEST",
        REQUEST_TYPE_PERFORM_ACTION: "REQUEST_TYPE_PERFORM_ACTION",
        REQUEST_TYPE_FIELD_SUBMIT: "REQUEST_TYPE_FIELD_SUBMIT",
        REQUEST_TYPE_FIELD_CANCEL: "REQUEST_TYPE_FIELD_CANCEL",
        REQUEST_TYPE_FIELD_COMPLEX_ITEM_LIST_NEW_ITEM: "REQUEST_TYPE_FIELD_COMPLEX_ITEM_LIST_NEW_ITEM",
        REQUEST_TYPE_FIELD_COMPLEX_ITEM_LIST_EDIT: "REQUEST_TYPE_FIELD_COMPLEX_ITEM_LIST_EDIT",
        REQUEST_TYPE_FIELD_COMPLEX_ITEM_LIST_SAVE_ITEM: "REQUEST_TYPE_FIELD_COMPLEX_ITEM_LIST_SAVE_ITEM",
        REQUEST_TYPE_FIELD_COMPLEX_ITEM_LIST_REMOVE_ITEM: "REQUEST_TYPE_FIELD_COMPLEX_ITEM_LIST_REMOVE_ITEM",
        REQUEST_TYPE_SET_FILE: "REQUEST_TYPE_SET_FILE",
        REQUEST_TYPE_GET_FILE: "REQUEST_TYPE_GET_FILE",
        REQUEST_TYPE_MENU: "REQUEST_TYPE_MENU",
        REQUEST_TYPE_LOGOUT: "REQUEST_TYPE_LOGOUT",
        REQUEST_TYPE_LANDING_NAME: "REQUEST_TYPE_LANDING_NAME",
        REQUEST_TYPE_ACTION: "REQUEST_TYPE_ACTION",
        REQUEST_TYPE_GRID_DELETE: "REQUEST_TYPE_GRID_DELETE",
        REQUEST_TYPE_GRID_RELOAD: "REQUEST_TYPE_GRID_RELOAD",
        SESSION_VALID: "SESSION_VALID",
        ID: "ID",
        OBJECT_NAME: "OBJECT_NAME",
        DISPLAY_NAME: "DISPLAY_NAME",
        LABEL: "LABEL",
        CURRENT_VALUE: "CURRENT_VALUE",
        MAX_LENGTH: "MAX_LENGTH",
        EDITABLE: "EDITABLE",
        REQUIRED: "REQUIRED",
        CONTROL_ARRAY: "CONTROL_ARRAY",
        FIELD_PREFIX: "FIELD_PREFIX",
        ACTION_PREFIX: "ACTION_PREFIX",
        PERSISTED_PREFIX: "PERSISTED_PREFIX",
        REFRESH_FIELD_PREFIX: "REFRESH_FIELD_PREFIX",
        PERSIST: "PERSIST",
        ERRORS: "ERRORS",
        ERROR_MESSAGE: "ERROR_MESSAGE",
        ERROR_FIELD: "ERROR_FIELD",
        CONTROL_TYPE: "CONTROL_TYPE",
        SELECT_ITEMS: "SELECT_ITEMS",
        SELECT_ITEM_VALUE: "SELECT_ITEM_VALUE",
        SELECT_ITEM_LABEL: "SELECT_ITEM_LABEL",
        SELECT_ITEM_IS_SELECTED: "SELECT_ITEM_IS_SELECTED",
        SELECT_DISPLAY_TYPE: "SELECT_DISPLAY_TYPE",
        MAX_FILE_SIZE: "MAX_FILE_SIZE",
        FILE_NAME: "FILE_NAME",
        ERROR: "ERROR",
        IS_VISIBLE: "IS_VISIBLE",
        CHANGE_TRIGGERS_REFRESH: "CHANGE_TRIGGERS_REFRESH",
        RESPONSE_BODY: "RESPONSE_BODY",
        RESPONSE_TYPE_IDENTIFIER: "RESPONSE_TYPE_IDENTIFIER",
        CONTROL_TYPE_TEXT: "CONTROL_TYPE_TEXT",
        CONTROL_TYPE_DATE: "CONTROL_TYPE_DATE",
        CONTROL_TYPE_SELECT: "CONTROL_TYPE_SELECT",
        CONTROL_TYPE_GRID: "CONTROL_TYPE_GRID",
        CONTROL_TYPE_BUTTON: "CONTROL_TYPE_BUTTON",
        CONTROL_TYPE_GROUP: "CONTROL_TYPE_GROUP",
        CONTROL_TYPE_COMPLEX_ITEM_LIST: "CONTROL_TYPE_COMPLEX_ITEM_LIST",
        CONTROL_TYPE_FILE: "CONTROL_TYPE_FILE",
        BUTTON_TYPE: "BUTTON_TYPE",
        GRID_VIEW_CURRENT_PAGE: "GRID_VIEW_CURRENT_PAGE",
        GRID_VIEW_PAGE_SIZE: "GRID_VIEW_PAGE_SIZE",
        GRID_VIEW_TOTAL_NUMBER: "GRID_VIEW_TOTAL_NUMBER",
        GRID_VIEW_NUMBER_OF_PAGES: "GRID_VIEW_NUMBER_OF_PAGES",
        GRID_VIEW_NUMBER_OF_SUPPLIED_RECORDS: "GRID_VIEW_NUMBER_OF_SUPPLIED_RECORDS",
        GRID_VIEW_COLUMN_LIST: "GRID_VIEW_COLUMN_LIST",
        GRID_VIEW_COLUMN_NAME: "GRID_VIEW_COLUMN_NAME",
        GRID_VIEW_COLUMN_IS_VISIBLE: "GRID_VIEW_COLUMN_IS_VISIBLE",
        GRID_VIEW_DATA: "GRID_VIEW_DATA",
        GRID_VIEW_ROW_CELL_DATA_ARRAY: "GRID_VIEW_ROW_CELL_DATA_ARRAY",
        GRID_VIEW_GRID_DETAILS: "GRID_VIEW_GRID_DETAILS",
        GRID_VIEW_DELETE_ACTION: "GRID_VIEW_DELETE_ACTION",
        GRID_VIEW_RELOAD_REQUEST_PAGE: "GRID_VIEW_RELOAD_REQUEST_PAGE",
        GRID_VIEW_RELOAD_REQUEST_ROWS: "GRID_VIEW_RELOAD_REQUEST_ROWS",
        GRID_VIEW_RELOAD_REQUEST_SORT_NAME: "GRID_VIEW_RELOAD_REQUEST_SORT_NAME",
        GRID_VIEW_RELOAD_REQUEST_SORT_ORDER: "GRID_VIEW_RELOAD_REQUEST_SORT_ORDER",
        GRID_VIEW_COLUMN_TYPE: "GRID_VIEW_COLUMN_TYPE",
        GRID_VIEW_COLUMN_TYPE_DISPLAY: "GRID_VIEW_COLUMN_TYPE_DISPLAY",
        GRID_VIEW_COLUMN_TYPE_DELETE: "GRID_VIEW_COLUMN_TYPE_DELETE",


        MENU: "MENU",
        MENU_ARRAY: "MENU_ARRAY",
        MENU_ITEM_NAME: "MENU_ITEM_NAME",
        MENU_ITEM_SUB_LIST: "MENU_ITEM_SUB_LIST",
        MENU_ITEM_ACTION: "MENU_ITEM_ACTION",
        MENU_ITEM_TRANSFER_VALUES: "MENU_ITEM_TRANSFER_VALUES",
        MENU_ITEM_TRANSFER_VALUES_FIELD: "MENU_ITEM_TRANSFER_VALUES_FIELD",
        MENU_ITEM_TRANSFER_VALUES_VALUE: "MENU_ITEM_TRANSFER_VALUES_VALUE",
        ROOT_OBJECT: "ROOT_OBJECT",
        GROUP_ID: "GROUP_ID",
        GROUP_NAME: "GROUP_NAME",
        GROUP_TABLE_NUMBER_OF_COLUMNS: "GROUP_TABLE_NUMBER_OF_COLUMNS",
        GROUP_TYPE: "GROUP_TYPE",
        GROUP_TYPE_TABLE: "GROUP_TYPE_TABLE",
        GROUP_TYPE_COLLAPSIBLE: "GROUP_TYPE_COLLAPSIBLE",

        DATA_OBJECT_MENU_FIELD_DATA_COUPLINGS: "DATA_OBJECT_MENU_FIELD_DATA_COUPLINGS",
        DATA_OBJECT_MENU_FIELD_DATA_COUPLING_TARGET: "DATA_OBJECT_MENU_FIELD_DATA_COUPLING_TARGET",
        DATA_OBJECT_MENU_FIELD_DATA_COUPLING_SOURCE: "DATA_OBJECT_MENU_FIELD_DATA_COUPLING_SOURCE",

        DATA_OBJECT_MENU_FIELD_STATIC_COUPLINGS: "DATA_OBJECT_MENU_FIELD_STATIC_COUPLINGS",
        DATA_OBJECT_MENU_FIELD_STATIC_COUPLING_TARGET: "DATA_OBJECT_MENU_FIELD_STATIC_COUPLING_TARGET",
        DATA_OBJECT_MENU_FIELD_STATIC_COUPLING_VALUE: "DATA_OBJECT_MENU_FIELD_STATIC_COUPLING_VALUE",
        GRID_VIEW_DATA_OBJECT_LAUNCH: "GRID_VIEW_DATA_OBJECT_LAUNCH",
        GRID_VIEW_DATA_OBJECT_LAUNCH_OBJECT_NAME: "GRID_VIEW_DATA_OBJECT_LAUNCH_OBJECT_NAME",
        GRID_VIEW_DATA_OBJECT_LAUNCH_TARGET_FIELD: "GRID_VIEW_DATA_OBJECT_LAUNCH_TARGET_FIELD",
        COMPLEX_ITEM_BODY: "COMPLEX_ITEM_BODY",
        COMPLEX_ITEM_IDENTIFIER: "COMPLEX_ITEM_IDENTIFIER",
        IS_DIALOG: "IS_DIALOG",
        MAIN_REQUEST_OBJECT_ID: "MAIN_REQUEST_OBJECT_ID",
        MAIN_REQUEST_FIELD_NAME: "MAIN_REQUEST_FIELD_NAME",
        BUTTON_TYPE_SUBMIT: "BUTTON_TYPE_SUBMIT",
        BUTTON_TYPE_CANCEL: "BUTTON_TYPE_CANCEL",
        SELECT_DISPAY_TYPE_DROPDOWN: "SELECT_DISPAY_TYPE_DROPDOWN",
        SELECT_DISPAY_TYPE_MULTISELECT: "SELECT_DISPAY_TYPE_MULTISELECT",
        SELECT_DISPAY_TYPE_RADIO: "SELECT_DISPAY_TYPE_RADIO",
        SELECT_DISPAY_TYPE_CHECKBOX: "SELECT_DISPAY_TYPE_CHECKBOX",
        SELECT_ITEM_VALUE_SEPERATOR: "SELECT_ITEM_VALUE_SEPERATOR"
    };

    var C = {
        REQUEST_TYPE_IDENTIFIER: "r-1",
        REQUEST_TYPE_FIELD_CONSTANTS: "RC",
        CONSTANTS: "constants",
        amenginedata: 'amenginedata',
        controlmethods: "controlmethods",
        rootdefinition: "rootdefinition",
        controldefinition: "controldefinition",
        firstload: "firstload",
        menuitemdata: "menuitemdata"
    };
    var requests = {
        refreshrequest: function(control)
        {
            var $this = $(this);
            var curthis = this;
            var adata = $this.data(C.amenginedata);
            var rootdefinition = $(control).data(C.rootdefinition);
            var controldef = $(control).data(C.controldefinition);

            var postc = {};
            postc[adata.C[AMC.REQUEST_TYPE_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_REFRESH_CONTROLS];
            var responsebody = rootdefinition[adata.C[AMC.RESPONSE_BODY]];
            postc[adata.C[AMC.REQUEST_DATA_OBJECT_ID]] = responsebody[adata.C[AMC.ID]];
            postc[adata.C[AMC.REQUEST_OBJECT_NAME]] = responsebody[adata.C[AMC.OBJECT_NAME]];
            postc[adata.C[AMC.FIELD_PREFIX] + controldef[adata.C[AMC.ID]]] = $(control).data(C.controlmethods).getvalue.apply(control, []);
            postc[adata.C[AMC.REFRESH_FIELD_PREFIX] + controldef[adata.C[AMC.ID]]] = true;
            methods.postdata.apply(curthis, [postc, function(data)
            {
                var responsebody = data[adata.C[AMC.RESPONSE_BODY]];
                methods.updatecontroldefinitions.apply(curthis, [responsebody, rootdefinition]);
            } ]);
        },
        reloadcontrol: function(control)
        {
            var $this = $(this);
            var curthis = this;
            var adata = $this.data(C.amenginedata);
            var rootdefinition = $(control).data(C.rootdefinition);
            var controldef = $(control).data(C.controldefinition);

            var postc = {};
            postc[adata.C[AMC.REQUEST_TYPE_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_REFRESH_CONTROLS];
            var responsebody = rootdefinition[adata.C[AMC.RESPONSE_BODY]];
            postc[adata.C[AMC.REQUEST_DATA_OBJECT_ID]] = responsebody[adata.C[AMC.ID]];
            postc[adata.C[AMC.REQUEST_OBJECT_NAME]] = responsebody[adata.C[AMC.OBJECT_NAME]];
            //postc[adata.C[AMC.FIELD_PREFIX] + controldef[adata.C[AMC.ID]]] = $(control).data(C.controlmethods).getvalue.apply(control, []);
            postc[adata.C[AMC.REFRESH_FIELD_PREFIX] + controldef[adata.C[AMC.ID]]] = true;

            methods.postdata.apply(curthis, [postc, function(data)
            {
                var responsebody = data[adata.C[AMC.RESPONSE_BODY]];
                methods.updatecontroldefinitions.apply(curthis, [responsebody, rootdefinition]);
            } ]);
        },
        reloadcontrols: function(rootcontrol)
        {
            var $this = $(this);
            var curthis = this;
            var adata = $this.data(C.amenginedata);
            var rootdefinition = $(rootcontrol).data(C.rootdefinition);
            // var controldef = $(control).data(C.controldefinition);

            var postc = {};
            postc[adata.C[AMC.REQUEST_TYPE_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_REFRESH_CONTROLS];
            var responsebody = rootdefinition[adata.C[AMC.RESPONSE_BODY]];
            postc[adata.C[AMC.REQUEST_DATA_OBJECT_ID]] = responsebody[adata.C[AMC.ID]];
            postc[adata.C[AMC.REQUEST_OBJECT_NAME]] = responsebody[adata.C[AMC.OBJECT_NAME]];
            //postc[adata.C[AMC.FIELD_PREFIX] + controldef[adata.C[AMC.ID]]] = $(control).data(C.controlmethods).getvalue.apply(control, []);

            $(rootcontrol).find('.' + adata.options.controlclass).each(function()
            {
                postc[adata.C[AMC.REFRESH_FIELD_PREFIX] + $(this).data(C.controldefinition)[adata.C[AMC.ID]]] = true;
            });
            methods.postdata.apply(curthis, [postc, function(data)
            {
                var newresponsebody = data[adata.C[AMC.RESPONSE_BODY]];
                methods.updatecontroldefinitions.apply(curthis, [newresponsebody, rootdefinition]);
            } ]);
        }
    };
    var methods = {
        debug_PostObjectVariables: function(obj)
        {
            for (var p in obj)
            {
                $('body').append("<div>" + p + ": " + obj[p] + "</div>");
            }
        },
        getPersistPostCriteria: function()
        {
            var persistcriteria = {};
            var adata = $(this).data(C.amenginedata);

            var persist = adata.persist;
            for (var p in persist)
            {
                persistcriteria[adata.C[AMC.PERSISTED_PREFIX] + p] = persist[p];
            }
            return persistcriteria;
        },
        getcontrolvalues: function(control, idofrequestedcontrol)
        {

            var $this = $(this);
            var curthis = this;
            var adata = $this.data(C.amenginedata);
            var topparent;
            if ($(control).hasClass(adata.options.rootgroupclass))
            {
                topparent = control;
            }
            else
            {
                topparent = $(control).parents().find('.' + adata.options.rootgroupclass + ':last')[0];
            }
            var controls = $(topparent).find('.' + adata.options.controlclass);
            var fieldvalues = {};
            controls.each(function()
            {
                var controlid = $(this).data(C.controldefinition)[adata.C[AMC.ID]];

                if (typeof idofrequestedcontrol === "undefined" || idofrequestedcontrol == "" || controlid == idofrequestedcontrol)
                {
                    var controlmethods = $(this).data(C.controlmethods);
                    var value = controlmethods.getvalue.apply(this, []);

                    fieldvalues[adata.C[AMC.FIELD_PREFIX] + controlid] = value;
                }
            });
            return fieldvalues;
        },
        handlepostresponse: function(data)
        {
            var $this = $(this);
            var curthis = this;
            var adata = $this.data(C.amenginedata);

            var successful = data[adata.C[AMC.SESSION_VALID]];

            adata.persist = data[adata.C[AMC.PERSIST]];
            if (!successful)
            {
                methods.loadmenu.apply(curthis, []);
               // methods.loadhomeaction.apply(curthis, []);
                var error = data[adata.C[AMC.ERROR]];
                $('body').append("<div>"+error+"</div>")[0];
               // alert(error);
            }
            return successful;
        },
        postdata: function(postcriteria, successfunction)
        {
            var $this = $(this);
            var curthis = this;
            var adata = $this.data(C.amenginedata);
            postcriteria = $.extend(postcriteria, methods.getPersistPostCriteria.apply(curthis, []));
            $.post(adata.options.url, postcriteria, function(data)
            {
                if (methods.handlepostresponse.apply(curthis, [data]))
                {
                    successfunction.apply($this, [data]);
                }
            });
        },
        fillerrors: function(rootparent, errorarray)
        {
            var $this = $(this);
            var curthis = this;
            var adata = $this.data(C.amenginedata);
            $(rootparent).find('.am-error').find('*').remove();
            $(rootparent).find('.' + adata.options.controlclass).each(function()
            {
                for (var erridx in errorarray)
                {
                    if ($(this).data(C.controldefinition)[adata.C[AMC.ID]] == errorarray[erridx][adata.C[AMC.ERROR_FIELD]])
                    {
                        $(this).find('.am-error').append("<div>" + errorarray[erridx][adata.C[AMC.ERROR_MESSAGE]] + "</div>");
                        errorarray[erridx].found = true;
                    }
                }

            });
            for (var erridx in errorarray)
            {
                if (!errorarray[erridx].found)
                {
                    alert(errorarray[erridx][adata.C[AMC.ERROR_MESSAGE]]);
                }
            }
        },
        loadhomeaction: function()
        {
            var $this = $(this);
            var curthis = this;
            var adata = $this.data(C.amenginedata);
            var postc = {};
            postc[adata.C[AMC.REQUEST_TYPE_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_LANDING_NAME];


            methods.postdata.apply(this, [postc, function(data)
            {
                var action = data[adata.C[AMC.OBJECT_NAME]];
                methods.loadaction.apply(curthis, [adata.options.selectnewtarget, action, {}]);
            } ]);
        },
        controlmethods: {

            create_control_text: function(controldef, parent, rootdefinition)
            {
                var $this = $(this);
                var curthis = this;
                var adata = $this.data(C.amenginedata);
                var control = $("<div></div>")[0];
                $(control).data(C.rootdefinition, rootdefinition);
                $(control).data(C.controldefinition, controldef);
                $(control).addClass(adata.options.controlclass);
                $(control).data(C.controlmethods, {
                    getvalue: function() { return $(this).find(':text').val(); },
                    setvalue: function(value) { $(this).find(':text').val(value); }
                });
                $(parent).append(control);
                if (controldef[adata.C[AMC.IS_VISIBLE]])
                {
                    var controltable = $("<table></table>")[0];
                    $(control).append(controltable);

                    var controlrow = $("<tr></tr>")[0];
                    var labelcell = $("<td class='am-label'></td>")[0];
                    var controlcell = $("<td></td>")[0];

                    $(controltable).append(controlrow);
                    $(controlrow).append(labelcell);
                    $(controlrow).append(controlcell);
                    if (controldef[adata.C[AMC.EDITABLE]])
                    {

                        var text = $("<input type='text' />")[0];
                        $(text).val(controldef[adata.C[AMC.CURRENT_VALUE]]);

                        $(text).change(function()
                        {
                            if ($(control).data(C.controldefinition)[adata.C[AMC.CHANGE_TRIGGERS_REFRESH]])
                            {
                                requests.refreshrequest.apply(curthis, [control]);
                            }

                        });
                        $(controlcell).append(text);
                    }
                    else
                    {
                        $(control).data(C.controlmethods, {
                            getvalue: function() { return $(this).data(C.controldefinition)[adata.C[AMC.CURRENT_VALUE]]; },
                            setvalue: function(value) { }
                        });
                        var displaytext = $("<div></div>")[0];
                        $(displaytext).html(controldef[adata.C[AMC.CURRENT_VALUE]]);
                        $(controlcell).append(displaytext);
                    }


                    $(labelcell).append(controldef[adata.C[AMC.LABEL]]);
                    if (controldef[adata.C[AMC.REQUIRED]])
                    {
                        $(labelcell).prepend("<span style='color: red'>*&nbsp;</span>");
                    }
                    $(controlcell).append("<div class='am-error'></div>")[0];
                }
                else
                {
                    $(control).hide();

                    $(control).data(C.controlmethods, {
                        getvalue: function() { return $(this).data(C.controldefinition)[adata.C[AMC.CURRENT_VALUE]]; },
                        setvalue: function(value) { }
                    });

                }
            },
            create_control_date: function(controldef, parent, rootdefinition)
            {
                var $this = $(this);
                var curthis = this;
                var adata = $this.data(C.amenginedata);
                var control = $("<table></table>")[0];
                $(control).data(C.rootdefinition, rootdefinition);
                $(control).data(C.controldefinition, controldef);

                $(control).addClass(adata.options.controlclass);
                $(parent).append(control);
                if (controldef[adata.C[AMC.IS_VISIBLE]])
                {
                    var controlrow = $("<tr></tr>")[0];
                    $(control).append(controlrow);
                    var labelcell = $("<td class='am-label'></td>")[0];
                    var controlcell = $("<td></td>")[0];
                    $(controlrow).append(labelcell);
                    $(controlrow).append(controlcell);
                    var text = $("<input type='text' />")[0];
                    //var icon = $("<span class='ui-icon ui-icon-calendar'></span>")[0];
                    $(labelcell).append(controldef.l);
                    $(controlcell).append(text);
                    //$(controlcell).append(icon);
                    $(text).val($(control).data(C.controldefinition)[adata.C[AMC.CURRENT_VALUE]]);
                    $(control).data(C.controlmethods, {
                        getvalue: function() { return $(this).find(':text').val(); },
                        setvalue: function(value) { $(this).find(':text').val(value); }
                    });

                    $(text).datepicker(
                    {
                        changeMonth: true,
                        changeYear: true
                    });

                    $(controlcell).append("<div class='am-error'></div>")[0];
                    if (controldef[adata.C[AMC.REQUIRED]])
                    {
                        $(labelcell).prepend("<span style='color: red'>*&nbsp;</span>");
                    }
                }
                else
                {
                    $(control).hide();
                    $(control).data(C.controlmethods, {
                        getvalue: function() { return $(this).data(C.controldefinition)[adata.C[AMC.CURRENT_VALUE]]; },
                        setvalue: function(value) { }
                    });

                }

                //  $(control).data(C.controlmethods).resetdefinition = function(controldefinition) { };
            },
            create_control_file: function(controldef, parent, rootdefinition)
            {
                var $this = $(this);
                var curthis = this;
                var adata = $this.data(C.amenginedata);
                var control = $("<table></table>")[0];
                $(control).data(C.rootdefinition, rootdefinition);
                $(control).data(C.controldefinition, controldef);

                $(control).addClass(adata.options.controlclass);
                $(parent).append(control);
                if (controldef[adata.C[AMC.IS_VISIBLE]])
                {
                    var controlrow = $("<tr></tr>")[0];
                    $(control).append(controlrow);
                    var labelcell = $("<td class='am-label'></td>")[0];
                    var controlcell = $("<td></td>")[0];
                    $(controlrow).append(labelcell);
                    $(controlrow).append(controlcell);
                    $(labelcell).append(controldef.l);
                    var filespan = $("<span class='btn btn-success fileinput-button'><i class='icon-plus icon-white'></i><span>Upload File</span></span>")[0];
                    var file = $("<input type='file' />")[0];
                    $(controlcell).append(filespan);
                    $(filespan).append(file);

                    var filenamelink = $("<a href=''></a>")[0];
                    $(controlcell).append(filenamelink);
                    $(filenamelink).append(controldef[adata.C[AMC.FILE_NAME]]);
                    $(filenamelink).click(function()
                    {
                        var tempform = $("<form></form>")[0];
                        if ($(controlcell).find("#" + controldef[adata.C[AMC.ID]] + "-iframe").size() > 0)
                        {
                            var tempiframe = $("<iframe name=" + controldef[adata.C[AMC.ID]] + "-iframe" + " id=" + controldef[adata.C[AMC.ID]] + "-iframe" + "/>")[0];
                            $(controlcell).append(tempiframe);
                            $(tempiframe).hide();
                        }
                        $(controlcell).append(tempform);

                        $(tempform).hide();


                        $(tempform).attr("name", controldef[adata.C[AMC.ID]] + "-form");
                        $(tempform).attr("id", controldef[adata.C[AMC.ID]] + "-form");
                        // $(tempiframe).attr("name", controldef[adata.C[AMC.ID]] + "-iframe");
                        //$(tempiframe).attr("id", controldef[adata.C[AMC.ID]] + "-iframe");
                        $(tempform).attr("method", "post");
                        $(tempform).attr("action", adata.options.url);
                        $(tempform).attr("target", $(tempiframe).attr("name"));
                        var hiddenstr = "<input type='hidden' />";
                        var requesttypeidentifier = $(hiddenstr)[0];
                        $(requesttypeidentifier).attr("name", adata.C[AMC.REQUEST_TYPE_IDENTIFIER]);
                        $(requesttypeidentifier).attr("value", adata.C[AMC.REQUEST_TYPE_FIELD_REQUEST]);
                        $(tempform).append(requesttypeidentifier);

                        var requesttypesubidentifier = $(hiddenstr)[0];
                        $(requesttypesubidentifier).attr("name", adata.C[AMC.REQUEST_TYPE_SUB_IDENTIFIER]);
                        $(requesttypesubidentifier).attr("value", adata.C[AMC.REQUEST_TYPE_GET_FILE]);
                        $(tempform).append(requesttypesubidentifier);

                        var requestfieldactionpropname = $(hiddenstr)[0];
                        $(requestfieldactionpropname).attr("name", adata.C[AMC.REQUEST_FIELD_ACTION_PROPERTY_NAME]);
                        $(requestfieldactionpropname).attr("value", controldef[adata.C[AMC.ID]]);
                        $(tempform).append(requestfieldactionpropname);

                        var requestobjectname = $(hiddenstr)[0];
                        $(requestobjectname).attr("name", adata.C[AMC.REQUEST_OBJECT_NAME]);
                        $(requestobjectname).attr("value", $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.OBJECT_NAME]]);
                        $(tempform).append(requestobjectname);

                        var requestdataobjectid = $(hiddenstr)[0];
                        $(requestdataobjectid).attr("name", adata.C[AMC.REQUEST_DATA_OBJECT_ID]);
                        $(requestdataobjectid).attr("value", $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.ID]]);
                        $(tempform).append(requestdataobjectid);

                        var persistdata = methods.getPersistPostCriteria.apply(curthis, []);
                        for (var p in persistdata)
                        {
                            var persisthidden = $(hiddenstr)[0];
                            $(persisthidden).attr("name", p);
                            $(persisthidden).attr("value", persistdata[p]);
                            $(tempform).append(persisthidden);
                        }

                        $(tempform).submit();

                        $(tempform).remove();

                        return false;
                    });
                    $(file).fileupload(
                    {
                        url: adata.options.url,
                        //   forceIframeTransport: true,
                        formData: function(form)
                        {
                            var criteriaarray = [];
                            criteriaarray[criteriaarray.length] = {
                                name: adata.C[AMC.REQUEST_TYPE_IDENTIFIER],
                                value: adata.C[AMC.REQUEST_TYPE_FIELD_REQUEST]
                            };
                            criteriaarray[criteriaarray.length] = {
                                name: adata.C[AMC.REQUEST_TYPE_SUB_IDENTIFIER],
                                value: adata.C[AMC.REQUEST_TYPE_SET_FILE]
                            };
                            criteriaarray[criteriaarray.length] = {
                                name: adata.C[AMC.REQUEST_FIELD_ACTION_PROPERTY_NAME],
                                value: controldef[adata.C[AMC.ID]]
                            };
                            criteriaarray[criteriaarray.length] = {
                                name: adata.C[AMC.REQUEST_DATA_OBJECT_ID],
                                value: $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.ID]]
                            };
                            criteriaarray[criteriaarray.length] = {
                                name: adata.C[AMC.REQUEST_OBJECT_NAME],
                                value: $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.OBJECT_NAME]]
                            };
                            var persistvariable = methods.getPersistPostCriteria.apply(curthis, []);
                            for (var name in persistvariable)
                            {
                                criteriaarray[criteriaarray.length] = {
                                    name: name,
                                    value: persistvariable[name]
                                }
                            }

                            // postc[adata.C[AMC.REQUEST_DATA_OBJECT_ID]] = $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.ID]];
                            //postc[adata.C[AMC.REQUEST_OBJECT_NAME]] = $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.OBJECT_NAME]];
                            return criteriaarray;
                        },
                        done: function(e, data)
                        {
                            var returndata = undefined;
                            if (data.result.contents != undefined)
                            {
                                returndata = eval("(" + data.result.contents().find('pre').html() + ")");
                            }
                            else
                            {
                                returndata = eval("(" + data.result + ")");
                            }

                            if (methods.handlepostresponse.apply(curthis, [returndata]))
                            {
                                requests.reloadcontrol.apply(curthis, [control]);
                            }
                        }
                    });
                    $(control).data(C.controlmethods, {
                        getvalue: function() { return undefined },
                        setvalue: function(value) { }
                    });

                    $(controlcell).append("<div class='am-error'></div>")[0];
                    if (controldef[adata.C[AMC.REQUIRED]])
                    {
                        $(labelcell).prepend("<span style='color: red'>*&nbsp;</span>");
                    }
                }
                else
                {
                    $(control).hide();
                    $(control).data(C.controlmethods, {
                        getvalue: function() { return undefined },
                        setvalue: function(value) { }
                    });

                }

                //  $(control).data(C.controlmethods).resetdefinition = function(controldefinition) { };
            },
            create_control_singleselect: function(controldef, parent, rootdefinition)
            {
                var $this = $(this);
                var curthis = this;
                var adata = $this.data(C.amenginedata);

                var control = $("<table></table>")[0];
                $(control).data(C.rootdefinition, rootdefinition);
                $(control).data(C.controldefinition, controldef);

                $(control).addClass(adata.options.controlclass);
                var controlrow = $("<tr></tr>")[0];
                var labelcell = $("<td class='am-label'></td>")[0];
                var controlcell = $("<td></td>")[0];
                $(parent).append(control);
                $(control).append(controlrow);
                $(controlrow).append(labelcell);
                $(controlrow).append(controlcell);

                if (controldef[adata.C[AMC.EDITABLE]])
                {

                    var select = $("<select></select>")[0];
                    var curvalue = "";
                    for (var item in controldef[adata.C[AMC.SELECT_ITEMS]])
                    {
                        var curitem = controldef[adata.C[AMC.SELECT_ITEMS]][item];
                        var curitemvalue = curitem[adata.C[AMC.SELECT_ITEM_VALUE]];
                        var curitemlabel = curitem[adata.C[AMC.SELECT_ITEM_LABEL]];
                        var newoption = $("<option value='" + curitemvalue + "'>" + curitemlabel + "</option>")[0];

                        $(select).append(newoption);

                        if (curitem[adata.C[AMC.SELECT_ITEM_IS_SELECTED]])
                        {
                            if (curvalue.length > 0)
                            {
                                curvalue += adata.C[AMC.SELECT_ITEM_VALUE_SEPERATOR];
                            }
                            curvalue += curitemvalue;
                        }
                    }
                    //methods.debug_PostObjectVariables(controldef);
                    $(controlcell).append(select);


                    $(control).data(C.controlmethods,
                    {
                        getvalue: function()
                        {
                            var curvalue = "";
                            $(this).find(':selected').each(function()
                            {

                                if (curvalue.length > 0)
                                {
                                    curvalue += adata.C[AMC.SELECT_ITEM_VALUE_SEPERATOR];
                                }
                                curvalue += $(this).attr("value");

                            });
                            return curvalue;
                        },
                        setvalue: function(value)
                        {
                            $(this).find(':selected').removeAttr("selected");
                            // $('select option:first').attr("selected", "selected");

                            var valuearr = value.split(adata.C[AMC.SELECT_ITEM_VALUE_SEPERATOR]);
                            for (var curvalidx in valuearr)
                            {
                                var curval = valuearr[curvalidx];
                                $(this).find('option[value="' + curval + '"]').attr("selected", "selected");
                            }
                        }
                    });

                    $(control).data(C.controlmethods).setvalue.apply(control, [curvalue]);
                    $(select).change(function()
                    {
                        if ($(control).data(C.controldefinition)[adata.C[AMC.CHANGE_TRIGGERS_REFRESH]])
                        {
                            requests.refreshrequest.apply(curthis, [control]);
                        }

                    });

                    $(controlcell).append("<div class='am-error'></div>")[0];
                }
                else
                {
                    $(control).data(C.controlmethods, {
                        getvalue: function() { return $(this).data(C.controldefinition)[adata.C[AMC.CURRENT_VALUE]]; },
                        setvalue: function(value) { }
                    });
                    var displaytext = $("<div></div>")[0];
                    $(displaytext).html(controldef[adata.C[AMC.CURRENT_VALUE]]);
                    $(controlcell).append(displaytext);
                }


                $(labelcell).append(controldef[adata.C[AMC.LABEL]]);
                if (controldef[adata.C[AMC.REQUIRED]])
                {
                    $(labelcell).prepend("<span style='color: red'>*&nbsp;</span>");
                }
                //  $(control).data(C.controlmethods).resetdefinition = function(controldefinition) { };
            },
            create_control_grid: function(controldef, parent, rootdefinition)
            {
                var $this = $(this);
                var curthis = this;
                var adata = $this.data(C.amenginedata);
                var control = $("<div></div>")[0];
                var grid = $("<table></table>")[0];

                var pager = $("<div></div>")[0];

                $(control).append(grid);
                $(control).append(pager);

                $(control).data(C.rootdefinition, rootdefinition);
                $(control).data(C.controldefinition, controldef);
                $(control).data(C.controlmethods, {
                    getvalue: function() { return undefined; },
                    setvalue: function(value) { }
                });
                $(control).addClass(adata.options.controlclass);

                $(parent).append(control);
                var griddetails = controldef[adata.C[AMC.GRID_VIEW_GRID_DETAILS]];

                var colNames = [];
                var colModel = [];
                for (var ckey in griddetails[adata.C[AMC.GRID_VIEW_COLUMN_LIST]])
                {
                    var curcolumn = griddetails[adata.C[AMC.GRID_VIEW_COLUMN_LIST]][ckey];
                    colNames[colNames.length] = curcolumn[adata.C[AMC.GRID_VIEW_COLUMN_NAME]];
                    colModel[colModel.length] = {
                        name: curcolumn[adata.C[AMC.GRID_VIEW_COLUMN_NAME]],
                        width: 120,
                        hidden: !curcolumn[adata.C[AMC.GRID_VIEW_COLUMN_IS_VISIBLE]]
                    };
                }
                if (griddetails[adata.C[AMC.GRID_VIEW_DELETE_ACTION]])
                {
                    colNames[colNames.length] = "";
                    colModel[colModel.length] = {
                        name: "action",
                        width: 25,
                        index: 'action'
                    };
                }
                var rootid = $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.ID]];
                var controlidwithoutspaces = controldef[adata.C[AMC.ID]].replace(/ /g, "_");
                $(grid).attr("id", controlidwithoutspaces + "-" + rootid);

                $(pager).attr("id", "pager-" + controlidwithoutspaces + "-" + rootid);

                $(grid).data(C.firstload, true);

                $(grid).jqGrid({
                    url: adata.options.url,
                    datatype: 'json',
                    mtype: 'POST',
                    colNames: colNames,
                    colModel: colModel,
                    pager: "#" + $(pager).attr("id"),
                    rowNum: 25,
                    rowList: [10, 25, 50, 100],
                    gridview: true,
                    rownumbers: true,
                    width: 600,
                    shrinkToFit: true,
                    //autowidth: true,
                    sortname: '',
                    viewrecords: true,
                    sortorder: 'desc',
                    caption: controldef[adata.C[AMC.LABEL]],
                    // height: '100%',
                    prmNames: {
                        page: adata.C[AMC.GRID_VIEW_RELOAD_REQUEST_PAGE],
                        rows: adata.C[AMC.GRID_VIEW_RELOAD_REQUEST_ROWS],
                        sort: adata.C[AMC.GRID_VIEW_RELOAD_REQUEST_SORT_NAME],
                        order: adata.C[AMC.GRID_VIEW_RELOAD_REQUEST_SORT_ORDER]
                    },
                    onSelectRow: function(rowid, status)
                    {
                        var dataobjectlaunch = controldef[adata.C[AMC.GRID_VIEW_DATA_OBJECT_LAUNCH]];

                        if (dataobjectlaunch)
                        {
                            var launchname = dataobjectlaunch[adata.C[AMC.GRID_VIEW_DATA_OBJECT_LAUNCH_OBJECT_NAME]];
                            var propertyname = dataobjectlaunch[adata.C[AMC.GRID_VIEW_DATA_OBJECT_LAUNCH_TARGET_FIELD]]
                            var additionalpost = {};
                            additionalpost[adata.C[AMC.FIELD_PREFIX] + propertyname] = rowid;
                            methods.loadaction.apply(curthis, [adata.options.selectnewtarget, launchname, additionalpost]);
                        }
                        return false;
                        //"dol":{"n":"BusinessObjectDefinitionEdit","f":"BusinessObjectDefinitionID"}
                    },
                    serializeGridData: function(postData)
                    {
                        var postc = {};
                        postc[adata.C[AMC.REQUEST_TYPE_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_FIELD_REQUEST];
                        postc[adata.C[AMC.REQUEST_TYPE_SUB_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_GRID_RELOAD];
                        postc[adata.C[AMC.REQUEST_DATA_OBJECT_ID]] = $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.ID]];
                        postc[adata.C[AMC.REQUEST_OBJECT_NAME]] = $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.OBJECT_NAME]];
                        postc[adata.C[AMC.REQUEST_FIELD_ACTION_PROPERTY_NAME]] = $(control).data(C.controldefinition)[adata.C[AMC.ID]];
                        postc = $.extend(postc, methods.getPersistPostCriteria.apply(curthis, []));
                        return $.param($.extend(postData, postc));
                    },
                    loadBeforeSend: function(xhr, setting)
                    {
                        if ($(grid).data(C.firstload))
                        {
                            $(grid).data(C.firstload, false);
                            xhr.abort();
                            return false;
                        }
                        else
                        {

                            return true;
                        }
                    },
                    jsonReader:
                    {
                        root: function(obj)
                        {
                            var responsebody = obj[adata.C[AMC.RESPONSE_BODY]];
                            if (typeof responsebody === "undefined")
                            {
                                return {};
                            }
                            else
                            {
                                return responsebody[adata.C[AMC.GRID_VIEW_DATA]];
                            }
                        },
                        page: function(obj)
                        {
                            var responsebody = obj[adata.C[AMC.RESPONSE_BODY]];
                            if (typeof responsebody === "undefined")
                            {
                                return 1;
                            }
                            else
                            {
                                return responsebody[adata.C[AMC.GRID_VIEW_CURRENT_PAGE]];
                            }
                        },
                        total: function(obj)
                        {
                            var responsebody = obj[adata.C[AMC.RESPONSE_BODY]];
                            if (typeof responsebody === "undefined")
                            {
                                return 0;
                            }
                            else
                            {
                                return responsebody[adata.C[AMC.GRID_VIEW_NUMBER_OF_PAGES]];
                            }
                        },
                        records: function(obj)
                        {
                            var responsebody = obj[adata.C[AMC.RESPONSE_BODY]];
                            if (typeof responsebody === "undefined")
                            {
                                return 0;
                            }
                            else
                            {
                                return responsebody[adata.C[AMC.GRID_VIEW_NUMBER_OF_SUPPLIED_RECORDS]];
                            }
                        },
                        cell: adata.C[AMC.GRID_VIEW_ROW_CELL_DATA_ARRAY],
                        repeatitems: true,
                        id: adata.C[AMC.ID]
                    },
                    beforeProcessing: function(data, status, xhr)
                    {
                        methods.handlepostresponse.apply(curthis, [data]);
                    },
                    gridComplete: function()
                    {

                        //var grid = jQuery("#east-grid");
                        var ids = $(grid).jqGrid('getDataIDs');
                        for (var i = 0; i < ids.length; i++)
                        {
                            var rowId = ids[i];
                            var checkOut = "<input type='button' value='Delete' class='deletebutton' rowId='" + rowId + "' />";
                            $(grid).jqGrid('setRowData', rowId, { action: checkOut });
                        }
                        $(grid).find('.deletebutton').click(function()
                        {
                            var postc = {};
                            postc[adata.C[AMC.REQUEST_TYPE_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_FIELD_REQUEST];
                            postc[adata.C[AMC.REQUEST_TYPE_SUB_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_GRID_DELETE];
                            postc[adata.C[AMC.REQUEST_FIELD_ACTION_PROPERTY_NAME]] = controldef[adata.C[AMC.ID]];
                            var responsebody = rootdefinition[adata.C[AMC.RESPONSE_BODY]];
                            postc[adata.C[AMC.REQUEST_DATA_OBJECT_ID]] = responsebody[adata.C[AMC.ID]];
                            postc[adata.C[AMC.REQUEST_OBJECT_NAME]] = responsebody[adata.C[AMC.OBJECT_NAME]];
                            postc[adata.C[AMC.REQUEST_GRID_VIEW_ITEM_ID]] = $(this).attr("rowId");
                            ///postc = $.extend(postc, methods.getcontrolvalues.apply(curthis, [control]));

                            methods.postdata.apply(curthis, [postc, function(data)
                            {
                                $(grid).trigger("reloadGrid");
                                methods.loadmenu.apply(curthis, []);
                            } ]);
                        });

                    }
                });
                var wrappeddata = {};
                wrappeddata[adata.C[AMC.RESPONSE_BODY]] = griddetails
                $(grid)[0].addJSONData(wrappeddata);
            },
            create_control_button: function(controldef, parent, rootdefinition)
            {
                var $this = $(this);
                var curthis = this;
                var adata = $this.data(C.amenginedata);
                var control = $("<input type='button' />")[0];
                $(control).data(C.rootdefinition, rootdefinition);
                $(control).data(C.controldefinition, controldef);
                $(control).data(C.controlmethods, {
                    getvalue: function() { return undefined; },
                    setvalue: function(value) { }
                });
                $(control).addClass(adata.options.controlclass);
                $(parent).css('text-align', 'right');
                $(parent).append(control);
                $(control).attr("value", controldef[adata.C[AMC.LABEL]]);
                $(control).click(function()
                {
                    var controltype = controldef[adata.C[AMC.BUTTON_TYPE]];
                    if (controltype == adata.C[AMC.BUTTON_TYPE_SUBMIT])
                    {
                        var responsebody = $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]];
                        var isdialog = responsebody[adata.C[AMC.IS_DIALOG]];

                        if (isdialog)
                        {
                            var postc = {};

                            postc[adata.C[AMC.REQUEST_TYPE_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_FIELD_REQUEST];
                            postc[adata.C[AMC.REQUEST_TYPE_SUB_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_FIELD_COMPLEX_ITEM_LIST_SAVE_ITEM];
                            postc[adata.C[AMC.REQUEST_FIELD_ACTION_PROPERTY_NAME]] = $(control).data(C.controldefinition)[adata.C[AMC.ID]];

                            postc[adata.C[AMC.REQUEST_MAIN_OBJECT_FIELD_NAME]] = responsebody[adata.C[AMC.MAIN_REQUEST_FIELD_NAME]];
                            postc[adata.C[AMC.REQUEST_MAIN_OBJECT_ID]] = responsebody[adata.C[AMC.MAIN_REQUEST_OBJECT_ID]];

                            postc[adata.C[AMC.REQUEST_DATA_OBJECT_ID]] = responsebody[adata.C[AMC.ID]];
                            postc[adata.C[AMC.REQUEST_OBJECT_NAME]] = responsebody[adata.C[AMC.OBJECT_NAME]];
                            postc = $.extend(postc, methods.getcontrolvalues.apply(curthis, [control]));

                            methods.postdata.apply(curthis, [postc, function(data)
                            {
                                var responsebody = data[adata.C[AMC.RESPONSE_BODY]];

                                var errorsarray = responsebody[adata.C[AMC.ERRORS]];
                                if (errorsarray.length > 0)
                                {
                                    for (var erridx in errorsarray)
                                    {
                                        var topparent = $('.' + adata.options.rootgroupclass + '-' + rootdefinition[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.ID]])[0];
                                        alert(errorsarray[erridx][adata.C[AMC.ERROR_MESSAGE]]);
                                    }
                                }
                                else
                                {
                                    var rootresponsebody = $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]];

                                    adata.options.closeobject($(control).parents().find('.' + adata.options.rootgroupclass + ':last')[0]);
                                    var currentobject = adata.options.getlastopenedobject();
                                    if (currentobject)
                                    {
                                        requests.reloadcontrols.apply(curthis, [currentobject]);
                                    }
                                    if (adata.options.needtoloadhome())
                                    {
                                        methods.loadhomeaction.apply(curthis, []);
                                    }
                                }
                            } ]);
                        }
                        else
                        {
                            var postc = {};
                            postc[adata.C[AMC.REQUEST_TYPE_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_FIELD_REQUEST];
                            postc[adata.C[AMC.REQUEST_TYPE_SUB_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_FIELD_SUBMIT];
                            postc[adata.C[AMC.REQUEST_FIELD_ACTION_PROPERTY_NAME]] = controldef[adata.C[AMC.ID]];

                            postc[adata.C[AMC.REQUEST_DATA_OBJECT_ID]] = responsebody[adata.C[AMC.ID]];
                            postc[adata.C[AMC.REQUEST_OBJECT_NAME]] = responsebody[adata.C[AMC.OBJECT_NAME]];

                            postc = $.extend(postc, methods.getcontrolvalues.apply(curthis, [control]));

                            methods.postdata.apply(curthis, [postc, function(data)
                            {
                                var responsebody = data[adata.C[AMC.RESPONSE_BODY]];

                                var errorsarray = responsebody[adata.C[AMC.ERRORS]];
                                if (errorsarray.length > 0)
                                {
                                    var topparent = $('.' + adata.options.rootgroupclass + '-' + rootdefinition[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.ID]])[0];
                                    methods.fillerrors.apply(curthis, [topparent, errorsarray]);

                                }
                                else
                                {

                                    methods.loadmenu.apply(curthis, []);
                                    adata.options.closeobject($(control).parents().find('.' + adata.options.rootgroupclass + ':last')[0]);
                                    var currentobject = adata.options.getlastopenedobject();
                                    if (currentobject)
                                    {
                                        requests.reloadcontrols.apply(curthis, [currentobject]);
                                    }

                                    if (adata.options.needtoloadhome())
                                    {
                                        methods.loadhomeaction.apply(curthis, []);
                                    }
                                }
                            } ]);
                        }

                    }
                    else if (controltype == adata.C[AMC.BUTTON_TYPE_CANCEL])
                    {
                    }
                });
            },
            create_control_complexitemlist: function(controldef, parent, rootdefinition)
            {
                var $this = $(this);
                var curthis = this;
                var adata = $this.data(C.amenginedata);
                var control = $("<div></div>")[0];
                $(control).data(C.rootdefinition, rootdefinition);
                $(control).data(C.controldefinition, controldef);
                $(control).data(C.controlmethods, {
                    getvalue: function() { return undefined; },
                    setvalue: function(value) { }
                });
                $(control).addClass(adata.options.controlclass);

                $(parent).append(control);
                if (controldef[adata.C[AMC.IS_VISIBLE]])
                {
                    var controladdbutton = $("<input type='button' value='Add' />")[0];
                    var grid = $("<table></table>")[0];
                    var pager = $("<div></div>")[0];

                    $(control).append(controladdbutton);
                    $(control).append(grid);
                    $(control).append(pager);

                    $(controladdbutton).click(function()
                    {
                        var postc = {};
                        postc[adata.C[AMC.REQUEST_TYPE_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_FIELD_REQUEST];
                        postc[adata.C[AMC.REQUEST_TYPE_SUB_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_FIELD_COMPLEX_ITEM_LIST_NEW_ITEM];
                        postc[adata.C[AMC.REQUEST_DATA_OBJECT_ID]] = $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.ID]];
                        postc[adata.C[AMC.REQUEST_OBJECT_NAME]] = $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.OBJECT_NAME]];
                        postc[adata.C[AMC.REQUEST_FIELD_ACTION_PROPERTY_NAME]] = $(control).data(C.controldefinition)[adata.C[AMC.ID]];
                        methods.postdata.apply(curthis, [postc, function(data)
                        {
                            methods.loadaction.apply(curthis, [adata.options.selectnewtarget, data, {}]);
                            //methods.debug_PostObjectVariables(data[adata.C[AMC.RESPONSE_BODY]]);
                        } ]);
                    });


                    var griddetails = controldef[adata.C[AMC.GRID_VIEW_GRID_DETAILS]];

                    var colNames = [];
                    var colModel = [];
                    for (var ckey in griddetails[adata.C[AMC.GRID_VIEW_COLUMN_LIST]])
                    {
                        var curcolumn = griddetails[adata.C[AMC.GRID_VIEW_COLUMN_LIST]][ckey];
                        colNames[colNames.length] = curcolumn[adata.C[AMC.GRID_VIEW_COLUMN_NAME]];
                        colModel[colModel.length] = {
                            name: curcolumn[adata.C[AMC.GRID_VIEW_COLUMN_NAME]],
                            width: 120,
                            hidden: !curcolumn[adata.C[AMC.GRID_VIEW_COLUMN_IS_VISIBLE]]
                        };
                    }

                    colNames[colNames.length] = "";
                    colModel[colModel.length] = {
                        name: "action",
                        width: 25,
                        index: 'action'
                    };

                    var rootid = $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.ID]];
                    var controlidwithoutspaces = controldef[adata.C[AMC.ID]].replace(/ /g, "_");
                    $(grid).attr("id", controlidwithoutspaces + "-" + rootid);

                    $(pager).attr("id", "pager-" + controlidwithoutspaces + "-" + rootid);

                    $(grid).data(C.firstload, true);

                    $(grid).jqGrid({
                        url: adata.options.url,
                        datatype: 'json',
                        mtype: 'POST',
                        colNames: colNames,
                        colModel: colModel,
                        pager: "#" + $(pager).attr("id"),
                        rowNum: 25,
                        rowList: [10, 25, 50, 100],
                        gridview: true,
                        rownumbers: true,
                        width: 600,
                        shrinkToFit: true,
                        //autowidth: true,
                        sortname: '',
                        viewrecords: true,
                        sortorder: 'desc',
                        caption: controldef[adata.C[AMC.LABEL]],
                        // height: '100%',
                        prmNames: {
                            page: adata.C[AMC.GRID_VIEW_RELOAD_REQUEST_PAGE],
                            rows: adata.C[AMC.GRID_VIEW_RELOAD_REQUEST_ROWS],
                            sort: adata.C[AMC.GRID_VIEW_RELOAD_REQUEST_SORT_NAME],
                            order: adata.C[AMC.GRID_VIEW_RELOAD_REQUEST_SORT_ORDER]
                        },
                        onSelectRow: function(rowid, status)
                        {
                            var postc = {};
                            postc[adata.C[AMC.REQUEST_TYPE_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_FIELD_REQUEST];
                            postc[adata.C[AMC.REQUEST_TYPE_SUB_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_FIELD_COMPLEX_ITEM_LIST_EDIT];
                            postc[adata.C[AMC.REQUEST_COMPLEX_ITEM_ID]] = rowid;
                            postc[adata.C[AMC.REQUEST_DATA_OBJECT_ID]] = $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.ID]];
                            postc[adata.C[AMC.REQUEST_OBJECT_NAME]] = $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.OBJECT_NAME]];
                            postc[adata.C[AMC.REQUEST_FIELD_ACTION_PROPERTY_NAME]] = $(control).data(C.controldefinition)[adata.C[AMC.ID]];
                            methods.postdata.apply(curthis, [postc, function(data)
                            {
                                methods.loadaction.apply(curthis, [adata.options.selectnewtarget, data, {}]);
                            } ]);
                            return false;
                        },
                        serializeGridData: function(postData)
                        {
                            var postc = {};
                            postc[adata.C[AMC.REQUEST_TYPE_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_FIELD_REQUEST];
                            postc[adata.C[AMC.REQUEST_TYPE_SUB_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_GRID_RELOAD];
                            postc[adata.C[AMC.REQUEST_DATA_OBJECT_ID]] = $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.ID]];
                            postc[adata.C[AMC.REQUEST_OBJECT_NAME]] = $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.OBJECT_NAME]];
                            postc[adata.C[AMC.REQUEST_FIELD_ACTION_PROPERTY_NAME]] = $(control).data(C.controldefinition)[adata.C[AMC.ID]];
                            postc = $.extend(postc, methods.getPersistPostCriteria.apply(curthis, []));
                            return $.param($.extend(postData, postc));
                        },
                        loadBeforeSend: function(xhr, setting)
                        {
                            if ($(grid).data(C.firstload))
                            {
                                $(grid).data(C.firstload, false);
                                xhr.abort();
                                return false;
                            }
                            else
                            {

                                return true;
                            }
                        },
                        jsonReader:
                    {
                        root: function(obj)
                        {
                            var responsebody = obj[adata.C[AMC.RESPONSE_BODY]];
                            if (typeof responsebody === "undefined")
                            {
                                return {};
                            }
                            else
                            {
                                return responsebody[adata.C[AMC.GRID_VIEW_DATA]];
                            }
                        },
                        page: function(obj)
                        {
                            var responsebody = obj[adata.C[AMC.RESPONSE_BODY]];
                            if (typeof responsebody === "undefined")
                            {
                                return 1;
                            }
                            else
                            {
                                return responsebody[adata.C[AMC.GRID_VIEW_CURRENT_PAGE]];
                            }
                        },
                        total: function(obj)
                        {
                            var responsebody = obj[adata.C[AMC.RESPONSE_BODY]];
                            if (typeof responsebody === "undefined")
                            {
                                return 0;
                            }
                            else
                            {
                                return responsebody[adata.C[AMC.GRID_VIEW_NUMBER_OF_PAGES]];
                            }
                        },
                        records: function(obj)
                        {
                            var responsebody = obj[adata.C[AMC.RESPONSE_BODY]];
                            if (typeof responsebody === "undefined")
                            {
                                return 0;
                            }
                            else
                            {
                                return responsebody[adata.C[AMC.GRID_VIEW_NUMBER_OF_SUPPLIED_RECORDS]];
                            }
                        },
                        cell: adata.C[AMC.GRID_VIEW_ROW_CELL_DATA_ARRAY],
                        repeatitems: true,
                        id: adata.C[AMC.ID]
                    },
                        beforeProcessing: function(data, status, xhr)
                        {
                            methods.handlepostresponse.apply(curthis, [data]);
                        },
                        gridComplete: function()
                        {

                            //var grid = jQuery("#east-grid");
                            var ids = $(grid).jqGrid('getDataIDs');
                            for (var i = 0; i < ids.length; i++)
                            {
                                var rowId = ids[i];
                                var checkOut = "<input type='button' value='Delete' class='deletebutton' rowId='" + rowId + "' />";
                                $(grid).jqGrid('setRowData', rowId, { action: checkOut });
                            }
                            $(grid).find('.deletebutton').click(function()
                            {


                                var postc = {};
                                postc[adata.C[AMC.REQUEST_TYPE_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_FIELD_REQUEST];
                                postc[adata.C[AMC.REQUEST_TYPE_SUB_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_FIELD_COMPLEX_ITEM_LIST_REMOVE_ITEM];
                                postc[adata.C[AMC.REQUEST_COMPLEX_ITEM_ID]] = $(this).attr("rowId");
                                postc[adata.C[AMC.REQUEST_DATA_OBJECT_ID]] = $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.ID]];
                                postc[adata.C[AMC.REQUEST_OBJECT_NAME]] = $(control).data(C.rootdefinition)[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.OBJECT_NAME]];
                                postc[adata.C[AMC.REQUEST_FIELD_ACTION_PROPERTY_NAME]] = $(control).data(C.controldefinition)[adata.C[AMC.ID]];
                                methods.postdata.apply(curthis, [postc, function(data)
                                {
                                    $(grid).trigger("reloadGrid");
                                    //methods.loadaction.apply(curthis, [adata.options.selectnewtarget, data, {}]);
                                } ]);
                                return false;
                            });

                        }
                    });
                    var wrappeddata = {};
                    wrappeddata[adata.C[AMC.RESPONSE_BODY]] = griddetails
                    $(grid)[0].addJSONData(wrappeddata);
                }
                else
                {

                }
            }
        },
        getcontrolcreationmethod: function(control)
        {
            var $this = $(this);
            var curthis = this;
            var adata = $this.data(C.amenginedata);
            var controltype = control[adata.C[AMC.CONTROL_TYPE]];
            if (controltype == adata.C[AMC.CONTROL_TYPE_TEXT])
            {
                return methods.controlmethods.create_control_text;
            }
            else if (controltype == adata.C[AMC.CONTROL_TYPE_BUTTON])
            {
                return methods.controlmethods.create_control_button;
            }
            else if (controltype == adata.C[AMC.CONTROL_TYPE_SELECT])
            {
                return methods.controlmethods.create_control_singleselect;
            }
            else if (controltype == adata.C[AMC.CONTROL_TYPE_GRID])
            {
                return methods.controlmethods.create_control_grid;
            }
            else if (controltype == adata.C[AMC.CONTROL_TYPE_COMPLEX_ITEM_LIST])
            {
                return methods.controlmethods.create_control_complexitemlist;
            }
            else if (controltype == adata.C[AMC.CONTROL_TYPE_DATE])
            {
                return methods.controlmethods.create_control_date;
            }
            else if (controltype == adata.C[AMC.CONTROL_TYPE_FILE])
            {
                return methods.controlmethods.create_control_file;
            }
            else
            {
                alert(controltype + ' not implemented.');
            }
        },
        updatecontroldefinitions: function(responsebody, rootdefinition)
        {
            var $this = $(this);
            var curthis = this;
            var adata = $this.data(C.amenginedata);

            var topparent = $('.' + adata.options.rootgroupclass + '-' + rootdefinition[adata.C[AMC.RESPONSE_BODY]][adata.C[AMC.ID]])[0];


            var controlarray = responsebody[adata.C[AMC.CONTROL_ARRAY]];
            for (var c in controlarray)
            {
                var curcontrol = controlarray[c];
                methods.replacecontrol.apply(curthis, [topparent, curcontrol]);
            }
        },
        replacecontrol: function(rootcontrol, controldefinition)
        {
            var $this = $(this);
            var curthis = this;
            var adata = $this.data(C.amenginedata);
            $(rootcontrol).find('.' + adata.options.controlclass).each(function()
            {
                if ($(this).data(C.controldefinition)[adata.C[AMC.ID]] == controldefinition[adata.C[AMC.ID]])
                {
                    var currentrootdef = $(this).data(C.rootdefinition);
                    var controlmethod = methods.getcontrolcreationmethod.apply(curthis, [controldefinition]);
                    var curvalue = $(this).data(C.controlmethods).getvalue.apply(this, []);
                    var olddefinition = $(this).data(C.controldefinition);
                    var theparent = $(this).parent()[0];
                    var olderrormessage = $(this).find('.am-error').html();

                    $(this).remove();
                    controlmethod.apply(curthis, [controldefinition, theparent, currentrootdef]);
                    if (olddefinition[adata.C[AMC.IS_VISIBLE]])
                    {
                        if (olddefinition[adata.C[AMC.CURRENT_VALUE]] == controldefinition[adata.C[AMC.CURRENT_VALUE]])
                        {
                            $(theparent).find('.' + adata.options.controlclass + ':last').each(function()
                            {
                                $(this).data(C.controlmethods).setvalue.apply(this, [curvalue]);

                            });
                        }
                        $(theparent).find('.' + adata.options.controlclass + ':last').each(function()
                        {
                            $(this).find('.am-error').append(olderrormessage);
                        });
                    }

                }
            });
        },
        processcontrol: function(control, parent, rootdefinition)
        {
            var $this = $(this);
            var curthis = this;
            var adata = $this.data(C.amenginedata);
            var controlmethod = methods.getcontrolcreationmethod.apply(this, [control]);
            controlmethod.apply(this, [control, parent, rootdefinition]);
        },
        processgroup: function(group, parent, rootdefinition)
        {
            var $this = $(this);
            var curthis = this;
            var adata = $this.data(C.amenginedata);

            var grouptype = group[adata.C[AMC.GROUP_TYPE]];
            if (grouptype == adata.C[AMC.GROUP_TYPE_TABLE])
            {
                var numcontrols = group[adata.C[AMC.CONTROL_ARRAY]].length;
                var columns = group[adata.C[AMC.GROUP_TABLE_NUMBER_OF_COLUMNS]];
                var rows = parseInt(numcontrols / columns) + (numcontrols % columns > 0 ? 1 : 0);
                var curtable = $("<table></table")[0];
                $(parent).append(curtable);
                for (var row = 0; row < rows; row++)
                {
                    var curtr = $("<tr></tr>")[0];
                    $(curtable).append(curtr);
                    for (var col = 0; col < columns && row * columns + col < numcontrols; col++)
                    {
                        var curtd = $("<td style='vertical-align: top'></td>")[0];
                        $(curtr).append(curtd);
                    }
                }
                $(curtable).find('td').each(function(idx)
                {
                    var control = group[adata.C[AMC.CONTROL_ARRAY]][idx];
                    //var groupdiv = $("<div></div>")[0];
                    //     $(parent).append(groupdiv);
                    if (control[adata.C[AMC.CONTROL_ARRAY]])
                    {

                        methods.processgroup.apply(curthis, [control, this, rootdefinition]);
                    }
                    else
                    {
                        methods.processcontrol.apply(curthis, [control, this, rootdefinition]);
                    }
                });
            }
            else if (grouptype == adata.C[AMC.GROUP_TYPE_COLLAPSIBLE])
            {
                for (var controlkey in group[adata.C[AMC.CONTROL_ARRAY]])
                {
                    var control = group[adata.C[AMC.CONTROL_ARRAY]][controlkey];
                    var groupdiv = $("<div></div>")[0];
                    $(parent).append(groupdiv);
                    if (control[adata.C[AMC.CONTROL_ARRAY]])
                    {

                        methods.processgroup.apply(curthis, [control, groupdiv, rootdefinition]);
                    }
                    else
                    {
                        methods.processcontrol.apply(curthis, [control, groupdiv, rootdefinition]);
                    }
                }
            }
        },
        loadaction: function(placeholder, action, additionalvalues)
        {
            var $this = $(this);
            var curthis = this;
            var adata = $this.data(C.amenginedata);
            var handlepostdata = function(data)
            {
                var responsebody = data[adata.C[AMC.RESPONSE_BODY]];
                var rootobject = responsebody[adata.C[AMC.ROOT_OBJECT]];

                if (typeof placeholder === 'function')
                {
                    placeholder = placeholder.apply(curthis, [responsebody[adata.C[AMC.DISPLAY_NAME]]]);
                }
                $(placeholder).find('*').remove();
                var containertable = $('<table></table>')[0];
                var contenttr = $("<tr></tr>")[0];

                $(containertable).append(contenttr);


                var contenttd = $("<td style='vertical-align: top; text-align: left'></td>")[0];
                var menutd = $("<td style='vertical-align: top; text-align: left'></td>")[0];
                $(contenttr).append(menutd);
                $(contenttr).append(contenttd);


                $(placeholder).append(containertable);
                $(placeholder).data(C.rootdefinition, data);
                $(placeholder).addClass(adata.options.rootgroupclass);
                $(placeholder).keypress(function(event)
                {
                    if (event.which == 13)
                    {
                        $(this).find('.' + adata.options.controlclass).each(function()
                        {
                            var cd = $(this).data(C.controldefinition);
                            var controltype = cd[adata.C[AMC.CONTROL_TYPE]];
                            if (controltype == adata.C[AMC.CONTROL_TYPE_BUTTON])
                            {
                                var buttontype = cd[adata.C[AMC.BUTTON_TYPE]];
                                if (buttontype == adata.C[AMC.BUTTON_TYPE_SUBMIT])
                                {
                                    $(this).click();
                                }
                            }

                        });
                        event.preventDefault();
                    }
                    else if (event.which == 27)
                    {

                        event.preventDefault();
                    }
                });
                $(placeholder).addClass(adata.options.rootgroupclass + '-' + responsebody[adata.C[AMC.ID]]);
                methods.processgroup.apply(curthis, [rootobject, contenttd, data]);
                methods.loadsubmenu.apply(curthis, [menutd, responsebody[adata.C[AMC.MENU_ARRAY]]]);
                $(placeholder).find('.' + adata.options.controlclass + ' input:first').focus();
            };
            var postcriteria = {};

            postcriteria[adata.C[AMC.REQUEST_TYPE_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_FULL_DEFINITION];
            postcriteria[adata.C[AMC.REQUEST_OBJECT_NAME]] = action;
            postcriteria = $.extend(postcriteria, additionalvalues);
            if (typeof action === "object")
            {
                handlepostdata(action);
            }
            else
            {
                methods.postdata.apply(this, [postcriteria, handlepostdata]);
            }
        },
        loadsubmenu: function(submenudiv, menuobject)
        {
            var $this = $(this);
            var curthis = this;
            var adata = $this.data(C.amenginedata);
            // methods.debug_PostObjectVariables(menuobject);
            var recursemenu = function(menuarray)
            {
                var listul = $("<ul></ul>")[0];

                for (var i in menuarray)
                {
                    var curmenuitem = menuarray[i];

                    var listli = $("<li></li>")[0];
                    $(listul).append(listli);
                    if (curmenuitem[adata.C[AMC.MENU_ITEM_ACTION]] == "")
                    {
                        $(listli).append(curmenuitem[adata.C[AMC.MENU_ITEM_NAME]]);
                    }
                    else
                    {
                        var linkbutton = $("<span style='cursor: pointer'></span>")[0];
                        $(linkbutton).data(C.menuitemdata, curmenuitem);
                        $(listli).append(linkbutton);
                        $(linkbutton).append(curmenuitem[adata.C[AMC.MENU_ITEM_NAME]]);
                        $(linkbutton).click(function()
                        {
                            var menuitemdata = $(this).data(C.menuitemdata);

                            var action = menuitemdata[adata.C[AMC.MENU_ITEM_ACTION]];
                            var additionalpost = {};
                            for (var valkey in menuitemdata[adata.C[AMC.DATA_OBJECT_MENU_FIELD_STATIC_COUPLINGS]])
                            {
                                var curfieldtransfer = menuitemdata[adata.C[AMC.DATA_OBJECT_MENU_FIELD_STATIC_COUPLINGS]][valkey];
                                additionalpost[adata.C[AMC.FIELD_PREFIX] + curfieldtransfer[adata.C[AMC.DATA_OBJECT_MENU_FIELD_STATIC_COUPLING_TARGET]]] = curfieldtransfer[adata.C[AMC.DATA_OBJECT_MENU_FIELD_STATIC_COUPLING_VALUE]];
                            }

                            for (var valkey in menuitemdata[adata.C[AMC.DATA_OBJECT_MENU_FIELD_DATA_COUPLINGS]])
                            {
                                var curfieldtransfer = menuitemdata[adata.C[AMC.DATA_OBJECT_MENU_FIELD_DATA_COUPLINGS]][valkey];
                                // methods.debug_PostObjectVariables(curfieldtransfer);
                                var fieldname = curfieldtransfer[adata.C[AMC.DATA_OBJECT_MENU_FIELD_DATA_COUPLING_SOURCE]];
                                var fieldtargetname = curfieldtransfer[adata.C[AMC.DATA_OBJECT_MENU_FIELD_DATA_COUPLING_TARGET]];

                                var topparent = $(submenudiv).parents().find('.' + adata.options.rootgroupclass + ':last')[0];
                                var fieldvalue = methods.getcontrolvalues.apply(curthis, [topparent, fieldname]);
                                additionalpost[adata.C[AMC.FIELD_PREFIX] + fieldtargetname] = fieldvalue[adata.C[AMC.FIELD_PREFIX] + fieldname];
                                //  additionalpost = $.extend(fieldvalue, additionalpost);
                                // methods.debug_PostObjectVariables(fieldvalue);
                            }

                            methods.loadaction.apply(curthis, [adata.options.selectnewtarget, action, additionalpost]);
                            return false;
                        });
                    }

                    //$(listli).append(recursemenu(menuarray[i][adata.C[AMC.MENU_ITEM_SUB]]));

                }
                return listul;
            };
            $(submenudiv).append(recursemenu(menuobject));
        },
        loadmenu: function()
        {
            var $this = $(this);
            var curthis = this;
            var adata = $this.data(C.amenginedata);
            var recursemenu = function(menuarray)
            {
                var listul = $("<ul></ul>")[0];

                for (var i in menuarray)
                {
                    var curmenuitem = menuarray[i];
                    var listli = $("<li></li>")[0];
                    $(listul).append(listli);

                    var linkbutton = $("<a href='#' style='cursor: pointer'></a>")[0];
                    $(linkbutton).data(C.menuitemdata, curmenuitem);
                    $(listli).append(linkbutton);
                    $(linkbutton).append(curmenuitem[adata.C[AMC.MENU_ITEM_NAME]]);
                    $(linkbutton).click(function()
                    {
                        var menuitemdata = $(this).data(C.menuitemdata);

                        if (menuitemdata[adata.C[AMC.MENU_ITEM_ACTION]] != "")
                        {

                            $('li', $(this).parents('.mega-menu')).removeClass('mega-hover');
                            $('.sub', $(this).parents('.mega-menu')).hide();

                            var action = menuitemdata[adata.C[AMC.MENU_ITEM_ACTION]];

                            var additionalpost = {};
                            for (var valkey in menuitemdata[adata.C[AMC.MENU_ITEM_TRANSFER_VALUES]])
                            {
                                var curfieldtransfer = menuitemdata[adata.C[AMC.MENU_ITEM_TRANSFER_VALUES]][valkey];
                                additionalpost[adata.C[AMC.FIELD_PREFIX] + curfieldtransfer[adata.C[AMC.MENU_ITEM_TRANSFER_VALUES_FIELD]]] = curfieldtransfer[adata.C[AMC.MENU_ITEM_TRANSFER_VALUES_VALUE]];
                            }
                            methods.loadaction.apply(curthis, [adata.options.selectnewtarget, action, additionalpost]);
                        }
                        return false;
                    });

                    //  $(listli).append("<a href='#'>" + menuarray[i][adata.C[AMC.MENU_ITEM_NAME]] + " " + menuarray[i][adata.C[AMC.MENU_ITEM_ACTION]] + "</a>");
                    if (menuarray[i][adata.C[AMC.MENU_ITEM_SUB_LIST]].length > 0)
                    {
                        $(listli).append(recursemenu(menuarray[i][adata.C[AMC.MENU_ITEM_SUB_LIST]]));
                    }
                    //  var linkbuttonmenuitem = menuarray[i];



                }
                return listul;
            };


            var postcriteria = {};
            postcriteria[adata.C[AMC.REQUEST_TYPE_IDENTIFIER]] = adata.C[AMC.REQUEST_TYPE_MENU];
            methods.postdata.apply(this, [postcriteria, function(data)
            {
                var menuarray = data[adata.C[AMC.MENU]][adata.C[AMC.MENU_ARRAY]];
                $this.find(adata.options.menuselector).find('*').remove();
                $this.find(adata.options.menuselector).append(recursemenu(menuarray));

                $this.find(adata.options.menuselector).find('ul:first').addClass('mega-menu');
                $this.find(adata.options.menuselector).addClass('white');

                $this.find(adata.options.menuselector).find('ul:first').dcMegaMenu();
            } ]);
        },
        init: function(options)
        {

            options = $.extend({
                url: "/",
                menuselector: '.menu',
                actiondivselector: '.actioncontent',
                rootgroupclass: 'rootgroup',
                controlclass: 'control',
                selectnewtarget: function(title)
                {
                    var $this = $(this);
                    var adata = $this.data(C.amenginedata);
                    return $(adata.options.actiondivselector)[0];
                },
                closeobject: function(objecttoclose)
                {
                    $(objecttoclose).find('*').remove();
                },
                needtoloadhome: function()
                {
                    return true;
                },
                getlastopenedobject: function()
                {
                    return undefined;
                }
            }, options);

            return this.each(function()
            {

                var $this = $(this);
                var adata = $this.data(C.amenginedata);

                // If the plugin hasn't been initialized yet
                if (!adata)
                {
                    var amengineconstants = {};
                    var persist = {};
                    $.ajaxSetup(
                    {
                        async: false
                    });
                    var postcriteria = {};

                    postcriteria[C[AMC.REQUEST_TYPE_IDENTIFIER]] = C[AMC.REQUEST_TYPE_FIELD_CONSTANTS];


                    $.post(options.url, postcriteria, function(data)
                    {
                        amengineconstants = data[C[AMC.CONSTANTS]];
                        persist = data[amengineconstants[AMC.PERSIST]];
                    });

                    $.ajaxSetup(
                    {
                        async: true
                    });
                    $(this).data(C.amenginedata, {
                        target: $this,
                        C: amengineconstants,
                        persist: persist,
                        options: options
                    });
                    adata = $(this).data(C.amenginedata);
                }

                methods.loadmenu.apply(this, []);
                if (adata.options.needtoloadhome())
                {
                    methods.loadhomeaction.apply(this, []);
                }
            });
        }
    };

    $.fn.AMEngine = function(method)
    {

        if (methods[method])
        {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method)
        {
            return methods.init.apply(this, arguments);
        }
        else
        {
            $.error('Method ' + method + ' does not exist on jQuery.AMEngine');
        }

    };

})(jQuery);