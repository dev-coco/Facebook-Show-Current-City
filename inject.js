var check_url = location.href;
var groups_members = check_url.match(/members/g);
var groups = check_url.match(/groups/g);
if (groups_members == "members") {
    var get_url = document.querySelectorAll("div.gs1a9yip.ow4ym5g4.auili1gw.rq0escxv.j83agx80.cbu4d94t.buofh1pr.g5gj957u.i1fnvgqd.oygrvhab.cxmmr5t8.hcukyx3x.kvgmc6g5.tgvbjcpo.hpfvmrgz.rz4wbd8a.a8nywdso.l9j0dhe7 > div > div > div:nth-child(1) > span > span > div > a");
    var token = prompt("请输入", "");
    new_page = window.open('');
    for (var k = 0; k < get_url.length; k++) {
        (function(k) {
            setTimeout(async function() {
                var facebookID = get_url[k].outerHTML.match(/(?<=href="\/groups\/.*?\/user\/).*?(?=\/")/g);
                let response1 = await fetch(`https://graph.facebook.com/` + facebookID + `?fields=location,hometown,name,languages&access_token=` + token + `&pretty=0`)
                let text1 = await response1.text()
                try {
                    try {
                        var city = text1.match(/(?<=location":{"id":".*?","name":").*?(?="},"hometown)/g)[0];
                    } catch {
                        try {
                            var city = text1.match(/(?<=location":{"id":".*?","name":").*?(?="},"name)/g)[0];
                        } catch {
                            var city = "未知";
                        }
                    }
                    var city_str = eval(`"` + city + `"`);
                    try {
                        var hometown = text1.match(/(?<=hometown":{"id":".*?","name":").*?(?="},"name)/g)[0];
                    } catch {
                        var hometown = "未知";
                    }
                    var hometown_str = eval(`"` + hometown + `"`);
                    try {
                        var language = text1.match(/(?<=languages":\[).*?(?=])/g)[0].replace(/id":".*?"|,|name|"|:/g,"");
                    } catch {
                        var language = "未知";
                    }
                    var language_str = eval(`"` + language + `"`);
                } catch {}
                new_page.document.write('<table><tbody><tr><td><img src="https://graph.facebook.com/' + facebookID + '/picture?width=999&access_token=' + token + '" style="width:200;"></td><td>' + [k + 1] + '</td><td><a href="https://www.facebook.com/' + facebookID + '" target="_blank">' + facebookID + '</a></td><td>所在地：' + city_str + '</td><td>家乡：' + hometown_str + '</td><td>语言：'+language_str+'</td></tr></tbody></table>');
            }, 1500 * k);
        })(k);
    }
} else if (groups == "groups") {
    var get_userid = document.querySelectorAll("div.gs1a9yip.ow4ym5g4.auili1gw.rq0escxv.j83agx80.cbu4d94t.buofh1pr.g5gj957u.i1fnvgqd.oygrvhab.cxmmr5t8.hcukyx3x.kvgmc6g5.tgvbjcpo.hpfvmrgz.rz4wbd8a.a8nywdso.l9j0dhe7.du4w35lb.rj1gh0hx > div > div > div:nth-child(1) > span > div > a");
    var token = prompt("请输入", "");
    new_page = window.open('');
    for (var k = 0; k < get_userid.length; k++) {
        (function(k) {
            setTimeout(async function() {
                var facebookID = get_userid[k].outerHTML.match(/(?<=lrazzd5p" href="\/groups\/.*?\/user\/).*?(?=\/.__cf|.amp)/g);
                let response1 = await fetch(`https://graph.facebook.com/` + facebookID + `?fields=location,hometown,name,languages&access_token=` + token + `&pretty=0`)
                let text1 = await response1.text()
                try {
                    try {
                        var city = text1.match(/(?<=location":{"id":".*?","name":").*?(?="},"hometown)/g)[0];
                    } catch {
                        try {
                            var city = text1.match(/(?<=location":{"id":".*?","name":").*?(?="},"name)/g)[0];
                        } catch {
                            var city = "未知";
                        }
                    }
                    var city_str = eval(`"` + city + `"`);
                    try {
                        var hometown = text1.match(/(?<=hometown":{"id":".*?","name":").*?(?="},"name)/g)[0];
                    } catch {
                        var hometown = "未知";
                    }
                    var hometown_str = eval(`"` + hometown + `"`);
                    try {
                        var language = text1.match(/(?<=languages":\[).*?(?=])/g)[0].replace(/id":".*?"|,|name|"|:/g,"");
                    } catch {
                        var language = "未知";
                    }
                    var language_str = eval(`"` + language + `"`);
                } catch {}
                new_page.document.write('<table><tbody><tr><td><img src="https://graph.facebook.com/' + facebookID + '/picture?width=999&access_token=' + token + '" style="width:200;"></td><td>' + [k + 1] + '</td><td><a href="https://www.facebook.com/' + facebookID + '" target="_blank">' + facebookID + '</a></td><td>所在地：' + city_str + '</td><td>家乡：' + hometown_str + '</td><td>语言：'+language_str+'</td></tr></tbody></table>');
            }, 1500 * k);
        })(k);
    }
} else {
    var token = prompt("请输入访问令牌", "");
    var person = prompt("请输入链接", "");
    var url = person.match(/https:\/\/[A-Za-z0-9&/?=.]+[A-Za-z0-9/]/g);
    new_page = window.open('');
    for (var k = 0; k < url.length; k++) {
        (function(k) {
            setTimeout(async function() {
                let response = await fetch(url[k])
                let text = await response.text()
                       try {
                let facebookID = text.match(/(?<="userID":")([0-9]+)/g)[0];
                       
                let response1 = await fetch(`https://graph.facebook.com/` + facebookID + `?fields=location,hometown,name,languages,religion,education&access_token=` + token + `&pretty=0`)
                let text1 = await response1.text()
                try {
                    try {
                        var city = text1.match(/(?<=location":{"id":".*?","name":").*?(?="},"hometown)/g)[0];
                    } catch {
                        try {
                            var city = text1.match(/(?<=location":{"id":".*?","name":").*?(?="},"name)/g)[0];
                        } catch {
                            var city = "未知";
                        }
                    }
                    var city_str = eval(`"` + city + `"`);
                    try {
                        var hometown = text1.match(/(?<=hometown":{"id":".*?","name":").*?(?="},"name)/g)[0];
                    } catch {
                        var hometown = "未知";
                    }
                    var hometown_str = eval(`"` + hometown + `"`);
                    try {
                        var language = text1.match(/(?<=languages":\[).*?(?=])/g)[0].replace(/id":".*?"|,|name|"|:/g,"");
                    } catch {
                        var language = "未知";
                    }
                    var language_str = eval(`"` + language + `"`);
                    try {
                        var religion = text1.match(/(?<=religion":").*?(?=")/g)[0];
                    } catch {
                        var religion = "未知";
                    }
                    var religion_str = eval(`"` + religion + `"`);
                       
                    try {
                        var college = text1.match(/(?<=education":\[).+(?="type":"College")/g)[0].replace(/^{|id":".*?"|,|name|:|"school"|"year"|,|"|type":".*?"|concentration":\[.*?\]/g,"").replace(/}{|{[0-9].*?[0-9]}|classes\[.*?\]|}\]|degree/g,"");
                    } catch {
                        var college = "未知";
                    }
                    var college_str = eval(`"` + college + `"`);
                } catch {}
                new_page.document.write('<table><tbody><tr><td><img src="https://graph.facebook.com/' + facebookID + '/picture?width=999&access_token=' + token + '" style="width:200;"></td><td>' + [k + 1] + '</td><td><a href="https://www.facebook.com/' + facebookID + '" target="_blank">' + facebookID + '</a></td><td>所在地：' + city_str + '</td><td>家乡：' + hometown_str + '</td><td>信仰：'+religion_str+'</td><td>语言：'+language_str+'</td><td>大学：'+college_str+'</td></tr></tbody></table>');
                       } catch {
                       new_page.document.write('<table><tbody><tr><td>'+[k+1]+'</td><td></td></tr></tbody></table>');
                       }
            }, 1500 * k);
        })(k);
    }
}



https://graph.facebook.com/100006320823557?fields=location,hometown,name,languages,religion&access_token=EAAAAZAw4FxQIBALpnmCYSy7zXIAxzG8jBUXD9lPRhyB15cPC3oH66LrTmh09MNOzQH88oyAwbq7pBZAybmXvMFZALMDC7V3MtNATASwAa6oZB5KUi7JeflZB1uJAPeR4bgEU6MlmFmzsC3IHCC7419kQaOikOQBgotzck6ECDSMaTVrCwC1etk0JibQeZCZB1MZD&pretty=0
