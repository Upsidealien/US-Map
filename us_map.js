function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
  return "<h4>"+n+"</h4><table>"+
    "<tr><td>Total</td><td>"+(d.total)+"</td></tr>"+
    "<tr><td>Prop</td><td>"+(d.prop)+"</td></tr>"+
    "</table>";
}



var sampleData ={};	/* Sample random data. */

heartDisease.forEach(function(d) {
  sampleData[d.name]={year:d.Year, total:d.Total, prop:d.Prop, color:d3.interpolate("#ffffcc", "#800026")(d.Prop/250)};
});

/* draw states on id #statesvg */
uStates.draw("#statesvg", sampleData, tooltipHtml);

d3.select(self.frameElement).style("height", "600px");
