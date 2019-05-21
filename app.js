
// init GitHub
 const github = new Github();
 
 
 const ui = new UI;

// search input

    const searchUser = document.getElementById('searchUser');

    //search Input event listener
    //e for the target
    searchUser.addEventListener('keyup', (e) => {

    // input text
    const userText = e.target.value;

    if(userText !== ''){
        // console.log(userText);
        github.getUser(userText)
        .then(data => {
            // console.log(data);
            if(data.profile.message === 'Not Found'){
                //show alert
                ui.showAlert('user not found', 'alert alert-danger');
            }else{
                //show profiles
                ui.showProfile(data.profile);
                ui.showProfiles(data.repos);
            }
        });

    }else {
        //clear profile
        ui.clearProfile();
    }


    });
