


let column1 = document.getElementById("column-1");
let column2 = document.getElementById("column-2");
let togglebtn = document.getElementById("side-close-btn");
let sideBarClose = document.getElementById("sidebar-close")
let sideBarOpen = document.getElementById("sidebar-open")

sideBarOpen.style.display = "none"
let isHidden = false;

togglebtn.addEventListener('click', () => {
    if (isHidden) {

        column1.style.display = 'block';
        column2.classList.remove("column2-animation")
        column2.classList.remove('col-md-12');
        column2.classList.add('col-md-9');



        sideBarClose.style.display = "block"
        sideBarOpen.style.display = "none"


    } else {
        // test1.style.display = 'none';
        column1.classList.add('hide');

        setTimeout(() => {
            column1.style.display = 'none';
            column1.classList.remove('hide');
        }, 500);

        setTimeout(() => {
            // test2.classList.add()
            column2.classList.remove('col-md-9');
            column2.classList.add('col-md-12', 'column2-animation');
        }, 500);
        // test2.classList.remove('col-md-9');
        // test2.classList.add('col-md-12');
        sideBarClose.style.display = "none"
        sideBarOpen.style.display = "block"



    }

    // Toggle the state
    isHidden = !isHidden;
});

