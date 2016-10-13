jQuery.fn.wait = function (func, times, interval) {
    var _times = times || -1,
        //100娆�
        _interval = interval || 20,
        //20姣姣忔 
        _self = this,
        _selector = this.selector,
        //閫夋嫨鍣�
        _iIntervalID; //瀹氭椂鍣╥d
    if (this.length) { //濡傛灉宸茬粡鑾峰彇鍒颁簡锛屽氨鐩存帴鎵ц鍑芥暟
        func && func.call(this);
    } else {
        _iIntervalID = setInterval(function query() {
            if (!_times) { //鏄�0灏遍€€鍑�
                clearInterval(_iIntervalID);
            }
            _times <= 0 || _times--; //濡傛灉鏄鏁板氨 --
            _self = $(_selector); //鍐嶆閫夋嫨
            if (_self.length) { //鍒ゆ柇鏄惁鍙栧埌
                func && func.call(_self);
                clearInterval(_iIntervalID);
            }
        }, _interval);
    }
    return this;
}

function focusFunction(){
	var _targetTop = $('#comment_form_container').offset().top;//鑾峰彇浣嶇疆
	jQuery("html,body").animate({scrollTop:_targetTop},300);//璺宠浆
}

function focusFollow(){
	var _targetTop = $('#profile_block').offset().top;//鑾峰彇浣嶇疆
	jQuery("html,body").animate({scrollTop:_targetTop},300);//璺宠浆
}

$(document).ready(function(){
	$("<div id='toTop'style='zoom:0;'></div>").appendTo($("body")).bind("click", function(){
		$("body,html").animate({ scrollTop: 0 }, 150);
	});

	$('#cnblogs_post_body pre').find('>code').parent().css({'border':'dashed 1px #aaa','border-left':'solid 2px #6CE26C'});

	$("#cnblogs_post_body").append('<table width="100%" border="1" bgcolor=#DB70DB cellpadding="4" cellspacing="0" style="BORDER-COLLAPSE: collapse" borderColor=#000000><tr><td width=40 hight=40><pre><font size="4" color="blue">作者:卢俊涛(ChuckLu)    <a href="https://github.com/chucklu">GitHub</a></font>    </pre></td></tr></table>');
});

//js鎴彇瀛楃涓诧紝涓嫳鏂囬兘鑳界敤  
//濡傛灉缁欏畾鐨勫瓧绗︿覆澶т簬鎸囧畾闀垮害锛屾埅鍙栨寚瀹氶暱搴﹁繑鍥烇紝鍚﹁€呰繑鍥炴簮瀛楃涓层€�  
//瀛楃涓诧紝闀垮害  
/** 
 * js鎴彇瀛楃涓诧紝涓嫳鏂囬兘鑳界敤 
 * @param str锛氶渶瑕佹埅鍙栫殑瀛楃涓� 
 * @param len: 闇€瑕佹埅鍙栫殑闀垮害 
 */
function cutstr(str, len) {
    var str_length = 0;
    var str_len = 0;
    str_cut = new String();
    str_len = str.length;
    for (var i = 0; i < str_len; i++) {
        a = str.charAt(i);
        str_length++;
        if (escape(a).length > 4) {
            //涓枃瀛楃鐨勯暱搴︾粡缂栫爜涔嬪悗澶т簬4  
            str_length++;
        }
        str_cut = str_cut.concat(a);
        if (str_length >= len) {
            str_cut = str_cut.concat("...");
            return str_cut;
        }
    }
    //濡傛灉缁欏畾瀛楃涓插皬浜庢寚瀹氶暱搴︼紝鍒欒繑鍥炴簮瀛楃涓诧紱  
    if (str_length < len) {
        return str;
    }
}