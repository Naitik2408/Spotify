let audioElement=new Audio('_Ram Siya Ram(PagalWorld.com.se).mp3');




// let Shri_krishna=[
//     {
//         songName:'Ram Siya Ram',
//         singer:'DJ RJ Bhadrak',
//         fileName:'_Ram Siya Ram(PagalWorld.com.se).mp3',
//         songImage:'image1.jpg',
//         songAlbum:'Album1',
//         songDuration:'',
//         dataAdded:'1 days ago'
//     },
//     {
//         songName:'Har Har Shambhu Shiv Mahadeva',
//         singer:'Jeetu Sharma',
//         fileName:'Har Har Shambhu Shiv Mahadeva(PagalWorld.com.se).mp3',
//         songImage:'image2.jpg',
//         songAlbum:'Album2',
//         songDuration:'',
//         dataAdded:'2 days ago'
//     },
//     {
//         songName:'Kesariya',
//         singer:'Snehdeep',
//         fileName:'Kesariya(PagalWorld.com.se).mp3',
//         songImage:'image3.jpg',
//         songAlbum:'Album3',
//         songDuration:'',
//         dataAdded:'3 days ago'
//     },
//     {
//         songName:'Kya Loge Tum',
//         singer:'B Praak and Jaani',
//         fileName:'Kya Loge Tum(PagalWorld.com.se).mp3',
//         songImage:'image4.jpg',
//         songAlbum:'Album4',
//         songDuration:'',
//         dataAdded:'4 days ago'
//     },
//     {
//         songName:'Maan Meri Jaan',
//         singer:'King',
//         fileName:'Maan Meri Jaan(PagalWorld.com.se).mp3',
//         songImage:'image5.jpg',
//         songAlbum:'Album5',
//         songDuration:'',
//         dataAdded:'5 days ago'
//     },
//     {
//         songName:'Pyaar Hota Kayi Baar Hai',
//         singer:'Arijit Singh',
//         fileName:'Pyaar Hota Kayi Baar Hai(PagalWorld.com.se).mp3',
//         songImage:'image6.jpg',
//         songAlbum:'Album6',
//         songDuration:'',
//         dataAdded:'6 days ago'
//     },
//     {
//         songName:'Raatan Lambiyan',
//         singer:' Asees Kaur, Jubin Nautiyal, and Tanishk Bagchi',
//         fileName:'Raatan Lambiyan(PagalWorld.com.se).mp3',
//         songImage:'image7.jpg',
//         songAlbum:'Album7',
//         songDuration:'',
//         dataAdded:'7 days ago'
//     },
//     {
//         songName:'Tere Vaaste',
//         singer:'Varun Jain',
//         fileName:'Tere Vaaste(PagalWorld.com.se).mp3',
//         songImage:'image8.jpg',
//         songAlbum:'Album8',
//         songDuration:'',
//         dataAdded:'8 days ago'
//     }
// ]


let Shri_krishna=[
    {
        songName:'Yashomati Maiya Se Bole Nandlala',
        singer:'Arjit Singh',
        fileName:'krishnaSongs/Yashomati Maiya Se Bole Nandlala(PagalWorld.com.se).mp3',
        songImage:'arjitImage/agar tum sath ho.jpg',
        songAlbum:'Album1',
        songDuration:'',
        dataAdded:'1 days ago'
    },
    {
        songName:'Main Nahin Makhan_Khayo',
        singer:'Anup Jalota',
        fileName:'krishnaSongs/Main_Nahin_Makhan_Khayo.mp3',
        songImage:'arjitImage/kabira.jpg',
        songAlbum:'Album2',
        songDuration:'',
        dataAdded:'2 days ago'
    },
    {
        songName:'Achyutam Keshavam',
        singer:'Arjit Singh',
        fileName:'krishnaSongs/Achyutam Keshavam(PagalWorld.com.se).mp3',
        songImage:'arjitImage/humari addhori khani.jpg',
        songAlbum:'Album3',
        songDuration:'',
        dataAdded:'3 days ago'
    },
    {
        songName:'Govind Bolo Hari Gopal Bolo',
        singer:'Arjit Singh',
        fileName:'krishnaSongs/Govind Bolo Hari Gopal Bolo- [PagalWorld.NL].mp3',
        songImage:'arjitImage/samjahwan.jpg',
        songAlbum:'Album4',
        songDuration:'',
        dataAdded:'4 days ago'
    },
    {
        songName:'Madhurashtakam',
        singer:'Arjit Singh',
        fileName:'krishnaSongs/Madhurashtakam(PagalWorld.com.se).mp3',
        songImage:'arjitImage/tera ban jauga.jpg',
        songAlbum:'Album5',
        songDuration:'',
        dataAdded:'5 days ago'
    },
    {
        songName:'Radha Kaise Na Jale',
        singer:'Arjit Singh',
        fileName:'krishnaSongs/Radha Kaise Na Jale - Lagaan 128 Kbps.mp3',
        songImage:'arjitImage/tu jhutti.jpg',
        songAlbum:'Album6',
        songDuration:'',
        dataAdded:'6 days ago'
    },
    {
        songName:'Shyam Teri Bansi Pukare',
        singer:'Arjit Singh',
        fileName:'krishnaSongs/Shyam Teri Bansi Pukare 128 Kbps.mp3',
        songImage:'arjitImage/tum hi ho.jpg',
        songAlbum:'Album7',
        songDuration:'',
        dataAdded:'7 days ago'
    }
]




let masterPlay=document.getElementById('masterPlay');
let progressBar=document.getElementById('progressBar');
let SongDetail1=Array.from(document.getElementsByClassName('multi_songs'));
let topDetails=document.getElementsByClassName('division_two_box_two');
let BottomDetails=document.getElementsByClassName('division_three');
// let masterPlay2=document.getElementById('masterPlay2');
// masterPlay2.classList.add('greenPlay')
// console.log(topDetails[0].getElementsByTagName('')[0]);

// .................................... 
masterPlay.addEventListener('click',(element)=>{
    if(audioElement.paused){
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        // masterPlay2.classList.remove('fa-circle-play');
        // masterPlay2.classList.add('fa-circle-pause');

        audioElement.play();
    }
    else{
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');

        // masterPlay2.classList.remove('fa-circle-pause');
        // masterPlay2.classList.add('fa-circle-play');

        audioElement.pause();
    }
})
// ......................................

audioElement.addEventListener('timeupdate',()=>{
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
})

function Allreset(){
    SongDetail1.forEach((element)=>{
        element.style.backgroundColor='transparent';
    })
}


SongDetail1.forEach((element,i)=>{
    element.getElementsByTagName('span')[0].innerText=i+1;
    element.getElementsByTagName('img')[0].src=Shri_krishna[i].songImage;
    element.getElementsByTagName('div')[1].innerText=Shri_krishna[i].songName;
    element.getElementsByTagName('div')[2].innerText=Shri_krishna[i].singer;
    element.getElementsByTagName('div')[3].innerText=Shri_krishna[i].songAlbum;

    
    element.addEventListener('click',(e)=>{
        Allreset();
        element.style.backgroundColor='rgb(37, 37, 37)';
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        audioElement.src=Shri_krishna[i].fileName;
        audioElement.play();

        topDetails[0].getElementsByTagName('img')[0].src=Shri_krishna[i].songImage;

        topDetails[0].getElementsByTagName('div')[4].innerText=Shri_krishna[i].songName;

        BottomDetails[0].getElementsByTagName('img')[0].src=Shri_krishna[i].songImage;

        BottomDetails[0].getElementsByTagName('div')[1].innerText=Shri_krishna[i].songName;

        BottomDetails[0].getElementsByTagName('div')[2].innerText=Shri_krishna[i].singer;

        // greenPlay[0].getElementsByTagName('i')[0].classList.remove('fa-circle-play');

        // greenPlay[0].getElementsByTagName('i')[0].classList.add('fa-circle-pause');

        // masterPlay2.classList.remove('fa-circle-play');
        // masterPlay2.classList.add('fa-circle-pause');



    })
})
