var tmpl, stats, metricView;
$(function() {
    metricView = Backbone.View.extend({
        initialize: function () {
            _.bindAll(this, 'render');
            this.listenTo(this.model, 'add', this.render);
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'desroy', this.render);
            this.render();
        },
        template: _.templateFromUrl('templates/metricsList.html.tpl'),
        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

    stats = new Backbone.Collection;

    stats.add(metrics);

    var mView = new metricView({
        el: $('#target'),
        model: stats
    });

    $('#addItems').on('click', function () {
        stats.add({
            id: 4,
            name: 'RBTV Placement',
            stats: [
                {
                    title: 'Unique Clicks',
                    name: 'uniqueClicks',
                    total: 5432
                },
                {
                    title: 'Aggregate Backup Image',
                    name: 'aggregateBackupImage',
                    total: 12
                },
                {
                    title: 'Aggregate CTA',
                    name: 'aggregateCta',
                    total: 987
                }
            ]
        });
    });
});
