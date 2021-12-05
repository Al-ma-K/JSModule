let arr =[
    {
        start:25,
        duration:10,
        title:"first"
        
    },
    {
        start:35,
        duration:60,
        title:"second"
    }


]




function crTask(obj){
    let start = obj.start;
    let title = obj.title;
    let duration = obj.duration;
    console.log(start)
    console.log(title)
    console.log(duration)
    

    let target;
    let startpoint; 
    let left = 0;
    let width = 200;
    let height = duration*2
    let zindex = 10;
    switch(true)
    {
        case start >=0  && start < 30:
             target = document.getElementById('08-00');
             startpoint = start;
             console.log(target);
             console.log(start); 
             break;
        case start >=30 && start < 60:
            target = document.getElementById('08-30');
            startpoint=start%30
            console.log(target);
            console.log(start); 
            console.log(startpoint)
            break;
        case start >=60 && start < 90:
            target = document.getElementById('09-00');
            console.log(target);
            console.log(start); 
            break;
        case start >=90 && start < 120:
            target = document.getElementById('09-30');
            console.log(target);
            console.log(start); 
            break;
        case start >=120 && start < 150:   target = document.getElementById('10-00');
            console.log(target);
            console.log(start); 
            break;
        case start >=150 && start < 180: target = document.getElementById('10-30');
            console.log(target);
            console.log(start); 
            break;
        case start >=180 && start < 210: target = document.getElementById('11-00');
            console.log(target);
            console.log(start); 
            break;
        case start >=210 && start < 240: target = document.getElementById('11-30');
            console.log(target);
            console.log(start); 
            break;
        case start >=240 && start < 270: target = document.getElementById('12-00');
            console.log(target);
            console.log(start); 
            break;      
        case start >=270 && start < 300: target = document.getElementById('12-30');
            console.log(target);
            console.log(start); 
            break;
        case start >=300 && start < 330: target = document.getElementById('13-00');
            console.log(target);
            console.log(start); 
            break;
        case start >=330 && start < 360: target = document.getElementById('13-30');
            console.log(target);
            console.log(start); 
            break;
        case start >=360 && start < 390: target = document.getElementById('14-00');
            console.log(target);
            console.log(start); 
            break;
        case start >=390 && start < 420: target = document.getElementById('14-30');
            console.log(target);
            console.log(start); 
            break;
        
    }

    let targetInf = (target.parentNode.id)
    let targChild = target.childElementCount
    console.log(targetInf)
    console.log(targChild)

    let newTask = `
    <div class="task" style = "top:${startpoint}px; left:${left}px; width:${width}px; height:${height}px">
        <p class="taskText">${title}</p>
    </div>`

    if (!targChild){
        console.log("элементов нет")
        target.insertAdjacentHTML("afterbegin", newTask)  
           
    }
    else if(targChild){
        width = 200/(targChild+1);
        left = 100/(targChild+1);

        zindex += 20;
       
        newTask = `
        <div class="task" style = "top:${startpoint}px; left:${left}%; width:${width}px; height:${height}px; z-index:${zindex}">
            <p class="taskText">${title}</p>
        </div>`
        target.insertAdjacentHTML("afterbegin", newTask)
        console.log("элементы есть")    
    }

    

}

let but = document.getElementById("butt01")

but.addEventListener('click', create1)

function create1(){
    
    console.log("xcvxcv")
    let newStart = (document.forms["forma"].elements["start"].value);
    let newDuration = (document.forms["forma"].elements["duration"].value);
    let newTitle = (document.forms["forma"].elements["title"].value)

    let newT = {       
        start:newStart,
        duration:newDuration,
        title:newTitle}

        crTask(newT);
        event.preventDefault()
}


crTask(arr[0])

