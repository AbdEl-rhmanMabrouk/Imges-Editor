//rang نوعه  input ال HTML الاول ناديت علي جميع الفلاتر الي انا عامله  الي هي في ال
let saturat = document.getElementById("saturat");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hurRotate = document.getElementById("hur-rotate");

//HTML بعدين استدعيت جميع الازرار الي انا عملها ف الا
let upload = document.getElementById("upload");
let download = document.getElementById("download");
let rest = document.getElementById("rest");

//بعدين استدعيت الصوره والبوكس بتاعها
let imgBox = document.getElementById("img-box");
let img = document.getElementById("img");

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

//دي فانكشن بتخليك لما تختار صوره جديده بتلغي اي اددت كنت عاملو ف الصوره الي بعجها وبترجع جميع الفلاتر للقيم بتاعتها
function
resetValiue() {
    //هنا انا بقولو ان لما احمل صوره جديده في الموقع الغي اي فلاتر عليها
    img.style.filter = 'none';

    //وخلي الزراير ترجع للقيم الافتراضيه بتاعتها
    saturat.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hurRotate.value = '0';
}


//imgBox وهخفي البوكس بتاع الصور  downloadوrest اول حاجه هعملها ان اول ما الصفحه تحمل وانا لسه مخترتش صوره هخفي زرار ال
window.onload = function() {
    download.style.display = "none";
    rest.style.display = "none";
    imgBox.style.display = "none";
}


//بعدين لما اختار صوره رجع الازرار الي احنا خفناها تاني
upload.onchange = function() {
    resetValiue();
    download.style.display = "block";
    rest.style.display = "block";
    imgBox.style.display = "block";
    //المتغير ده بيقراء الملفات الي احنا اخترناها
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    //الي انتا جبتو للامتداد بتاع الصوره url لما اتاكد ان الصوره اتحمل ضيف ال
    file.onload = function() {
        img.src = file.result;
    }
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.style.display = "none";

    }
};

//هاجي هنا بقا هعمل الفنكشن اليهتخليني هعدل ع الفلاترالسبعه الي انا عاملهم
//اول حاجه هنا انا عملت متغير حتيط فيه كل الانوبت الي هو رانجج

let filters = document.querySelectorAll("ul li input");

filters.forEach(filterr => {
    filterr.addEventListener('input', function() {
        ctx.filter = `
            saturate(${saturat.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px)
            hue-rotate(${hurRotate.value}deg)
        `;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    });
});


//هنخش بعد كده ف التنزيل

download.onclick = function() {
    download.href = canvas.toDataURL();
}