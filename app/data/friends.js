// DATA
// Creating an array to hold the survey data that is used to match friends; starting with dummy data
var friendsData = [

    {"name":"Bob Dobbs",
    "photoURL":"https://upload.wikimedia.org/wikipedia/en/a/a3/Bobdobbs.png",
    "scores":[	"5","5","5","5","5","5","5","5","5","5"]},

    {"name":"Gordon Ramsay",
    "photoURL":"https://cdn.vox-cdn.com/thumbor/T8d_mFfsglljnRVA66XAtYgMdHk=/0x8:468x320/920x613/filters:focal(0x8:468x320)/cdn.vox-cdn.com/uploads/chorus_image/image/37112038/ramsay1.0.0.jpg",
    "scores":[	"5","4","3","4","4","3","2","4","1","4"]},


    {"name":"Neil Tyson",
    "photoURL":"http://4.bp.blogspot.com/-lBcfr_hzTnY/Uygpp1qV5cI/AAAAAAAADtg/IlA68JUBhsc/s1600/neil-degrasse-tyson-tells-us-why-star-trek-is-so-much-better-than-star-wars.jpg",
    "scores":[	"4","1","2","5","5","4","5","3","2","2"]},


    {"name":"Judith Reed",
    "photoURL":"https://mrlongdrag.files.wordpress.com/2017/03/all-these-flavors.png",
    "scores":[	"1","3","5","5","5","4","3","2","4","2"]},


    {"name":"Henrietta Carroll",
    "photoURL":"http://ofad.org/files/imagecache/daily_picture/daily-photo/ofad-photo-of-8845.jpg",
    "scores":[	"4","4","4","3","4","3","2","2","1","4"]},


    {"name":"Jimmy Crosier",
    "photoURL":"https://vignette.wikia.nocookie.net/althistory/images/7/74/Recent-portraits-random-people-in-random-places_11.jpg/revision/latest?cb=20141209232111",
	"scores":[	"3","2","2","5","5","4","4","4","1","1"]},


    {"name":"Mary Buckner",
    "photoURL":"http://www.bajiroo.com/wp-content/uploads/2013/05/funny_fun_humor_people_pics_images_photos_pictures_43.jpg",
    "scores":[	"3","2","3","4","4","2","1","4","4","1"]},

    {"name":"Paul Carson",
    "photoURL":"http://www.bajiroo.com/wp-content/uploads/2013/05/funny_fun_humor_people_pics_images_photos_pictures_2.jpg",
    "scores":[	"3","3","5","5","5","4","1","1","2","1"]},


    {"name":"Michael Boren",
    "photoURL":"http://ofad.org/files/imagecache/daily_picture/daily-photo/ofad-photo-of-3287_0.jpg",
    "scores":[	"1","2","3","4","5","4","3","2","1","5"]},

    {"name":"Sherry Anderson",
    "photoURL":"http://ofad.org/files/daily-photo/ofad-photo-of-1280.jpg",
    "scores":[	"1","2","1","1","1","1","2","2","2","1"]},

];

//Exporting the array so that it is accessible to other files using require
module.exports = friendsData;