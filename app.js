window.rockabox = window.rockabox || {};
rockabox.reporting = rockabox.reporting || {};

var reporting = rockabox.reporting;

reporting.app = new Backbone.Marionette.Application();

reporting.stat = Backbone.Model.extend({});
reporting.stats = Backbone.Collection.extend({
    model: reporting.stat
});

reporting.views = reporting.views || {};
reporting.views.statView = Backbone.Marionette.ItemView.extend({
    template: '#statView',
    tagName: 'tr',
    className: 'stat'
});

reporting.views.noStatView = Backbone.Marionette.ItemView.extend({
    template: '#noStatView'
});

reporting.collection = new reporting.stats(metrics);

reporting.views.stats = Backbone.Marionette.CompositeView.extend({
    template: '#statsView',
    tagName: 'table',

    itemView: reporting.views.statView,

    emptyView: reporting.views.noStatView,

    refresh: function () {
        this.render();
    }
});

reporting.regions = reporting.regions || {};
reporting.regions.list = new Backbone.Marionette.Region({
    el: '#list'
});

var collection = new reporting.stats(metrics);
var view = new reporting.views.stats({
    collection: collection
});


reporting.regions.list.show(view);
