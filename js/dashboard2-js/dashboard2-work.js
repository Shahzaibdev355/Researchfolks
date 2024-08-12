

// Get the element
// const navItems = document.querySelectorAll('#dashboard2-navitem-hover');


// const dashboard2Column1 = document.querySelector("#dashboard-2-column1")
// const dashboard2Column2 = document.querySelector("#dashboard-2-column2")

// const dashboard2Text = document.querySelectorAll("#dasboard2-text")
// // console.log(dashboard2Text);

// let dashboard2Togglebtn = document.getElementById("dashboard2-side-close-btn");
// let dashboard2SideBarClose = document.getElementById("dashboard2-sidebar-close")
// let dashboard2SideBarOpen = document.getElementById("dashboard2-sidebar-open")




// // Loop through each navItem and add event listeners
// navItems.forEach(navItem => {
//   navItem.addEventListener('mouseenter', function () {
//     dashboard2Column1.style.width = "15%";
//     dashboard2Column2.style.width = "85%";

//     // Loop through each dashboard2Text and add/remove classes
//     dashboard2Text.forEach(text => {
//       text.classList.add("dasboard2-text-dblock");
//       text.classList.remove("dasboard2-text");
//     });
//   });

//   navItem.addEventListener('mouseleave', function () {
//     dashboard2Column1.style.width = "5%";
//     dashboard2Column2.style.width = "95%";

//     dashboard2Text.forEach(text => {
//       text.classList.remove("dasboard2-text-dblock");
//       text.classList.add("dasboard2-text");
//     });
//   });
// });




// dashboard2SideBarClose.style.display = "none"
// let dashboard2Hidden = true;

// dashboard2Togglebtn.addEventListener('click', () => {
//   // console.log("hello");
//   if (dashboard2Hidden) {

//     console.log("if");

//     dashboard2SideBarClose.style.display = "block"
//     dashboard2SideBarOpen.style.display = "none"

//     dashboard2Column1.style.width = "15%";
//     dashboard2Column2.style.width = "85%";

//     // console.log(text);

//     dashboard2Text.forEach(text => {
//       text.classList.add("dasboard2-text-dblock");
//       text.classList.remove("dasboard2-text");
//     });





//   } else {
//     console.log("else");

//     dashboard2Column1.style.width = "5%";
//     dashboard2Column2.style.width = "95%";

//     dashboard2SideBarClose.style.display = "none"
//     dashboard2SideBarOpen.style.display = "block"



//   }

//   // Toggle the state
//   dashboard2Hidden = !dashboard2Hidden;
// });










// Get the elements
const navItems = document.querySelectorAll('#dashboard2-navitem-hover');

const dashboard2Column1 = document.querySelector("#dashboard-2-column1");
const dashboard2Column2 = document.querySelector("#dashboard-2-column2");

const dashboard2NavitemLink = document.querySelectorAll("#dashboard2-nav-item-link")
const dashboard2Text = document.querySelectorAll("#dasboard2-text");



let dashboard2Togglebtn = document.getElementById("dashboard2-side-close-btn");
let dashboard2SideBarClose = document.getElementById("dashboard2-sidebar-close");
let dashboard2SideBarOpen = document.getElementById("dashboard2-sidebar-open");

dashboard2SideBarClose.style.display = "none"
// Variable to track sidebar state
let dashboard2Hidden = true;

// Function to handle sidebar width changes
function updateSidebarWidth(open) {
    // if (open) {
    //     // dashboard2Column1.style.width = "15%";
    //     dashboard2Column1.style.width = "15%";
    //     dashboard2Column2.style.width = "85%";
    // } else {
    //     // dashboard2Column1.style.width = "5%";
    //     dashboard2Column1.style.width = "5%";
    //     dashboard2Column2.style.width = "95%";
    //     console.log("else");
    // }


    if (open) {
        // For larger screens
        if (window.innerWidth > 1080) {
            dashboard2Column1.style.width = "15%";
            dashboard2Column2.style.width = "85%";
        } else {
            // For smaller screens
            dashboard2Column1.style.width = "70%";
            dashboard2Column2.style.width = "100%";
        }
    } else {
        // For smaller screens
        // dashboard2Column1.style.width = "5%";
        // dashboard2Column2.style.width = "95%";
        if (window.innerWidth > 1080) {
            dashboard2Column1.style.width = "5%";
            dashboard2Column2.style.width = "95%";
        } else {
            // For smaller screens
            dashboard2Column1.style.width = "0%";
            dashboard2Column2.style.width = "100%";
        }
    }

    dashboard2Hidden = !dashboard2Hidden;
}

// Loop through each navItem and add event listeners
navItems.forEach(navItem => {
    navItem.addEventListener('mouseenter', function () {
        if (dashboard2Hidden) {
            updateSidebarWidth(true);

            // dashboard2NavitemLink.forEach(text =>{
            //   text.style.justifyContent = 'normal';
            // })

            dashboard2Text.forEach(text => {
                text.classList.add("dasboard2-text-dblock");
                text.classList.remove("dasboard2-text");
            });


            dashboard2SideBarClose.style.display = "block"
            dashboard2SideBarOpen.style.display = "none"

        }
    });

    // Update sidebar width when mouse leaves the sidebar area
    dashboard2Column1.addEventListener('mouseleave', function () {
        // if (dashboard2Hidden) {
        updateSidebarWidth(false);

        // setTimeout(()=>{
        //   dashboard2NavitemLink.forEach(text =>{
        //     text.style.justifyContent = 'center';
        // })
        // },1000)

        dashboard2Text.forEach(text => {
            text.classList.remove("dasboard2-text-dblock");
            text.classList.add("dasboard2-text");
        });

        dashboard2SideBarClose.style.display = "none"
        dashboard2SideBarOpen.style.display = "block"

        // }
    });
});

// Click event listener for toggle button
dashboard2Togglebtn.addEventListener('click', () => {
    updateSidebarWidth(dashboard2Hidden);
    if (dashboard2Hidden) {
        dashboard2SideBarClose.style.display = "none"
        dashboard2SideBarOpen.style.display = "block"

        dashboard2Text.forEach(text => {
            text.classList.remove("dasboard2-text-dblock");
            text.classList.add("dasboard2-text");
        });

    } else {
        dashboard2SideBarClose.style.display = "block"
        dashboard2SideBarOpen.style.display = "none"

        dashboard2Text.forEach(text => {
            text.classList.add("dasboard2-text-dblock");
            text.classList.remove("dasboard2-text");
        });

    }
});






// let keyFactPrevBtn = document.querySelector("#keyFactPrevbtn")
let keyFactNextBtn = document.querySelector("#keyFactNextbtn")
// console.log(keyFactNextBtn);

let leaderShipPrevBtn = document.querySelector("#leadershipPrevbtn")
let leaderShipNextBtn = document.querySelector("#leadershipNextbtn")

let historyPrevBtn = document.querySelector("#historyPrevbtn")
let historyNextBtn = document.querySelector("#historyNextbtn")

let financialPrevBtn = document.querySelector("#financialPrevbtn")

// let financialNextBtn = document.querySelector("#financialPrevbtn")



let keyFactSection = document.querySelector("#dashboard2-keyfact-section")
let leadershipSection = document.querySelector("#dashboard2-leadership-section")
let historySection = document.querySelector("#dashboard2-history-section")
let financialSection = document.querySelector("#dashboard2-financial-section")


leadershipSection.style.display = "none"
historySection.style.display = "none"
financialSection.style.display = "none"



keyFactNextBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("keyFact");

    keyFactSection.style.display = "none"
    leadershipSection.style.display = "block"
    historySection.style.display = "none"
    financialSection.style.display = "none"

})

leaderShipPrevBtn.addEventListener('click', (e) => {
    e.preventDefault()

    keyFactSection.style.display = "block"
    leadershipSection.style.display = "none"
    historySection.style.display = "none"
    financialSection.style.display = "none"

})


leaderShipNextBtn.addEventListener('click', (e) => {
    e.preventDefault()

    keyFactSection.style.display = "none"
    leadershipSection.style.display = "none"
    historySection.style.display = "block"
    financialSection.style.display = "none"

})

historyPrevBtn.addEventListener('click', (e) => {
    e.preventDefault()

    keyFactSection.style.display = "none"
    leadershipSection.style.display = "block"
    historySection.style.display = "none"
    financialSection.style.display = "none"

})

historyNextBtn.addEventListener('click', (e) => {
    e.preventDefault()

    keyFactSection.style.display = "none"
    leadershipSection.style.display = "none"
    historySection.style.display = "none"
    financialSection.style.display = "block"

})


financialPrevBtn.addEventListener('click', (e) => {
    e.preventDefault()

    keyFactSection.style.display = "none"
    leadershipSection.style.display = "none"
    historySection.style.display = "block"
    financialSection.style.display = "none"

})










// <!-- =============================Modal opening and closing works============================= -->

var seniorLeadershipModal = document.getElementById('senior-leadership');
var historyModal = document.getElementById('history');
var companyFinancialsModal = document.getElementById('company-financials');

seniorLeadershipModal.style.display = 'none';
historyModal.style.display = 'none';
companyFinancialsModal.style.display = 'none';


let seniorLeadershipShowBtn = document.getElementById('senior-leadership-show')
let historyShowBtn = document.getElementById('history-show')
let comapnyFinancialShowBtn = document.getElementById('company-financials-show')

let seniorLeadershipHidebtn = document.querySelectorAll('#senior-leadership-hide')
let historyHidebtn = document.querySelectorAll('#history-hide')
let companyFinancialHidebtn = document.querySelectorAll('#company-financials-hide')


seniorLeadershipShowBtn.addEventListener('click', (e) => {
    e.preventDefault()
    seniorLeadershipModal.style.display = 'flex';

    // Hide save button for new data
    document.getElementById('saveButton').style.display = 'block';
    // Show save edit button for editing existing data
    document.getElementById('saveEditButton').style.display = 'none';

})

historyShowBtn.addEventListener('click', (e) => {
    e.preventDefault()
    historyModal.style.display = 'flex';

})


comapnyFinancialShowBtn.addEventListener('click', (e) => {
    e.preventDefault()
    companyFinancialsModal.style.display = 'flex';

})



seniorLeadershipHidebtn.forEach((close) => {

    close.addEventListener('click', (e) => {
        e.preventDefault()
        seniorLeadershipModal.style.display = 'none';
    })
})


historyHidebtn.forEach((close) => {

    close.addEventListener('click', (e) => {
        e.preventDefault()
        historyModal.style.display = 'none';
    })
})

companyFinancialHidebtn.forEach((close) => {

    close.addEventListener('click', (e) => {
        e.preventDefault()
        companyFinancialsModal.style.display = 'none';
    })
})


var seniorLeadershipDeleteModal = document.getElementById('senior-leadership-delete-modal');
var historyDeleteModal = document.getElementById('history-delete-modal');
var companyFinancialsDeleteModal = document.getElementById('company-financials-delete-modal');

let seniorLeadershipDeleteBtn = document.getElementById('senior-leadership-delete')
let historyDeleteBtn = document.getElementById('history-delete')
let comapnyFinancialDeleteBtn = document.getElementById('company-financials-delete')


seniorLeadershipDeleteModal.style.display = 'none';
historyDeleteModal.style.display = 'none';
companyFinancialsDeleteModal.style.display = 'none';


seniorLeadershipDeleteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    seniorLeadershipDeleteModal.style.display = 'flex';

    // Hide save button for new data
    document.getElementById('saveButton').style.display = 'block';
    // Show save edit button for editing existing data
    document.getElementById('saveEditButton').style.display = 'none';

})

historyDeleteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    historyDeleteModal.style.display = 'flex';

})


comapnyFinancialDeleteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    companyFinancialsDeleteModal.style.display = 'flex';

})



let seniorLeadershipDelHidebtn = document.querySelectorAll('#senior-leadership-delete-hide')
let historyDelHidebtn = document.querySelectorAll('#history-delete-hide')
let companyFinancialDelHidebtn = document.querySelectorAll('#company-financials-delete-hide')

seniorLeadershipDelHidebtn.forEach((close) => {

    close.addEventListener('click', (e) => {
        e.preventDefault()
        seniorLeadershipDeleteModal.style.display = 'none';
    })
})


historyDelHidebtn.forEach((close) => {

    close.addEventListener('click', (e) => {
        e.preventDefault()
        historyDeleteModal.style.display = 'none';
    })
})

companyFinancialDelHidebtn.forEach((close) => {

    close.addEventListener('click', (e) => {
        e.preventDefault()
        companyFinancialsDeleteModal.style.display = 'none';
    })
})















// ===============back and right btn of form===============

let keyFactFormRightBtn= document.querySelector("#financial-form-rightbtn")

let leaderShipFormRightBtn = document.getElementById('leaderShip-form-rightbtn')
let leaderShipFormLeftBtn = document.getElementById('leaderShip-form-backbtn')

let historyFormRightBtn = document.getElementById('history-form-rightbtn')
let historyFormLeftBtn = document.getElementById('history-form-backbtn')


let financialFormLeftBtn = document.getElementById("financial-form-backbtn")




keyFactFormRightBtn.addEventListener('click', (e) => {
    e.preventDefault()

    keyFactSection.style.display = "none"
    leadershipSection.style.display = "block"
    historySection.style.display = "none"
    financialSection.style.display = "none"

})



leaderShipFormRightBtn.addEventListener('click', (e) => {
    e.preventDefault()

    keyFactSection.style.display = "block"
    leadershipSection.style.display = "none"
    historySection.style.display = "none"
    financialSection.style.display = "none"

})


leaderShipFormLeftBtn.addEventListener('click', (e) => {
    e.preventDefault()

    keyFactSection.style.display = "none"
    leadershipSection.style.display = "none"
    historySection.style.display = "block"
    financialSection.style.display = "none"

})




historyFormRightBtn.addEventListener('click', (e) => {
    e.preventDefault()

    keyFactSection.style.display = "none"
    leadershipSection.style.display = "block"
    historySection.style.display = "none"
    financialSection.style.display = "none"

})

historyFormLeftBtn.addEventListener('click', (e) => {
    e.preventDefault()

    keyFactSection.style.display = "none"
    leadershipSection.style.display = "none"
    historySection.style.display = "none"
    financialSection.style.display = "block"

})


financialFormLeftBtn.addEventListener('click', (e) => {
    e.preventDefault()

    keyFactSection.style.display = "none"
    leadershipSection.style.display = "none"
    historySection.style.display = "block"
    financialSection.style.display = "none"

})



