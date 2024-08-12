
// ===========================checkboxDropdown js===========================

function checkboxDropdown(el) {
    var $el = $(el)

    function updateStatus(label, result) {
        if (!result.length) {
            // label.html('Industry');
        }
    };

    $el.each(function (i, element) {
        var $list = $(this).find('.dropdown-checkbox-list'),
            $label = $(this).find('.dropdown-checkbox-label'),
            $checkAll = $(this).find('.check-all'),
            $inputs = $(this).find('.check'),
            defaultChecked = $(this).find('input[type=checkbox]:checked'),
            result = [];

        updateStatus($label, result);
        if (defaultChecked.length) {
            defaultChecked.each(function () {
                result.push($(this).next().text());
                $label.html(result.join(", "));
            });
        }

        $label.on('click', () => {
            $(this).toggleClass('open');
        });

        $checkAll.on('change', function () {
            var checked = $(this).is(':checked');
            var checkedText = $(this).next().text();
            result = [];
            if (checked) {
                result.push(checkedText);
                $label.html(result);
                $inputs.prop('checked', false);
            } else {
                $label.html(result);
            }
            updateStatus($label, result);
        });

        $inputs.on('change', function () {
            var checked = $(this).is(':checked');
            var checkedText = $(this).next().text();
            if ($checkAll.is(':checked')) {
                result = [];
            }
            if (checked) {
                result.push(checkedText);
                $label.html(result.join(", "));
                $checkAll.prop('checked', false);
            } else {
                let index = result.indexOf(checkedText);
                if (index >= 0) {
                    result.splice(index, 1);
                }
                $label.html(result.join(", "));
            }
            updateStatus($label, result);
        });

        $(document).on('click touchstart', e => {
            if (!$(e.target).closest($(this)).length) {
                $(this).removeClass('open');
            }
        });
    });
};

checkboxDropdown('.dropdown-checkbox');







// =======================radio dropdown js=======================

$(document).ready(function () {
    $('.radio-dropdown').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('div.radio-select').slideToggle();
        $(this).toggleClass('active');
    });
});









// =======================region select js=======================

const searchCountryForm = document.querySelector(".searchCountryForm");
const searchCountryDropdowns = document.querySelectorAll(".searchCountryDropdown");

// Check if searchCountryDropdowns are Exist
// Loop searchCountryDropdowns and Create Custom searchCountryDropdown for each Select Element
if (searchCountryDropdowns.length > 0) {
    searchCountryDropdowns.forEach((searchCountryDropdown) => {
        createCustomsearchCountryDropdown(searchCountryDropdown);
    });
}

// Check if searchCountryForm Element Exist on Page
if (searchCountryForm !== null) {
    searchCountryForm.addEventListener("submit", (e) => {
        e.preventDefault();
    });
}

// Create Custom searchCountryDropdown
function createCustomsearchCountryDropdown(searchCountryDropdown) {
    // Get All Select Options
    // And Convert them from NodeList to Array
    const options = searchCountryDropdown.querySelectorAll("option");
    const optionsArr = Array.prototype.slice.call(options);

    // Create Custom searchCountryDropdown Element and Add Class searchCountryDropdown
    const customsearchCountryDropdown = document.createElement("div");
    customsearchCountryDropdown.classList.add("searchCountryDropdown");
    searchCountryDropdown.insertAdjacentElement("afterend", customsearchCountryDropdown);

    // Create Element for Selected Option
    const selected = document.createElement("div");
    selected.classList.add("searchCountryDropdown-select");
    selected.textContent = optionsArr[0].textContent;
    customsearchCountryDropdown.appendChild(selected);

    // Create Element for searchCountryDropdown Menu
    // Add Class and Append it to Custom searchCountryDropdown
    const menu = document.createElement("div");
    menu.classList.add("searchCountryDropdown-menu");
    customsearchCountryDropdown.appendChild(menu);
    selected.addEventListener("click", togglesearchCountryDropdown.bind(menu));

    // Create Search Input Element
    const search = document.createElement("input");
    search.placeholder = "Search...";
    search.type = "text";
    search.classList.add("searchCountryDropdown-menu-search");
    menu.appendChild(search);

    // Create Wrapper Element for Menu Items
    // Add Class and Append to Menu Element
    const menuInnerWrapper = document.createElement("div");
    menuInnerWrapper.classList.add("searchCountryDropdown-menu-inner");
    menu.appendChild(menuInnerWrapper);

    // Loop All Options and Create Custom Option for Each Option
    // And Append it to Inner Wrapper Element
    optionsArr.forEach((option) => {
        const item = document.createElement("div");
        item.classList.add("searchCountryDropdown-menu-item");
        item.dataset.value = option.value;
        item.textContent = option.textContent;
        menuInnerWrapper.appendChild(item);

        item.addEventListener(
            "click",
            setSelected.bind(item, selected, searchCountryDropdown, menu)
        );
    });

    // Add Selected Class to First Custom Select Option
    menuInnerWrapper.querySelector("div").classList.add("selected");

    // Add Input Event to Search Input Element to Filter Items
    // Add Click Event to Element to Close Custom searchCountryDropdown if Clicked Outside
    // Hide the Original searchCountryDropdown(Select)
    search.addEventListener("input", filterItems.bind(search, optionsArr, menu));
    document.addEventListener(
        "click",
        closeIfClickedOutside.bind(customsearchCountryDropdown, menu)
    );
    searchCountryDropdown.style.display = "none";
}

// Toggle for Display and Hide searchCountryDropdown
function togglesearchCountryDropdown() {
    if (this.offsetParent !== null) {
        this.style.display = "none";
    } else {
        this.style.display = "block";
        this.querySelector("input").focus();
    }
}

// Set Selected Option
function setSelected(selected, searchCountryDropdown, menu) {
    // Get Value and Label from Clicked Custom Option
    const value = this.dataset.value;
    const label = this.textContent;

    // Change the Text on Selected Element
    // Change the Value on Select Field
    selected.textContent = label;
    searchCountryDropdown.value = value;

    // Close the Menu
    // Reset Search Input Value
    // Remove Selected Class from Previously Selected Option
    // And Show All Div if they Were Filtered
    // Add Selected Class to Clicked Option
    menu.style.display = "none";
    menu.querySelector("input").value = "";
    menu.querySelectorAll("div").forEach((div) => {
        if (div.classList.contains("is-select")) {
            div.classList.remove("is-select");
        }
        if (div.offsetParent === null) {
            div.style.display = "block";
        }
    });
    this.classList.add("is-select");
}

// Filter the Items
function filterItems(itemsArr, menu) {
    // Get All Custom Select Options
    // Get Value of Search Input
    // Get Filtered Items
    // Get the Indexes of Filtered Items
    const customOptions = menu.querySelectorAll(".searchCountryDropdown-menu-inner div");
    const value = this.value.toLowerCase();
    const filteredItems = itemsArr.filter((item) =>
        item.value.toLowerCase().includes(value)
    );
    const indexesArr = filteredItems.map((item) => itemsArr.indexOf(item));

    // Check if Option is not Inside Indexes Array
    // And Hide it and if it is Inside Indexes Array and it is Hidden Show it
    itemsArr.forEach((option) => {
        if (!indexesArr.includes(itemsArr.indexOf(option))) {
            customOptions[itemsArr.indexOf(option)].style.display = "none";
        } else {
            if (customOptions[itemsArr.indexOf(option)].offsetParent === null) {
                customOptions[itemsArr.indexOf(option)].style.display = "block";
            }
        }
    });
}

// Close searchCountryDropdown if Clicked Outside searchCountryDropdown Element
function closeIfClickedOutside(menu, e) {
    if (
        e.target.closest(".searchCountryDropdown") === null &&
        e.target !== this &&
        menu.offsetParent !== null
    ) {
        menu.style.display = "none";
    }
}













// ================================reset form js================================


function resetForm() {
    // Reset radio buttons
    document.getElementById('select-category').checked = true;

    // Uncheck all checkboxes in the company-intelligence section
    var checkboxes = document.querySelectorAll('#company-intelligance-select input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });

    // Uncheck all radio buttons in the Head Count section
    var headCountRadios = document.querySelectorAll('input[name="Head Count"]');
    headCountRadios.forEach(function (radio) {
        radio.checked = false;
    });

    // Uncheck all radio buttons in the Revenue section
    var revenueRadios = document.querySelectorAll('input[name="revenue"]');
    revenueRadios.forEach(function (radio) {
        radio.checked = false;
    });

    // Reset the country dropdown
    var countryDropdown = document.getElementById('country');
    console.log(countryDropdown.value);
    countryDropdown.value = "";

    var countryDropdown_initialState = document.querySelector(".searchCountryDropdown-select")
    countryDropdown_initialState.innerText = "Select your region"



    // Uncheck all checkboxes in the Industry section
    var industryCheckboxes = document.querySelectorAll('input[name="dropdown-checkbox-group"]');
    industryCheckboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });

    var industryCheckboxes_initialState1 = document.querySelector(".dropdown-checkbox-label1")
    var industryCheckboxes_initialState2 = document.querySelector(".dropdown-checkbox-label2")
    industryCheckboxes_initialState1.innerText = "Company Type"
    industryCheckboxes_initialState2.innerText = "Industry"


    // Reset the Fiscal Year End dropdown
    document.querySelector('.select-country').value = "";

    // Reset the display state of the company-intelligance-select section
    x.style.display = "none";
}

// Add an event listener to the reset button
document.getElementById('resetButton').addEventListener('click', resetForm);

// Your existing code to handle the display of company-intelligance-select section
document.getElementById('company-intelligence').addEventListener('click', function () {
    var selectedValue = this.value;

    if (selectedValue === "CompanyIntelligence") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});

document.getElementById('industry-intelligence').addEventListener('click', function () {
    var selectedValue = this.value;

    if (selectedValue !== "CompanyIntelligence") {
        x.style.display = "none";
    }
});

document.getElementById('others').addEventListener('click', function () {
    var selectedValue = this.value;

    if (selectedValue !== "CompanyIntelligence") {
        x.style.display = "none";
    }
});

document.getElementById('select-category').addEventListener('click', function () {
    var selectedValue = this.value;

    if (selectedValue !== "CompanyIntelligence") {
        x.style.display = "none";
    }
});


