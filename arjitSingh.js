let audioElement=new Audio('_Ram Siya Ram(PagalWorld.com.se).mp3');




// let Arjit_singh=[
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


let Arjit_singh=[
    {
        songName:'Agar Tum Saath Ho',
        singer:'Arjit Singh',
        fileName:'arjitSingh/Agar Tum Saath Ho(PagalWorld.com.se).mp3',
        songImage:'arjitImage/agar tum sath ho.jpg',
        songAlbum:'Album1',
        songDuration:'',
        dataAdded:'1 days ago'
    },
    {
        songName:'Kabira',
        singer:'Arjit Singh',
        fileName:'arjitSingh/bollywood_YJHD 2013 - Kabira.mp3',
        songImage:'arjitImage/kabira.jpg',
        songAlbum:'Album2',
        songDuration:'',
        dataAdded:'2 days ago'
    },
    {
        songName:'Hamari Adhuri Kahani',
        singer:'Arjit Singh',
        fileName:'arjitSingh/Hamari Adhuri Kahani (Title Song) Arijit Singh 320Kbps.mp3',
        songImage:'arjitImage/humari addhori khani.jpg',
        songAlbum:'Album3',
        songDuration:'',
        dataAdded:'3 days ago'
    },
    {
        songName:'Samjhawan',
        singer:'Arjit Singh',
        fileName:'arjitSingh/Samjhawan [320 kbps].mp3',
        songImage:'arjitImage/samjahwan.jpg',
        songAlbum:'Album4',
        songDuration:'',
        dataAdded:'4 days ago'
    },
    {
        songName:'Tera Ban Jaunga',
        singer:'Arjit Singh',
        fileName:'arjitSingh/Tera Ban Jaunga - Kabir Singh 128 Kbps.mp3',
        songImage:'arjitImage/tera ban jauga.jpg',
        songAlbum:'Album5',
        songDuration:'',
        dataAdded:'5 days ago'
    },
    {
        songName:'Pyaar Hota Kayi Baar Hai',
        singer:'Arjit Singh',
        fileName:'arjitSingh/Pyaar Hota Kayi Baar Hai(PagalWorld.com.se).mp3',
        songImage:'arjitImage/tu jhutti.jpg',
        songAlbum:'Album6',
        songDuration:'',
        dataAdded:'6 days ago'
    },
    {
        songName:'Tum Hi Ho',
        singer:'Arjit Singh',
        fileName:'arjitSingh/Tum Hi Ho.mp3',
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
    element.getElementsByTagName('img')[0].src=Arjit_singh[i].songImage;
    element.getElementsByTagName('div')[1].innerText=Arjit_singh[i].songName;
    element.getElementsByTagName('div')[2].innerText=Arjit_singh[i].singer;
    element.getElementsByTagName('div')[3].innerText=Arjit_singh[i].songAlbum;

    
    element.addEventListener('click',(e)=>{
        Allreset();
        element.style.backgroundColor='rgb(37, 37, 37)';
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        audioElement.src=Arjit_singh[i].fileName;
        audioElement.play();

        topDetails[0].getElementsByTagName('img')[0].src=Arjit_singh[i].songImage;

        topDetails[0].getElementsByTagName('div')[4].innerText=Arjit_singh[i].songName;

        BottomDetails[0].getElementsByTagName('img')[0].src=Arjit_singh[i].songImage;

        BottomDetails[0].getElementsByTagName('div')[1].innerText=Arjit_singh[i].songName;

        BottomDetails[0].getElementsByTagName('div')[2].innerText=Arjit_singh[i].singer;

        // greenPlay[0].getElementsByTagName('i')[0].classList.remove('fa-circle-play');

        // greenPlay[0].getElementsByTagName('i')[0].classList.add('fa-circle-pause');

        // masterPlay2.classList.remove('fa-circle-play');
        // masterPlay2.classList.add('fa-circle-pause');



    })
})
