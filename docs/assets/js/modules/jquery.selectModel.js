
;
(function ($, window, document, undefined) {

    "use strict" // 严格模式

    var pluginName = "selectModel",
        defaults = {
            effect: {
                "type": "standard",
                "speed": "fast"
            },
            emptyMessage: 'Empty',
            activeLi:'liActive'
        };

    function Plugin(element, options) {
        /* Settings */
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this.instance;
        this.init();
    }

    Plugin.prototype = {

        /*
         * selectModel init
         */
        init: function () {
            this.instance = this._createInstance();
            this._createElements();
            this._hideSelect();
            this._setEvents();
        },

        /*
         *  Generate new ID for selectbox
         */
        _createInstance: function () {
            return {
                selectId: +new Date(),
                state: false
            };
        },

        /*
        * hide original select
         */
        _hideSelect: function () {
            $(this.element).hide();
        },

        /*
         * Set events
         */
        _setEvents: function () {

            var self = this;
            $(document).on("click", "html", function (e) {
                e.stopPropagation();
                self._closeSelectBox(true);
            });
        },

        /*
         * Create selectbox html structure
         */
        _createElements: function () {

            var self = this;
            var selectModelEl = $('<div/>', {
                id: 'selectbox_' + self.instance.selectId,
                'class': 'selectbox '+ $(self.element).attr('data-class'),
                data: {'sourceElement': self.element}
            });
            var selectValueWrap = $('<p/>', {
                'class': 'select-info like-input'
            });

            var selectBoxEl = self._createSelectOptionWrap();
            var isSelectBoxEmpty = selectBoxEl == null ? true : false;
            var selectValueEl = self._createSelectValueWrap(isSelectBoxEmpty);

            var selectModelArrowWrap = $('<span/>', {
                'class': 'select-arrow'
            });
            var selectModelArrow = $('<i/>', {
                'class': 'ui-arrow-bottom dark-ui-arrow-bottom'
            });

            selectModelArrowWrap.append(selectModelArrow);
            selectValueWrap.append(selectModelArrowWrap).append(selectValueEl);
            selectModelEl.append(selectValueWrap).append(selectBoxEl);

            self.selectModelEl = selectModelEl;
            $(self.element).before(self.selectModelEl);
            self._setSelectBoxEvents(isSelectBoxEmpty);
        },

        /*
         * Set events to selectbox holder control
         */
        _setSelectBoxEvents: function (isSelectBoxEmpty) {

            var self = this;
            var selectModelEl = $("div#selectbox_" + this.instance.selectId);

            if (!isSelectBoxEmpty) {
                selectModelEl.find(".select-info").click(function (e) {
                    e.stopPropagation();
                    self._clickSelectOption();
                });
            }
        },

        /*
         * Get options from selectbox
         */
        _createSelectOptionWrap: function () {

            var self = this;
            var selectBoxEl = $('<div/>', {
                'class': 'selectbox-drop'
            });

            var selectBoxOptionsEl = $('<ul/>', {
                'class': 'select-results'
            });

            $(self.element).children().each(function (index) {
                var liClass = index==0  ?  self.options.activeLi : '';
                var selectModelLiEl = $('<li/>', {
                    rel: $(this).val(),
                    text: $(this).text(),
                    'class': liClass,
                    click: function (e) {
                        e.stopPropagation();
                        self._changeSelectValue(self, this);
                    }
                });
                selectBoxOptionsEl.append(selectModelLiEl);
            });

            selectBoxEl.append(selectBoxOptionsEl);

            return $(this.element).children().length == 0 ? null : selectBoxEl;
        },

        _createSelectValueWrap: function (isSelectBoxEmpty) {
            var selectValueEl = $('<span/>', {
                'class': 'select-value',
                text: isSelectBoxEmpty ? this.options.emptyMessage : $(this.element).children().first().text()
            });

            return selectValueEl;
        },

        /*
         * Selectbox open-close handler
         */
        _clickSelectOption: function (stageReady) {

            if (this.instance.state) {
                this._closeSelectBox();
            }else {
                if (!stageReady) {
                    this._closeOthers();
                }else{
                    this._openSelectBox();
                }
            }
        },

        /*
         * Selectbox change handler
         */
        _changeSelectValue: function (self, clickedEl) {

            var selectValueEl = $("#selectbox_" + this.instance.selectId).find(".select-value");
            selectValueEl.text($(clickedEl).text());
            this._closeSelectBox(true);

            $(clickedEl).addClass(this.options.activeLi).siblings().removeClass(this.options.activeLi);

            $(this.element).val($(clickedEl).attr('rel'));
        },

        /*
         * Close opened selectbox
         */
        _closeSelectBox: function (internal) {

            $("#selectbox_" + this.instance.selectId).removeClass('selectbox-active active');
            var selectBoxEl = $("#selectbox_" + this.instance.selectId).find(".selectbox-drop");
            if (selectBoxEl.is(":animated") && !internal) {
                return false;
            }
            this.instance.state = false;

            switch (this.options.effect.type) {

                case "fade":
                    selectBoxEl.fadeOut(this.options.effect.speed);
                    break;
                case "slide":
                    selectBoxEl.slideUp(this.options.effect.speed);
                    break;
                case "standard":
                    selectBoxEl.hide();
                    break;
                default:
                    selectBoxEl.slideUp(this.options.effect.speed);
                    break;

            }
        },

        /*
         * Open selectbox
         */
        _openSelectBox: function () {

            $("#selectbox_" + this.instance.selectId).addClass('selectbox-active active');
            var selectBoxEl = $("#selectbox_" + this.instance.selectId).find(".selectbox-drop");
            if (selectBoxEl.is(":animated")) {
                return false;
            }
            this.instance.state = true;


            switch (this.options.effect.type) {

                case "fade":
                    selectBoxEl.fadeIn(this.options.effect.speed);
                    break;
                case "slide":
                    selectBoxEl.slideDown(this.options.effect.speed);
                    break;
                case "standard":
                    selectBoxEl.show();
                    break;
                default:
                    selectBoxEl.slideDown(this.options.effect.speed);
                    break;
            }
        },

        /*
         * Close other selectboxes
         */
        _closeOthers: function () {

            var self = this;

            $('div[id^=selectbox_]').each(function (index) {
                var el = $("div#" + $(this).attr("id"));

                if (el.data("sourceElement")) {
                    var sourceEl = $.data(this, "sourceElement");
                    var selectModelInst = $.data(sourceEl, "plugin_" + pluginName);
                    if (self.instance.selectId != selectModelInst.instance.selectId) {
                        if (selectModelInst.instance.state) {
                            selectModelInst._closeSelectBox(true);
                        }
                    }
                }
            });
            self._clickSelectOption(true);
        }
    };

    $.fn[pluginName] = function (options) {

        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);
