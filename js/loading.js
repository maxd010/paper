/**
 * Created by martin on 17/2/23.
 */
function showloading(reasons){
    hideloading();
    $('body').append("<div id='mload' style='margin: 0;background:rgba(78,86,97,0.92) url(/images/loading2.gif) no-repeat center center ; border:none; z-index: 999; position: fixed; top:0; left:0; width:100%;height:100%;   text-align: center;'><p align='center'>" +"<p style='display: block;position: absolute;  top:53%;width:100%;height:100%;font-size: 14px;color: #eee;font-weight: 100;letter-spacing: 1px;'>"+reasons+"</p>" +"</p></div>");
}
function hideloading(){
    $('#mload').remove()
}