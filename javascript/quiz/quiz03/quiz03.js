// 출력결과가 알맞게 나오도록 코드를 추가하세요.

// 조건1. :// 형식이 없으면 경로가 잘못되었습니다.
// 조건2. https로 접속시 secure가 추가됨
// 조건3. http 로 접속시 open이 추가됨

let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

function changeLink1(url){
    if(!url.includes("://")){
        return "경로가 잘못되었습니다.";
    }else if(url.includes("https:")){
        return url.substring(0, url.indexOf("//")) + "//secure." + url.substring(url.indexOf("//")+2);
    }else if(url.includes("http:")){
        return url.substring(0, url.indexOf(":")) + "s://open." + url.substring(url.indexOf("//")+2);
    }
}

function changeLink2(url){
    if(!url.includes("://")){
        return "경로가 잘못되었습니다.";
    }else{
        let spt = url.split("://");
        if(spt[0].includes("s")){
            spt.splice(1,0,"://secure.");
        }else{
            spt.splice(1,0,"s://open.");
        }
        return spt[0] + spt[1] + spt[2]
    }
}

console.log(changeLink1(strUrl1));
console.log(changeLink1(strUrl2));
console.log(changeLink1(strUrl3));

console.log(changeLink2(strUrl1));
console.log(changeLink2(strUrl2));
console.log(changeLink2(strUrl3));