<table>
    <thead>
        <tr>
            <th>&nbsp;</th>
            <%
            _.each(stats[0].stats, function (statsItem, statsKey, statsList) {
            %>
                <th class="<%-statsItem.name%>"><%-statsItem.title%></th>
            <%
            });
            %>
        </tr>
    </thead>
    <tbody>
        <%
        _.each(stats, function (statsItem, statsKey, statsList) {
        %>
            <tr>
                <td><%- statsItem.name %></td>
        <%
            _.each(statsItem.stats, function (item, key, list) {
            %>
                <td><%- item.total %></td>
            <%
            });
        %>
            </tr>
        <%
        });
        %>
    </tbody>
</table>
