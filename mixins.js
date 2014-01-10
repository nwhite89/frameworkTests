_.mixin({
    /**
     * Get a template via AJAX and store within cache to ensure not getting the
     * same template multiple times to prevent needless requests
     * @param  {Strinvg} url      Destination of the template being requested
     * @param  {Object} data     Data to pass through the template
     * @param  {Object} settings Any extra settings for the underscore
     *                           templating engine to use
     * @return {String}          Contains the HTML created using the data and
     *                                    the template together either from
     *                                    cache or via AJAX
     */
    templateFromUrl: function (url, data, settings) {
        var templateHtml = '';
        this.cache = this.cache || {};

        if (this.cache[url]) {
            templateHtml = this.cache[url];
        } else {
            $.ajax({
                url: url,
                method: 'GET',
                async: false,
                success: function(data) {
                    templateHtml = data;
                }
            });

            this.cache[url] = templateHtml;
        }

        return _.template(templateHtml, data, settings);
    }
});
