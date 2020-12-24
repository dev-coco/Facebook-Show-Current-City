var check_url = location.href;
var groups = check_url.match(/facebook.com\/groups/g);
if (groups == "facebook.com/groups") {
var get_url = document.querySelectorAll("div.gs1a9yip.ow4ym5g4.auili1gw.rq0escxv.j83agx80.cbu4d94t.buofh1pr.g5gj957u.i1fnvgqd.oygrvhab.cxmmr5t8.hcukyx3x.kvgmc6g5.tgvbjcpo.hpfvmrgz.rz4wbd8a.a8nywdso.l9j0dhe7.du4w35lb.rj1gh0hx.pybr56ya.f10w8fjw > div > div > div:nth-child(1) > span > span > div > a");
var token = prompt("请输入", "");
for (var k = 0; k < get_url.length; k++) {
    (function(k) {
        setTimeout(async function() {
var facebookID = get_url[k].outerHTML.match(/(?<=href="\/groups\/.*?\/user\/).*?(?=\/")/g);
            let response1 = await fetch(`https://graph.facebook.com/`+facebookID+`?fields=location,name&access_token=`+token+`&pretty=0`)
            let text1 = await response1.text()
try {
            let city = text1.match(/(?<=name":").*?(?="},)/g)[0]
var city_str = eval(`"`+city+`"`);} catch {}
            document.write('<table><tbody><tr><td><img src="https://graph.facebook.com/' + facebookID + '/picture?width=999&access_token=' + token + '" style="width:200;"></td><td>'+[k]+'</td><td><a href="https://www.facebook.com/'+facebookID+'" target="_blank">'+facebookID+'</a></td><td>所在地：'+city_str+'</td></tr></tbody></table>');
        }, 1500 * k);
    })(k);
}
}
