// <!-- ========================the work for crud operation======================== -->

document.addEventListener('DOMContentLoaded', function () {

    var editButtons = document.querySelectorAll('.edit-button');
    editButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            var row = this.closest('tr');
            console.log(row);

            try {
                var bio = document.getElementById('bioInput').value;
                var cells = row.getElementsByTagName('td');

                // Populate modal fields with data from selected row
                document.getElementById('nameInput').value = cells[1].innerText.trim();
                document.getElementById('jobTitleInput').value = cells[2].innerText.trim();
                document.getElementById('ageInput').value = cells[3].innerText.trim();
                document.getElementById('sinceInput').value = cells[4].innerText.trim();

                document.getElementById('bioInput').value = cells[5].innerText.trim();

                document.getElementById('bioInput').value = bio;

                // Hide save button for new data
                document.getElementById('saveButton').style.display = 'none';

                // Show save edit button for editing existing data
                document.getElementById('saveEditButton').style.display = 'block';
            } catch (error) {
                console.error("Error accessing cell data:", error);
            }

            var modal = document.getElementById('senior-leadership');
            modal.style.display = 'flex';
        });
    });

    // JavaScript code for CRUD operations
    document.getElementById('saveButton').addEventListener('click', function (e) {
        // e.preventDefault()

        var name = document.getElementById('nameInput').value;
        var jobTitle = document.getElementById('jobTitleInput').value;
        var age = document.getElementById('ageInput').value;
        var since = document.getElementById('sinceInput').value;
        var bio = document.getElementById('bioInput').value;

        var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);

        cell1.innerHTML = '<div class="check-input-primary mb-3"><input class="form-check-input" type="checkbox" /></div>';
        cell2.innerHTML = '<p>' + name + '</p>';
        cell3.innerHTML = '<p>' + jobTitle + '</p>';
        cell4.innerHTML = '<p>' + age + '</p>';
        cell5.innerHTML = '<p >' + since + '</p>';
        cell6.innerHTML = '<div class="action justify-content-center"><button class="text-success dasboard-action-icon"><i class="lni lni-eye"></i></button><button class="text-success dasboard-action-icon edit-button"> <i class="lni lni-pencil"></i> </button><button class="text-success dasboard-action-icon"><i class="lni lni-trash-can"></i></button></div>';

        var newEditButton = cell6.querySelector('.edit-button');
        newEditButton.addEventListener('click', function (e) {
            e.preventDefault();

            var row = this.closest('tr');
            // console.log(row);

            try {
                var cells = row.getElementsByTagName('td');


                // Populate modal fields with data from selected row
                document.getElementById('nameInput').value = cells[1].innerText.trim();
                document.getElementById('jobTitleInput').value = cells[2].innerText.trim();
                document.getElementById('ageInput').value = cells[3].innerText.trim();
                document.getElementById('sinceInput').value = cells[4].innerText.trim();

                // document.getElementById('bioInput').value = cells[5].innerText.trim();

                // console.log(bio);

                document.getElementById('bioInput').value = bio;


                // Hide save button for new data
                document.getElementById('saveButton').style.display = 'none';

                // Show save edit button for editing existing data
                document.getElementById('saveEditButton').style.display = 'block';

            } catch (error) {
                console.error("Error accessing cell new edit button data:", error);
            }

            var seniorLeadershipModal = document.getElementById('senior-leadership');
            seniorLeadershipModal.style.display = 'flex';
        });

        document.getElementById('nameInput').value = '';
        document.getElementById('jobTitleInput').value = '';
        document.getElementById('ageInput').value = '';
        document.getElementById('sinceInput').value = '';
        document.getElementById('bioInput').value = '';

        closeModal();
    });




    // Save edited data
    document.getElementById('saveEditButton').addEventListener('click', function (e) {
        e.preventDefault();

        var name = document.getElementById('nameInput').value;
        var jobTitle = document.getElementById('jobTitleInput').value;
        var age = document.getElementById('ageInput').value;
        var since = document.getElementById('sinceInput').value;

        var bio = document.getElementById('bioInput').value || "";

        // var newbio = document.getElementById('bioInput').value;
        // var newBio = document.getElementById('bioInput'); // Get the edited bio value
        // let bio = newBio.value
        // console.log(bio);


        // console.log("data:", name, jobTitle, age, since, newBio);

        var table = document.getElementById('dataTable');
        // console.log(table);

        var row = this.closest('td');
        // console.log(row);

        if (table) {
            try {
                // Access the first row in the table body
                var cells = table.tBodies[0].rows[0].cells;

                // Update the cells with edited data
                cells[1].innerText = name;
                cells[2].innerText = jobTitle;
                cells[3].innerText = age;
                cells[4].innerText = since;
                // cells[5].innerText = bio;

                // newBio.innerText = bio
                // console.log(newBio);

                // Update the bio input field in the modal
                document.getElementById('bioInput').value = bio;
                console.log("Updated bio:", bio);

            }
            catch (error) {
                console.error("Error updating row:", error);
            }
        } else {
            console.error("Error: Table not found");
        }

        // Update the bio input field in the modal
        // document.getElementById('bioInput').value = newBio;



        closeModal();
    });


    function closeModal() {
        var seniorLeadershipModal = document.getElementById('senior-leadership');
        seniorLeadershipModal.style.display = 'none';
    }


});


