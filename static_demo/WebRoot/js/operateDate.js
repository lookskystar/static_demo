/**
�������ڲ������JSͨ�ô��룬ע�����к���֮����໥����
**/
//�õ����������,�õ�2013-12-18
function geToday(){
	var myDate=new Date();
	var date=myDate.getYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate();
	return date;
}

//���ַ���ת��Ϊ����,�����ַ���2013-12-18
function strToDate(str){
	var array=str.split("-");
	var date=new Date(array[0],parseInt(array[1],10)-1,array[2]);
	return date;
}

//�ж���������֮���������죬����Ϊ���ڸ�ʽ��������ַ�������ͨ�����溯������ת��
//�������ڣ�2013-12-12,2013-12-19���õ����7
function days_between(s_date,e_date){
	var ONE_DAY=1000*60*60*24;   
	var date1_ms = s_date.getTime();   
	var date2_ms = e_date.getTime();       
	var difference_ms = Math.abs(date1_ms- date2_ms);   
	return Math.round(difference_ms/ONE_DAY); 
}

//��ȡ������֮�����������
//����������ַ������ͣ�ͨ�����溯��ת��Ϊ��Ӧ��������
//���룺2013-12-18,2013-12-21
//�õ������[2013-12-18,2013-12-19,2013-12-20,2013-12-21]
function getBetweenDate(startTime,endTime){
	var s_date=strToDate(startTime);
	var e_date=strToDate(endTime);
	var days=days_between(s_date,e_date);
	var dateArray=[];
	for(var i=0;i<=days;i++){
		var temp=new Date(s_date.getYear(),s_date.getMonth(),s_date.getDate()+i);
		temp = temp.getFullYear() + "-" + (temp.getMonth()+1) + "-" + temp.getDate();
		dateArray.push(temp);
	}
	return dateArray;
}

//��ȡ������֮�����������,���˵���ĩ
//������ķ���һ����ֻ�ǰ����ڶ�Ӧ���Ϊ������������������˵�
function getBetweenDateNoWeek(startTime,endTime){
	var s_date=strToDate(startTime);
	var e_date=strToDate(endTime);
	var days=days_between(s_date,e_date);
	var dateArray=[];
	for(var i=0;i<=days;i++){
		var temp=new Date(s_date.getYear(),s_date.getMonth(),s_date.getDate()+i);
		if(temp.getDay()!=0&&temp.getDay()!=6){
			temp = temp.getFullYear() + "-" + (temp.getMonth()+1) + "-" + temp.getDate();
			dateArray.push(temp);
		}
	}
	return dateArray;
}

//�������ڻ�����ڼ�
//����������ַ���2013-12-18
//�õ��������������
function getWeekByDate(strDate){
	var weekArray=["������","����һ","���ڶ�","������","������","������","������"];
	var date=strToDate(strDate);
	return weekArray[date.getDay()];
}

//��ȡǰһ����ʱ��
//�����ַ�����2013-12-18
//�õ�������ַ���2013-11-18
function getUpMonth(t){
    var tarr = t.split('-');
    var year = tarr[0];                //��ȡ��ǰ���ڵ���
    var month = tarr[1];            //��ȡ��ǰ���ڵ���
    var day = tarr[2];                //��ȡ��ǰ���ڵ���
    var days = new Date(year,month,0);    
    days = days.getDate();//��ȡ��ǰ�����е��µ�����

    var year2 = year;
    var month2 = parseInt(month)-1;
    if(month2==0) {
        year2 = parseInt(year2)-1;
        month2 = 12;
    }
    var day2 = day;
    var days2 = new Date(year2,month2,0);
    days2 = days2.getDate();
    if(day2>days2) {
        day2 = days2;
    }
    if(month2<10) {
        month2 = '0'+month2;
    }
    var t2 = year2+'-'+month2+'-'+day2;
    return t2;
}



