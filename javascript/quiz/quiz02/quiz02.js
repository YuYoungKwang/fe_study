function getMealByTime(time){
    if(time<6){
        return "금식";
    }else if(time<11){
        return "아침";
    }else if(time<15){
        return "점심";
    }else if(time<17){
        return "금식";
    }else if(time<21){
        return "저녁";
    }else if(time<24){
        return "야식";
    }else {
        return "금식";
    }
}

console.log(getMealByTime(5)); //출력값 : 금식
console.log(getMealByTime(8)); //출력값 : 아침
console.log(getMealByTime(13)); //출력값 : 점심
console.log(getMealByTime(16)); //출력값 : 금식
console.log(getMealByTime(19)); //출력값 : 저녁
console.log(getMealByTime(22)); //출력값 : 야식
console.log(getMealByTime(2)); //출력값 : 금식