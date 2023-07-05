let menu_bar=document.getElementById('menu_bar');
let division_two_box_two=document.getElementsByClassName('division_two_box_two')
let division_two=document.getElementsByClassName('division_two')
let division_one=document.getElementsByClassName('division_one')
let create_playlist=document.getElementsByClassName('create_playlist')

menu_bar.addEventListener('click',()=>{
    if (menu_bar.classList.contains('fa-bars')) {
        // console.log("The div has the class 'container'.");
        menu_bar.classList.remove('fa-bars');
        menu_bar.classList.add('fa-xmark')
        division_two_box_two[0].style.display='none'
        // complete_body[0].style.backgroundColor='red'
        division_two[0].style.backgroundColor='transparent'
        division_one[0].style.display='block'
        create_playlist[0].style.display='none'
        // console.log(complete_body[0])
    } else {
        menu_bar.classList.remove('fa-xmark');
        menu_bar.classList.add('fa-bars')
        division_two_box_two[0].style.display='block'
        division_one[0].style.display='none'
        // console.log("The div does not have the class 'container'.");
    }
})

// console.log(division_two_box_two)
// division_two_box_two[0].style.background='red'