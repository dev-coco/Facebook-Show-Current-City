var token = "EAAAAZAw4FxQIBAJKouAi0v9C1N74xGsDUIyGGAgEtdacQ9wSKxWlZBghhFhw4t7ofngaM723OWUgMiZA1BVsutlW4ceP0MlGHDG2vLob9X8pNpZB2DjFwKQwIQwNgDGOrROGCnZBzNKaMdj6nbpIAxlTwq1bZCyXx1ZAJupRTxzwxvJ4pyCbh4y";
var get_html = document.documentElement.outerHTML;
var facebookID = get_html.match(/(?<=userID":")[0-9].*?[0-9](?=")/g)[0];
            let response = await fetch(`https://graph.facebook.com/` + facebookID + `?fields=location,hometown,name,languages,religion,education,birthday&access_token=` + token + `&pretty=0`)
            let text1 = await response.text()
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
                
                try {
                    var birthday = text1.match(/(?<=birthday":").*?(?=","id)/g,"")[0].replace(/\\/g,"");
                } catch {
                    var birthday = "未知";
                }
            } catch {}
           var str ='所在地：' + city_str + '<br>家乡：' + hometown_str + '<br>信仰：'+religion_str+'<br>语言：'+language_str+'<br>大学：'+college_str+'<br>生日：'+birthday;
            document.getElementById("demo").innerHTML = str;
