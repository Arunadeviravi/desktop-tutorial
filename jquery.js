<script src="jquery.js"></script>
<script src="https://jqueryui.com"></script>
<script>
$( function(){
    $("#selectable").selectable("highlight","true"),
    ("#selectable").selectable("highlight","true")
})
</script>
<button onclick="input" type="submit" class="ui-widget-content">ok</button>
<button onclick="input" type="reset"class="ui-widget-content" >reset</button>









<head>
<script src="jquery.js"></script>
<script src="https://jqueryui.com"></script>
<script>
$( function(){
    $(".widget input[type=submit], .widget a, .widget button" ).button();
    $("button,input,a").click(function(event) {
        event.preventDefault();
    } );
});
        
        
</sript>
</head>
<body>
    <div class="widget">
        <input type="submit" value="submit">
        <input type="reset" value="reset">
    </div>
</body>
</div>