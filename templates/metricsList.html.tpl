<table>
    <thead>
        <tr>
            <th>&nbsp;</th>
            <%
            _.each(stats.get(1).attributes.stats, function (statsItem, statsKey, statsList) {
            %>
                <th class="<%-statsItem.name%>"><%-statsItem.title%></th>
            <%
            });
            %>
        </tr>
    </thead>
    <tbody>
        <%
        stats.each(function (statsItem, statsKey, statsList) {
        %>
            <tr>
                <td><%- statsItem.get('name') %></td>
        <%
            _.each(statsItem.get('stats'), function (item, key, list) {
            %>
                <td><%- item.total %></tdstats>
            <%
            });
        %>
            </tr>
        <%
        });
        %>
    </tbody>
</table>
