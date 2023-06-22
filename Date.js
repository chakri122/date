function digiclk()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    //  var ml=date.getMilliseconds();
    var dt=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var day=date.getDay();
    console.log(hh,mm,ss,dt,mo,yy,day);
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=0)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    if(mo==0)
    {
        mo="Jan"
    }
    else if(mo==1)
    {
        mo="Feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="Apr"
    }
    else if(mo==4)
    {
        mo="may"
    }
    else if(mo==5)
    {
        mo="Jun"
    }
    else if(mo==6)
    {
        mo="Jul"
    }
    else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Sep"
    }
    else if(mo==9)
    {
        mo="Oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else(mo==11)
    {
        mo="Dec"
    }
    switch(day)
    {
        case 0: day="Sunday"
        document.body.style.backgroundImage="url(./arrow.jpeg)"
        break;

        case 1: day="Monday"
        document.body.style.backgroundImage="url(./banalore.jpg)"
        break;

        case 2: day="Tuesday"
        document.body.style.backgroundImage="url(./chennai-super-kings.jpg)"
        break;

        case 3: day="Wednesday"
        document.body.style.backgroundImage="url(./slash.png)"
        break;

        case 4: day="Thursday"
        document.body.style.backgroundImage="url(./charminar.jpg)"
        break;

        case 5: day="Friday"
        document.body.style.backgroundImage="url(./bell (1).png)"
        break;

        case 6: day="Saturday"
        document.body.style.backgroundImage="url(./charminar.jpg)"
        break;
    }
   

     document.getElementById("Date").innerHTML=`${dt}/${mo}/${yy}`;
     document.getElementById("Time").innerHTML=`${hh}:${mm} ${am_pm}`
     document.getElementById("Day").innerHTML=day;
     document.getElementById("Sec").innerHTML=ss;
     setTimeout(digiclk,1000)
       
}
digiclk()